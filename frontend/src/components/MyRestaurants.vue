<template>
    <div class="my_restaurants_wrapper">
        <div class="title">Our Restaurants</div>

        <div class="restaurant_options">
            <div class="single_restaurant" v-for="restaurant in restaurant_list" :key="restaurant.name">
                <div class="restaurant_logo">
                    <img :src="require(`../assets_main/${restaurant.logo}`)">
                </div>
                
                <div class="arrow_button">
                    <i class="las la-angle-right"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            restaurant_list: [
                {
                    logo: "BrooksStop/logo.png"
                },
                {
                    logo: "DixieMarket/logo.png"
                },
                {
                    logo: "Grazers/logo.jpg"
                },
                {
                    logo: "Infusion/logo.png"
                },
                {
                    logo: "Stacks/logo.png"
                },
                {
                    logo: "TrailblazersCafe/logo.png"
                }
            ]
        }
    }
}
</script>

<style scoped>
.title {
    font-family: 'Roboto Slab', serif;
    font-size: 30px;
    color: var(--navy);
    margin: 50px 40px 30px;
}

.restaurant_options {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    margin: 30px 20px;
}

.single_restaurant {
    display: grid;
    grid-template-rows: 6fr 1fr;
    border-radius: 25px;
    padding: 20px;
    width: 80%;
    margin: 0 auto;
    background-color: white;
    color: var(--red-dark);
    box-shadow: 5px 5px;
}

.restaurant_logo {
    border: 1px solid white;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.restaurant_logo > img {
    width: 100%;
}

.restaurant_name {
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 18px;
    align-items: center;
}

.arrow_button {
    margin: 0 auto;
    width: 30px;
    height: 30px;
    border: 1px solid var(--red-dark);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.arrow_button:hover {
    cursor: pointer;
    border: 1px solid var(--navy);
    background-color: var(--navy);
    color: white;
}
</style>