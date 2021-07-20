<template>  
    <div class="whole_page_wrapper">
        <div class="navigation_bar">
            <MyNavBar current_page="Home"></MyNavBar>
        </div>

        <div class="restaurant_page_wrapper">
            <MyHeader></MyHeader>

            <MyBackground 
                :name="current_restaurant.name"
                :background_image="current_restaurant.background_image">
            </MyBackground>

            <MyRestaurantInfos
                :description="current_restaurant.description"
                :location="current_restaurant.location"
                :map="current_restaurant.map">
            </MyRestaurantInfos>
            
            <MyCategoriesNav
                :categories="current_restaurant.categories">
            </MyCategoriesNav>

            <div class="menu_list" v-for="category in current_restaurant.categories" :key="category.name">
                <MyMenuByCategory 
                    :category="category.name"
                    :menu="category.menu">
                </MyMenuByCategory>
            </div>

            <MyRestaurants>Other Restaurants</MyRestaurants>

            <MyFooter></MyFooter>
        </div>
    </div>
</template>

<script>
import MyNavBar from "../components/MyNavBar.vue"
import MyHeader from "../components/MyHeader.vue"
import MyBackground from "../components/for_restaurant_page/MyBackground.vue"
import MyRestaurantInfos from "../components/for_restaurant_page/MyRestaurantInfos.vue"
import MyCategoriesNav from "../components/for_restaurant_page/MyCategoriesNav.vue"
import MyMenuByCategory from "../components/for_restaurant_page/MyMenuByCategory.vue"
import MyRestaurants from "../components/MyRestaurants.vue"
import MyFooter from "../components/MyFooter.vue"

export default {
    components: {
        MyNavBar,
        MyHeader,
        MyBackground,
        MyRestaurantInfos,
        MyCategoriesNav,
        MyMenuByCategory,
        MyRestaurants,
        MyFooter
    },
    data() {
        return {
            current_restaurant: "",
        }
    },
    created() {
        let restaurants_list = this.$store.state.restaurants_list;
    
        restaurants_list.forEach(restaurant => {
            if (restaurant.path === this.$route.query.menu) {
                this.current_restaurant = restaurant;
            }
        });
    }
}
</script>

<style scoped>
.restaurant_page_wrapper {
    background-color: var(--gray);
}
</style>