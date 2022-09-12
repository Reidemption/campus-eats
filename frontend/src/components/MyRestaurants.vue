<template>
    <div class="my_restaurants_wrapper">
        <div class="title_and_arrow_buttons">
            <div class="title"><slot></slot></div>

            <div class="arrow_buttons">
                <div class="button button_left" @click="previous_restaurants_list"
                    :class="{ button_guide: show_restaurant_list_2}">
                    <span class="material-icons">arrow_back</span>
                </div>
                <div class="button button_right" @click="next_restaurants_list"
                    :class="{ button_guide: show_restaurant_list_1}">
                    <span class="material-icons">arrow_forward</span>
                </div>
            </div>
        </div>

        <div class="restaurant_options" v-if="show_restaurant_list_1">
            <div class="single_restaurant" v-for="restaurant in restaurants_list_1" :key="restaurant.name"
                @click="restaurant_selected(restaurant.name)">
                <img :src="require(`../assets_main/${restaurant.logo}`)" :alt="restaurant.name">
            </div>
        </div>

        <div class="restaurant_options" v-if="show_restaurant_list_2">
            <div class="single_restaurant" v-for="restaurant in restaurants_list_2" :key="restaurant.name"
                @click="restaurant_selected(restaurant.name)">
                <img :src="require(`../assets_main/${restaurant.logo}`)" :alt="restaurant.name">
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
                    name: "ChickFilA",
                    logo: "TrailblazersCafe/ChickFilA/logo.png"
                },
                {
                    name: "Subway",
                    logo: "DixieMarket/Subway/logo.png"
                },
                {
                    name: "PizzaHut",
                    logo: "TrailblazersCafe/PizzaHut/logo.jpg"
                },
                {   
                    name: "AceSushi",
                    logo: "TrailblazersCafe/AceSushi/logo.jpg"
                }
                ,{
                    name: "Infusion",
                    logo: "Infusion/logo.png"
                },
                {
                    name: "Stacks",
                    logo: "Stacks/logo.png"
                },
                {
                    name: "Grazers",
                    logo: "Grazers/logo.jpg"
                },
                {
                    name: "BrooksStop",
                    logo: "BrooksStop/logo.png"
                }
            ],
            
            restaurants_list_1: [],
            show_restaurant_list_1: true,

            restaurants_list_2: [],
            show_restaurant_list_2: false,
        }
    },
    created() {
        let list = this.restaurants_list;
        let chunks = [];
        let i = 0;

        while (i < list.length) {
            chunks.push(list.slice(i, i += 4));
        }
        this.restaurants_list_1 = chunks[0];
        this.restaurants_list_2 = chunks[1];
    },
    methods: {
        previous_restaurants_list() {
            if(this.show_restaurant_list_1) {
                return
            } else {
                this.show_restaurant_list_1 = true;
                this.show_restaurant_list_2 = false;
            }
        },
        next_restaurants_list() {
            if(this.show_restaurant_list_2) {
                return
            } else {
                this.show_restaurant_list_2 = true;
                this.show_restaurant_list_1 = false;
            }
        },
        restaurant_selected(restaurant_name) {
            this.$store.commit("reset_cart_status_message");
            
            this.$router.push({
                name: "Restaurani",
                query: {
                    menu: restaurant_name
                }
            });

            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        }
    }
}
</script>

<style scoped>
.title_and_arrow_buttons {
    display: flex;
    justify-content: space-between;
    margin: 50px 40px 30px;
}

.title {
    font-family: 'Roboto Slab', serif;
    font-size: 30px;
    color: var(--navy);
}

.arrow_buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100px;
}

.button {
    width: fit-content;
    height: fit-content;
    border-radius: 50%;
    background-color: white;
    color: var(--gray-fade);
    padding: 10px;
    display: flex;
    justify-self: flex-end;
    cursor: not-allowed;
}

.button_guide {
    cursor: pointer;
    color: var(--navy);
}

.button_guide:hover {
    background-color: var(--red);
    color: white;
}

.restaurant_options {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 0 10px;
}

.single_restaurant {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border-radius: 25px;
    background-color: white;
    color: var(--red-dark);
    box-shadow: 5px 5px;
    width: 85%;
    height: 130px;
    padding: 20px 30px;
    cursor: pointer;
}

img {
    width: 70%;
}
</style>