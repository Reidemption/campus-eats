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
                :map="current_restaurant_map">
            </MyRestaurantInfos>
            
            <MyCategoriesNav
                :categories="current_restaurant.categories">
            </MyCategoriesNav>

            <div class="menu_list" v-for="category in current_restaurant.categories" :key="category.name">
                <MyMenuByCategory 
                    :restaurant_path="current_restaurant.path"
                    :restaurant_name="current_restaurant.name"
                    :category_name="category.name"
                    :menu="category.menus">
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
    mounted() {
        this.get_one_restaurant_from_the_server();
        this.get_one_map_from_vuex_store();
    },
    methods: {
        get_one_restaurant_from_the_server() {
            let path = this.$route.query.menu;
            this.$store.dispatch("get_one_restaurant_from_the_server", path);
        },

        get_one_map_from_vuex_store() {
            let path = this.$route.query.menu;
            this.$store.commit("get_one_map_from_vuex_store", path);
        }
    },
    computed: {
        current_restaurant() {
            return this.$store.state.current_restaurant;
        },
        current_restaurant_map() {
            return this.$store.state.current_restaurant_map;
        }
    },
    watch: {
        '$route.query.menu'() {
            this.get_one_restaurant_from_the_server();
            this.get_one_map_from_vuex_store();
        }
    }
}
</script>

<style scoped>
.restaurant_page_wrapper {
    background-color: var(--gray);
}
</style>