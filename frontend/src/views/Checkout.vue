<template>
    <div class="checkout_page_wrapper">
        <div class="checkout_page_body">
            <div class="order_confirmation_section">
                <router-link to="/">
                    <div class="app_name">Campus Eats</div>
                </router-link>

                <div class="restaurant_names_wrapper">
                    <div class="single_restaurant_name" v-for="name in main_restaurant_names" :key="name">
                        {{ name }}
                    </div>
                </div>

                <MyDeliveryMap :main_restaurant_paths="main_restaurant_paths"></MyDeliveryMap>

                <MyDeliveryInstructions
                    @show_edit_destination_modal="show_edit_destination_modal"
                    @show_edit_instructions_modal="show_edit_instructions_modal">
                </MyDeliveryInstructions>

                <MyDeliveryOptions></MyDeliveryOptions>

                <MyPayment></MyPayment>

                <MyFinalCart :at_checkout_page=true></MyFinalCart>
            </div>

            <div class="place_order_section">
                <MyTotalFees @place_order_button_clicked="user_placed_order"></MyTotalFees>
            </div>
        </div>

        <MyMiniFooter></MyMiniFooter>

        <div class="popup_edit_modals_overlay_section" v-if="view_edit_modals"
            @click.self="close_popup_edit_modals">
            <div class="popup_edit_modals_container">
                <div class="popup_edit_modals_close_button">
                    <span class="material-icons" @click="close_popup_edit_modals">close</span>
                </div>

                <MyEditDestination v-if="view_edit_destination_modal"
                    @done_edit_destination="close_popup_edit_modals">
                </MyEditDestination>
                  
                <MyEditInstructions v-if="view_edit_instructions_modal"></MyEditInstructions>  
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
import MyMiniFooter from "../components/MyMiniFooter.vue"

import MyEditDestination from "../components/for_checkout_page/popup_edit_modals/MyEditDestination.vue"
import MyEditInstructions from "../components/for_checkout_page/popup_edit_modals/MyEditInstructions.vue"
import MyEditPayment from "../components/for_checkout_page/popup_edit_modals/MyEditPayment.vue"
import MyEditPromoCode from "../components/for_checkout_page/popup_edit_modals/MyEditPromoCode.vue"

export default {
    components: {
        MyDeliveryMap,
        MyDeliveryInstructions,
        MyDeliveryOptions,
        MyPayment,
        MyFinalCart,
        MyTotalFees,
        MyMiniFooter,

        MyEditDestination,
        MyEditInstructions,
        MyEditPayment,
        MyEditPromoCode,
    },
    data() {
        return {
            view_edit_modals: false,
            view_edit_destination_modal: false,
            view_edit_instructions_modal: false,
            main_restaurant_names: [],
            main_restaurant_paths: []
        }
    },
    created() {
        this.get_main_restaurant_names_and_paths_from_cart();
        
        let encrypted_status = this.$store.state.user_logged_in;

        if(this.main_restaurant_names.length < 1 ||
            encrypted_status === false || encrypted_status === "" || encrypted_status === null ||
            window.atob(encrypted_status) === "false") {
            this.$router.push({
                path: "/"
            });
        }
    },
    methods: {
        get_main_restaurant_names_and_paths_from_cart() {
            let customer_cart_by_meals = this.$store.state.customer_cart_by_meals;
            let main_restaurant_names  = this.main_restaurant_names;
            let main_restaurant_paths  = this.main_restaurant_paths;

            customer_cart_by_meals.forEach(meal => {
                if(!main_restaurant_names.includes(meal.meal_infos.restaurant_name)) {
                    main_restaurant_names.push(meal.meal_infos.restaurant_name);
                }
            })

            customer_cart_by_meals.forEach(meal => {
                if(!main_restaurant_paths.includes(meal.meal_infos.restaurant_path)) {
                    main_restaurant_paths.push(meal.meal_infos.restaurant_path);
                }
            })
        },
        close_popup_edit_modals() {
            this.view_edit_modals = false;
        },
        show_edit_destination_modal() {
            this.view_edit_modals = true;
            this.view_edit_destination_modal = true;

            this.view_edit_instructions_modal = false;
        },
        show_edit_instructions_modal() {
            this.view_edit_modals = true;
            this.view_edit_instructions_modal = true;

            this.view_edit_destination_modal = false;
        },
        user_placed_order() {
            let final_customer_cart = this.$store.state.customer_cart_by_orders;
            this.$store.dispatch("user_placed_order", final_customer_cart);
        }
    }
}
</script>

<style scoped>
.checkout_page_wrapper {
    background-color: var(--gray);
    position: relative;
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

.place_order_section {
    border-left: 1px solid var(--navy);
}

.popup_edit_modals_overlay_section {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.4);
}

.popup_edit_modals_container {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 30%;
    max-width: 30%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px 30px;
}

.popup_edit_modals_close_button > span {
    font-size: 30px;
    margin-bottom: 20px;
}

.popup_edit_modals_close_button > span:hover {
    cursor: pointer;
    color: var(--red);
}

.restaurant_names_wrapper {
    display: flex;
}

.single_restaurant_name {
    font-size: 30px;
    color: var(--red-dark);
    margin: 40px 40px 20px;
}
</style>