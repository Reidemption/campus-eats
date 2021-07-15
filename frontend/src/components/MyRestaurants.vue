<template>
    <div class="my_restaurants_wrapper">
        <div class="title">Our Restaurants</div>

        <div class="restaurant_options">
            <div class="single_restaurant"
                v-for="restaurant in restaurants_list" :key="restaurant.class" 
                :class="restaurant.class">
                <img :src="require(`../assets_main/${restaurant.image}`)" :alt="restaurant.class">
                <div class="arrow_button">
                    <router-link :to="restaurant.page">
                        <i class="las la-angle-right"></i>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            restaurants_list:[
                {
                    class: "subway",
                    image: "DixieMarket/Subway/logo.png",
                    page: "Subway"
                },
                {
                    class: "chick_fil_a",
                    image: "TrailblazersCafe/ChickFilA/logo.png",
                    page: "ChickFilA"
                },
                {
                    class: "infusion",
                    image: "Infusion/logo.png",
                    page: "Infusion"
                },
                {
                    class: "pizza_hut",
                    image: "TrailblazersCafe/PizzaHut/logo.jpg",
                    page: "PizzaHut"
                },
                {
                    class: "stacks",
                    image: "Stacks/logo.png",
                    page: "Stacks"
                },
                {
                    class: "ace_sushi",
                    image: "TrailblazersCafe/AceSushi/logo.png",
                    page: "AceSushi"
                },
                {
                    class: "grazers",
                    image: "Grazers/logo.jpg",
                    page: "Grazers"
                },
                {
                    class: "brooks_stop",
                    image: "BrooksStop/logo.png",
                    page: "BrooksStop"
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
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(4, 155px);
    gap: 30px;
    margin: 30px 90px;
}

.single_restaurant {
    background-color: white;
    border-radius: 25px;
    display: grid;
    grid-template-columns: 4fr 1fr;
    color: var(--navy);
    box-shadow: 5px 5px;
}

.single_restaurant > img {
    width: 60%;
    display: flex;
    align-self: center;
    justify-self: center;
}

.single_restaurant > .arrow_button {
    display: flex;
    align-self: center;
    justify-self: center;
}

.subway {
    grid-column: 1/3;
    grid-row: 1/4;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

.subway > img {
    width: 40%;
    height: 80%;
}

.chick_fil_a {
    grid-column: 3/7;
    grid-row: 1;
}

.infusion {
    grid-column: 7/11;
    grid-row: 1;
}

.infusion > img {
    width: 60%;
}

.pizza_hut {
    grid-column: 3/8;
    grid-row: 2;
}

.pizza_hut > img {
    width: 75%;     
}

.stacks {
    grid-column: 3/8;
    grid-row: 3;
}

.ace_sushi {
    grid-column: 8/11;
    grid-row: 2/4;
    padding-right: 20px;
}

.ace_sushi > img {
    width: 65%;
}

.grazers {
    grid-column: 1/6;
    grid-row: 4;
}

.grazers > img {
    width: 40%;
}

.brooks_stop {
    grid-column: 6/11;
    grid-row: 4;
}
.arrow_button {
    margin: 0 auto;
    width: 30px;
    height: 30px;
    border: 1px solid var(--navy);
    background-color: var(--navy);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.arrow_button:hover {
    cursor: pointer;
    border: 1px solid var(--red);
    background-color: var(--red);
}

.arrow_button > a {
    color: white;
}

@media only screen and (max-width: 1650px) {
    .restaurant_options {
        grid-template-rows: repeat(4, 130px);
    }
    .single_restaurant > img {
        width: 55%;
    }
    .subway > img {
        width: 35%;
        height: 75%;
    }
    .pizza_hut > img {
        width: 68%;
    }
    .ace_sushi > img {
        width: 65%;
    }
    .grazers > img{
        width: 40%;
    }
}

@media only screen and (max-width: 1425px) {
    .restaurant_options {
        grid-template-rows: repeat(4, 110px);
    }
}
</style>