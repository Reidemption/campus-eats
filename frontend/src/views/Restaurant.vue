<template>  
    <div class="whole_page_wrapper">
        <div class="navigation_bar">
            <MyNavBar current_page="Home"></MyNavBar>
        </div>

        <div class="restaurant_page_wrapper">
            <MyHeader></MyHeader>
            
            <MyBackground></MyBackground>

            <MyRestaurantInfos></MyRestaurantInfos>

            <MyCategoriesNav></MyCategoriesNav>

            <MyMenuByCategory></MyMenuByCategory>

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

            restaurants_list:[
                {
                    name: "ChickFilA",
                    image: "TrailblazersCafe/ChickFilA/logo.png"
                },
                {
                    name: "Subway",
                    image: "DixieMarket/Subway/logo.png"
                },
                {
                    name: "PizzaHut",
                    image: "TrailblazersCafe/PizzaHut/logo.jpg"
                },
                {   
                    name: "AceSushi",
                    image: "TrailblazersCafe/AceSushi/logo.jpg"
                },
                {
                    name: "Infusion",
                    image: "Infusion/logo.png"
                },
                {
                    name: "Stacks",
                    image: "Stacks/logo.png"
                },
                {
                    name: "Grazers",
                    image: "Grazers/logo.jpg"
                },
                {
                    name: "BrooksStop",
                    image: "BrooksStop/logo.png"
                }
            ]
        }
    },
    created() {
        this.current_restaurant = this.$route.query.menu
    }
}
</script>

<style scoped>
.restaurant_page_wrapper {
  background-color: var(--gray);
}
</style>