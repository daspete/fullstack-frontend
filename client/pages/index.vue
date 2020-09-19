<template>
    <div class="page">
        <div v-if="collection" class="page__components">
            <component
                v-for="pagecomponent in collection.pagecomponents"
                :key="`pagecomponent-${ pagecomponent._id }`"
                :is="pagecomponent.type"
                :pagecomponent="pagecomponent"
            />
            
        </div>
    </div>
</template>

<script>
export default {
    asyncData({ req }){
        const data = req?.collectionData ? req.collectionData : {}

        return data
    }
}
</script>

<style>

</style>