<template>
  <div class="my_banner_wrapper">
        <div class="banner_section">
            <div class="image">
            <img src="../assets_others/HomePage/delivery_man.png" alt="We deliver food">
            </div>

            <div class="greeting_and_news">
            <div class="greeting">Hello Trailblazer,</div>
            <div class="news">
                <div class="main_message">Free Delivery This Week!</div>
                <div class="additional_message">Enter code <span class="promo_code">#CAMPUS_EATS</span> at the checkout page.</div>
            </div>
            
            <div class="buttons_and_icon">
                <div class="my_button_wrapper">Learn More</div>

                <div class="burger">
                <img src="../assets_others/HomePage/hamburger_icon.png" alt="Burger icon">
                </div>
            </div>
            </div>

            <div class="food_icons">
            <div class="single_food_icon salad">
                <img src="../assets_others/HomePage/salad_icon.png" alt="Salad icon">
            </div>

            <div></div>
            
            <div class="single_food_icon drink">
                <img src="../assets_others/HomePage/drink_icon.png" alt="Drink icon">
            </div>
            
            <div></div>
            
            <div class="single_food_icon phone">
                <img src="../assets_others/HomePage/smartphone.png" alt="Phone icon">
            </div>
            
            <div></div><div></div><div></div>
            
            <div class="single_food_icon pizza">
                <img src="../assets_others/HomePage/pizza_icon.png" alt="Pizza icon">
            </div>
            </div>
        </div>
  </div>
</template>

<style scoped>
.banner_section {
    background-color: var(--navy);
    margin: 0 40px;
    padding: 20px;
    border-radius: 25px;
    color: white;
    display: grid;
    grid-template-columns: 2fr 3fr 1fr;
}

img {
    width: 333px;
}

.greeting_and_news {
    display: flex;
    flex-direction: column;
    align-self: center;
}

.greeting {
    font-size: 40px;
}

.news {
    margin: 25px 0 15px;
}

.main_message, .additional_message {
    font-size: 20px;
    margin-bottom: 10px;
    letter-spacing: 1px;
}

.promo_code {
    color: var(--yellow);
}

.food_icons {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

.single_food_icon {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.single_food_icon > img {
    width: 50px;
}

.buttons_and_icon {
    display: flex;
    justify-content: space-between;
}


.my_button_wrapper {
    padding: 15px 35px;
    border: 1px solid var(--red);
    background-color: var(--red);
    border-radius: 25px;
    width: fit-content;
    cursor: pointer;
}

.my_button_wrapper:hover {
    cursor: pointer;
    border: 1px solid var(--yellow);
    background-color: var(--yellow);
    color: var(--navy);
}

.burger > img {
    width: 50px;
}

.burger {
    display: flex;
    align-items: flex-end;
    transform: rotate(15deg);
}

.salad {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    transform: rotate(340deg);
}

.salad > img {
    width: 100%;
}

.drink {
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
    transform: rotate(13deg);
}

.burger > img, .salad > img, .drink > img, .pizza > img {
    animation: spin 10s linear infinite;
}

@keyframes spin { 
    100% { 
        -webkit-transform: rotate(360deg); 
        transform:rotate(360deg); 
    } 
}
</style>