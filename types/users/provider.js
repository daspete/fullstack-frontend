const DataProvider = require('../../providers/DataProvider')

class Provider extends DataProvider {
    constructor(collectionName){
        super(collectionName)
    }
}

const provider = new Provider('users')

module.exports = provider