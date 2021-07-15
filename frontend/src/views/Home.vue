<template>
  <div class="whole_page_wrapper">
    <div class="navigation_bar">
      <MyNavBar current_page="Home"></MyNavBar>
    </div>

    <div class="home_page_wrapper">
      <div class="app_name_and_location_input_and_cart_button">
        <div class="app_name">Campus Eats</div>

        <div class="location_input_and_cart_button">
          <div class="location_input">
            <i class="las la-map-marker"></i>
            <input class="location_text_input" type="text" placeholder="Enter your location">
          </div>

          <div class="cart_button">
            <div class="cart_icon">
              <router-link to="/UserCart">
                <i class="cart_icon_link las la-shopping-cart"></i>
              </router-link>
            </div>
            <div class="cart_items_tracker">0</div>
          </div>
        </div>
      </div>

      <MyBanner></MyBanner>

      <MyRestaurants></MyRestaurants>

      <MyBestSellers></MyBestSellers>

      <MyFooter></MyFooter>
    </div>
  </div>
</template>

<script>
import MyNavBar from "../components/MyNavBar.vue"
import MyButton from "../components/MyButton.vue"
import MyBanner from "../components/MyBanner.vue"
import MyRestaurants from "../components/MyRestaurants.vue"
import MyBestSellers from "../components/MyBestSellers.vue"
import MyFooter from "../components/MyFooter.vue"
import MyCart from "../components/MyCart.vue"

export default {
  components: {
    MyNavBar,
    MyButton,
    MyBanner,
    MyRestaurants,
    MyBestSellers,
    MyFooter,
    MyCart
  }
}
</script>

<style>
.whole_page_wrapper {
    display: grid;
    grid-template-columns: 15% 85%;
    height: 100vh;
}

.navigation_bar {
    background-color: white;
}
</style>

<style scoped>
.home_page_wrapper {
  background-color: var(--gray);
}

.app_name_and_location_input_and_cart_button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 40px;
}

.app_name {
    font-family: 'Roboto Slab', serif;
    font-size: 40px;
    color: var(--navy);
}

.location_input_and_cart_button {
    display: flex;
}

.location_input{
   display: flex;
    align-items: center;
    border: 1px solid white;
    border-radius: 50px;
    background-color: white;
    padding: 10px 40px;
}

.location_input > i {
    font-size: 20px;
    color: var(--navy);
}

.location_text_input {
    border: 1px solid white;
    outline-color: white;
    color: var(--navy);
    font-size: 18px;
    padding: 5px 10px;
}

.cart_button {
    display: flex;
}

.cart_icon > a > i {
    font-size: 50px;
    margin-left: 30px;
    color: var(--gray-dark);
}

.cart_icon > a > i:hover {
    cursor: pointer;
    color: var(--navy);
}

.cart_items_tracker {
    border-radius: 5px;
    height: fit-content;
    background-color: var(--gray-dark);
    color: white;
    padding: 4px 0;
    margin-top: -2px;
    margin-left: -8px;
    width: 25px;
    text-align: center;
    font-size: 12px;
}

.user_and_cart {
    padding: 30px 20px;
    position: fixed;
    max-height: 100vh;
}

@media only screen and (max-width: 1650px) {
  .app_name {
    font-size: 35px;
  }
  .location_input {
    padding: 10px 35px;
  }
  .location_text_input {
    padding: 2px 6px;
  }
}

@media only screen and (max-width: 1425px) {
  .app_name {
    font-size: 30px;
  }
  .location_input {
    padding: 7px 30px;
  }
  .location_text_input {
    padding: 0;
    font-size: 15px;
  }
}
</style>