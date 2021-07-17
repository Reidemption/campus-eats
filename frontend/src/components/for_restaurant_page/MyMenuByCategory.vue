<template>
    <div class="my_menu_by_category">
        <div class="caterory_title">
            {{ category }}
        </div>
        
        <div class="menu_items_wrapper">
            <div class="single_meal" v-for="meal in menu" :key="meal.name"
                @click="view_meal_item_detail(meal)">
                <div class="name_and_description_and_price">
                    <div class="meal_name">{{ meal.name }}</div>
                    <div class="meal_description">{{ meal.description }}</div>
                    <div class="meal_price" v-if="meal.price">
                        <span class="dollar_sign">$</span>
                        {{ meal.price }}
                    </div>
                    <div class="meal_price_instruction" v-else>
                        See options
                    </div>
                </div>

                <img :src="require(`../../assets_main/${meal.image_url}`)" :alt="meal.name">
            </div>

            <div class="overlay_section" v-if="show_meal_item_detail" @click="close_meal_item_detail">
                <div class="meal_item_detail_popup_modal">
                    <div class="backrground_image_and_close_button">
                        <img class="popup_background" :src="require(`../../assets_main/${popup_meal_background_image}`)" :alt="popup_meal_name">
                        <div class="close_button" @click="close_meal_item_detail">
                            <span class="material-icons">close</span>
                        </div>
                    </div>

                    <div class="popup_main_content">
                        <div class="popup_meal_name">{{ popup_meal_name }}</div>
                        <div class="popup_meal_description">{{ popup_meal_description }}</div>
                        <div class="popup_meal_calories">
                            <div class="title">Calories:</div>
                            <div class="calories_amount" v-if="popup_meal_calories">
                                {{ popup_meal_calories }}
                            </div>
                            <div class="calories_not_applicable" v-else>See options below</div>
                        </div>

                        <div class="popup_meal_quantity_and_add_button_and_total_price">
                            <div class="quantify_control">
                                <div class="quantity_button subtract_quantity_button">
                                    <span class="material-icons">remove</span>
                                </div>
                                <div class="quantity_amount">1</div>
                                <div class="quantity_button add_quantity_button">
                                    <span class="material-icons">add</span>
                                </div>
                            </div>

                            <div class="add_button_and_total_price" v-if="popup_meal_price">
                                <div class="add_to_cart_button">Add 1 item to cart</div>
                                <div class="total_price">
                                    <span class="dollar_sign">$</span>
                                    {{ popup_meal_price }}
                                </div>
                            </div>

                            <div class="add_button_and_total_price" v-else>
                                <div class="add_to_cart_button">Select an option</div>
                                <div class="total_price">
                                    <span class="dollar_sign">$</span>
                                    0.00
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        category: String,
        menu: Array,
    },
    data() {
        return {
            popup_meal_background_image: "",
            popup_meal_name: "",
            popup_meal_description: "",
            popup_meal_calories: "",
            popup_meal_price: "",
            show_meal_item_detail: false
        }
    },
    methods: {
        view_meal_item_detail(meal) {
            this.show_meal_item_detail = true;
            this.popup_meal_background_image = meal.image_url;
            this.popup_meal_name = meal.name;
            this.popup_meal_description = meal.description;
            this.popup_meal_calories = meal.calories;
            this.popup_meal_price = meal.price;
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

.overlay_section {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.4);
}

.meal_item_detail_popup_modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    display: grid;
    grid-template-columns: 1fr 2fr;
}

.popup_background {
    width: 100%;
}

.close_button {
    position: absolute;
    top: 5%;
    left: 2%;
    border: 1px solid var(--navy);
    border-radius: 50%;
    background-color: white;
    color: var(--navy);
    padding: 7px;
    display: flex;
}

.close_button > span {
    font-size: 25px;
}

.close_button:hover {
    cursor: pointer;
    background-color: var(--red);
    color: white;
    border: 1px solid var(--red);
}

.popup_main_content {
    padding: 30px;
    border-left: 1px solid var(--gray-fade);
}

.popup_meal_name {
    font-size: 30px;
}

.popup_meal_description {
    color: var(--gray-dark);
    font-size: 15px;
    margin: 10px 0;
}

.popup_meal_calories {
    display: flex;
    align-items: center;
}

.calories_amount {
    font-size: 15px;
    color: var(--red-dark);
    margin-left: 8px;
    margin-top: 1px;
}

.calories_not_applicable {
    margin-left: 8px;
}

.popup_meal_quantity_and_add_button_and_total_price {
    display: flex;
    margin-top: 80px;
}

.quantify_control {
    display: flex;
    align-items: center;
}

.quantity_button {
    background-color: var(--gray);
    color: var(--navy);
    border-radius: 50%;
    padding: 7px;
    display: flex;
}

.quantity_button:hover {
    cursor: pointer;
    background-color: var(--navy);
    color: white;
}

.quantity_button > span {
    font-size: 20px;
}

.add_button_and_total_price {
    display: flex;
}

.quantity_amount {
    font-size: 20px;
    margin: 0 10px;
}

.add_button_and_total_price {
    display: grid;
    grid-template-columns: 3fr 1fr;
    background: var(--gray);
    width: 100%;
    margin-left: 20px;
    padding: 10px;
}

.add_button_and_total_price:hover {
    cursor: pointer;
    background-color: var(--navy);
    color: white;
}

.add_to_cart_button, .total_price{
    display: flex;
    justify-content: center;
    font-size: 17px;
}

.total_price > .dollar_sign {
    margin-bottom: 0;
    margin-top: 1px;
}
</style>