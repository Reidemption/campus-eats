<template>
    <router-view/>
</template>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Varela Round', sans-serif;
}

:root {
    --yellow   : hsl(60, 83%, 62%);
    --red      : hsl(358, 90%, 42%);
    --red-dark : hsl(358, 73%, 31%);
    --gray     : hsl(0, 0%, 94%);
    --gray-fade: hsl(0, 0%, 77%);
    --gray-dark: hsl(355, 4%, 45%);
    --navy     : hsl(213, 68%, 15%);
}

  /* Custom Scrollbar */
::-webkit-scrollbar {
    width: 12px;
}

::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px var(--gray-dark); 
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    background: var(--gray-fade); 
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: var(--gray-dark); 
}

@media only screen and (max-width: 1650px) {
    .greeting {
        font-size: 33px !important;
    }
    .main_message, .additional_message {
        font-size: 18px !important;
    }
    .buttons_and_icon > .burger > img,
    .drink > img , .pizza > img {
        width: 40px !important;
    }
    .my_button_wrapper {
      padding: 11px 35px !important;
    }
    .main_menu_options > .single_option > .icon, 
    .logout_wrapper > .logout_option > .icon{
      font-size: 25px !important;
      padding: 25px !important;
    }
    .main_menu_options > .single_option > .option_name,
    .logout_wrapper > .logout_option > .option_name {
        font-size: 17px !important;
    }
    .location_text_input {
        padding: 0px 10px !important;
    }
    .single_best_seller > .image > img {
        width: 180px !important;
    }
    .single_best_seller > .infos {
        padding-top: 80px !important;
    }
    .my_mini_cart_wrapper > .empty_cart > .cart_icon > i {
        font-size: 70px !important;
    }
}

@media only screen and (max-width: 1485px) {
    .buttons_and_icon > .burger > img,
    .drink > img , .pizza > img {
        width: 40px !important;
    }
    .salad > img {
        width: 60px !important;
    }
    .main_menu_options > .single_option > .icon, 
    .logout_wrapper > .logout_option > .icon{
        padding: 24px !important;
    }
}

@media only screen and (max-width: 1425px) {
    .greeting {
        font-size: 30px !important;
    }
    .main_message, .additional_message {
        font-size: 18px !important;
    }
    .main_menu_options > .single_option > .icon,
    .logout_wrapper > .logout_option > .icon {
        font-size: 20px !important;
        padding: 20px !important;
    }
    .main_menu_options > .single_option > .option_name,
    .logout_wrapper > .logout_option > .option_name {
        font-size: 15px !important;
    }
    .my_restaurants_wrapper > .restaurant_options > .single_restaurant {
        height: 110px !important;
    }
}

@media only screen and (max-width: 1360px) {
    .my_nav_bar_wrapper {
        padding: 30px 25px !important
    }
    .buttons_and_icon > .burger > img, .drink > img, .pizza > img {
        width: 35px !important;
    }
    .main_message, .additional_message {
        font-size: 16px !important;
    }
    .greeting {
        font-size: 28px !important;
    }
    .my_button_wrapper {
        padding: 9px 29px !important;
    }
    .single_best_seller > .infos > .name {
        font-size: 20px !important;
    }
    .my_footer_wrapper {
        padding: 30px 40px;
    }
    .app_name {
        font-size: 35px !important;
    }
    .my_restaurants_wrapper > .title_and_arrow_buttons > .title,
    .my_best_sellers_wrapper > .title {
        font-size: 25px !important;
    }
    .single_best_seller > .infos > .name {
        font-size: 19px !important;
    }
    .single_best_seller > .infos > .price {
        font-size: 19px !important;
    }
    .app_name_and_social_medias > .socila_media_links {
        width: 145px !important;
    }
    .additional_footer {
        grid-template-columns: 1fr 2fr !important;
    }
    .additional_footer > .protection {
        display: flex !important;
        justify-content: flex-end !important;
    }
    .additional_footer > .protection  > span {
        margin: 0 5px !important;
    }
    .nav_bar_main_container > .big_screen {
        display: none !important;
    }
    .nav_bar_main_container > .small_screen {
        display: block !important;
    }
    .main_menu_options > .single_option > .icon,
    .logout_wrapper > .logout_option > .icon {
        font-size: 25px !important;
        padding: 25px !important;
    }
    .whole_page_wrapper {
        grid-template-columns: 8% 92% !important;
    }
    .single_best_seller > .infos {
        grid-template-rows: repeat(3, 1fr) !important;
    }
}

@media only screen and (max-width: 1190px) {
    .single_best_seller > .image > img {
        width: 160px !important;
    }
    .single_best_seller > .infos > .name {
        font-size: 18px !important;
    }
    .single_best_seller > .image {
        max-height: 75px !important;
    }
    .single_best_seller > .infos {
        height: 250px !important;
    }
    .single_best_seller > .infos > .ingredients {
        font-size: 13px !important;
    }
    .single_best_seller > .infos > .price_and_add_button > .price {
        font-size: 19px !important;
    }
    .single_best_seller > .infos > .price_and_add_button > .price > .dollar_sign {
        font-size: 15px !important;
    }
    .single_best_seller > .infos > .price_and_add_button > .add_to_cart_button {
        font-size: 15px !important;
    }
    .single_restaurant > img {
        width: 85% !important;
    }
}

@media only screen and (max-width: 1000px) {
    .whole_page_wrapper {
        display: block !important;
    }
    .nav_bar_main_container > .small_screen {
        display: none !important;
    }
    .location_text_input {
        font-size: 15px !important;
    }
    .location_input_and_cart_button > .cart_button > .cart_button > i {
        font-size: 38px !important;
    }
    .cart_items_tracker {
        margin-top: -33px !important;
        font-size: 10px !important;
    }
    .greeting {
        font-size: 25px !important;
    }
    .nav_bar_main_container > .big_screen {
        display: block !important;
    }
    .whole_page_wrapper > .navigation_bar {
        display: none !important;
    }
    .app_name_and_hamburger_menu > .my_mobile_nav_bar_wrapper > nav {
        display: block !important;
    }
    .nav_bar_main_container > .big_screen > .my_nav_bar_wrapper {
        height: fit-content !important;
        width: 222px !important;
        margin-left: -8px !important;
    }
}

@media only screen and (max-height: 634px) {
    .small_screen > .my_nav_bar_wrapper {
        position: absolute !important;;
    }
}
</style>
