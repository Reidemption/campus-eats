<template>
    <div class="my_mini_cart_wrapper">
        <div class="close_button_and_remove_all_items_in_cart_option">
            <div class="close_button" @click="close_button_clicked">
                <span class="material-icons">close</span>
            </div>

            <div class="remove_all_items_in_cart_option"
                @click="remove_all_items_in_cart">Remove all items in cart</div>
        </div>

        <div class="main_cart_content" v-if="!empty_cart">
            <div class="cart_orders">
                <div class="single_cart_order" v-for="order in customer_cart_by_orders" :key="order.restaurant_name">
                    <div class="restaurant_name">{{ order.restaurant_name }}</div>

                    <div class="cart_items_infos">
                        <div class="single_cart_item" v-for="meal in order.meals" :key="meal.meal_id">
                            <div class="quantity_section">
                                <div class="quantity_amount">{{ meal.meal_infos.quantity }}</div>
                            </div>

                            <div class="infos_section">
                                <div class="cart_item_name_section" @click="show_popup_meal_edit(meal)">
                                    <div class="cart_item_name">{{ meal.meal_infos.name }}</div>
                                    <span class="material-icons">edit</span>
                                </div>
                                <div class="cart_item_custom_options">
                                    <div class="single_custom_option" v-for="option in meal.meal_infos.custom_options" :key="option.name">
                                        <div v-for="choice in option.choices" :key="choice.name">
                                            <div v-if="choice.selected">
                                                <div class="option_name">{{ choice.type }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="cart_item_message_included" v-if="meal.meal_infos.note">
                                    Message included
                                </div>
                            </div>

                            <div class="price_section">
                                <span class="dollar_sign">$</span>
                                <div class="total_price">{{ meal.meal_infos.subtotal_price.toFixed(2) }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="checkout_button" @click="ready_to_checkout">
                <div class="title">Checkout Now</div>
                <div class="circle_spacing"></div>
                <div class="total_cart_price">
                    <span class="dollar_sign">$</span>
                    <div class="total_price">{{ subtotal.toFixed(2) }}</div>
                </div>
            </div>
        </div>
        
        <div class="empty_cart" v-else>
            <div class="cart_icon">
                <i class="las la-shopping-cart"></i>
            </div>
            
            <div class="message">Add items from a restaurant to start a new cart</div>
        </div>

        <MyPopupMealEdit v-if="view_popup_meal_edit"
            :popup_meal_edit_id="popup_meal_edit_id"
            :popup_meal_edit_name="popup_meal_edit_name"
            :popup_meal_edit_background_image="popup_meal_edit_background_image"
            :popup_meal_edit_description="popup_meal_edit_description"
            :popup_meal_edit_calories="popup_meal_edit_calories"
            :popup_meal_edit_quantity="popup_meal_edit_quantity"
            :popup_meal_edit_meal_price="popup_meal_edit_meal_price"
            :popup_meal_edit_subtotal_price="popup_meal_edit_subtotal_price"
            :popup_meal_edit_note="popup_meal_edit_note"
            :popup_meal_edit_custom_options="popup_meal_edit_custom_options"
            @close_popup_meal_edit="close_popup_meal_edit"
            @remove_one_meal_from_cart="update_items_in_cart_after_changes"
            @update_one_meal_in_cart="update_items_in_cart_after_changes">
        </MyPopupMealEdit>
    </div>
</template>

<script>
import MyPopupMealEdit from "../components/MyPopupMealEdit.vue"

export default {
    components: {
        MyPopupMealEdit
    },
    data() {
        return {
            empty_cart: true,
            customer_cart_by_orders: [],
            view_popup_meal_edit: false,
            subtotal: 20,
            
            popup_meal_edit_id: "",
            popup_meal_edit_name: "",
            popup_meal_edit_background_image: "",
            popup_meal_edit_description: "",
            popup_meal_edit_calories: "",
            popup_meal_edit_quantity: "",
            popup_meal_edit_meal_price: "",
            popup_meal_edit_subtotal_price: "",
            popup_meal_edit_note: "",
            popup_meal_edit_custom_options: []
        }
    },
    created() {
        this.create_customer_cart_by_orders();

        this.calculate_cart_subtotal();
    },
    methods: {
        create_customer_cart_by_orders() {
            let customer_cart_by_meals = this.$store.state.customer_cart_by_meals;
            let customer_cart_by_orders = this.customer_cart_by_orders;
            let main_restaurant_names = [];

            customer_cart_by_meals.forEach(meal => {
                if(!main_restaurant_names.includes(meal.meal_infos.restaurant_name)) {
                    main_restaurant_names.push(meal.meal_infos.restaurant_name);
                }
            })

            main_restaurant_names.forEach(name => {
                customer_cart_by_orders.push({
                    restaurant_name: name,
                    meals: []
                })
            })

            customer_cart_by_meals.forEach(meal => {
                customer_cart_by_orders.forEach(order => {   
                    if(meal.meal_infos.restaurant_name === order.restaurant_name) {
                        order.meals.push(meal);
                    }
                })
            })

            if (customer_cart_by_orders.length !== 0) {
            this.empty_cart = false;
            } else {
                this.empty_cart = true;
            }
        },
        calculate_cart_subtotal() {
            let cart_subtotal = [];

            this.customer_cart_by_orders.forEach(order => {
                order.meals.forEach(meal => {
                    cart_subtotal.push(meal.meal_infos.subtotal_price);
                })
            });

            this.subtotal = cart_subtotal.reduce((a, b) => a + b, 0);
        },
        close_button_clicked() {
            this.$emit("close_button_clicked");
        },
        show_popup_meal_edit(meal) {
            this.view_popup_meal_edit = true;

            this.popup_meal_edit_id = meal.meal_index;
            this.popup_meal_edit_name = meal.meal_infos.name;
            this.popup_meal_edit_background_image = meal.meal_infos.image_url;
            this.popup_meal_edit_description = meal.meal_infos.description;
            this.popup_meal_edit_calories = meal.meal_infos.calories;
            this.popup_meal_edit_quantity = meal.meal_infos.quantity;
            this.popup_meal_edit_meal_price = meal.meal_infos.meal_price;
            this.popup_meal_edit_subtotal_price = meal.meal_infos.subtotal_price,
            this.popup_meal_edit_note = meal.meal_infos.note;
            this.popup_meal_edit_custom_options = meal.meal_infos.custom_options;
        },
        close_popup_meal_edit() {
            this.view_popup_meal_edit = false;
        },
        update_items_in_cart_after_changes() {
            if (window.location.pathname === "/") {
                this.$router.push({
                    name: "Homc",
                });
            } else {
                this.$router.push({
                    name: "Restaurani",
                    query: {
                        menu: this.$route.query.menu
                    }
                });
            }
        },
        remove_all_items_in_cart() {
            this.$store.commit("remove_all_items_in_cart");
            this.update_items_in_cart_after_changes();

            let message = "Removed all items in cart";
            this.$store.commit('updated_cart_status_message', message);
        },
        ready_to_checkout() {
            let encrypted_status = this.$store.state.user_logged_in;

            if(encrypted_status === false || encrypted_status === "" || encrypted_status === null ||
                window.atob(encrypted_status) === "false") {
                this.$router.push({
                    path: "/Login"
                });
            } else {
                this.$router.push({
                    path: "/Checkout"
                })
            }
        }
    }
}
</script>

<style scoped>
.my_mini_cart_wrapper {
    position: absolute;
    top: 70px;
    right: 75px;
    width: 40%;
    height: fit-content;
    max-height: 70%;
    background-color: white;
    padding: 30px;
    border: 1px solid var(--gray-fade);
    overflow: hidden;
    overflow-y: scroll;
}

.close_button_and_remove_all_items_in_cart_option {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.close_button {
    margin-bottom: 20px;
}

.close_button > span {
    font-size: 30px;
    color: var(--navy);
}

.close_button > span:hover {
    cursor: pointer;
    color: var(--red);
}

.remove_all_items_in_cart_option {
    color: var(--gray-dark);
}

.remove_all_items_in_cart_option:hover {
    cursor: pointer;
    color: var(--red);
}

.empty_cart {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
}

.cart_icon > i {
    font-size: 80px;
    color: var(--gray-dark);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
}

.message {
    text-align: center;
    font-size: 20px;
    color: var(--gray-dark);
}

.restaurant_name {
    font-family: 'Roboto', sans-serif;
    font-size: 25px;
    margin-bottom: 30px;
}

.checkout_button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--navy);
    color: white;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    text-decoration: none;
}

.circle_spacing {
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background-color: white;
    margin: 0 20px;
}

.total_cart_price {
    display: flex;
    align-items: center;
}

.dollar_sign {
    font-family: 'Cabin', sans-serif;
    font-size: 15px;
    margin-right: -1px;
}

.total_price {
    font-size: 19px;
    margin-left: 3px;
}

.cart_items_infos {
    margin: 20px 0 10px;
    padding-left: 30px;
}

.single_cart_item {
    display: grid;
    grid-template-columns: 15% 70% 15%;
    border-bottom: 1px solid var(--gray-fade);
    padding-bottom: 15px;
    margin-bottom: 30px;
}

.single_cart_item:last-child {
    margin-bottom: 0;        
}

.quantity_section {
    text-align: center;
    border: 1px solid var(--gray-fade);
    background-color: var(--gray);
    border-radius: 25px;
    width: 50%;
    padding: 5px 10px;
    margin: 0 0 auto;
}

.price_section {
    display: flex;
    justify-content: flex-end;
}

.price_section > .dollar_sign {
    font-size: 17px;
}

.infos_section {
    padding: 0 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: var(--gray-dark);
}

.cart_item_name {
    font-size: 19px;
    color: var(--red-dark);
    margin-bottom: 5px;
}

.single_cart_order {
    margin-bottom: 30px;
    border-bottom: 1px solid var(--gray-dark);
}

.cart_items_infos > .single_cart_item:last-child {
    border-bottom: none;
    margin-bottom: 0;
}

.cart_orders > .single_cart_order:last-child {
    border-bottom: none;
}

.cart_item_name_section {
    display: flex;
    cursor: pointer;
}

.cart_item_name_section > span {
    margin-left: 10px;
    font-size: 17px;
}

.cart_item_name_section > span:hover {
    color: var(--navy);
}

.option_name {
    margin-bottom: 5px;
}
</style>