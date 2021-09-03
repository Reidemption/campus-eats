<template>
    <div class="my_header_wrapper">
        
        <div class="app_name_and_hamburger_menu">
            <MyMobileNavBar></MyMobileNavBar>

            <router-link to="/" @click="reset_cart_status_message">
                <div class="app_name">Campus Eats</div>
            </router-link>
        </div>

        <div class="delivery_location_and_cart_button">
            <div class="delivery_location_wrapper" v-if="delivery_location_selected"
                @click="edit_delivery_location">
                <i class="las la-map-marker"></i>
                <p class="delivery_location">Human Performance Center</p>
                <i class="las la-pen"></i>
            </div>

            <div class="delivery_location_wrapper" v-else
                @click="add_delivery_location">
                <p class="delivery_location">Select your location</p>
                <i class="las la-plus-circle"></i>
            </div>

            <div class="cart_button">
                <div class="cart_icon" @click="view_mini_cart">
                    <i class="cart_icon_link las la-shopping-cart"></i>
                </div>
                <div class="cart_items_tracker">{{ total_items_in_cart }}</div>
            </div>
        </div>

        <div class="overlay_section" v-if="show_mini_cart"
            @click.self="close_mini_cart">
            <MyMiniCart v-if="show_mini_cart"
             @close_button_clicked="close_mini_cart"></MyMiniCart>
        </div>
    </div>
</template>

<script>
import MyMiniCart from "../components/MyMiniCart.vue"
import MyMobileNavBar from "../components/MyMobileNavbar.vue"

export default {
    components: {
        MyMiniCart,
        MyMobileNavBar
    },
    data() {
        return {
            show_mini_cart: false,
            delivery_location_selected: false,
        }
    },
    created () {
        window.addEventListener('scroll', this.handle_scroll);

        this.check_cart_status_message();

        window.addEventListener("unload", (event) => {
            this.$store.commit('reset_cart_status_message');
        })
    },
    methods: {
        view_mini_cart() {
            this.show_mini_cart = true;
        },
        close_mini_cart() {
            this.show_mini_cart = false;
        },
        handle_scroll(event) {
            this.show_mini_cart = false;
        },
        check_cart_status_message() {
            let cart_status_message = window.atob(this.$store.state.cart_status_message);
            
            if (cart_status_message === "Added one meal to cart" ||
                cart_status_message === "Updated one meal in cart" || 
                cart_status_message === "Removed one meal from cart" ||
                cart_status_message === "Removed all items in cart") {
                    this.show_mini_cart = true;
            }
        },
        reset_cart_status_message() {
            this.$store.commit('reset_cart_status_message');
        }
    },
    computed: {
        total_items_in_cart() {
            if (this.$store.state.customer_cart_by_meals !== null) {
                return this.$store.state.customer_cart_by_meals.length;
            } else {
                return 0;
            }
        }
    }
}
</script>

<style scoped>
.my_header_wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 40px;
}

.app_name_and_hamburger_menu {
    display: flex;
    align-items: center;
}

.app_name_and_hamburger_menu > a {
    text-decoration: none;
}

.app_name {
    font-family: 'Roboto Slab', serif;
    font-size: 40px;
    color: var(--navy);
    cursor: pointer;
}

.delivery_location_and_cart_button {
    display: flex;
}

.delivery_location_wrapper{
   display: flex;
    align-items: center;
    border: 1px solid white;
    border-radius: 50px;
    background-color: white;
    padding: 0 40px;
}

.delivery_location_wrapper> i {
    font-size: 20px;
    color: var(--gray-dark);
}

.delivery_location {
    border: 1px solid white;
    outline-color: white;
    color: var(--gray-dark);
    font-size: 18px;
    padding: 5px 10px;
}

.cart_button {
    display: flex;
    align-items: center;
}

.cart_icon > i {
    font-size: 45px;
    margin-left: 30px;
    color: var(--gray-dark);
}

.cart_icon > i:hover {
    cursor: pointer;
    color: var(--navy);
}

.cart_items_tracker {
    border-radius: 5px;
    height: fit-content;
    background-color: var(--gray-dark);
    color: white;
    padding: 4px 0;
    margin-top: -36px;
    margin-left: -8px;
    width: 25px;
    text-align: center;
    font-size: 12px;
}

.overlay_section {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 1;
    background-color: rgba(0,0,0,0.4)
}

.delivery_location_wrapper:hover {
    cursor: pointer;
    border: 1px solid var(--gray-dark);
}

.delivery_location_wrapper:hover i,
.delivery_location_wrapper:hover .delivery_location {
    color: var(--navy);
}
</style>