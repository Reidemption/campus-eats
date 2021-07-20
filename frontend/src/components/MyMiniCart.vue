<template>
    <div class="my_mini_cart_wrapper">
        <div class="close_button" @click="close_button_clicked">
            <span class="material-icons">close</span>
        </div>

        <div class="main_cart_content" v-if="!empty_cart">
            <div class="restaurant_name">Chick-fil-A</div>

            <div class="cart_items_infos">
                <div class="single_cart_item" v-for="item in items_in_cart" :key="item.name">
                    <div class="quantity_section">
                        <input type="number" :value="item.quantity">
                    </div>

                    <div class="infos_section">
                        <div class="cart_item_name">{{ item.name }}</div>
                        <div class="cart_item_message_included" v-if="item.message_included">Message included: Yes</div>
                        <div class="cart_item_message_included" v-else>Message included: No</div>
                    </div>

                    <div class="price_section">
                        <span class="dollar_sign">$</span>
                    <div class="total_price">{{ item.price }}</div>
                    </div>
                </div>
            </div>

            <router-link to="/Checkout" class="checkout_button">
                <div class="title">Checkout Now</div>
                <div class="circle_spacing"></div>
                <div class="total_cart_price">
                    <span class="dollar_sign">$</span>
                    <div class="total_price">20.99</div>
                </div>
            </router-link>
        </div>

        <div class="empty_cart" v-else>
            <div class="cart_icon">
                <i class="las la-shopping-cart"></i>
            </div>
            
            <div class="message">Add items from a restaurant to start a new cart</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items_in_cart: [],
        }
    },
    created() {
        this.items_in_cart = this.$store.state.items_in_cart;
    },
    methods: {
        close_button_clicked() {
            this.$emit("close_button_clicked");
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
    height: 70%;
    max-height: 70%;
    background-color: white;
    padding: 30px;
    border: 1px solid var(--gray-fade);
    display: grid;
    grid-template-rows: 10% 90%;
}

.close_button > span {
    font-size: 30px;
    color: var(--navy);
}

.close_button > span:hover {
    cursor: pointer;
    color: var(--red);
}

.empty_cart {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

.main_cart_content {
    display: grid;
    grid-template-rows: 10% 80% 10%;
}

.restaurant_name {
    font-family: 'Roboto', sans-serif;
    font-size: 30px;
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
    margin: 20px 0 30px;
    overflow: hidden;
    overflow-y: scroll;
    padding: 0 30px;
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
    display: flex;
    align-items: center;
    border: 1px solid var(--gray-fade);
    background-color: var(--gray);
    border-radius: 25px;
    width: 80%;
    padding: 5px 10px;
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
</style>