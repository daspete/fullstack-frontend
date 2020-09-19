const CollectionProvider = require('./provider')

module.exports = {
    Query: {
        async Collections(args){
            return await CollectionProvider.Find()
        }
    }
    
}