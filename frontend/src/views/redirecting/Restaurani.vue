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
                :hours="current_restaurant.hours"
                :map="current_restaurant_maps.location">
            </MyRestaurantInfos>
            
            <MyCategoriesNav
                :categories="current_restaurant.categories">
            </MyCategoriesNav>

            <div class="menu_list" v-for="category in current_restaurant.categories" :key="category.name">
                <MyMenuByCategory 
                    :restaurant_path="current_restaurant.path"
                    :restaurant_name="current_restaurant.name"
                    :category_name="category.name"
                    :menu="category.menu">
                </MyMenuByCategory>
            </div>

            <MyRestaurants>Other Restaurants</MyRestaurants>

            <MyFooter></MyFooter>
        </div>
    </div>
</template>

<script>
import MyNavBar from "../../components/MyNavBar.vue"
import MyHeader from "../../components/MyHeader.vue"
import MyBackground from "../../components/for_restaurant_page/MyBackground.vue"
import MyRestaurantInfos from "../../components/for_restaurant_page/MyRestaurantInfos.vue"
import MyCategoriesNav from "../../components/for_restaurant_page/MyCategoriesNav.vue"
import MyMenuByCategory from "../../components/for_restaurant_page/MyMenuByCategory.vue"
import MyRestaurants from "../../components/MyRestaurants.vue"
import MyFooter from "../../components/MyFooter.vue"

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
            current_restaurant_maps: ""
        }
    },
    created() {
        let restaurants_list = this.$store.state.restaurants_list;
        restaurants_list.forEach(restaurant => {
            if (restaurant.path === this.$route.query.menu) {
                this.current_restaurant = restaurant;
            }
        });

        let restaurants_maps_list = this.$store.state.restaurants_maps_list;
        restaurants_maps_list.forEach(restaurant_maps => {
            if (this.current_restaurant.name === restaurant_maps.restaurant_name) {
                this.current_restaurant_maps = restaurant_maps;
            }
        });

        this.$router.push({
            name: "Restaurant",
            query: {
                menu: this.$route.query.menu
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