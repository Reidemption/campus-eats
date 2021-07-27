import { createStore } from 'vuex'
import axios from 'axios'

const state = {
    //! LocalStorage
    customer_cart_by_meals: JSON.parse(localStorage.getItem("customer_cart_by_meals") || "[]"),
    meal_id: 0,
    customer_cart_by_orders: [],

    //! Server
    server_url: "http://localhost:7777",
    current_restaurant: [],

    //! Local Vuex Store
    current_restaurant_map: "",
    restaurants_maps_list: [
        {
            path: "ChickFilA",
            location: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d668.9472770847736!2d-113.56593647037629!3d37.10351197565555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1schick-fil-a%20near%20Dixie%20State%20University%2C%20St.%20George%2C%20UT!5e0!3m2!1sen!2sus!4v1626486170010!5m2!1sen!2sus",
            deliver_to: [
                {
                    name: "Smith Computer Center",
                    location: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3182.115087344501!2d-113.56902643442095!3d37.10237785833036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x80ca5b9f9be09795%3A0x757b98363308137f!2sChick-fil-A%2C%20Gardner%20Center%2C%20South%20700%20East%2C%20St.%20George%2C%20UT!3m2!1d37.1036205!2d-113.5660187!4m5!1s0x80ca5b2a08264067%3A0x89cd12e393b7cb19!2sSmith%20Computer%20Center%2C%20225%20S%20700%20E%2C%20St.%20George%2C%20UT%2084770!3m2!1d37.1011267!2d-113.56777539999999!5e0!3m2!1sen!2sus!4v1626751512455!5m2!1sen!2sus"
                }
            ]
        },
        {
            path: "Subway",
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1591.0340294794805!2d-113.56580190145505!3d37.103497381427076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ca5b2910544dc5%3A0xcbec3414e232a5f6!2sSubway!5e0!3m2!1sen!2sus!4v1627171111205!5m2!1sen!2sus",
            deliver_to: [
                {
                    name: "Smith Computer Center",
                    location: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3182.115087344501!2d-113.56902643442095!3d37.10237785833036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x80ca5b9f9be09795%3A0x757b98363308137f!2sChick-fil-A%2C%20Gardner%20Center%2C%20South%20700%20East%2C%20St.%20George%2C%20UT!3m2!1d37.1036205!2d-113.5660187!4m5!1s0x80ca5b2a08264067%3A0x89cd12e393b7cb19!2sSmith%20Computer%20Center%2C%20225%20S%20700%20E%2C%20St.%20George%2C%20UT%2084770!3m2!1d37.1011267!2d-113.56777539999999!5e0!3m2!1sen!2sus!4v1626751512455!5m2!1sen!2sus"
                }
            ]
        }
    ]
}

const mutations = {
    //! LocalStorage
    add_one_meal_to_cart(state, meal_to_add) {
        let customer_cart_by_meals = state.customer_cart_by_meals;
        customer_cart_by_meals.push({
            user_id   : "user_id",
            meal_index: state.meal_id++,
            meal_infos: meal_to_add
        });
        localStorage.setItem("customer_cart_by_meals", JSON.stringify(customer_cart_by_meals));
    },
    remove_one_meal_from_cart(state, meal_id) {
        let customer_cart_by_meals = state.customer_cart_by_meals;

        let new_customer_cart_by_meals = customer_cart_by_meals.filter(meal => {
            return meal.meal_id !== meal_id;
        })

        localStorage.setItem("customer_cart_by_meals", JSON.stringify(new_customer_cart_by_meals));

        state.customer_cart_by_meals = JSON.parse(localStorage.getItem("customer_cart_by_meals"));
    },
    update_one_meal_in_cart(state, { meal_id, new_meal_quantity, new_meal_note, new_meal_subtotal_price, new_meal_custom_options }) {
        let customer_cart_by_meals = state.customer_cart_by_meals;

        customer_cart_by_meals.forEach(meal => {
            if(meal.meal_id === meal_id) {
                meal.meal_infos.quantity = new_meal_quantity;
                meal.meal_infos.note = new_meal_note;
                meal.meal_infos.subtotal_price = new_meal_subtotal_price;
                meal.meal_infos.custom_options = new_meal_custom_options;
            }
        });

        localStorage.setItem("customer_cart_by_meals", JSON.stringify(customer_cart_by_meals));

        state.customer_cart_by_meals = JSON.parse(localStorage.getItem("customer_cart_by_meals"));
    },
    remove_all_items_in_cart(state) {
        localStorage.setItem("customer_cart_by_meals", "[]");

        state.customer_cart_by_meals = JSON.parse(localStorage.getItem("customer_cart_by_meals"));
    },

    //! Redesign Customer Cart
    create_customer_cart_by_orders(state) {
        let customer_cart_by_meals = state.customer_cart_by_meals;
        let customer_cart_by_orders = state.customer_cart_by_orders;
        let main_restaurant_names = [];

        customer_cart_by_meals.forEach(meal => {
            if(!main_restaurant_names.includes(meal.meal_infos.restaurant_name)) {
                main_restaurant_names.push(meal.meal_infos.restaurant_name);
            }
        })

        main_restaurant_names.forEach(name => {
            customer_cart_by_orders.push({
                restaurant_name: name,
                meals: []
            })
        })

        customer_cart_by_meals.forEach(meal => {
            customer_cart_by_orders.forEach(order => {   
                if(meal.meal_infos.restaurant_name === order.restaurant_name) {
                    order.meals.push(meal);
                }
            })
        })
    },

    //! Server
    get_one_restaurant_from_the_server(state, restaurant) {
        state.current_restaurant = restaurant;
    },

    //! Local Vuex Store
    get_one_map_from_vuex_store(state, path) {
        let restaurants_maps_list = state.restaurants_maps_list;
    
        restaurants_maps_list.forEach(restaurant_maps => {
            
            if (restaurant_maps.path === path) {
                state.current_restaurant_map = restaurant_maps.location;
            }
        })
    }
}

const actions = {
    get_one_restaurant_from_the_server({commit, state}, path) {
        axios.get(`${state.server_url}/feed`)
            .then(response => {
                let restaurants_list = response.data;
                
                restaurants_list.forEach(restaurant => {
                    if (restaurant.path === path) {
                        commit("get_one_restaurant_from_the_server", restaurant);
                    }
                })
            })
    },
    add_final_cart_to_server({commit}, final_customer_cart) {
        axios.post(`${state.server_url}/orders`, {
            final_cart: final_customer_cart
        })
    }
}

const store = createStore({
    state,
    mutations,
    actions
})

export default store