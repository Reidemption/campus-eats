<template>  
    <div class="whole_page_wrapper">
        <div class="navigation_bar">
            <MyNavBar current_page="Home"></MyNavBar>
        </div>

        <div class="restaurant_page_wrapper">
            <MyHeader v-if="current_restaurant.length !== 0 || my_error"></MyHeader>
            
            <div class="restaurant_page_main_content" v-if="current_restaurant.length !== 0 && !my_error">
                <MyBackground 
                    :name="current_restaurant.name"
                    :background_image="current_restaurant_background_image">
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
                        :restaurant_id="current_restaurant._id"
                        :restaurant_path="current_restaurant.path"
                        :restaurant_name="current_restaurant.name"
                        :category_name="category.name"
                        :menu="category.menus">
                    </MyMenuByCategory>
                </div>
            </div>

            <div class="restaurant_page_onload" v-if="current_restaurant.length === 0 && !my_error">
                <img src="../../assets_others/loading.gif" alt="Loading gif">
            </div>

            <div class="restaurant_not_found" v-if="my_error">
                <MyComingSoon></MyComingSoon>
            </div>

            <MyRestaurants v-if="current_restaurant.length !== 0 || my_error">Other Restaurants</MyRestaurants>

            <MyFooter v-if="current_restaurant.length !== 0 || my_error"></MyFooter>
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
import MyComingSoon from "../../components/for_fun/MyComingSoon.vue"

export default {
    components: {
        MyNavBar,
        MyHeader,
        MyBackground,
        MyRestaurantInfos,
        MyCategoriesNav,
        MyMenuByCategory,
        MyRestaurants,
        MyFooter,
        MyComingSoon
    },
    created() {
        this.$router.push({
            name: "Restaurant",
            query: {
                menu: this.$route.query.menu
            }
        });     
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
        current_restaurant_background_image() {
            return this.$store.state.current_restaurant.background_image;
        },
        current_restaurant_map() {
            return this.$store.state.current_restaurant_map;
        },
        my_error() {
            return this.$store.state.my_error;
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
    position: relative;
}

.restaurant_not_found {
    height: 50%;
}

.restaurant_page_onload{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
}

.restaurant_page_onload > img {
    width: 100%;
    height: 100vh;
}
</style>