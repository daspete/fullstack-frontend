require('dotenv').config()

let port = process.env.SERVER_PORT || 4050
if(process.argv[2]){
    port = process.argv[2]
}

module.exports = {
    express: {
        port: parseInt(port)
    },
}