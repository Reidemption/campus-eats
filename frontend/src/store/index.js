import { createStore } from 'vuex'

const state = {
    restaurants_new_model:[
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
                            description: "A boneless breast of chicken seasoned to perfection, hand-breaded, pressure cooked in 100% refined peanut oil and served on a toasted, buttered bun with dill pickle chips.",
                            calories: "440",
                            price: "3.89",
                            customizations: [
                                {
                                    name: "Make it Deluxe",
                                    options: [
                                        {
                                            name: "Add American cheese",
                                            calories: "20", 
                                            price: "0.6",
                                            selected: false
                                        },
                                        {
                                            name: "Add lettuce",
                                            calories: "20",
                                            price: "0.6",
                                            selected: false
                                        },
                                        {
                                            name: "Add tomato",
                                            calories: "20",
                                            price: "0.6",
                                            selected: false
                                        }
                                    ]
                                },
                                {
                                    name: "Add Sides",
                                    options: [
                                        {
                                            name: "Fries",
                                            calories: "20",
                                            price: "1.9",
                                            selected: false
                                        }
                                    ]
                                },
                                {
                                    name: "Add Drink",
                                    options: [
                                        {
                                            name: "Coke",
                                            calories: "40",
                                            price: "2.5",
                                            selected: false
                                        },
                                        {
                                            name: "Sprite",
                                            calories: "30",
                                            price: "2.5",
                                            selected: false
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Spicy Chicken",
                            description: "A boneless breast of chicken seasoned with a spicy blend of peppers, hand-breaded, pressure cooked in 100% refined peanut oil and served on a toasted, buttered bun with dill pickle chips.",
                            calories: "540",
                            price: "4.25",
                            customizations: [
                                {
                                    name: "Make it Deluxe",
                                    options: [
                                        {
                                            name: "Add Pepper Jack cheese",
                                            calories: "50", 
                                            price: "1.2",
                                            selected: false
                                        },
                                        {
                                            name: "Add lettuce",
                                            calories: "20",
                                            price: "0.6",
                                            selected: false
                                        },
                                        {
                                            name: "Add tomato",
                                            calories: "20",
                                            price: "0.6",
                                            selected: false
                                        }
                                    ]
                                },
                                {
                                    name: "Add Sides",
                                    options: [
                                        {
                                            name: "Fries",
                                            calories: "20",
                                            price: "1.9",
                                            selected: false
                                        }
                                    ]
                                },
                                {
                                    name: "Add Drink",
                                    options: [
                                        {
                                            name: "Coke",
                                            calories: "40",
                                            price: "2.5",
                                            selected: false
                                        },
                                        {
                                            name: "Sprite",
                                            calories: "30",
                                            price: "2.5",
                                            selected: false
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Chick-fil-A Nuggets 8-ct Entree",
                            description: "Bite-sized pieces of tender all breast meat chicken, seasoned to perfection, hand-breaded and pressure cooked in 100% refined peanut oil.",
                            calories: "250",
                            price: "3.99",
                            customizations: [
                                {
                                    name: "Me want more",
                                    options: [
                                        {
                                            name: "12-ct Entrée",
                                            calories: "380", 
                                            price: "2.5",
                                            selected: false
                                        },
                                        {
                                            name: "30-ct Entrée",
                                            calories: "30/nugget", 
                                            price: "4.2",
                                            selected: false
                                        }

                                    ]
                                },
                                {
                                    name: "Add Sides",
                                    options: [
                                        {
                                            name: "Fries",
                                            calories: "20",
                                            price: "1.9",
                                            selected: false
                                        }
                                    ]
                                },
                                {
                                    name: "Add Drink",
                                    options: [
                                        {
                                            name: "Coke",
                                            calories: "40",
                                            price: "2.5",
                                            selected: false
                                        },
                                        {
                                            name: "Sprite",
                                            calories: "30",
                                            price: "2.5",
                                            selected: false
                                        }
                                    ]
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
                            description: "A lemon-herb marinated boneless breast of chicken, grilled for a tender and juicy backyard-smokey taste, served on a toasted Multigrain Brioche bun with Green Leaf lettuce and tomato. Served with Honey Roasted BBQ Sauce.",
                            calories: "320",
                            price: "5.55",
                            customizations: [
                                {
                                    name: "Make it Deluxe",
                                    options: [
                                        {
                                            name: "Add American cheese",
                                            calories: "20", 
                                            price: "0.6",
                                            selected: false
                                        },
                                        {
                                            name: "Add lettuce",
                                            calories: "20",
                                            price: "0.6",
                                            selected: false
                                        },
                                        {
                                            name: "Add tomato",
                                            calories: "20",
                                            price: "0.6",
                                            selected: false
                                        }
                                    ]
                                },
                                {
                                    name: "Add Sides",
                                    options: [
                                        {
                                            name: "Fries",
                                            calories: "20",
                                            price: "1.9",
                                            selected: false
                                        }
                                    ]
                                },
                                {
                                    name: "Add Drink",
                                    options: [
                                        {
                                            name: "Coke",
                                            calories: "40",
                                            price: "2.5",
                                            selected: false
                                        },
                                        {
                                            name: "Sprite",
                                            calories: "30",
                                            price: "2.5",
                                            selected: false
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Grilled Chicken Club",
                            description: "A lemon-herb marinated boneless breast of chicken, grilled for a tender and juicy backyard-smokey taste, served on a toasted Multigrain Brioche bun with Green Leaf lettuce, tomato, bacon & Colby-Jack cheese. Served with Honey Roasted BBQ Sauce.",
                            calories: "460",
                            price: "6.89",
                            customizations: [
                                {
                                    name: "Make it Deluxe",
                                    options: [
                                        {
                                            name: "Add Pepper Jack cheese",
                                            calories: "50", 
                                            price: "1.2",
                                            selected: false
                                        },
                                        {
                                            name: "Add lettuce",
                                            calories: "20",
                                            price: "0.6",
                                            selected: false
                                        },
                                        {
                                            name: "Add tomato",
                                            calories: "20",
                                            price: "0.6",
                                            selected: false
                                        }
                                    ]
                                },
                                {
                                    name: "Add Sides",
                                    options: [
                                        {
                                            name: "Fries",
                                            calories: "20",
                                            price: "1.9",
                                            selected: false
                                        }
                                    ]
                                },
                                {
                                    name: "Add Drink",
                                    options: [
                                        {
                                            name: "Coke",
                                            calories: "40",
                                            price: "2.5",
                                            selected: false
                                        },
                                        {
                                            name: "Sprite",
                                            calories: "30",
                                            price: "2.5",
                                            selected: false
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Grilled Nuggets 8-ct Entree",
                            description: "Bite-sized pieces of boneless breast of chicken, marinated with a special blend of seasonings and grilled for a tender and juicy backyard-grilled taste.",
                            calories: "130",
                            price: "4.79",
                            customizations: [
                                {
                                    name: "Me want more",
                                    options: [
                                        {
                                            name: "12-ct Entrée",
                                            calories: "380", 
                                            price: "2.5",
                                            selected: false
                                        },
                                        {
                                            name: "30-ct Entrée",
                                            calories: "30/nugget", 
                                            price: "4.2",
                                            selected: false
                                        }

                                    ]
                                },
                                {
                                    name: "Add Sides",
                                    options: [
                                        {
                                            name: "Fries",
                                            calories: "20",
                                            price: "1.9",
                                            selected: false
                                        }
                                    ]
                                },
                                {
                                    name: "Add Drink",
                                    options: [
                                        {
                                            name: "Coke",
                                            calories: "40",
                                            price: "2.5",
                                            selected: false
                                        },
                                        {
                                            name: "Sprite",
                                            calories: "30",
                                            price: "2.5",
                                            selected: false
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    restaurants_list:[
        {
            path: "ChickFilA",
            name: "Chick-fil-A",
            logo: "TrailblazersCafe/ChickFilA/logo.png",
            background_image: "TrailblazersCafe/ChickFilA/background.jpg",
            description: "Eat Mor Chikin at Dixie State University! Located in the Trailblazer Cafe, offering both original and grilled Chick-fil-A classics.",
            location: "At Trailblazer's Cafe located inside the Gardner Building.",
            map: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d668.9472770847736!2d-113.56593647037629!3d37.10351197565555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1schick-fil-a%20near%20Dixie%20State%20University%2C%20St.%20George%2C%20UT!5e0!3m2!1sen!2sus!4v1626486170010!5m2!1sen!2sus",
            categories: [
                {
                    name: "Original Meals", 
                    menu: [
                        {   
                            image_url: "TrailblazersCafe/ChickFilA/og_meal_chicken.png",
                            name: "Chick-fil-A Chicken",
                            description: "A boneless breast of chicken seasoned to perfection, hand-breaded, pressure cooked in 100% refined peanut oil and served on a toasted, buttered bun with dill pickle chips.",
                            price: "6.99",
                            calories: "660-1040",
                            custom_options: [
                                {
                                    name: "Entrée Regular",
                                    price: "3.89",
                                    detail: "",
                                    calories: "440",
                                    selected: false
                                },
                                {   
                                    name: "Add lettuce, tomato, & cheese",
                                    price: "0.60",
                                    detail: "",
                                    calories: "50-87",
                                    selected: false,
                                    type: "additional",
                                },
                                {
                                    name: "Chick-fil-A Deluxe Entrée",
                                    price: "4.49",
                                    detail: "with lettuce, tomato & American Cheese",
                                    calories: "500",
                                    selected: false
                                },
                                {
                                    name: "Chick-fil-A Deluxe Meal",
                                    price: "7.59",
                                    detail: "",
                                    calories: "720-1100",
                                    selected: false
                                }
                            ]
                        },
                        {   
                            image_url: "TrailblazersCafe/ChickFilA/og_meal_chicken_spicy.png",
                            name: "Spicy Chicken",
                            description: "A boneless breast of chicken seasoned with a spicy blend of peppers, hand-breaded, pressure cooked in 100% refined peanut oil and served on a toasted, buttered bun with dill pickle chips.",
                            price: "7.39",
                            calories: "680-1070",
                            custom_options: [
                                {
                                    name: "Entrée",
                                    price: "4.25",
                                    detail: "",
                                    calories: "540",
                                    selected: false
                                },
                                {
                                    name: "Spicy Deluxe Entree",
                                    price: "4.85",
                                    detail: "with lettuce, tomato & Pepper Jack cheese",
                                    calories: "550",
                                    selected: false
                                },
                                {
                                    name: "Spicy Deluxe Meal",
                                    price: "7.99",
                                    detail: "",
                                    calories: "760-1150",
                                    selected: false
                                }
                            ]
                        },
                        {   
                            image_url: "TrailblazersCafe/ChickFilA/og_meal_nuggets.png",
                            name: "Chick-fil-A Nuggets",
                            description: "Bite-sized pieces of tender all breast meat chicken, seasoned to perfection, hand-breaded and pressure cooked in 100% refined peanut oil.",
                            price: "",
                            calories: "",
                            custom_options: [
                                {
                                    name: "8-ct Meal",
                                    price: "7.09",
                                    detail: "",
                                    calories: "470-860",
                                    selected: false
                                },
                                {
                                    name: "8-ct Entrée",
                                    price: "3.99",
                                    detail: "",
                                    calories: "250",
                                    selected: false
                                },
                                {
                                    name: "12-ct Entrée",
                                    price: "5.75",
                                    detail: "",
                                    calories: "380",
                                    selected: false
                                },
                                {
                                    name: "30-ct Entrée",
                                    price: "14.35",
                                    detail: "",
                                    calories: "30/nugget",
                                    selected: false
                                }
                            ]
                        }
                    ]
                },
                {
                    name:"Grilled Meals",
                    menu: [
                        {   
                            image_url: "TrailblazersCafe/ChickFilA/grilled_meal_chicken.png",
                            name: "Grilled Chicken",
                            description: "A lemon-herb marinated boneless breast of chicken, grilled for a tender and juicy backyard-smokey taste, served on a toasted Multigrain Brioche bun with Green Leaf lettuce and tomato. Served with Honey Roasted BBQ Sauce.",
                            price: "8.75",
                            calories: "540-930",
                            custom_options: [
                                {
                                    name: "Entrée",
                                    price: "5.55",
                                    detail: "",
                                    calories: "320",
                                    selected: false
                                }
                            ]
                        },
                        {   
                            image_url: "TrailblazersCafe/ChickFilA/grilled_meal_nuggets.png",
                            name: "Grilled Nuggets",
                            description: "Bite-sized pieces of boneless breast of chicken, marinated with a special blend of seasonings and grilled for a tender and juicy backyard-grilled taste.",
                            price: "",
                            calories: "",
                            custom_options: [
                                {
                                    name: "8-ct Meal",
                                    price: "7.95",
                                    detail: "",
                                    calories: "350-740",
                                    selected: false
                                },
                                {
                                    name: "8-ct Entrée",
                                    price: "4.79",
                                    detail: "",
                                    calories: "130",
                                    selected: false
                                },
                                {
                                    name: "12-ct Meal",
                                    price: "10.09",
                                    detail: "",
                                    calories: "420-800",
                                    selected: false
                                },
                                {
                                    name: "12-ct Entrée",
                                    price: "6.99",
                                    detail: "",
                                    calories: "200",
                                    selected: false
                                },
                                {
                                    name: "30-ct Entrée",
                                    price: "17.45",
                                    detail: "",
                                    calories: "15/nugget",
                                    selected: false
                                }
                            ]
                        },
                        {   
                            image_url: "TrailblazersCafe/ChickFilA/grilled_meal_chicken_club.png",
                            name: "Grilled Chicken Club",
                            description: "A lemon-herb marinated boneless breast of chicken, grilled for a tender and juicy backyard-smokey taste, served on a toasted Multigrain Brioche bun with Green Leaf lettuce, tomato, bacon & Colby-Jack cheese. Served with Honey Roasted BBQ Sauce.",
                            price: "10.09",
                            calories: "670-1060",
                            custom_options: [
                                {
                                    name: "Entrée",
                                    price: "6.89",
                                    detail: "",
                                    calories: "460",
                                    selected: false
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    items_in_cart: [
        {
            quantity: 1,
            name: "Chick-fil-A Chicken",
            price: 6.99,
            message_included: true
        },
        {
            quantity: 2,
            name: "Grilled Chicken Club",
            price: 10.99,
            message_included: false
        }
    ],

    maps: [
        {
            restaurant: "Chick-fil-A",
            location: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d668.9472770847736!2d-113.56593647037629!3d37.10351197565555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1schick-fil-a%20near%20Dixie%20State%20University%2C%20St.%20George%2C%20UT!5e0!3m2!1sen!2sus!4v1626486170010!5m2!1sen!2sus",
            delivery_to: [
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