<template>
    <div class="my_delivery_section_wrapper">
        <div class="my_delievery_section_title">
            Delivery Options
        </div>

        <div class="my_delivery_section_main_content">
            <div class="my_delivery_section_checkbox"
                @click="select_delivery_now"
                :class="{ selected_checkbox: delivery_now_selected}">
                <div class="checkbox_center"
                    :class="{ selected_checkbox_center: delivery_now_selected}">
                </div>
            </div>

            <div class="my_delivery_option_and_estimate_time">
                <div class="delivery_option">Right now</div>
                <div class="estimate_time" v-if="delivery_now_selected">5-10 min</div>
            </div>
        </div>

        <div class="my_delivery_section_main_content">
            <div class="my_delivery_section_checkbox"
                @click="select_delivery_schedule"
                :class="{ selected_checkbox: delivery_schedule_selected}">
                <div class="checkbox_center"
                    :class="{ selected_checkbox_center: delivery_schedule_selected}"></div>
            </div>

            <div class="my_delivery_option_and_estimate_time">
                <div class="delivery_option">Schedule</div>
                <div class="estimate_time" v-if="delivery_schedule_selected">3 years</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            delivery_now_selected: true,
            delivery_schedule_selected: false,
        }
    },
    methods: {
        select_delivery_now() {
            this.delivery_now_selected = true;
            this.delivery_schedule_selected = false;
        },
        select_delivery_schedule() {
            this.delivery_now_selected = false;
            this.delivery_schedule_selected = true;
        }
    }
}
</script>

<style scoped>
.my_delivery_section_main_content:last-child > .my_delivery_option_and_estimate_time {
    padding-bottom: 0;
    border-bottom: none;
}

.my_delivery_section_checkbox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    border: 2px solid var(--gray-fade);
    border-radius: 50%;
}

.my_delivery_section_checkbox:hover {
    cursor: pointer;
    border: 2px solid var(--navy);
    background-color: var(--navy);
}

.my_delivery_section_checkbox:hover .checkbox_center {
    background-color: white;
}

.checkbox_center {
    background-color: var(--gray);
    width: 40%;
    height: 40%;
    border-radius: 50%;
}

.selected_checkbox {
    border: 2px solid var(--navy);
    background-color: var(--navy);
}

.selected_checkbox_center {
    background-color: white;
}

.my_delivery_option_and_estimate_time {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 15px;
    border-bottom: 1px solid var(--gray-fade);
}

.delivery_option, .estimate_time {
    font-weight: 700;
}
</style>