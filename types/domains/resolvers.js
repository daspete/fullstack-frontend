const DomainProvider = require('./provider')

module.exports = {
    Query: {
        async Domains(root, args, context, info){
            return await DomainProvider.Find()
        }
    },

}