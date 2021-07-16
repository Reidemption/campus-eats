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
import HelloWorld from '../components/HelloWorld.vue';

export default {
  name: 'Home',
  
  components: {
    HelloWorld,
  },
};
</script>
