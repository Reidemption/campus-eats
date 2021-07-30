<template>
  <div class="whole_page_wrapper">
    <div class="navigation_bar">
      <MyNavBar current_page="Account"></MyNavBar>
    </div>

    <div class="account_page_wrapper">
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
    },
    created() {
      let user_logged_in = this.$store.state.user_logged_in;
      if (!user_logged_in) {
        this.$router.push({
          path: "/"
        })
      }
    }
}   
</script>

<style scoped>
.account_page_wrapper {
    height: 100vh;
    background-color: var(--gray);
}
</style>