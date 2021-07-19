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
                    <div class="calories_amount" v-if="popup_meal_calories">
                        {{ popup_meal_calories }}
                    </div>

                    <div class="calories_not_applicable" v-else>See options below</div>
                </div>

                <div class="popup_meal_custom_options_title" v-if="popup_meal_calories">
                    Other options:
                </div>
                <div class="popup_meal_custom_options_title" v-else>
                    All options:
                </div>

                <div class="popup_meal_custom_options">
                    <div class="single_custom_option" v-for="option in popup_meal_custom_options_main" :key="option.name">
                        <div class="checkbox_section">
                            <div class="checkbox_main" @click="toggle_select_custom_option_main(option)"
                                :class="{checkbox_main_selected : option.selected}">
                                <span class="material-icons">done</span>
                            </div>
                        </div>

                        <div class="custom_option_infos">
                            <div class="option option_name">{{ option.name }}</div>
                            <div class="option option_detail">{{ option.detail }}</div>
                            <div class="option option_calories">
                                <div class="title">Calories:</div>
                                <div class="calories_amount">{{ option.calories }}</div>
                            </div>
                        </div>

                        <div class="custom_option_price">
                            <div class="option_price">
                                <span class="dollar_sign">$</span>
                                {{ option.price }}
                            </div>
                        </div>
                    </div>

                    <div class="single_custom_option" v-for="option in popup_meal_custom_options_additional" :key="option.name">
                        <div class="checkbox_section">
                            <div class="checkbox_additional" @click="toggle_select_custom_option_additional(option)"
                                :class="{checkbox_additional_selected : option.selected}">
                                <div class="circle_checkbox"></div>
                            </div>
                        </div>

                        <div class="custom_option_infos">
                            <div class="option option_name">{{ option.name }}</div>
                            <div class="option option_detail">{{ option.detail }}</div>
                            <div class="option option_calories">
                                <div class="title">Calories:</div>
                                <div class="calories_amount">{{ option.calories }}</div>
                            </div>
                        </div>

                        <div class="custom_option_price">
                            <div class="option_price">
                                <span class="dollar_sign">$</span>
                                {{ option.price }}
                            </div>
                        </div>
                    </div>
                </div>
                

                <div class="popup_meal_quantity_and_add_button_and_total_price">
                    <div class="quantify_control">
                        <div class="quantity_button subtract_quantity_button"
                            :class="{cannot_decrease_quantity_to_add: quantity_to_add <= 1}"
                            @click="decrease_quantity_to_add">
                            <span class="material-icons">remove</span>
                        </div>
                                
                        <div class="quantity_amount" v-if="popup_meal_price">{{ quantity_to_add }}</div>
                        <div class="quantity_amount" v-else>0</div>
                        
                        <div class="quantity_button add_quantity_button"
                            @click="increase_quantity_to_add">
                            <span class="material-icons">add</span>
                        </div>
                    </div>

                    <div class="add_button_and_total_price" v-if="popup_meal_price">
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
            popup_meal_custom_options_main: [],
            popup_meal_custom_options_additional: [],

            total_price: this.popup_meal_price,

            quantity_to_add: 1
        }
    },
    methods: {
        close_button_clicked() {
            this.$emit("close_button_clicked");
        },
        toggle_select_custom_option_main(option) {
            option.selected = !option.selected;
        },
        toggle_select_custom_option_additional(option) {
            option.selected = !option.selected;
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
        this.popup_meal_custom_options.forEach(option => {
            if(!option.type || option.type !== "additional") {
                this.popup_meal_custom_options_main.push(option);
            } 
            else if(option.type && option.type === "additional") {
                this.popup_meal_custom_options_additional.push(option);
            }
        });
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

.add_button_and_total_price {
    display: flex;
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

.popup_meal_custom_options_title {
    margin: 20px 0 -10px;
    font-size: 19px;
}

.popup_meal_custom_options {
    margin: 30px 0;
    max-height: 365px;
    overflow: hidden;
    overflow-y: scroll;
    overflow-x: auto;
}

.option_price > .dollar_sign {
    margin-right: 2px;
}

.option {
    margin-top: 10px;
}

.option:first-child {
    margin-top: 0;
}

.option_name {
    font-weight: 700;
}

.option_detail {
    color: var(--gray-dark);
    font-style: italic;
    font-size: 15px;
}

.option_calories {
    display: flex;
}

.single_custom_option {
    display: grid;
    grid-template-columns: 1fr 6fr 1fr;
    border: 1px solid var(--gray-dark);
    padding: 20px 30px;
    margin: 30px 30px 0;
}

.single_custom_option:first-child {
    margin-top: 0;
}

.checkbox_section {
    display: flex;
    align-items: center;
}

.checkbox_main, .checkbox_additional {
    border: 1px solid var(--navy);
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.checkbox_main:hover, .checkbox_additional:hover{
    cursor: pointer;
    background-color: var(--navy);
}
.checkbox_main  > span {
    font-size: 17px;
    color: white;
}

.checkbox_main_selected, .checkbox_additional_selected {
    background-color: var(--navy);
}

.checkbox_additional {
    border-radius: 50%;
}

.circle_checkbox {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    display: flex;
    background-color: white;
}

.option_price {
    display: flex;
    justify-content: flex-end;
    font-size: 17px;
}

.cannot_decrease_quantity_to_add:hover {
    cursor: not-allowed;
    background-color: var(--gray);
    color: var(--navy);
}

.item_items {
    margin: 0 5px;
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