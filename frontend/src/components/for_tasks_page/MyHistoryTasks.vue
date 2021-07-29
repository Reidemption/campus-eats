<template>
    <div class="my_history_tasks_wrapper">
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
.my_history_tasks_wrapper {
    height: 60%;
    margin: 7.5%;
}
</style>