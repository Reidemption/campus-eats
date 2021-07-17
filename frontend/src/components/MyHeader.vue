<template>
    <div class="my_header_wrapper">
        <div class="app_name">Campus Eats</div>

        <div class="location_input_and_cart_button">
            <div class="location_input">
                <i class="las la-map-marker"></i>
                <input class="location_text_input" type="text" placeholder="Enter your location">
            </div>

            <div class="cart_button">
                <div class="cart_icon">
                    <router-link to="/UserCart">
                        <i class="cart_icon_link las la-shopping-cart"></i>
                    </router-link>
                </div>
                <div class="cart_items_tracker">0</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.my_header_wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 40px;
}

.app_name {
    font-family: 'Roboto Slab', serif;
    font-size: 40px;
    color: var(--navy);
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

.cart_icon > a > i {
    font-size: 45px;
    margin-left: 30px;
    color: var(--gray-dark);
}

.cart_icon > a > i:hover {
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
</style>