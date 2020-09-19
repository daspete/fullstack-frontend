const axios = require('axios')
const Sleep = require('../../utils/Sleep')

class GraphRequest {
    constructor(request){
        this.isLoading = true
        this.requestTime = Date.now()
        
        this.request = request
        this.response = null
    }

    async Fetch(){
        try {
            const { data } = await axios.post(process.env.GRAPH_URL, this.request)
            this.response = data.data
            this.isLoading = false
            return data.data
        }catch(err){
            console.log('ERROR', err)
            this.isLoading = false
            return null
        }

        
    }
}

class Dataloader {
    constructor(){
        this.cacheTime = 1000

        this.cache = {
            collections: {}
        }
    }

    async FetchCollectionByPermalink(permalink){
        const requestTime = Date.now()

        if(this.cache.collections[permalink]){
            if(requestTime - this.cache.collections[permalink].requestTime > this.cacheTime){
                this.cache.collections[permalink] = undefined
                delete this.cache.collections[permalink]
            }else{
                while(this.cache.collections[permalink].isLoading){
                    await Sleep(80)
                }
                try {
                    return this.cache.collections[permalink].response.CollectionByPermalink
                }catch(err){
                    console.log(this.cache.collections[permalink])
                }
                
            }
        }

        this.cache.collections[permalink] = new GraphRequest({
            query: `
                query($permalink: String) {
                    CollectionByPermalink(permalink: $permalink){
                        _id
                        pagecomponents {
                            _id
                            type
                            settings
                            content
                        }
                    }
                }
            `,
            variables: {
                permalink
            }
        })

        const { CollectionByPermalink } = await this.cache.collections[permalink].Fetch()

        return CollectionByPermalink
    }
}

const dataloader = new Dataloader()

module.exports = dataloader