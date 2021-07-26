<template>
  <div class="whole_page_wrapper">
    <div class="navigation_bar">
      <MyNavBar current_page="Tasks"></MyNavBar>
    </div>

    <div class="tasks_page_wrapper">
      <MyComingSoon></MyComingSoon>
    </div>
  </div>
</template>

<script>
import MyNavBar from "../components/MyNavBar.vue"
import MyComingSoon from "../components/for_fun/MyComingSoon.vue"

export default {
    components: {
        MyNavBar,
        MyComingSoon
    }
}   
</script>

<style scoped>
.tasks_page_wrapper {
    height: 100vh;
    background-color: var(--gray);
}
</style>