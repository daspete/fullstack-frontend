const Server = require('./services/Server')
const serverConfig = require('./config/server')
const Sleep = require('./utils/Sleep')
const Dataloader = require('./services/Dataloader')

const server = new Server(serverConfig)



let counter = 0

const Start = async () => {
    await server.StartExpressServer()

    server.Use(async (req, res, next) => {
        if(!req.headers.referer){
            const data = await Dataloader.FetchCollectionByPermalink(req.originalUrl)

            req.collectionData = {
                collection: data
            }
        }

        return server.nuxt.render(req, res, next)
    })
}

Start()

