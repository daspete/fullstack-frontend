const path = require('path')
const find = require('find')

module.exports = (searchPath) => {
    let files = find.fileSync(/resolvers.js/, searchPath)
    let resolvers = {}

    for(let i = 0; i < files.length; i++){
        let resolver = require(path.join(process.cwd(), files[i]))
        
        if(resolver.Query){
            if(!resolvers.Query) resolvers.Query = {}

            resolvers.Query = {
                ...resolvers.Query,
                ...resolver.Query
            }
        }

        if(resolver.Mutation){
            if(!resolvers.Mutation) resolvers.Mutation = {}

            resolvers.Mutation = {
                ...resolvers.Mutation,
                ...resolver.Mutation
            }
        }

        let resolverKeys = Object.keys(resolver).filter((key) => { return !['Query', 'Mutation'].includes(key) })

        for(let j = 0; j < resolverKeys.length; j++){
            resolvers[resolverKeys[j]] = resolver[resolverKeys[j]]
        }
    }

    return resolvers
}