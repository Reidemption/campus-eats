<template>
    <div class="my_delivery_section_wrapper">
        <div class="my_delievery_section_title" v-if="at_checkout_page">Your Order</div>

        <div class="customer_cart">
            <div class="single_order" v-for="order in customer_cart_by_orders" :key="order.restaurant_name">
                
                <div class="restaurant_name_and_add_button">
                  <div class="restaurant_name">{{ order.restaurant_name }}</div>

                    <div class="add_item_button" @click="go_to_restaurant_page(order.meals[0].meal_infos.restaurant_path)"
                        v-if="at_checkout_page">
                        <div class="plus_icon">
                            <i class="las la-plus"></i>
                        </div>

                        <div class="title">Add item</div>
                    </div>
                </div>

                <div class="cart_items_of_one_order">
                    <div class="single_cart_item" v-for="meal in order.meals" :key="meal.meal_infos.name">
                        <div class="quantity_section">
                            <div class="quantity_amount">{{ meal.meal_infos.quantity }}</div>
                        </div>

                        <div class="infos_section">
                            <div class="cart_item_name_section" @click="show_popup_meal_edit(meal)"
                                v-if="at_checkout_page">
                                <div class="cart_item_name">{{ meal.meal_infos.name }}</div>
                                <span class="material-icons">edit</span>
                            </div>

                            <div class="cart_item_name_section" v-else
                                :class="{disable_hover_effect: !at_checkout_page}">
                                <div class="cart_item_name">{{ meal.meal_infos.name }}</div>
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

                            <div class="cart_item_message_included" v-if="meal.meal_infos.note">Message included</div>
                        </div>

                        <div class="price_section">
                            <span class="dollar_sign">$</span>
                            <div class="total_price">{{ meal.meal_infos.subtotal_price.toFixed(2) }}</div>
                        </div>
                    </div>
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
        </div>
    </div>
</template>

<script>
import MyPopupMealEdit from "../../components/MyPopupMealEdit.vue"

export default {
    components: {
        MyPopupMealEdit
    },
    props: {
        at_checkout_page: Boolean
    },
    data() {
        return {
            view_popup_meal_edit: false,

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
    mounted() {
        if(this.customer_cart_by_orders.length === 0) {
            this.create_customer_cart_by_orders();
        }
    },
    methods: {
        create_customer_cart_by_orders() {
            this.$store.commit("create_customer_cart_by_orders");
        },
        go_to_restaurant_page(path) {
            this.$router.push({
            name: "Restaurant",
            query: {
                menu: path
            }
            });
        },
        show_popup_meal_edit(meal) {
            this.view_popup_meal_edit = true;

            this.popup_meal_edit_id = meal.meal_id;
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
            this.$router.push({
                name: "Chcckout",
            });
        }
    },
    computed: {
        customer_cart_by_orders() {
            return this.$store.state.customer_cart_by_orders;
        }
    }
}
</script>

<style scoped>
.my_delivery_section_wrapper {
    border-bottom: none;
    margin-bottom: 30px;
}

.customer_cart {
    margin-top: 20px;
}

.single_cart_item {
    display: grid;
    grid-template-columns: 15% 70% 15%;
    border-bottom: 1px solid var(--gray-fade);
    padding-bottom: 15px;
    margin-bottom: 30px;
}

.single_cart_item:last-child {
    margin-bottom: 10px;  
    border-bottom: none;      
}

.quantity_section {
    text-align: center;
    border: 1px solid var(--gray-fade);
    background-color: white;
    border-radius: 25px;
    width: 50%;
    padding: 5px 10px;
    margin: 0 0 auto;
}

.price_section {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
}

.price_section > .dollar_sign {
    font-size: 18px;
    font-family: 'Cabin', sans-serif;
    margin-right: 2px;
}

.price_section > .total_price {
    font-size: 19px;
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

.restaurant_name_and_add_button {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.restaurant_name {
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 20px;
}


.add_item_button {
    display: flex;
    align-items: center;
    background-color: var(--navy);
    color: white;
    border-radius: 25px;
    padding: 8px 20px;
    height: fit-content;
}

.add_item_button:hover {
    cursor: pointer;
    background-color: var(--red);
    color: white
}

.plus_icon {
    margin-right: 10px;
}

.cart_items_of_one_order {
    padding-left: 30px;
    margin-bottom: 30px;
    border-bottom: 1px solid var(--gray-dark);
}

.single_order:last-child > .cart_items_of_one_order{
    border-bottom: none;
}

.option_name {
    margin-bottom: 5px;
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

.disable_hover_effect:hover {
    cursor: default;
}
</style>