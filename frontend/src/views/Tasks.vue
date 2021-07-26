<template>
  <div class="whole_page_wrapper">
      <div class="navigation_bar">
          <MyNavBar current_page="Tasks"></MyNavBar>
      </div>

      <div class="tasks_page_wrapper">
          <div class="app_name">
              <router-link to="/">Campus Eats</router-link>
                  <div class="additional_name">Delivery</div>
          </div>

          <div class="sort_orders_options">
              <div class="title">Sort orders by:</div>
        
              <div class="dropdown_options">
                  <button class="dropdown_button">Select an option</button>
                  
                  <div class="overlay_section">
                      <div class="dropdown_content">
                          <p>Closest to furthest location</p>
                          <p>Oldest to newest orders</p>
                          <p>Shortest to longest prep time</p>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  </div>
</template>

<script>
import MyNavBar from "../components/MyNavBar.vue"

export default {
    components: {
        MyNavBar,
    }
}   
</script>

<style scoped>
.tasks_page_wrapper {
    height: 100vh;
    background-color: var(--gray);
}

.app_name {
    padding: 30px 40px;
    display: flex;
    align-items: center;
}

.app_name > a {
    font-family: 'Roboto Slab', serif;
    font-size: 40px;
    text-decoration: none;
    color: var(--navy);
    cursor: pointer;
}

.app_name> .additional_name {
    font-family: 'Roboto Slab', serif;
    font-size: 40px;
    color: var(--red);
    margin-left: 10px;
}

.sort_orders_options {
    padding: 30px 40px;
    display: flex;
    align-items: center;
}

.sort_orders_options > .title {
    font-size: 20px;
}

.dropdown_button {
    background-color: white;
    color: var(--gray-dark);
    padding: 10px 40px;
    font-size: 16px;
    border: 1px solid var(--gray-fade);
    cursor: pointer;
    width: 100%;
}

.dropdown_options {
    position: relative;
    display: inline-block;
    margin-left: 10px;
    width: 300px;
}

.dropdown_content {
    position: absolute;
    background-color: #f9f9f9;
    width: 100%;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

.dropdown_content > p {
    color: black;
    padding: 12px 16px;
    display: block;
    cursor: pointer;
}

.dropdown_content > p:hover {
    background-color: #f1f1f1
}

.dropdown_options:hover .dropdown_content {
    display: block;
}

.dropdown_options:hover .dropdown_button {
    color: var(--navy);
    border: 1px solid var(--navy);  
}
</style>