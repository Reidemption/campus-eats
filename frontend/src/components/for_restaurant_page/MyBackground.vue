<template>
    <div class="my_back_ground_wrapper">
        <img :src="require(`../../assets_main/${background_image}`)" :alt="name"
            :class="{reset_position: background_image === 'DixieMarket/Subway/background.jpg'}">

        <div class="overlay_section">
            <div class="background_content">

                <router-link to="/" @click="reset_cart_status_message">
                    <div class="back_button">
                        <div class="icon">
                            <span class="material-icons">arrow_back</span>
                        </div>
                        <p>Back</p>
                    </div>
                </router-link>

                <div class="restaurant_name_and_delivery_infos">
                    <div class="restaurant_name">{{ name }}</div>

                    <div class="delivery_infos">
                        <div class="fees">
                            <span class="dollar_sign">$</span>
                            0.1 Delivery Fee
                        </div>
                        <div class="time">5-10 Min</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        background_image: String
    },
    methods: {
        reset_cart_status_message() {
            this.$store.commit('reset_cart_status_message');
        }
    }
}
</script>

<style scoped>
.my_back_ground_wrapper {
    position: relative;
}

img {
    width: 100%;
    object-fit: cover;
    height: 300px;
    object-position: bottom;
}

.reset_position {
    object-position: center;
}

.overlay_section {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
}

.background_content {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
}

.background_content > a {
    text-decoration: none;
    color: var(--gray-dark);
    width: fit-content;
}

.back_button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: fit-content;
    padding: 10px 17px;
    border-radius: 25px;
    box-shadow: 0px 2px 7px var(--gray-dark);
    margin: 30px 0 0 40px;
}

.back_button:hover {
    cursor: pointer;
    background-color: var(--red);
    color: white;
}

.back_button > p {
    font-size: 15px;
    margin-left: 5px;
}

.icon {
    display: flex;
}

.icon > span {
    font-size: 16px;
}

.restaurant_name_and_delivery_infos {
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 40px 0 26px 40px;
    margin-bottom: 4px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0) 100%);
}

.restaurant_name {
    color: white;
    font-size: 45px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
}

.delivery_infos {
    color: white;
    display: flex;
    justify-content: space-between;
    width: 250px;
    font-size: 18px;
}

.dollar_sign {
    font-family: 'Cabin', sans-serif;
    font-size: 15px;
    margin-right: -1px;
}
</style>