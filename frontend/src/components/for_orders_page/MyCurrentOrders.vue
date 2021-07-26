<template>
    <div class="my_current_orders_wrapper">
        <div class="order_summary">
          <MyFinalCart :at_checkout_page=false></MyFinalCart>
        </div>

        <div class="delivery_summary">
            <div class="single_summary_item">
                <div class="name">Total:</div>

                <div class="price_section">
                    <span class="dollar_sign">$</span>
                    <div class="total_paid">33.64</div>
                </div>
            </div>

            <div class="single_summary_item">
                <div class="name">Payment:</div>
                <div class="info">Visa</div>
            </div>

            <div class="single_summary_item">
                <div class="name">Destination:</div>
                <div class="info">Smith Computer Center</div>
            </div>

            <div class="single_summary_item">
                <div class="name">Delivery instruction:</div>
                <div class="info">Meet at door</div>
            </div>

            <div class="single_summary_item">
                <div class="name">Order placed at:</div>
                <div class="info">11:00 AM</div>
            </div>
        </div>
    </div>
</template>

<script>
import MyFinalCart from "../../components/for_checkout_page/MyFinalCart.vue"

export default {
    components: {
        MyFinalCart
    }
}
</script>

<style scoped>
.my_current_orders_wrapper {
    display: grid;
    grid-template-columns: 60% 40%;
}

.delivery_summary {
    margin-top: 40px;
    padding: 0 40px;
    border-left: 1px solid var(--navy);
}

.single_summary_item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 20px;
}

.single_summary_item > .name {
    font-family: 'Roboto Slab', serif;
    font-size: 20px;
    color: var(--navy);
}
.single_summary_item > .info {
    font-size: 19px;
    display: flex;
    align-items: center;
}

.price_section{ 
    display: flex;
    align-items: center;
}

.dollar_sign {
    font-family: 'Cabin', sans-serif;
    font-size: 18px;
    margin-right: 2px;
    margin-bottom: 1px;
}

.total_paid {
    font-size: 19px;
}
</style>