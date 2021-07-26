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
        <div class="title">Filter:</div>
        <div class="dropdown_options">
          <button class="dropdown_button">Select an option</button>
          <div class="dropdown-content">
          <p>Sort by near to far location</p>
          <p>Sort by oldest to newest orders</p>
          <p>Sort by </p>
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
}

.sort_orders_options > .title {
    font-size: 20px;
}
</style>