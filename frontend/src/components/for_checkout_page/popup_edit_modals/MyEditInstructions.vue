<template>
    <div class="my_edit_instructions_wrapper">
        <div class="title">Delivery details</div>

        <div class="delivery_address_selected">
            <div class="location_icon">
                <i class="las la-map-marker"></i>
            </div>

            <div class="location_main_info">Smith Computer Center</div>
        </div>

        <div class="delivery_options_section">
            <div class="title">Delivery options</div>

            <div class="dropdown_options">
                <div class="dropdown_option_selection">
                    <div class="meet_instruction_icon">
                        <span class="material-icons">hail</span>
                    </div>

                    <div class="option_name">Meet at door</div>

                    <div class="dropdown_arrow_icon">
                        <span class="material-icons">expand_more</span>
                    </div>
                </div>

                <div class="dropdown_content">
                    <p>Meet at door</p>
                    <p>Meet outside the building</p>
                    <p>Leave at door</p>
                </div>
            </div>
        </div>

        <div class="delivery_address_detail_input">
            <input type="text" placeholder="Apartment, suite or floor">
        </div>

        <div class="delivery_address_detail_input">
            <input type="text" placeholder="Business name">
        </div>

        <div class="delivery_address_detail_textarea">
            <textarea cols="30" rows="3" placeholder="Add delivery instructions"></textarea>
        </div>

        <div class="save_button" @click="save_edit_destination">Save</div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.title {
    font-size: 35px;
    color: var(--navy);
    font-family: 'Cabin';
    margin-bottom: 20px;
}

.delivery_address_selected {
    display: flex;
    align-items: center;
    background-color: var(--gray);
    margin-bottom: 30px;
    border-bottom: 2px solid var(--gray-dark);
}

.location_icon {
    margin-left: 20px;
}

.location_icon > i {
    font-size: 30px;
    color: var(--gray-dark);
}

.location_main_info {
    font-size: 19px;
    padding: 20px;
}

.delivery_options_section > .title {
    font-size: 20px;
}

.dropdown_option_selection {
    background-color: var(--gray);
    padding: 10px 16px;
    font-size: 18px;
    border: none;
    cursor: pointer;
    display: grid;
    grid-template-columns: 10% 80% 10%;
}

.dropdown_options{
    position: relative;
    display: inline-block;
    width: 100%;
}

.dropdown_content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    width: 100%;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

.dropdown_content p {
    padding: 12px 13%;
    display: block;
    cursor: pointer;
    font-size: 18px;
}

.dropdown_content p:hover {
    background-color: #f1f1f1
}

.dropdown_options:hover .dropdown_content {
    display: block;
}

.meet_instruction_icon > span {
    font-size: 30px;
}

.option_name, .dropdown_arrow_icon {
    display: flex;
    align-items: center;
}

.delivery_address_detail_input {
    margin-top: 20px;
}

.delivery_address_detail_input > input, 
.delivery_address_detail_textarea > textarea {
    font-size: 18px;
    padding: 15px 20px;
    width: 100%;
    border: none;
    outline: none;
    background-color: var(--gray);
}

.delivery_address_detail_textarea {
    margin-top: 20px;
}

.delivery_address_detail_textarea > textarea {
    max-height: 150px;
    max-width: 100%;
}

.save_button {
    background-color: var(--navy);
    color: white;
    display: flex;
    justify-content: center;
    padding: 15px 0;
    font-size: 20px;
    margin: 40px 0 20px;
}

.save_button:hover {
    cursor: pointer;
    background-color: var(--red);
}
</style>