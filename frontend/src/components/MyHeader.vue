<template>
    <div class="my_header_wrapper">
        <router-link to="/">
            <div class="app_name">Campus Eats</div>
        </router-link>

        <div class="location_input_and_cart_button">
            <div class="location_input">
                <i class="las la-map-marker"></i>
                <input class="location_text_input" type="text" placeholder="Enter your location">
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
            <MyMiniCart @close_button_clicked="close_mini_cart"></MyMiniCart>
        </div>
    </div>
</template>

<script>
import MyMiniCart from "../components/MyMiniCart.vue"

export default {
    components: {
        MyMiniCart
    },
    data() {
        return {
            total_items_in_cart: this.$store.state.customer_cart_by_meals.length,
            show_mini_cart: false
        }
    },
    created () {
        window.addEventListener('scroll', this.handle_scroll);

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

.my_header_wrapper > a {
    text-decoration: none;
}

.app_name {
    font-family: 'Roboto Slab', serif;
    font-size: 40px;
    color: var(--navy);
    cursor: pointer;
}

.location_input_and_cart_button {
    display: flex;
}

.location_input{
   display: flex;
    align-items: center;
    border: 1px solid white;
    border-radius: 50px;
    background-color: white;
    padding: 10px 40px;
}

.location_input > i {
    font-size: 20px;
    color: var(--navy);
}

.location_text_input {
    border: 1px solid white;
    outline-color: white;
    color: var(--navy);
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
</style>