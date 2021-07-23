import { createStore } from 'vuex'

const state = {
    restaurants_list:[
        {
            path: "ChickFilA",
            name: "Chick-fil-A",
            logo: "TrailblazersCafe/ChickFilA/logo.png",
            background_image: "TrailblazersCafe/ChickFilA/background.jpg",
            description: "Eat Mor Chikin at Dixie State University! Located in the Trailblazer Cafe, offering both original and grilled Chick-fil-A classics.",
            location: "At Trailblazer's Cafe located inside the Gardner Building.",
            hours: [
                {
                    date: "Monday-Friday",
                    open: "8:00 AM",
                    close: "5:00 PM"
                }
            ],
            categories: [
                {
                    name: "Original Meals",
                    menu: [
                        {
                            name: "Chick-fil-A Chicken",
                            image_url: "TrailblazersCafe/ChickFilA/og_meal_chicken.png",
                            description: "A boneless breast of chicken seasoned to perfection, hand-breaded, pressure cooked in 100% refined peanut oil and served on a toasted, buttered bun with dill pickle chips.",
                            calories: "440",
                            price: 3.89,
                            note: "",
                            custom_options: [
                                {
                                    type: "Make it Deluxe",
                                    name: "Add American cheese, lettuce, and tomato",
                                    calories: "20", 
                                    price: 0.6,
                                    selected: false
                                },
                                {
                                    type: "Add Sides",
                                    name: "Fries",
                                    calories: "20",
                                    price: 1.9,
                                    selected: false
                                },
                                {
                                    type: "Add Drink",
                                    name: "Coke",
                                    calories: "40",
                                    price: 2.5,
                                    selected: false
                                },
                                {
                                    type: "Add Drink",
                                    name: "Sprite",
                                    calories: "30",
                                    price: 2.5,
                                    selected: false
                                }
                            ]
                        },
                        {
                            name: "Spicy Chicken",
                            image_url: "TrailblazersCafe/ChickFilA/og_meal_chicken_spicy.png",
                            description: "A boneless breast of chicken seasoned with a spicy blend of peppers, hand-breaded, pressure cooked in 100% refined peanut oil and served on a toasted, buttered bun with dill pickle chips.",
                            calories: "540",
                            price: 4.25,
                            note: "",
                            custom_options: [
                                {   
                                    type: "Make it Deluxe",
                                    name: "Add Pepper Jack cheese, lettuce, and tomato",
                                    calories: "50", 
                                    price: 1.2,
                                    selected: false
                                },
                                {
                                    type: "Add Sides",
                                    name: "Fries",
                                    calories: "20",
                                    price: 1.9,
                                    selected: false
                                },
                                {
                                    type: "Add Drink",
                                    name: "Coke",
                                    calories: "40",
                                    price: 2.5,
                                    selected: false
                                },
                                {
                                    type: "Add Drink",
                                    name: "Sprite",
                                    calories: "30",
                                    price: 2.5,
                                    selected: false
                                }
                            ]
                        },
                        {
                            name: "Chick-fil-A Nuggets 8-ct Entrée",
                            image_url: "TrailblazersCafe/ChickFilA/og_meal_nuggets.png",
                            description: "Bite-sized pieces of tender all breast meat chicken, seasoned to perfection, hand-breaded and pressure cooked in 100% refined peanut oil.",
                            calories: "250",
                            price: 3.99,
                            note: "",
                            custom_options: [
                                {
                                    type: "Me want more",
                                    name: "12-ct Entrée",
                                    calories: "380", 
                                    price: 2.5,
                                    selected: false
                                },
                                {
                                    type: "Me want more",
                                    name: "30-ct Entrée",
                                    calories: "30/nugget", 
                                    price: 4.2,
                                    selected: false
                                },
                                {
                                    type: "Add Sides",
                                    name: "Fries",
                                    calories: "20",
                                    price: 1.9,
                                    selected: false
                                },
                                {
                                    type: "Add Drink",
                                    name: "Coke",
                                    calories: "40",
                                    price: 2.5,
                                    selected: false
                                },
                                {
                                    type: "Add Drink",
                                    name: "Sprite",
                                    calories: "30",
                                    price: 2.5,
                                    selected: false
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Grilled Meals",
                    menu: [
                        {
                            name: "Grilled Chicken",
                            image_url: "TrailblazersCafe/ChickFilA/grilled_meal_chicken.png",
                            description: "A lemon-herb marinated boneless breast of chicken, grilled for a tender and juicy backyard-smokey taste, served on a toasted Multigrain Brioche bun with Green Leaf lettuce and tomato. Served with Honey Roasted BBQ Sauce.",
                            calories: "320",
                            price: 5.55,
                            note: "",
                            custom_options: [
                                {
                                    type: "Make it Deluxe",
                                    name: "Add American cheese, lettuce, and tomato",
                                    calories: "20", 
                                    price: 0.6,
                                    selected: false
                                },
                                {
                                    type: "Add Sides",
                                    name: "Fries",
                                    calories: "20",
                                    price: 1.9,
                                    selected: false
                                },
                                {
                                    type: "Add Drink",
                                    name: "Coke",
                                    calories: "40",
                                    price: 2.5,
                                    selected: false
                                },
                                {
                                    type: "Add Drink",
                                    name: "Sprite",
                                    calories: "30",
                                    price: 2.5,
                                    selected: false
                                }
                            ]
                        },
                        {
                            name: "Grilled Chicken Club",
                            image_url: "TrailblazersCafe/ChickFilA/grilled_meal_chicken_club.png",
                            description: "A lemon-herb marinated boneless breast of chicken, grilled for a tender and juicy backyard-smokey taste, served on a toasted Multigrain Brioche bun with Green Leaf lettuce, tomato, bacon & Colby-Jack cheese. Served with Honey Roasted BBQ Sauce.",
                            calories: "460",
                            price: 6.89,
                            note: "",
                            custom_options: [
                                {   
                                    type: "Make it Deluxe",
                                    name: "Add Pepper Jack cheese, lettuce, and tomato",
                                    calories: "50", 
                                    price: 1.2,
                                    selected: false
                                },
                                {
                                    type: "Add Sides",
                                    name: "Fries",
                                    calories: "20",
                                    price: 1.9,
                                    selected: false
                                },
                                {
                                    type: "Add Drink",
                                    name: "Coke",
                                    calories: "40",
                                    price: 2.5,
                                    selected: false
                                },
                                {
                                    type: "Add Drink",
                                    name: "Sprite",
                                    calories: "30",
                                    price: 2.5,
                                    selected: false
                                }
                            ]
                        },
                        {
                            name: "Grilled Nuggets 8-ct Entrée",
                            image_url: "TrailblazersCafe/ChickFilA/grilled_meal_nuggets.png",
                            description: "Bite-sized pieces of boneless breast of chicken, marinated with a special blend of seasonings and grilled for a tender and juicy backyard-grilled taste.",
                            calories: "130",
                            price: 4.79,
                            note: "",
                            custom_options: [
                                {
                                    type: "Me want more",
                                    name: "12-ct Entrée",
                                    calories: "380", 
                                    price: 2.5,
                                    selected: false
                                },
                                {
                                    type: "Me want more",
                                    name: "30-ct Entrée",
                                    calories: "30/nugget", 
                                    price: 4.2,
                                    selected: false
                                },
                                {
                                    type: "Add Sides",
                                    name: "Fries",
                                    calories: "20",
                                    price: 1.9,
                                    selected: false
                                },
                                {
                                    type: "Add Drink",
                                    name: "Coke",
                                    calories: "40",
                                    price: 2.5,
                                    selected: false
                                },
                                {
                                    type: "Add Drink",
                                    name: "Sprite",
                                    calories: "30",
                                    price: 2.5,
                                    selected: false
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    customer_cart: [
        {   
            path: "ChickFilA",
            restaurant_name: "Chick-Fil-A",
            meals: [
                {
                    name: "Chick-fil-A Chicken",
                    image_url: "TrailblazersCafe/ChickFilA/og_meal_chicken.png",
                    description: "A boneless breast of chicken seasoned to perfection, hand-breaded, pressure cooked in 100% refined peanut oil and served on a toasted, buttered bun with dill pickle chips.",
                    calories: "440",
                    quantity: 1,
                    meal_price: 3.89,
                    subtotal_price: 6.99,
                    note: "Please don't add chicken, I am allergic to it.",
                    custom_options: [
                        {
                            type: "Make it Deluxe",
                            name: "Add American cheese, lettuce, and tomato",
                            calories: "20", 
                            price: 0.6,
                            selected: true
                        },
                        {
                            type: "Add Sides",
                            name: "Fries",
                            calories: "20",
                            price: 1.9,
                            selected: false
                        },
                        {
                            type: "Add Drink",
                            name: "Coke",
                            calories: "40",
                            price: 2.5,
                            selected: true
                        },
                        {
                            type: "Add Drink",
                            name: "Sprite",
                            calories: "30",
                            price: 2.5,
                            selected: false
                        }
                    ]
                },
                {
                    name: "Chick-fil-A Chicken",
                    image_url: "TrailblazersCafe/ChickFilA/og_meal_chicken.png",
                    description: "A boneless breast of chicken seasoned to perfection, hand-breaded, pressure cooked in 100% refined peanut oil and served on a toasted, buttered bun with dill pickle chips.",
                    calories: "440",
                    quantity: 2,
                    meal_price: 3.89,
                    subtotal_price: 7.78,
                    note: "",
                    custom_options: [
                        {
                            type: "Make it Deluxe",
                            name: "Add American cheese, lettuce, and tomato",
                            calories: "20", 
                            price: 0.6,
                            selected: false
                        },
                        {
                            type: "Add Sides",
                            name: "Fries",
                            calories: "20",
                            price: 1.9,
                            selected: false
                        },
                        {
                            type: "Add Drink",
                            name: "Coke",
                            calories: "40",
                            price: 2.5,
                            selected: false
                        },
                        {
                            type: "Add Drink",
                            name: "Sprite",
                            calories: "30",
                            price: 2.5,
                            selected: false
                        }
                    ]
                }
            ]
        }
    ],

    restaurants_maps_list: [
        {
            restaurant_name: "Chick-fil-A",
            location: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d668.9472770847736!2d-113.56593647037629!3d37.10351197565555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1schick-fil-a%20near%20Dixie%20State%20University%2C%20St.%20George%2C%20UT!5e0!3m2!1sen!2sus!4v1626486170010!5m2!1sen!2sus",
            deliver_to: [
                {
                    name: "Smith Computer Center",
                    path: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3182.115087344501!2d-113.56902643442095!3d37.10237785833036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x80ca5b9f9be09795%3A0x757b98363308137f!2sChick-fil-A%2C%20Gardner%20Center%2C%20South%20700%20East%2C%20St.%20George%2C%20UT!3m2!1d37.1036205!2d-113.5660187!4m5!1s0x80ca5b2a08264067%3A0x89cd12e393b7cb19!2sSmith%20Computer%20Center%2C%20225%20S%20700%20E%2C%20St.%20George%2C%20UT%2084770!3m2!1d37.1011267!2d-113.56777539999999!5e0!3m2!1sen!2sus!4v1626751512455!5m2!1sen!2sus"
                }
            ]
        }
    ]
}

const mutations = {
    
}

const store = createStore({
    state,
    mutations
})

export default store