require('dotenv').config()

module.exports = {
    telemetry: false,

    head: {
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1' },
            { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' }
        ],
        link: [
            // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap' }
        ],
    },

    srcDir: 'client',

    build: {
        parallel: true,
        extractCSS: process.env.NODE_ENV !== 'development',

        loaders: {
            vue: {
                compilerOptions: {
                    preserveWhitespace: false
                }
            }
        },

        filenames: {
            app: ({ isDev }) => isDev ? '[name].js' : '[name].js',
            chunk: ({ isDev }) => isDev ? '[name].js' : '[name].js',
            css: ({ isDev }) => isDev ? '[name].css' : '[name].css',
            img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[name].[ext]',
            font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[name].[ext]',
            video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[name].[ext]'
            
        }
    },

    modules: [
        [ '@nuxtjs/router', { keepDefaultRouter: false } ]
    ],

    plugins: [
        { src: '~/plugins/pagecomponents', ssr: true }
    ]
}