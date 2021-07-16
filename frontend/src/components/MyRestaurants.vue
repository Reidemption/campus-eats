<template>
    <div class="my_restaurants_wrapper">
        <div class="title_and_arrow_buttons">
            <div class="title"><slot></slot></div>

            <div class="arrow_buttons">
                <div class="button button_left" @click="previous_restaurants_list"
                    :class="{ button_guide: show_restaurant_list_2}">
                    <i class="las la-arrow-left"></i>
                </div>
                <div class="button button_right" @click="next_restaurants_list"
                    :class="{ button_guide: show_restaurant_list_1}">
                    <i class="las la-arrow-right"></i>
                </div>
            </div>

            <v-sheet class="mx-auto" elevation="8" max-width="800">
                <v-slide-group v-model="model" class="pa-4" active-class="success" show-arrows>
                
                    <v-slide-item v-for="n in 15" :key="n" v-slot="{ active, toggle }">
                        
                        <v-card :color="active ? undefined : 'grey lighten-1'"
                            class="ma-4" height="200" width="100" @click="toggle">

                            <v-row class="fill-height" align="center" justify="center">
                                
                                <v-scale-transition>
                                    <v-icon v-if="active" color="white" size="48" v-text="'mdi-close-circle-outline'"

                                    ></v-icon>

                                </v-scale-transition>

                            </v-row>

                        </v-card>

                    </v-slide-item>

                </v-slide-group>

            </v-sheet>
        </div>

        <div class="restaurant_options" v-if="show_restaurant_list_1">
            <div class="single_restaurant" v-for="restaurant in restaurants_list_1" :key="restaurant.name"
                @click="restaurant_selected(restaurant.name)">
                <img :src="require(`../assets_main/${restaurant.image}`)" :alt="restaurant.name">
            </div>
        </div>

        <div class="restaurant_options" v-if="show_restaurant_list_2">
            <div class="single_restaurant" v-for="restaurant in restaurants_list_2" :key="restaurant.name"
                @click="restaurant_selected(restaurant.name)">
                <img :src="require(`../assets_main/${restaurant.image}`)" :alt="restaurant.name">
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
                    image: "TrailblazersCafe/ChickFilA/logo.png"
                },
                {
                    name: "Subway",
                    image: "DixieMarket/Subway/logo.png"
                },
                {
                    name: "PizzaHut",
                    image: "TrailblazersCafe/PizzaHut/logo.jpg"
                },
                {   
                    name: "AceSushi",
                    image: "TrailblazersCafe/AceSushi/logo.jpg"
                }
                ,{
                    name: "Infusion",
                    image: "Infusion/logo.png"
                },
                {
                    name: "Stacks",
                    image: "Stacks/logo.png"
                },
                {
                    name: "Grazers",
                    image: "Grazers/logo.jpg"
                },
                {
                    name: "BrooksStop",
                    image: "BrooksStop/logo.png"
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
            this.$router.push({
                name: "Restaurant",
                query: {
                    menu: restaurant_name
                }
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
    padding: 10px;
    display: flex;
    justify-self: flex-end;
}

.button:hover {
    cursor: pointer;
    background-color: var(--red);
    color: white;
}

.button_guide {
    background-color: var(--gray-dark);
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