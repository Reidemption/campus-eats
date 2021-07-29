<template>
    <div class="my_best_sellers_wrapper">
        <div class="title">Best Sellers</div>

        <div class="best_sellers_option">
            <div class="single_best_seller" v-for="option in best_seller_options" :key="option.name">
                <div class="image">
                    <img :src="require(`../assets_others/BestSellers/${option.image}`)" alt="Best Seller Item">
                </div>
                <div class="infos">
                    <div class="name">{{ option.name }}</div>
                    
                    <div class="ingredients">{{ option.ingredients }}</div>

                    <div class="price_and_add_button">
                        <div class="price">
                            <span class="dollar_sign">$</span>
                            {{ option.price }}
                        </div>

                        <div class="add_to_cart_button">
                            <i class="las la-plus"></i>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            best_seller_options: [
                {
                    image: "burger.png",
                    name: "Burger of the Death",
                    ingredients: "Reis, Zoodles, Garnelen, Sesam Dressing, Radieschen, Avocado",
                    price: "39"

                },
                {
                    image: "mix.png",
                    name: "The Healthy Choice",
                    ingredients: "Eggs, Tofus, Tomatoes, Peas, Cucumber, Corn, Eggplant",
                    price: "29"

                },
                {
                    image: "healthy.png",
                    name: "Vegan Starter Pack",
                    ingredients: "Tofus, Carrot, Bread Crumbs, Rice, Some Leaves",
                    price: "99"

                },
                {
                    image: "kfc.png",
                    name: "KFC - The Classic",
                    ingredients: "Fresh chicken, Wheat Flour, Salt, Monosodium Glutamate, Spices, Dehydrated Garlic",
                    price: "9"

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
    margin: 55px 40px 30px;
}

.best_sellers_option {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 0 10px;
}

.single_best_seller {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
}

.image {
    position: relative;
    max-height: 100px;
}

img {
    width: 200px;
}

.infos {
    background-color: white;
    border-radius: 35px;
    padding: 100px 25px 20px;
    width: 85%;
    height: 100%;
    margin-top: 5px;
    color: var(--red-dark);
    box-shadow: 5px 5px;
    display: grid;
    grid-template-rows: 1fr 2fr 1fr;
}

.name {
    font-size: 21px;
    color: var(--red-dark);
}

.ingredients {
    color: var(--gray-dark);
    font-size: 14px;
    display: flex;
    align-items: center;
}

.price_and_add_button {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.dollar_sign {
    font-family: 'Cabin', sans-serif;
    font-size: 17px;
    margin-right: -3px;
}

.price {
    font-size: 20px;
}

.add_to_cart_button {
    background-color: var(--navy);
    border-radius: 50%;
    padding: 11px;
    font-size: 20px;
    color: white;
    display: flex;
}

.add_to_cart_button:hover {
    cursor: pointer;
    background-color: var(--red);
}
</style>