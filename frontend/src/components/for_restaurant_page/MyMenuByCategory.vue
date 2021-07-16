<template>
    <div class="my_menu_by_category">
        <br>
        <b>{{ category }}</b>

        <div v-for="meal in menu" :key="meal.name">
            {{ meal }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        category: String,
        menu: Array,
    }
}
</script>

<style>

</style>