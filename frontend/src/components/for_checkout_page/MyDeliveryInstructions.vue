<template>
    <div class="my_delivery_section_wrapper">
        <div class="my_delievery_section_title">
            Destination and Instructions
        </div>

        <div class="my_delivery_section_main_content">
            <div class="my_delivery_section_icon">
                <i class="las la-map-marker"></i>
            </div>

            <div class="my_delivery_infos_and_edit_button">
                <div class="my_delivery_infos">
                    <div class="my_delivery_main_info">
                        Smith Computer Center
                    </div>

                    <div class="my_delivery_additional_info">
                        Room 107
                    </div>
                </div>

                <div class="my_delivery_section_edit_button"
                    @click="show_edit_destination_modal">Edit</div>
            </div>
        </div>

        <div class="my_delivery_section_main_content">
            <div class="my_delivery_section_icon">
                <i class="las la-box"></i>
            </div>

            <div class="my_delivery_infos_and_edit_button">
                <div class="my_delivery_infos">
                    <div class="my_delivery_main_info">
                        Meet at door
                    </div>

                    <div class="my_delivery_additional_info">
                        Add delivery instructions
                    </div>
                </div>

                <div class="my_delivery_section_edit_button"
                    @click="show_edit_instructions_modal">Edit</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        show_edit_destination_modal() {
            this.$emit("show_edit_destination_modal");
        },
        show_edit_instructions_modal() {
            this.$emit("show_edit_instructions_modal");
        }
    }
}
</script>

<style>
.my_delivery_section_wrapper {
    margin: 30px 40px 50px; 
    border-bottom: 1px solid var(--gray-dark);
}

.my_delievery_section_title {
    font-family: 'Roboto Slab', serif;
    font-size: 20px;
    color: var(--red-dark);
}

.my_delivery_section_main_content {
    display: grid;
    grid-template-columns: 7% 93%;
    margin: 20px 0;
}

.my_delivery_section_main_content:last-child > .my_delivery_infos_and_edit_button {
    padding-bottom: 0;
    border-bottom: none;
}

.my_delivery_section_icon > i {
    font-size: 30px;
}

.my_delivery_infos_and_edit_button {
    display: flex;
    justify-content: space-between;
    padding-bottom: 15px;
    border-bottom: 1px solid var(--gray-fade);
}

.my_delivery_main_info {
    font-weight: 700;
}

.my_delivery_additional_info {
    color: var(--gray-dark);
    margin-top: 5px;
}

.my_delivery_section_edit_button {
    background-color: var(--navy);
    color: white;
    border-radius: 25px;
    height: fit-content;
    padding: 7px 27px;
}

.my_delivery_section_edit_button:hover {
    cursor: pointer;
    background-color: var(--red);
}
</style>