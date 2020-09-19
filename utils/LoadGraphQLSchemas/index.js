const fs = require('fs')
const path = require('path')
const find = require('find')
const { print } = require('graphql/language/printer')
const { mergeTypeDefs } = require('@graphql-tools/merge')

module.exports = (searchPath) => {
    let files = find.fileSync(/schema.graphql/, searchPath)
    let schemas = []

    for(let i = 0; i < files.length; i++){
        let schemaContent = fs.readFileSync(files[i])
        schemas.push(`${ schemaContent }`)
    }

    return print(mergeTypeDefs(schemas))
}