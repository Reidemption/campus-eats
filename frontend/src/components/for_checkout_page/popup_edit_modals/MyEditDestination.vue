<template>
    <div class="my_edit_destination_wrapper">
        <div class="title">Deliver to</div>

        <div class="location_input_field">
            <div class="location_icon">
                <i class="las la-map-marker"></i>
            </div>
            <input type="text" placeholder="Enter delivery address">
        </div>

        <div class="user_saved_delivery_addresses">
            <div class="single_saved_addrress">
                <div class="location_icon">
                    <i class="las la-map-marker"></i>
                </div>

                <div class="delivery_address_infos_and_edit_button">
                    <div class="delivery_address_infos">
                        <div class="main_info">Smith Computer Center</div>

                        <div class="additional_info">
                            Room 107
                        </div>
                    </div>

                    <div class="edit_address_button">
                        <i class="las la-pen"></i>
                    </div>
                </div>
            </div>

            <div class="single_saved_addrress">
                <div class="location_icon">
                    <i class="las la-map-marker"></i>
                </div>

                <div class="delivery_address_infos_and_edit_button">
                    <div class="delivery_address_infos">
                        <div class="main_info">Campus View Suites I</div>

                        <div class="additional_info">
                            Room 107 C
                        </div>
                    </div>

                    <div class="edit_address_button">
                        <i class="las la-pen"></i>
                    </div>
                </div>
            </div>
        </div>

        <div class="done_button" @click="done_edit_destination">Done</div>
    </div>
</template>

<script>
export default {
    methods: {
        done_edit_destination() {
            this.$emit("done_edit_destination");
        }
    }
}
</script>

<style scoped>
.title {
    font-size: 35px;
    color: var(--navy);
    font-family: 'Cabin';
    margin-bottom: 20px;
}

.location_input_field {
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

.location_input_field > input {
    width: 100%;
    font-size: 20px;
    padding: 15px 20px;
    border: none;
    outline: none;
    background-color: var(--gray);
}

.single_saved_addrress {
    display: grid;
    grid-template-columns: 10% 90%;
}

.single_saved_addrress > .location_icon {
    margin-left: 10px;
}


.single_saved_addrress > .location_icon > i {
    color: var(--navy);
}

.main_info {
    font-weight: 700;
}

.additional_info {
    color: var(--gray-dark);
    margin-top: 5px;
}

.edit_address_button > i { 
    font-size: 30px;
    color: var(--gray-dark);
}

.edit_address_button > i:hover {
    cursor: pointer;
    color: var(--navy);
}

.done_button {
    background-color: var(--navy);
    color: white;
    display: flex;
    justify-content: center;
    padding: 15px 0;
    font-size: 20px;
    margin: 40px 0 20px;
}

.done_button:hover {
    cursor: pointer;
    background-color: var(--red);
}

.delivery_address_infos_and_edit_button {
    border-bottom: 1px solid var(--gray-fade);
    margin-bottom: 20px;
    padding-bottom: 10px;
}

.single_saved_addrress:last-child > .delivery_address_infos_and_edit_button{
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
}

.delivery_address_infos_and_edit_button {
    display: flex;
    justify-content: space-between;
    margin: 0 10px 20px;
}
</style>