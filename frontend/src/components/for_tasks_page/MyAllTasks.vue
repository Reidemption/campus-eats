<template>
    <div class="my_all_tasks_wrapper">
        <div class="sort_orders_options">
            <div class="title">Sort orders by:</div>
                
            <div class="dropdown_options">
                <button class="dropdown_button">{{ current_sort_order_option }}</button>
                        
                <div class="dropdown_content">
                    <p v-for="option in sort_orders_options" :key="option"
                        @click="sort_orders_option_selected(option)">
                        {{ option }}
                    </p>
                </div>
            </div>
        </div>   

        <div class="tasks_list_wrapper">
            <div class="single_task">
            </div>

            <div class="single_task">
            </div>

            <div class="single_task">
            </div>

            <div class="single_task">
            </div>

            <div class="single_task">
            </div>

            <div class="single_task">
            </div>

            <div class="single_task">
            </div>

            <div class="single_task">
            </div>

            <div class="single_task">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            current_sort_order_option: "Select an option",
            sort_orders_options: [
                "Closest to furthest location",
                "Oldest to newest orders",
                "Shortest to longest prep time"
            ]
        }
    },
    methods: {
        sort_orders_option_selected(option) {
            this.current_sort_order_option = option;
        }
    }
}
</script>

<style scoped>
.sort_orders_options {
    padding: 50px 40px 30px;
    display: flex;
    align-items: center;
}

.sort_orders_options > .title {
    font-size: 20px;
}

.dropdown_button {
    background-color: white;
    color: var(--gray-dark);
    padding: 10px;
    font-size: 16px;
    border: 1px solid var(--gray-fade);
    cursor: pointer;
    width: 100%;
    border-radius: 25px;
}

.dropdown_options {
    position: relative;
    display: inline-block;
    margin-left: 10px;
    width: 300px;
}

.dropdown_content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    width: 100%;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

.dropdown_content > p {
    color: black;
    padding: 12px 16px;
    display: block;
    cursor: pointer;
}

.dropdown_content > p:hover {
    background-color: #f1f1f1
}

.dropdown_options:hover .dropdown_content {
    display: block;
}

.dropdown_options:hover .dropdown_button {
    color: var(--navy);
    border: 1px solid var(--navy);  
}

.tasks_list_wrapper {
    padding: 20px 40px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    margin-bottom: 40px;
}

.single_task {
    align-items: center;
    border-radius: 25px;
    background-color: white;
    color: var(--red-dark);
    box-shadow: 5px 5px;
    height: 150px;
    width: 95%;
    padding: 20px 30px;
    cursor: pointer;
}
</style>