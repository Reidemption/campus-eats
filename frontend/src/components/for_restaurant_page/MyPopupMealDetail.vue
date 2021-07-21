<template>
    <div class="overlay_section" @click.self="close_button_clicked">
        <div class="meal_item_detail_popup_modal">
            <div class="backrground_image_and_close_button">
                <img class="popup_background" :src="require(`../../assets_main/${popup_meal_background_image}`)" 
                    :alt="popup_meal_name">
                
                <div class="close_button" @click="close_button_clicked">
                    <span class="material-icons">close</span>
                </div>
            </div>

            <div class="popup_main_content">
                <div class="popup_meal_name">{{ popup_meal_name }}</div>
                
                <div class="popup_meal_description">{{ popup_meal_description }}</div>
                    
                <div class="popup_meal_calories">
                    <div class="title">Calories:</div>
                    <div class="calories_amount">
                        {{ popup_meal_calories }}
                    </div>
                </div>

                <div class="popup_meal_custom_options_title">
                    Custom your order:
                </div>

                <div class="popup_meal_quantity_and_add_button_and_total_price">
                    <div class="quantify_control">
                        <div class="quantity_button subtract_quantity_button"
                            :class="{cannot_decrease_quantity_to_add: quantity_to_add <= 1}"
                            @click="decrease_quantity_to_add">
                            <span class="material-icons">remove</span>
                        </div>
                                
                        <div class="quantity_amount">{{ quantity_to_add }}</div>
                        
                        <div class="quantity_button add_quantity_button"
                            @click="increase_quantity_to_add">
                            <span class="material-icons">add</span>
                        </div>
                    </div>

                    <div class="add_button_and_total_price">
                        <div class="add_to_cart_button">
                            Add {{ quantity_to_add }} 
                            <span class="item_items" v-if="quantity_to_add === 1">item</span>
                            <span class="item_items" v-else>items</span>
                            to cart</div>
                        
                        <div class="total_price">
                            <span class="dollar_sign">$</span>
                            {{ total_price }}
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
        popup_meal_background_image: String,
        popup_meal_name: String,
        popup_meal_description: String,
        popup_meal_calories: String,
        popup_meal_price: String,
        popup_meal_custom_options: Array,
    },
    data() {
        return {
            total_price: this.popup_meal_price,

            quantity_to_add: 1
        }
    },
    methods: {
        close_button_clicked() {
            this.$emit("close_button_clicked");
        },
        decrease_quantity_to_add() {
            if(this.quantity_to_add > 1) {
                this.quantity_to_add--;
            }
        },
        increase_quantity_to_add() {
            this.quantity_to_add++;
        }
    },
    created() {
    }
}
</script>

<style scoped>
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
    width: 60%;
}

.backrground_image_and_close_button {
    display: flex;
    align-items: center;
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
    color: var(--navy);
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

.popup_meal_quantity_and_add_button_and_total_price {
    display: flex;
    margin-top: 40px;
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

.quantity_amount {
    font-size: 20px;
    margin: 0 10px;
    width: 25px;
    display: flex;
    justify-content: center;
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

.dollar_sign {
    font-family: 'Cabin', sans-serif;
    font-size: 15px;
    margin-right: 3px;
    margin-bottom: 0;
    margin-top: 1px;
}

.cannot_decrease_quantity_to_add:hover {
    cursor: not-allowed;
    background-color: var(--gray);
    color: var(--navy);
}

.item_items {
    margin: 0 5px;
}

.popup_meal_custom_options_title {
    font-size: 20px;
    margin: 20px 0
}

.calories_amount {
    margin-left: 5px;
    color: var(--red-dark);
}
</style>

<style>
/* Custom Scrollbar */
::-webkit-scrollbar {
    width: 12px;
}

::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px var(--gray-dark); 
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    background: var(--gray-fade); 
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: var(--gray-dark); 
}
</style>