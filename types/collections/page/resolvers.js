const CollectionProvider = require('./provider')

module.exports = {
    Query: {
        async Pages(args){
            return await CollectionProvider.Find({ filter: { type: 'page' } })
        }
    }
    
}