<template>
    <div class="my_restaurants_wrapper">
        <div class="title_and_arrow_buttons">
            <div class="title">Our Restaurants</div>

            <div class="arrow_buttons">
                <div class="button">
                    <i class="las la-arrow-left"></i>
                </div>
                <div class="button">
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            model: null,
            restaurants_list_1:[
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
            ],
            
            restaurants_list_2: [
                {
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
            ]
        }
    },
    methods: {
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
</style>