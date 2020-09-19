<template>
    <div class="contentblock">
        <h1 v-html="pagecomponent.content.headline.value[0].content"></h1>
    </div>
</template>

<script>
export default {
    name: 'ContentBlock',

    props: {
        pagecomponent: { type: Object, default: () => { return {} } }
    }
}
</script>

<style lang="scss">
.contentblock {
    padding: 50px 0;

    &__settings {
        padding: 0 20px;
    }
}
</style>