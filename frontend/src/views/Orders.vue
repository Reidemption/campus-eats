<template>
  <div class="whole_page_wrapper">
    <div class="navigation_bar">
      <MyNavBar current_page="Orders"></MyNavBar>
    </div>

    <div class="orders_page_wrapper">
      <div class="page_focus">
        <div class="app_name">
          <router-link to="/">Campus Eats</router-link>
        </div>

        <div class="orders_nav_wrapper">
          <div class="nav_item" v-for="item in nav_items" :key="item.name"
            :class="{ nav_item_seleted: item.selected }"
            @click="update_current_nav_item(item)">
            {{ item.name }}
          </div>
        </div>

        <div class="main_content">
          <MyCurrentOrders v-if="current_nav_item === 'Current'"></MyCurrentOrders>
          <MyPendingOrders v-if="current_nav_item === 'Pending'"></MyPendingOrders>
          <MyPastOrders    v-if="current_nav_item === 'History'"></MyPastOrders>
        </div>
      </div>

      <div class="mini_footer_wrapper">
        <MyMiniFooter></MyMiniFooter>
      </div>
    </div>
  </div>
</template>

<script>
import MyNavBar from "../components/MyNavBar.vue"
import MyCurrentOrders from "../components/for_orders_page/MyCurrentOrders.vue"
import MyPendingOrders from "../components/for_orders_page/MyPendingOrders.vue"
import MyPastOrders from "../components/for_orders_page/MyPastOrders.vue"
import MyMiniFooter from "../components/MyMiniFooter.vue"

export default {
  components: {
    MyNavBar,
    MyCurrentOrders,
    MyPendingOrders,
    MyPastOrders,
    MyMiniFooter
  },
  data() {
    return {
      nav_items: [
        {
          name: "Current",
          selected: true
        },
        {
          name: "Pending",
          selected: false
        },
        {
          name: "History",
          selected: false
        }
      ],
      current_nav_item: "Current"
    }
  },
  created() {
    let user_logged_in = this.$store.state.user_logged_in;
    if (!user_logged_in) {
      this.$router.push({
        path: "/"
      })
    }
  },
  methods: {
    update_current_nav_item(item) {
      this.nav_items.forEach(nav_item => {
        if(nav_item.name === item.name) {
          item.selected = true;
          this.current_nav_item = item.name;
        }
        else {
          nav_item.selected = false;
        }
      })
    }
  }
}
</script>

<style>
.whole_page_wrapper {
    display: grid;
    grid-template-columns: 15% 85%;
}
</style>

<style scoped>
.orders_page_wrapper {
    background-color: var(--gray);
    height: 100vh;
    overflow: hidden;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.app_name {
    padding: 30px 40px;
}

.app_name > a {
    font-family: 'Roboto Slab', serif;
    font-size: 40px;
    text-decoration: none;
    color: var(--navy);
    cursor: pointer;
}

.orders_nav_wrapper {
    margin: 0 40px;
    display: flex;
    border-bottom: 1px solid var(--gray-fade);
    height: 70px;
}

.nav_item {
    padding: 20px 0 25px 0;
    margin-right: 40px;
    font-size: 19px;
    color: var(--navy);
}

.nav_item:last-child {
    margin-right: 0;
}

.nav_item:hover, .nav_item_seleted {
    cursor: pointer;
    border-bottom: 2px solid var(--navy);
}
</style>