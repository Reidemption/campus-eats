import { createStore } from 'vuex'
import axios from 'axios'

const state = {
    //! LocalStorage Cart
    customer_cart_by_meals: JSON.parse(localStorage.getItem("customer_cart_by_meals") || "[]"),
    meal_id: 0,
    customer_cart_by_orders: [],

    //! Server
    server_url: "https://campus-eats.herokuapp.com",
    //server_url: "http://localhost:7777",
    current_restaurant: [],
    my_error: "",

    //! User status
    user_logged_in: JSON.parse(localStorage.getItem("user_logged_in") || false),
    user_status_message: JSON.parse(localStorage.getItem("user_status_message") || "[]"),

    //! Cart Status
    cart_status_message: JSON.parse(localStorage.getItem("cart_status_message") || false),

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
            deliver_to: []
        },
        {
            path: "PizzaHut",
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d490.4041430332182!2d-113.56622633833774!3d37.103754868540015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ca5b299c5b5a1d%3A0xfd975c8601b3cc6b!2sKenneth%20N.%20Gardner%20Student%20Center!5e0!3m2!1sen!2sus!4v1627422708704!5m2!1sen!2sus",
            deliver_to: []
        }
    ],
    all_campus_location_lists: [
        {   
            name: "Campus View Suites",
            type: "Delivery Location",
            info_window_name: "CVS",
            position: {
                lat: 37.10605,
                lng: -113.56391
            },
            show_info_window: false,
            icon: ''
        },
        {   
            name: "Campus View Suites II",
            type: "Delivery Location",
            info_window_name: "CVS II",
            position: {
                lat: 37.10521,
                lng: -113.56315
            },
            show_info_window: false,
            icon: ''
        },
        {   
            name: "Nisson Tower",
            type: "Delivery Location",
            info_window_name: "NISSON",
            position: {
                lat: 37.10589,
                lng: -113.56308
            },
            show_info_window: false,
            icon: ''
        },
        {   
            name: "Science Building",
            type: "Delivery Location",
            info_window_name: "SCIENCE",
            position: {
                lat: 37.10576,
                lng: -113.56492
            },
            show_info_window: false,
            icon: ''
        },
        {   
            name: "Snow Math and Science Center",
            type: "Delivery Location",
            info_window_name: "SNOW",
            position: {
                lat: 37.10530,
                lng: -113.56570
            },
            show_info_window: false,
            icon: ''
        },
        {   
            name: "Browning Resource Center",
            type: "Delivery Location",
            info_window_name: "BROWNING",
            position: {
                lat: 37.10484,
                lng: -113.56494
            },
            show_info_window: false,
            icon: ''
        },
        {   
            name: "IT Surplus Electronics Store",
            type: "Delivery Location",
            info_window_name: "IT",
            position: {
                lat: 37.10437,
                lng: -113.56382
            },
            show_info_window: false,
            icon: ''
        },
        {   
            name: "Technology Building",
            type: "Delivery Location",
            info_window_name: "TECH",
            position: {
                lat: 37.10387,
                lng: -113.56380
            },
            show_info_window: false,
            icon: ''
        },
        {   
            name: "McDonald Center",
            type: "Delivery Location",
            info_window_name: "MCDONALD",
            position: {
                lat: 37.10429,
                lng: -113.56456
            },
            show_info_window: false,
            icon: ''
        },
        {   
            name: "Dolores Doré Eccles Fine Arts Center",
            type: "Delivery Location",
            info_window_name: "ECCLES",
            position: {
                lat: 37.10528,
                lng: -113.56744
            },
            show_info_window: false,
            icon: ''
        },
        {   
            name: "Graff Fine Arts Center",
            type: "Delivery Location",
            info_window_name: "GRAFF",
            position: {
                lat: 37.10473,
                lng: -113.56735
            },
            show_info_window: false,
            icon: ''
        },
        {   
            name: "Science, Engineering, and Technology Building",
            type: "Delivery Location",
            info_window_name: "SET",
            position: {
                lat: 37.10514,
                lng: -113.56650
            },
            show_info_window: false,
            icon: ''
        },
        {   
            name: "South Administration Building",
            type: "Delivery Location",
            info_window_name: "ADMIN",
            position: {
                lat: 37.10423,
                lng: -113.56778
            },
            show_info_window: false,
            icon: ''
        },
        {   
            name: "Automotive Mechanics Building",
            type: "Delivery Location",
            info_window_name: "AUTO",
            position: {
                lat: 37.10372,
                lng: -113.56334
            },
            show_info_window: false,
            icon: ''
        },
        {   
            name: "Hangar Building",
            type: "Delivery Location",
            info_window_name: "HANGAR",
            position: {
                lat: 37.10351,
                lng: -113.56287
            },
            show_info_window: false,
            icon: ''
        },
        {   
            name: "Jennings Communication Building",
            type: "Delivery Location",
            info_window_name: "JENNING",
            position: {
                lat: 37.10353,
                lng: -113.56436
            },
            show_info_window: false,
            icon: ''
        },
        {   
            name: "Udvar Hazy School of Business",
            type: "Delivery Location",
            info_window_name: "HAZY",
            position: {
                lat: 37.10271,
                lng: -113.56442
            },
            show_info_window: false,
            icon: ''
        },
        {   
            name: "Human Performance Center",
            type: "Delivery Location",
            info_window_name: "HPC",
            position: {
                lat: 37.10343,
                lng: -113.56823
            },
            show_info_window: false,
            icon: ''
        },
        {   
            name: "Student Activity Center",
            type: "Delivery Location",
            info_window_name: "SAC",
            position: {
                lat: 37.10352,
                lng: -113.56673
            },
            show_info_window: false,
            icon: ''
        },
        {   
            name: "Kenneth N. Gardner Student Center",
            type: "Delivery Location",
            info_window_name: "GARDNER",
            position: {
                lat: 37.10388,
                lng: -113.56592
            },
            show_info_window: false,
            icon: ''
        },
        {   
            name: "Jeffrey R. Holland Centennial Common",
            type: "Delivery Location",
            info_window_name: "HCC",
            position: {
                lat: 37.10273,
                lng: -113.56595
            },
            show_info_window: false,
            icon: ''
        },
        {   
            name: "Cox Performing Arts Center",
            type: "Delivery Location",
            info_window_name: "COX",
            position: {
                lat: 37.10184,
                lng: -113.56778
            },
            show_info_window: false,
            icon: ''
        },
        {   
            name: "M. Anthony Burns Arena",
            type: "Delivery Location",
            info_window_name: "BURNS",
            position: {
                lat: 37.10140,
                lng: -113.56708
            },
            show_info_window: false,
            icon: ''
        },
        {   
            name: "Smith's Computer Center",
            type: "Delivery Location",
            info_window_name: "SMITH",
            position: {
                lat: 37.10111,
                lng: -113.56782
            },
            show_info_window: false,
            icon: ''
        },
        {   
            name: "Trailblazer Sports Medicine",
            type: "Delivery Location",
            info_window_name: "TSM",
            position: {
                lat: 37.10087,
                lng: -113.56726
            },
            show_info_window: false,
            icon: ''
        }
    ]
}

const mutations = {
    //! LocalStorage Cart
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
            return meal.meal_index !== meal_id;
        })

        localStorage.setItem("customer_cart_by_meals", JSON.stringify(new_customer_cart_by_meals));

        state.customer_cart_by_meals = JSON.parse(localStorage.getItem("customer_cart_by_meals"));
    },
    update_one_meal_in_cart(state, { meal_id, new_meal_quantity, new_meal_note, new_meal_subtotal_price, new_meal_custom_options }) {
        let customer_cart_by_meals = state.customer_cart_by_meals;

        customer_cart_by_meals.forEach(meal => {
            if(meal.meal_index === meal_id) {
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

    //! Server
    get_one_restaurant_from_the_server(state, restaurant) {
        state.current_restaurant = restaurant;
    },
    handle_restaurant_not_found(state) {
        state.current_restaurant = [];
        state.my_error = "Restaurant Not Found";
    },

    //! User Status 
    update_user_login_status(state, { status, message }) {
        //* Encrypt the message to be saved in LocalStorage

        let encrypted_status = window.btoa(status);
        localStorage.setItem("user_logged_in", JSON.stringify(encrypted_status));
        state.user_logged_in = JSON.parse(localStorage.getItem("user_logged_in"));
    
        let encrypted_message = window.btoa(message);
        localStorage.setItem("user_status_message", JSON.stringify(encrypted_message));
        state.user_status_message = JSON.parse(localStorage.getItem("user_status_message"));
    },

    //! Cart Status
    updated_cart_status_message(state, message) {
        let encrypted_message = window.btoa(message);
        localStorage.setItem("cart_status_message", JSON.stringify(encrypted_message));
        state.cart_status_message = JSON.parse(localStorage.getItem("cart_status_message"));
    },
    reset_cart_status_message(state) {
        let message = "";
        localStorage.setItem("cart_status_message", JSON.stringify(message));
        state.cart_status_message = JSON.parse(localStorage.getItem("cart_status_message"));
    },

    //! Local Vuex Store
    get_one_map_from_vuex_store(state, path) {
        let restaurants_maps_list = state.restaurants_maps_list;
    
        restaurants_maps_list.forEach(restaurant_maps => {
            
            if (restaurant_maps.path === path) {
                state.current_restaurant_map = restaurant_maps.location;
            }
        })
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
}

const actions = {
    //! Server
    get_one_restaurant_from_the_server({commit, state}, path) {
        state.my_error = "";
        
        axios.get(`${state.server_url}/feed`)
            .then(response => {
                let restaurants_list = response.data;
                
                let restaurant_found = false;
                restaurants_list.forEach(restaurant => {
                    if (restaurant.path === path) {
                        commit("get_one_restaurant_from_the_server", restaurant);
                        restaurant_found = true;
                    }
                })

                if (!restaurant_found) {
                    commit("handle_restaurant_not_found");
                }
            })
    },
    user_placed_order({commit}, final_customer_cart) {
        axios.post(`${state.server_url}/orders`, {
            destination: "Smith Computer Center",
            delivery_instructions: "Meet at door",
            delivery_option: "Right now",
            paid_by_meal_plan: "",
            payment: {
            type: "Visa",
            number: "123456"
            },
            promo_code: "",
            final_cart: final_customer_cart
        })
    },

    //! User Status
    async user_signed_up({commit} , user_sign_up_infos) {
        return await axios.post(`${state.server_url}/users`, user_sign_up_infos)
            .then(response => {
                return response;
            });
    },
    async user_signed_in({commit} , user_sign_in_infos) { 
        return await axios.post(`${state.server_url}/login`, user_sign_in_infos)
            .then(response => {
                return response;
            });
    },
    user_logged_out({commit}) {
        let status = false;
        let message = "Logged out successfully";
        commit("update_user_login_status", { status, message });
    }
}

const store = createStore({
    state,
    mutations,
    actions
})

export default store