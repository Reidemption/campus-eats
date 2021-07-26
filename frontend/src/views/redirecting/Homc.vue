<template>
  <div class="whole_page_wrapper">
    <div class="navigation_bar">
      <MyNavBar current_page="Home"></MyNavBar>
    </div>

    <div class="home_page_wrapper">
      <MyHeader></MyHeader>

      <MyBanner></MyBanner>

      <MyRestaurants>Our Restaurants</MyRestaurants>

      <MyBestSellers></MyBestSellers>

      <MyFooter></MyFooter>
    </div>
  </div>
</template>

<script>
import MyNavBar from "../../components/MyNavBar.vue"
import MyHeader from "../../components/MyHeader.vue"
import MyBanner from "../../components/MyBanner.vue"
import MyRestaurants from "../../components/MyRestaurants.vue"
import MyBestSellers from "../../components/MyBestSellers.vue"
import MyFooter from "../../components/MyFooter.vue"

export default {
  components: {
    MyNavBar,
    MyHeader,
    MyBanner,
    MyRestaurants,
    MyBestSellers,
    MyFooter
  },
  created() {
    this.$router.push({
      path: "/",
    });
  }
}
</script>

<style>
.whole_page_wrapper {
    display: grid;
    grid-template-columns: 15% 85%;
}
</style>

.<style scoped>
.home_page_wrapper {
  background-color: var(--gray);
}
</style>