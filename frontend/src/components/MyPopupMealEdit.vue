<template>
    <div class="overlay_section" @click="close_popup_meal_edit">
        <div class="my_popup_meal_edit_wrapper">
            <div class="backrground_image_and_close_button">
                <img class="popup_background" :src="require(`../assets_main/${popup_meal_edit_background_image}`)" 
                    :alt="popup_meal_edit_name">
                
                <div class="close_button" @click="close_popup_meal_edit">
                    <span class="material-icons">close</span>
                </div>
            </div>

            <div class="popup_main_content">
                <div class="popup_meal_name">{{ popup_meal_edit_name }}</div>
                
                <div class="popup_meal_description">{{ popup_meal_edit_description }}</div>
                    
                <div class="popup_meal_calories">
                    <div class="title">Calories:</div>
                    <div class="calories_amount">
                        {{ popup_meal_edit_calories }}
                    </div>
                </div>

                <div class="popup_meal_custom_options_title">
                    Your selections:
                </div>

                <div class="popup_meal_quantity_and_add_button_and_total_price">
                    <div class="quantify_control">
                        <div class="quantity_button subtract_quantity_button">
                            <span class="material-icons">remove</span>
                        </div>
                                
                        <div class="quantity_amount">1</div>
                        
                        <div class="quantity_button add_quantity_button">
                            <span class="material-icons">add</span>
                        </div>
                    </div>

                    <div class="add_button_and_total_price">
                        <div class="add_to_cart_button">
                            Add 1 
                            to cart</div>
                        
                        <div class="total_price">
                            <span class="dollar_sign">$</span>
                            8
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        popup_meal_edit_name: String,
        popup_meal_edit_background_image: String,
        popup_meal_edit_description: String,
        popup_meal_edit_calories: String,
        popup_meal_edit_quantity: Number,
        popup_meal_edit_note: String,
    },
    methods: {
        close_popup_meal_edit() {
            this.$emit("close_popup_meal_edit");
        }
    }
}
</script>

<style scoped>
.overlay_section {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.4);
}

.my_popup_meal_edit_wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    display: grid;
    grid-template-columns: 1fr 2fr;
    width: 60%;
    max-height: 80%;
    overflow: hidden;
    overflow-y: scroll;
}

.backrground_image_and_close_button {
    display: flex;
    align-items: center;
}

.popup_background {
    width: 100%;
}

.close_button {
    position: absolute;
    top: 5%;
    left: 2%;
    border: 1px solid var(--navy);
    border-radius: 50%;
    background-color: white;
    color: var(--navy);
    padding: 7px;
    display: flex;
}

.close_button > span {
    font-size: 25px;
}

.close_button:hover {
    cursor: pointer;
    background-color: var(--red);
    color: white;
    border: 1px solid var(--red);
}

.popup_main_content {
    padding: 30px;
    border-left: 1px solid var(--gray-fade);
}

.popup_meal_name {
    font-size: 30px;
    color: var(--navy);
}

.popup_meal_description {
    color: var(--gray-dark);
    font-size: 15px;
    margin: 10px 0;
}

.popup_meal_calories {
    display: flex;
    align-items: center;
}

.popup_meal_custom_options_title {
    font-size: 20px;
    margin-top: 20px;
}

.calories_amount {
    margin-left: 5px;
    color: var(--red-dark);
}

.popup_meal_quantity_and_add_button_and_total_price {
    display: flex;
    margin-top: 40px;
}

.quantify_control {
    display: flex;
    align-items: center;
}

.quantity_button {
    background-color: var(--gray);
    color: var(--navy);
    border-radius: 50%;
    padding: 7px;
    display: flex;
}

.quantity_button:hover {
    cursor: pointer;
    background-color: var(--navy);
    color: white;
}

.quantity_button > span {
    font-size: 20px;
}

.quantity_amount {
    font-size: 20px;
    margin: 0 10px;
    width: 25px;
    display: flex;
    justify-content: center;
}

.add_button_and_total_price {
    display: grid;
    grid-template-columns: 3fr 1fr;
    background: var(--gray);
    width: 100%;
    margin-left: 20px;
    padding: 10px;
}

.add_button_and_total_price:hover {
    cursor: pointer;
    background-color: var(--navy);
    color: white;
}

.add_to_cart_button, .total_price{
    display: flex;
    justify-content: center;
    font-size: 17px;
}

.dollar_sign {
    font-family: 'Cabin', sans-serif;
    font-size: 15px;
    margin-right: 3px;
    margin-bottom: 0;
    margin-top: 1px;
}

</style>