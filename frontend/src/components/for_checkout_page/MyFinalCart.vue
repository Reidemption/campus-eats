<template>
    <div class="my_delivery_section_wrapper">
        <div class="title_and_add_item_button">
            <div class="my_delievery_section_title">Your Order</div>
            <div class="add_item_button">
                <div class="plus_icon">
                    <i class="las la-plus"></i>
                </div>

                <div class="title">Add item</div>
            </div>
        </div>

        <div class="customer_cart">
            <div class="single_order" v-for="order in customer_cart" :key="order.restaurant_name">
                <div class="restaurant_name">{{ order.restaurant_name }}</div>

                <div class="cart_items_of_one_order">
                    <div class="single_cart_item" v-for="meal in order.meals" :key="meal.name">
                        <div class="quantity_section">
                            <input type="number" :value="meal.quantity">
                        </div>

                        <div class="infos_section">
                            <div class="cart_item_name">{{ meal.name }}</div>
                            <div class="cart_item_message_included" v-if="meal.note">Message included: Yes</div>
                            <div class="cart_item_message_included" v-else>Message included: No</div>
                        </div>

                        <div class="price_section">
                            <span class="dollar_sign">$</span>
                            <div class="total_price">{{ meal.price }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            customer_cart: []
        }
    },
    created() {
        this.customer_cart = this.$store.state.customer_cart;
    }
}
</script>

<style scoped>
.my_delivery_section_wrapper {
    border-bottom: none;
    margin-bottom: 30px;
}

.title_and_add_item_button {
    display: flex;
    justify-content: space-between;
}

.add_item_button {
    display: flex;
    align-items: center;
    background-color: var(--navy);
    color: white;
    border-radius: 25px;
    padding: 10px 20px;
}

.add_item_button:hover {
    cursor: pointer;
    background-color: var(--red);
    color: white
}

.plus_icon {
    margin-right: 10px;
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
    display: flex;
    align-items: center;
    border: 1px solid var(--gray-fade);
    background-color: var(--gray);
    border-radius: 25px;
    width: 60%;
    padding: 7px 10px;
    margin: auto 0;
}

.quantity_section > input {
    width: 100%;
    text-align: center;
    font-size: 15px;
    border: none;
    outline: none;
    background-color: var(--gray);
}

.price_section {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.price_section > .dollar_sign {
    font-size: 15px;
    font-family: 'Cabin', sans-serif;
    margin-right: 1px;
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
    color: var(--navy);
    margin-bottom: 5px;
}

.restaurant_name {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
}

.cart_items_of_one_order {
    padding-left: 30px;
    margin-bottom: 30px;
    border-bottom: 1px solid var(--gray-dark);
}

.single_order:last-child > .cart_items_of_one_order{
    border-bottom: none;
}
</style>