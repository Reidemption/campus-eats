<template>
    <div class="overlay_section" @click.self="close_popup_meal_edit">
        <div class="my_popup_meal_edit_wrapper">
            <div class="backrground_image_and_close_button">
                <img class="popup_background" :src="require(`../assets_main/${popup_meal_edit_background_image}`)" 
                    :alt="popup_meal_edit_name">
                
                <div class="close_button" @click="close_popup_meal_edit">
                    <span class="material-icons">close</span>
                </div>
            </div>

            <div class="popup_main_content">
                <div class="popup_meal_name">{{ popup_meal_edit_name }}</div>
                
                <div class="popup_meal_description">{{ popup_meal_edit_description }}</div>
                    
                <div class="popup_meal_calories">
                    <div class="title">Calories:</div>
                    <div class="calories_amount">
                        {{ popup_meal_edit_calories }}
                    </div>
                </div>

                <div class="popup_meal_custom_options_title">
                    Your selections:
                </div>

                <div class="popup_meal_custom_options_wrapper">
                    <div class="single_customization_wrapper" v-for="custom_option in popup_meal_edit_custom_options" 
                        :key="custom_option.main_type">
                        
                        <div class="title_and_arrow_buttons">
                            <div class="title">{{ custom_option.main_type }}
                                <span v-if="custom_option.choices.length > 1">(Select up to 1 choice)</span>
                            </div>

                            <div class="arrow_buttons" v-if="custom_option.show_choices">
                                <div class="single_arrow_button" @click="custom_option.show_choices = false">
                                    <span class="material-icons">expand_more</span>
                                </div>
                            </div>

                            <div class="arrow_buttons" v-else>
                                <div class="single_arrow_button" @click="custom_option.show_choices = true">
                                    <span class="material-icons">expand_less</span>
                                </div>
                            </div>
                        </div>
                        
                        <div v-if="custom_option.show_choices">
                            <div class="single_custom_choice" v-for="choice in custom_option.choices" :key="choice.name">
                                <div class="checkbox" v-if="!choice.selected"
                                    @click="choice_selected(choice)">
                                    <div class="check_box_center"></div>
                                </div>

                                <div class="checkbox" v-else 
                                    @click="choice_unselected(choice)"
                                    :class="{ choice_selected: choice.selected }">
                                    <div class="check_box_center"></div>
                                </div>
                                    
                                <div class="choice_infos_and_price">
                                    <div class="choice_infos">
                                        <div class="choice_name">{{ choice.name }}</div>
                                    </div>

                                    <div class="choice_price">
                                        + {{ choice.price.toFixed(2) }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="popup_meal_edit_inluded_message_section">
                    <div class="popup_meal_included_message" v-if=" popup_meal_edit_note !== '' ">
                        <div class="title_and_arrow_buttons">
                            <div class="title">Your message</div>

                            <div class="arrow_buttons">
                                <div class="single_arrow_button">
                                    <span class="material-icons">expand_more</span>
                                </div>
                            </div>
                        </div>

                        <div class="include_message_box">
                            <textarea rows="2" :placeholder="popup_meal_edit_note" v-model="new_meal_note"></textarea>
                        </div>
                    </div>

                    <div class="popup_meal_included_message" v-else>
                        <div class="title_and_arrow_buttons">
                            <div class="title">Include a Message</div>

                            <div class="arrow_buttons" v-if="show_include_message_box">
                                <div class="single_arrow_button" @click="show_include_message_box = false">
                                    <span class="material-icons">expand_more</span>
                                </div>
                            </div>

                            <div class="arrow_buttons" v-else>
                                <div class="single_arrow_button" @click="show_include_message_box = true">
                                    <span class="material-icons">expand_less</span>
                                </div>
                            </div>
                        </div>

                        <div class="include_message_box" v-if="show_include_message_box">
                            <textarea rows="2" placeholder="Add specific message (allergy, etc)" v-model="new_meal_note"></textarea>
                        </div>
                    </div>
                </div>

                <div class="popup_meal_remove_item_section" @click="remove_one_meal_from_cart">Remove this item</div>

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

                    <div class="add_button_and_total_price" @click="update_one_meal_in_cart">
                        <div class="add_to_cart_button">Save changes</div>
                        
                        <div class="total_price">
                            <span class="dollar_sign">$</span>
                            {{ total_price.toFixed(2) }}
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
        popup_meal_edit_id: Number,
        popup_meal_edit_name: String,
        popup_meal_edit_background_image: String,
        popup_meal_edit_description: String,
        popup_meal_edit_calories: String,
        popup_meal_edit_quantity: Number,
        popup_meal_edit_meal_price: Number,
        popup_meal_edit_subtotal_price: Number,
        popup_meal_edit_note: String,
        popup_meal_edit_custom_options: Array
    },
    data() {
        return {
            total_price: this.popup_meal_edit_subtotal_price,
            quantity_to_add: this.popup_meal_edit_quantity,
            show_include_message_box: false,
            new_meal_note: ""
        }
    },
    methods: {
        close_popup_meal_edit() {
            this.$emit("close_popup_meal_edit");
        },
        choice_selected(choice) {
            this.popup_meal_edit_custom_options.forEach(new_option => {
                new_option.choices.forEach(new_option_choice => {
                    if (choice.type === new_option_choice.type ) {
                        if (choice.name === new_option_choice.name) {
                            choice.selected = true;
                            this.total_price += (choice.price * this.quantity_to_add);
                        } else {
                            if (new_option_choice.selected === true) {
                                this.total_price -= (new_option_choice.price * this.quantity_to_add);
                            }
                            new_option_choice.selected = false;
                        }
                    }
                })
            })
        },
        choice_unselected(choice) {
            choice.selected = false;
            this.total_price -= (choice.price * this.quantity_to_add);
        },
        decrease_quantity_to_add() {
            let meal_price = this.popup_meal_edit_meal_price;
            let total_price_before_update = this.total_price;
            let new_total_price;
            let custom_options_price = [];

            this.popup_meal_edit_custom_options.forEach(new_option => {
                new_option.choices.forEach(choice => {
                    if (choice.selected) { 
                        custom_options_price.push(choice.price);
                    }
                })
            })

            if(custom_options_price.length !== 0) {
                custom_options_price.forEach(option_price => {
                    total_price_before_update -= option_price;
                })
            }

            if(this.quantity_to_add > 1) {
                this.quantity_to_add--;

                new_total_price = total_price_before_update - meal_price;
            
                this.total_price = new_total_price;
            }
        },
        increase_quantity_to_add() {
            let total_price_before_update = this.popup_meal_edit_meal_price;
            let new_total_price;
            let custom_options_price = [];

            this.quantity_to_add++;

            this.popup_meal_edit_custom_options.forEach(new_option => {
                new_option.choices.forEach(choice => {
                    if (choice.selected) { 
                        custom_options_price.push(choice.price);
                    }
                })
            })

            if(custom_options_price.length !== 0) {
                custom_options_price.forEach(option_price => {
                    total_price_before_update += option_price;
                })
            }

            new_total_price = total_price_before_update * this.quantity_to_add;
            
            this.total_price = new_total_price;
        },
        remove_one_meal_from_cart() {
            let meal_id = this.popup_meal_edit_id;
            this.$emit("remove_one_meal_from_cart", meal_id);
            this.$store.commit("remove_one_meal_from_cart", meal_id);

            let message = "Removed one meal from cart";
            this.$store.commit('updated_cart_status_message', message);
        },
        update_one_meal_in_cart() {
            let meal_id = this.popup_meal_edit_id;
            let new_meal_quantity = this.quantity_to_add;
            let new_meal_note = this.new_meal_note;
            let new_meal_subtotal_price = this.total_price;
            let new_meal_custom_options = this.popup_meal_edit_custom_options;
            
            this.$emit("update_one_meal_in_cart");
            this.$store.commit("update_one_meal_in_cart", { meal_id, new_meal_quantity, new_meal_note, new_meal_subtotal_price, new_meal_custom_options });
        
            let message = "Updated one meal in cart";
            this.$store.commit('updated_cart_status_message', message);
        }
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
    z-index: 1;
}

.my_popup_meal_edit_wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    display: grid;
    grid-template-columns: 1fr 2fr;
    width: 60%;
    max-height: 80%;
    overflow: hidden;
    overflow-y: scroll;
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
    line-height: 22px;
}

.popup_meal_calories {
    display: flex;
    align-items: center;
}

.popup_meal_custom_options_title {
    font-size: 20px;
    margin-top: 20px;
}

.calories_amount {
    margin-left: 5px;
    color: var(--red-dark);
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

.title_and_arrow_buttons {
    background-color: var(--gray);
    padding: 15px 20px;
    font-size: 17px;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.title_and_arrow_buttons > .title {
    display: flex;
    align-items: center;
}

.single_arrow_button {
    border: 1px solid var(--gray-fade);
    color: var(--gray-dark);
    border-radius: 50%;
    display: flex;
    background-color: white;
}

.single_arrow_button:hover {
    cursor: pointer;
    border: 1px solid var(--navy);
    color: var(--navy);
}

.single_custom_choice {
    display: grid;
    grid-template-columns: 10% 90%;
    margin: 20px 20px 0;
}

.choice_infos_and_price {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.option_calories {
    display: flex;
    margin-top: 6px;
}

.checkbox {
    border: 2px solid var(--gray-fade);
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
}

.checkbox:hover {
    cursor: pointer;
    border: 2px solid var(--navy);
}

.check_box_center {
    width: 45%;
    height: 45%;
    background-color: white;
    border-radius: 50%;
}

.choice_selected {
    border: 2px solid var(--navy);
    background-color: var(--navy);
}

.popup_meal_included_message {
    margin-top: 30px;
}

.include_message_box > textarea {
    width: 100%;
    max-width: 100%;
    padding: 15px 30px;
    font-size: 16px;
    margin-top: 20px;
    border: 1px solid var(--gray-fade);
    color: var(--gray-dark);
}

.title_and_arrow_buttons > .title > span {
    margin-left: 10px;
    font-size: 15px;
    color: var(--gray-dark);
}

.popup_meal_remove_item_section {
    color: var(--red);
    font-size: 20px;
    text-align: center;
    margin-top: 20px;
    padding-top: 40px;
    border-top: 1px solid var(--gray-fade);
    cursor: pointer;
}
</style>