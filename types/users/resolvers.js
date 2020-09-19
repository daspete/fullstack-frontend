const UserProvider = require('./provider')

module.exports = {
    Query: {
        async Users(root, args, context, info){
            return await UserProvider.Find()
        }
    },

    User: {
        async _id(parent, args, context, info){
            return parent._id
        }
    }
    
}