<template>
    <div class="my_popup_message_wrapper" @click.self="close_popup_message"
        :class="{ message_leaves_screen: message_leaves_screen }">
        <div class="message_container">
            <div class="message_body_and_close_button">
                <div class="message_body">{{ message_body }}</div>

                <div class="close_button" @click="close_popup_message">
                    <i class="las la-times"></i>
                </div>
            </div>

            <div class="timer_line"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        message_body: String
    },
    data() {
        return {
            message_leaves_screen: false
        }
    },
    created() {
        setTimeout(() => {
            this.message_leaves_screen = true;
        }, 3000);
        
        setTimeout(() => {
            this.$emit("close_popup_message");
        }, 4000);
    },
    methods: {
        close_popup_message() {
            this.$emit("close_popup_message");
        }
    }
}
</script>

<style scoped>
.my_popup_message_wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 100;
}

.message_container {
    width: fit-content;
    background-color: var(--red);
    color: white;
    font-size: 20px;
    position: absolute;
    top: 5%;
    right: 2%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    animation: slide_in_left 1s ease;
}

@keyframes slide_in_left {
    0% {
        transform: translateX(500px);
    }
    100% {
        transform: translateX(0);
    }
}

.message_body_and_close_button{
    padding: 2px 40px 0;
    display: flex;
    align-items: center;
}

.message_body {
    padding: 10px 20px 8px;
}

.close_button {
    cursor: pointer;
    font-size: 22px;
}

.timer_line {
    height: 4px;
    width: 100%;
    background-color: var(--red-dark);
    animation: shorten 4s ease forwards;
}

@keyframes shorten {
    0% {
        width: 100%;
    }
    100% {
        width: 0;
    }
}

.message_leaves_screen {
    animation: slide_out_right 1s ease;
}

@keyframes slide_out_right {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(500px);
    }
}
</style>