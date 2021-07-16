<template>  
    <div class="whole_page_wrapper">
        <div class="navigation_bar">
            <MyNavBar current_page="Home"></MyNavBar>
        </div>

        <div class="restaurant_page_wrapper">
            <MyHeader></MyHeader>
            {{ current_restaurant }}
            
        </div>
    </div>
</template>

<script>
import MyNavBar from "../components/MyNavBar.vue"
import MyHeader from "../components/MyHeader.vue"

export default {
    components: {
        MyNavBar,
        MyHeader
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