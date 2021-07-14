<template>
    <div class="my_cart_wrapper">
        <div class="title">Cart</div>

        <div class="cart_sections">
            <div class="cart_items">
                <div class="single_cart_item">
                    <div class="image">

                    </div>
                </div>
            </div>

            <MyButton class="view_class_button">View Cart</MyButton>
        </div>
    </div>
</template>

<script>
import MyButton from "./MyButton.vue"

export default {
    components: {
        MyButton
    },
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>
.title {
    font-family: 'Roboto Slab', serif;
    font-size: 30px;
    color: var(--navy);
    margin: 30px 0;
}

.view_class_button {
    color: white;
}

.view_class_button:hover {
    color: white;
    background-color: var(--navy);
}
</style>