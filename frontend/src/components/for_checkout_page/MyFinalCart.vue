<template>
    <div class="my_delivery_section_wrapper">
        <div class="title_and_add_item_button">
            <div class="my_delievery_section_title">Your items</div>
            <div class="add_item_button">
                <div class="plus_icon">
                    <i class="las la-plus"></i>
                </div>

                <div class="title">Add item</div>
            </div>
        </div>

        <div class="items_in_cart">
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            items_in_cart: []
        }
    },
    created() {
        this.items_in_cart = this.$store.state.items_in_cart;
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

.items_in_cart {
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
    margin-bottom: 0;  
    border-bottom: none;      
}

.quantity_section {
    display: flex;
    align-items: center;
    border: 1px solid var(--gray-fade);
    background-color: var(--gray);
    border-radius: 25px;
    width: 60%;
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
</style>