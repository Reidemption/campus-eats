<template>
  <div class="whole_page_wrapper">
    <div class="navigation_bar">
      <MyNavBar current_page="Orders"></MyNavBar>
    </div>

    <div class="browse_page_wrapper">

    </div>

    <div class="user_and_cart">

    </div>
  </div>
</template>

<script>
import MyNavBar from "../components/MyNavBar.vue"

export default {
    components: {
        MyNavBar
    }
}   
</script>

<style scoped>

</style>