<template>
  <div class="whole_page_wrapper">
    <div class="navigation_bar">
      <NavigationBar current_page="Home"></NavigationBar>
    </div>

    <div class="home_page_wrapper">
      <div class="app_name_and_location_input">
        <div class="app_name">Campus Eats</div>
        <div class="location_input">
          <i class="las la-map-marker"></i>
          <input class="location_text_input" type="text" placeholder="Enter your location">
        </div>
      </div>

      <div class="eye_catcher_section">
        <div class="image">
          <img src="../assets/HomePage/delivery_man.png" alt="We deliver food">
        </div>

        <div class="greeting_and_news">
          <div class="greeting">Hello Kanye South,</div>
          <div class="news">
            <div class="main_message">Free Delivery This Week!</div>
            <div class="additional_message">Enter code <span class="promo_code">#CAMPUS_EATS</span> at the checkout page.</div>
          </div>
          <MyButton>Learn More</MyButton>
        </div>
      </div>
    </div>

    <div class="user_and_cart">

    </div>
  </div>
</template>

<script>
import NavigationBar from "../components/NavigationBar.vue"
import MyButton from "../components/MyButton.vue"

export default {
  components: {
    NavigationBar,
    MyButton
  }
}
</script>

<style>
.whole_page_wrapper {
    display: grid;
    grid-template-columns: 15% 75% 10%;
    height: 100vh;
}

.navigation_bar {
    background-color: white;
}
</style>

<style scoped>
.home_page_wrapper {
    background-color: var(--gray-light);
}

.user_and_cart {
    background-color: white;
}

.app_name_and_location_input {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 40px;
}

.app_name {
    font-family: 'Roboto Slab', serif;
    font-size: 40px;
    color: var(--blue-darker);
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
    color: var(--gray-dark);
}

.location_text_input {
    border: 1px solid white;
    outline-color: white;
    font-size: 18px;
    padding: 5px 10px;
}

.eye_catcher_section {
    background-color: var(--blue);
    margin: 0 40px;
    padding: 20px;
    border-radius: 25px;
    color: white;
    display: grid;
    grid-template-columns: 1fr 2fr;
}

img {
    width: 333px;
}

.greeting_and_news {
    display: flex;
    flex-direction: column;
    align-self: center;
}

.greeting {
    font-size: 40px;
}

.news {
    margin: 20px 0 10px;
}

.main_message, .additional_message {
    font-size: 20px;
    margin-bottom: 10px;
    letter-spacing: 1px;
}

.promo_code {
    color: var(--yellow-dark);
}
</style>