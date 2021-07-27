<template>
    <div class="my_menu_by_category">
        <div class="caterory_title">
            {{ category_name }}
        </div>
        
        <div class="menu_items_wrapper">
            <div class="single_meal" v-for="meal in menu" :key="meal.name"
                @click="view_meal_item_detail(meal)">
                <div class="name_and_description_and_price">
                    <div class="meal_name">{{ meal.name }}</div>
                    <div class="meal_description">{{ meal.description }}</div>
                    <div class="meal_price">
                        <span class="dollar_sign">$</span>
                        {{ meal.price.toFixed(2) }}
                    </div>
                </div>
                
                <img :src="require(`../../assets_main/${meal.image_url}`)" :alt="meal.name">
            
            </div>

            <MyPopupMealDetail v-if="show_meal_item_detail"
                :popup_meal_restaurant_id="restaurant_id"
                :popup_meal_restaurant_path="restaurant_path"
                :popup_meal_restaurant_name="restaurant_name"

                :popup_meal_id="popup_meal_id"
                :popup_meal_name="popup_meal_name"
                :popup_meal_background_image="popup_meal_background_image"
                :popup_meal_description="popup_meal_description"
                :popup_meal_calories="popup_meal_calories"
                :popup_meal_price="popup_meal_price"
                :popup_meal_custom_options="popup_meal_custom_options"
                @close_button_clicked="close_meal_item_detail">
            </MyPopupMealDetail>
        </div>
    </div>
</template>

<script>
import MyPopupMealDetail from "./MyPopupMealDetail.vue"
export default {
    components: {
        MyPopupMealDetail
    },
    props: {
        restaurant_id: String,
        restaurant_path: String,
        restaurant_name: String,
        category_name: String,
        menu: Array
    },
    data() {
        return {
            popup_meal_id: "",
            popup_meal_name: "",
            popup_meal_background_image: "",
            popup_meal_description: "",
            popup_meal_calories: "",
            popup_meal_price: "",
            popup_meal_custom_options: [],
            show_meal_item_detail: false
        }
    },
    methods: {
        view_meal_item_detail(meal) {
            this.show_meal_item_detail = true;
            this.popup_meal_id = meal._id;
            this.popup_meal_name = meal.name;
            this.popup_meal_background_image = meal.image_url;
            this.popup_meal_description = meal.description;
            this.popup_meal_calories = meal.calories;
            this.popup_meal_price = meal.price;
            this.popup_meal_custom_options = meal.custom_options;
        },
        close_meal_item_detail() {
            this.show_meal_item_detail = false;
        }
    }
}
</script>

<style scoped>
.caterory_title {
    font-family: 'Roboto Slab', serif;
    font-size: 30px;
    color: var(--navy);
    margin: 30px 40px;
}

.menu_items_wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 60px;
    padding: 20px 40px;
}

.single_meal {
    display: grid;
    grid-template-columns: 2fr 1fr;
    width: 90%;
    margin: 0 auto;
    border-radius: 25px;
    background-color: white;
    color: var(--red-dark);
    box-shadow: 5px 5px;
    cursor: pointer;
}

.single_meal:hover .meal_name {
    color: var(--red);
}

img {
    width: 100%;
    display: flex;
    align-self: center;
}

.name_and_description_and_price {
    padding: 40px 0 40px 30px;
    color: var(--navy);
    display: grid;
    grid-template-rows: 1fr 2fr 1fr;
}

.meal_name {
    font-size: 20px;
}

.meal_description {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    max-height: 80px;
    max-width: 95%;
    color: var(--gray-dark);
    font-size: 15px;
    margin: auto 0;
}

.meal_price, .meal_price_instruction {
    display: flex;
    align-items: flex-end;
}

.dollar_sign {
    font-family: 'Cabin', sans-serif;
    font-size: 15px;
    margin-right: 3px;
    margin-bottom: 1px;
}
</style>