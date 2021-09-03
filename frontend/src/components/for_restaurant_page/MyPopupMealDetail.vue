<template>
    <div class="overlay_section" @click.self="close_button_clicked">
        <div class="meal_item_detail_popup_modal">
            <div class="backrground_image_and_close_button">
                <img class="popup_background" :src="require(`../../assets_main/${popup_meal_background_image}`)">
                
                <div class="close_button" @click="close_button_clicked">
                    <span class="material-icons">close</span>
                </div>
            </div>

            <div class="popup_main_content">
                <div class="popup_meal_all_infos_wrapper">
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

                    <div class="popup_meal_custom_options_wrapper">
                        <div class="single_customization_wrapper" v-for="custom_option in new_popup_meal_custom_options" 
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

                    <div class="popup_meal_included_message">
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
                            <textarea rows="2" placeholder="Add specific message (allergy, etc)" v-model="popup_meal_note"></textarea>
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
                                
                        <div class="quantity_amount">{{ quantity_to_add }}</div>
                        
                        <div class="quantity_button add_quantity_button"
                            @click="increase_quantity_to_add">
                            <span class="material-icons">add</span>
                        </div>
                    </div>

                    <div class="add_button_and_total_price" @click="add_one_meal_to_cart">
                        <div class="add_to_cart_button">
                            Add {{ quantity_to_add }} 
                            <span class="item_items" v-if="quantity_to_add === 1">item</span>
                            <span class="item_items" v-else>items</span>
                            to cart
                        </div>
                        
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
        popup_meal_restaurant_id: String,
        popup_meal_restaurant_path: String,
        popup_meal_restaurant_name: String,
        popup_meal_background_image: String,

        popup_meal_id: String,
        popup_meal_name: String,
        popup_meal_description: String,
        popup_meal_calories: String,
        popup_meal_price: Number,
        popup_meal_custom_options: Array,
    },
    data() {
        return {
            total_price: this.popup_meal_price,
            new_popup_meal_custom_options: [],
            quantity_to_add: 1,
            show_include_message_box: false,
            popup_meal_note: ""
        }
    },
    created() {
        this.create_new_popup_meal_custom_options_list();

        this.popup_meal_custom_options.forEach(custom_option => {
            custom_option.selected = false;
        })
    },
    methods: {
        create_new_popup_meal_custom_options_list() {
            let custom_options_main_types = [];

            this.popup_meal_custom_options.forEach(option => {
                if(!custom_options_main_types.includes(option.type)) {
                    custom_options_main_types.push(option.type);
                }
            })

            custom_options_main_types.forEach(type => {
                this.new_popup_meal_custom_options.push({
                    main_type: type,
                    choices: [],
                    show_choices: true
                })
            })

            this.popup_meal_custom_options.forEach(option => {
                this.new_popup_meal_custom_options.forEach(new_option => {
                    if(option.type === new_option.main_type) {
                        new_option.choices.push(option);
                    }
                })
            })
        },
        close_button_clicked() {
            this.$emit("close_button_clicked");
        },
        choice_selected(choice) {
            this.new_popup_meal_custom_options.forEach(new_option => {
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
            let meal_price = this.popup_meal_price;
            let total_price_before_update = this.total_price;
            let new_total_price;
            let custom_options_price = [];

            this.new_popup_meal_custom_options.forEach(new_option => {
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
            let total_price_before_update = this.popup_meal_price;
            let new_total_price;
            let custom_options_price = [];

            this.quantity_to_add++;

            this.new_popup_meal_custom_options.forEach(new_option => {
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
        add_one_meal_to_cart() {
            let meal_to_add = {
                restaurant_id: this.popup_meal_restaurant_id,
                restaurant_path: this.popup_meal_restaurant_path,
                restaurant_name: this.popup_meal_restaurant_name,

                meal_id: this.popup_meal_id,
                name: this.popup_meal_name,
                image_url: this.popup_meal_background_image,
                description: this.popup_meal_description,
                calories: this.popup_meal_calories,
                quantity: this.quantity_to_add,
                meal_price: this.popup_meal_price,
                subtotal_price: this.total_price,
                note: this.popup_meal_note,
                custom_options: this.new_popup_meal_custom_options
            };
            this.$store.commit('add_one_meal_to_cart', meal_to_add);    
            
            let message = "Added one meal to cart";
            this.$store.commit('updated_cart_status_message', message);
            
            this.$router.push({
                name: "Restaurani",
                query: {
                    menu: this.popup_meal_restaurant_path
                }
            });
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
    height: 80%;
    max-height: 80%;
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
    height: 100%;
    overflow: hidden;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    margin-top: 20px;
}

.calories_amount {
    margin-left: 5px;
    color: var(--red-dark);
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
</style>