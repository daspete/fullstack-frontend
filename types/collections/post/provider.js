const DataProvider = require('../../../providers/DataProvider')

class Provider extends DataProvider {
    constructor(collectionName){
        super(collectionName)
    }
}

const provider = new Provider('collections')

module.exports = provider