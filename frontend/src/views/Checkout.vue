<template>
    <div class="checkout_page_wrapper">
        <div class="checkout_page_body">
            <div class="order_confirmation_section">
                <router-link to="/">
                    <div class="app_name">Campus Eats</div>
                </router-link>

                <div class="restaurant_name">Chick-fil-A</div>

                <MyDeliveryMap></MyDeliveryMap>

                <MyDeliveryInstructions></MyDeliveryInstructions>

                <MyDeliveryOptions></MyDeliveryOptions>

                <MyPayment></MyPayment>

                <MyFinalCart></MyFinalCart>
            </div>

            <div class="place_order_section">
                <MyTotalFees></MyTotalFees>
            </div>
        </div>

        <div class="mini_footer">
            <div class="license">© 2021 Campus Eats Inc.</div>
            <div class="policy_and_terms">
                <span><a class="privacy_policy" href="https://policies.google.com/privacy" target="_blank">
                    Privacy Policy
                </a></span>
                |
                <span><a class="terms_of_service" href="https://policies.google.com/terms" target="_blank">
                    Terms
                </a></span>
            </div>
        </div>
    </div>
</template>

<script>
import MyDeliveryMap from "../components/for_checkout_page/MyDeliveryMap.vue"
import MyDeliveryInstructions from "../components/for_checkout_page/MyDeliveryInstructions.vue"
import MyDeliveryOptions from "../components/for_checkout_page/MyDeliveryOptions.vue"
import MyPayment from "../components/for_checkout_page/MyPayment.vue"
import MyFinalCart from "../components/for_checkout_page/MyFinalCart.vue"
import MyTotalFees from "../components/for_checkout_page/MyTotalFees.vue"

export default {
    components: {
        MyDeliveryMap,
        MyDeliveryInstructions,
        MyDeliveryOptions,
        MyPayment,
        MyFinalCart,
        MyTotalFees
    }
}
</script>

<style scoped>
.checkout_page_wrapper {
    background-color: var(--gray);
}

.checkout_page_body {
    display: grid;
    grid-template-columns: 60% 40%;
}

.order_confirmation_section > a {
    text-decoration: none;
}

.app_name {
    font-family: 'Roboto Slab', serif;
    font-size: 40px;
    color: var(--navy);
    padding: 30px 40px 0;
    cursor: pointer;
}

.order_confirmation_section {
    padding-bottom: 40px;
}

.restaurant_name {
    font-size: 30px;
    color: var(--red-dark);
    margin: 40px 40px 20px;
}

.place_order_section {
    border-left: 1px solid var(--navy);
}

.mini_footer {
    background-color: var(--navy);
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
}

.policy_and_terms > span > a {
    text-decoration: none;
    color: white;
}

.policy_and_terms > span > a:hover {
    color: var(--yellow);
}
</style>