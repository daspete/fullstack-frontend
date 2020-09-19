import Vue from 'vue'

const LoadPagecomponents = (context) => {
    context.keys().forEach((key) => {
        const componentName = key.split('/').reverse()[0].replace('.vue', '')
        Vue.component(componentName, context(key).default)
    })
}

const pagecomponents = LoadPagecomponents(require.context('~/components', true, /\.vue$/))