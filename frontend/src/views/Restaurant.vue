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

            <!--

            <MyRestaurantInfos
                :description="current_restaurant.description"
                :location="current_restaurant.location">
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

            -->

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
                    path: "ChickFilA",
                    name: "Chick-fil-A",
                    logo: "TrailblazersCafe/ChickFilA/logo.png",
                    background_image: "TrailblazersCafe/ChickFilA/background.jpg",
                    description: "Chick-fil-A is realy good. Make sure you check it out!",
                    location: "At Trailblazer's Cafe located inside the Gardner Building.",
                    categories: [
                        {
                            name: "Original Meals", 
                            menu: [
                                {   
                                    image_url: "TrailblazersCafe/ChickFilA/og_meal_chicken.png",
                                    name: "Chick-fil-A Chicken",
                                    description: "A boneless breast of chicken seasoned to perfection, hand-breaded, pressure cooked in 100% refined peanut oil and served on a toasted, buttered bun with dill pickle chips.",
                                    price: "6.99",
                                    calories: "660-1040",
                                    custom_options: [
                                        {
                                            name: "Entrée Regular",
                                            price: "3.89",
                                            detail: "",
                                            calories: "440",
                                        },
                                        {
                                            name: "Add lettuce, tomato, & cheese",
                                            price: "0.60",
                                            detail: "",
                                            calories: "50-87",
                                        },
                                        {
                                            name: "Chick-fil-A Deluxe Entrée",
                                            price: "4.49",
                                            detail: "with lettuce, tomato & American Cheese",
                                            calories: "500",
                                        },
                                        {
                                            name: "Chick-fil-A Deluxe Meal",
                                            price: "7.59",
                                            detail: "",
                                            calories: "720-1100",
                                        }
                                    ]
                                },
                                {   
                                    image_url: "TrailblazersCafe/ChickFilA/og_meal_chicken_spicy.png",
                                    name: "Spicy Chicken",
                                    description: "A boneless breast of chicken seasoned with a spicy blend of peppers, hand-breaded, pressure cooked in 100% refined peanut oil and served on a toasted, buttered bun with dill pickle chips.",
                                    price: "7.39",
                                    calories: "680-1070",
                                    custom_options: [
                                        {
                                            name: "Entrée",
                                            price: "4.25",
                                            detail: "",
                                            calories: "540",
                                        },
                                        {
                                            name: "Spicy Deluxe Entree",
                                            price: "4.85",
                                            detail: "with lettuce, tomato & Pepper Jack cheese",
                                            calories: "550",
                                        },
                                        {
                                            name: "Spicy Deluxe Meal",
                                            price: "7.99",
                                            detail: "",
                                            calories: "760-1150",
                                        }
                                    ]
                                },
                                {   
                                    image_url: "TrailblazersCafe/ChickFilA/og_meal_nuggets.png",
                                    name: "Chick-fil-A Nuggets",
                                    description: "Bite-sized pieces of tender all breast meat chicken, seasoned to perfection, hand-breaded and pressure cooked in 100% refined peanut oil.",
                                    price: "",
                                    calories: "",
                                    custom_options: [
                                        {
                                            name: "8-ct Meal",
                                            price: "7.09",
                                            detail: "",
                                            calories: "470-860",
                                        },
                                        {
                                            name: "8-ct Entrée",
                                            price: "3.99",
                                            detail: "",
                                            calories: "250",
                                        },
                                        {
                                            name: "12-ct Entrée",
                                            price: "5.75",
                                            detail: "",
                                            calories: "380",
                                        },
                                        {
                                            name: "30-ct Entrée",
                                            price: "14.35",
                                            detail: "",
                                            calories: "30/nugget",
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name:"Grilled Meals",
                            menu: [
                                {   
                                    image_url: "TrailblazersCafe/ChickFilA/grilled_meal_chicken.png",
                                    name: "Grilled Chicken",
                                    description: "A lemon-herb marinated boneless breast of chicken, grilled for a tender and juicy backyard-smokey taste, served on a toasted Multigrain Brioche bun with Green Leaf lettuce and tomato. Served with Honey Roasted BBQ Sauce.",
                                    price: "8.75",
                                    calories: "540-930",
                                    custom_options: [
                                        {
                                            name: "Entrée",
                                            price: "5.55",
                                            detail: "",
                                            calories: "320",
                                        }
                                    ]
                                },
                                {   
                                    image_url: "TrailblazersCafe/ChickFilA/grilled_meal_nuggets.png",
                                    name: "Grilled Nuggets",
                                    description: "Bite-sized pieces of boneless breast of chicken, marinated with a special blend of seasonings and grilled for a tender and juicy backyard-grilled taste.",
                                    price: "",
                                    calories: "",
                                    custom_options: [
                                        {
                                            name: "8-ct Meal",
                                            price: "7.95",
                                            detail: "",
                                            calories: "350-740",
                                        },
                                        {
                                            name: "8-ct Entrée",
                                            price: "4.79",
                                            detail: "",
                                            calories: "130",
                                        },
                                        {
                                            name: "12-ct Meal",
                                            price: "10.09",
                                            detail: "",
                                            calories: "420-800",
                                        },
                                        {
                                            name: "12-ct Entrée",
                                            price: "6.99",
                                            detail: "",
                                            calories: "200",
                                        },
                                        {
                                            name: "30-ct Entrée",
                                            price: "17.45",
                                            detail: "",
                                            calories: "15/nugget",
                                        }
                                    ]
                                },
                                {   
                                    image_url: "TrailblazersCafe/ChickFilA/grilled_meal_chicken_club.png",
                                    name: "Grilled Chicken Club",
                                    description: "A lemon-herb marinated boneless breast of chicken, grilled for a tender and juicy backyard-smokey taste, served on a toasted Multigrain Brioche bun with Green Leaf lettuce, tomato, bacon & Colby-Jack cheese. Served with Honey Roasted BBQ Sauce.",
                                    price: "10.09",
                                    calories: "670-1060",
                                    custom_options: [
                                        {
                                            name: "Entrée",
                                            price: "6.89",
                                            detail: "",
                                            calories: "460",
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    created() {
        this.restaurants_list.forEach(restaurant => {
            if (restaurant.path === this.$route.query.menu) {
                this.current_restaurant = restaurant;
                console.log(this.current_restaurant)
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