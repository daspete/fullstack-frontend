const CollectionProvider = require('./provider')

module.exports = {
    Query: {
        async Posts(args){
            return await CollectionProvider.Find({ filter: { type: 'post' } })
        }
    }
    
}