<template>
    <div class="my_pending_orders_wrapper">
        <MyComingSoon></MyComingSoon>
    </div>
</template>

<script>
import MyComingSoon from "../../components/for_fun/MyComingSoon.vue"

export default {
    components: {
        MyComingSoon
    }
}
</script>

<style scoped>
.my_pending_orders_wrapper {
    height: 60%;
    margin: 7.5%;
}
</style>