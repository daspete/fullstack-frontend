const path = require('path')
const express = require('express')
const { Nuxt, Builder } = require('nuxt')

const nuxtConfig = require('../../config/client')
nuxtConfig.dev = process.env.NODE_ENV === 'development'

class Server {
    constructor(config){
        this.config = config

        nuxtConfig.buildDir = '.nuxt' + this.config.express.port

        this.expressServer = express()
        this.nuxt = new Nuxt(nuxtConfig)
        this.builder = new Builder(this.nuxt)
    }

    async StartExpressServer(){
        await this.builder.build()
        this.expressServer.listen({ port: this.config.express.port })
    }

    Use(...params){
        this.expressServer.use(...params)
    }

    Get(...params){
        this.expressServer.get(...params)
    }
}

module.exports = Server