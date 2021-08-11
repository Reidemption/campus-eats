<template>
    <div class="my_login_page_wrapper">
        <router-link to="/" class="back_button">
            <div class="icon">
                <span class="material-icons">arrow_back</span>
            </div>
            <div class="name">Back</div>
        </router-link>
        <div class="container" 
            :class="{ right_panel_active : show_sign_up_form }">
            <div class="form_container sign_up_container">
                <div class="form">
                    <h1>Create Account</h1>

                    <input type="text" placeholder="Username" v-model="sign_up_user_name"/>
                    <input type="password" placeholder="Password" v-model="sign_up_password"/>
                    <input type="email" placeholder="Dmail" v-model="sign_up_dmail"/>
                    <input type="text" placeholder="Phone Number" v-model="sign_up_phone_number"/>

                    <button @click="user_signed_up">Sign Up</button>
                    
                    <img class="wait_to_sign_up" v-if="wait_to_sign_up" src="../assets_others/loading.gif" alt="Loading Gif">
                </div>
            </div>

            <div class="form_container sign_in_container">
                <div class="form">
                    <h1>Sign in</h1>
                    
                    <input type="email" placeholder="Dmail" v-model="sign_in_dmail"/>
                    <input type="password" placeholder="Password" v-model="sign_in_password"/>
                    <div class="forgot_password">Forgot your password?</div>

                    <button @click="user_signed_in">Sign In</button>

                    <img class="wait_to_sign_in" v-if="wait_to_sign_in" src="../assets_others/loading.gif" alt="Loading Gif">
                </div>
            </div>

            <div class="overlay_container">
                <div class="overlay">
                    <div class="overlay_panel overlay_left">
                        <h1>Welcome Back!</h1>
                        <p>Sign in if you already have an account.</p>
                        <button class="ghost" @click="sign_in_option_selected">Sign In</button>
                    </div>

                    <div class="overlay_panel overlay_right" 
                        v-if="!need_account_confirmation && !user_logged_in_failed">
                        <h1>Hello, friend!</h1>
                        <p>Let's start your journey with 
                            <span>Campus Eats</span> 
                            by creating an account!</p>
                        <button class="ghost" @click="sign_up_option_selected">Sign Up</button>
                    </div>

                    <div id="confirm_instruction" class="overlay_panel overlay_right" 
                        v-if="need_account_confirmation">
                        <h1>One Last Step</h1>
                        <div class="instruction_messages">
                            <p>Your account is created.</p>
                            <p>Please confirm your Dmail and password.</p>
                        </div>
                    </div>

                    <div id="logged_in_failed_message" class="overlay_panel overlay_right" 
                        v-if="user_logged_in_failed">
                        <h1>Oops ...</h1>
                        <div class="instruction_messages">
                            <p>Your Dmail or Password is incorrect.</p>
                            <p>Please try again or create a new account.</p>

                            <button class="ghost" @click="sign_up_option_selected">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <MyPopupMessage v-if="show_popup_message"
            :message_body="message_body"
            @close_popup_message="show_popup_message = false"></MyPopupMessage>
    </div>
</template>

<script>
import MyPopupMessage from "../components/MyPopupMessage.vue"

export default {
    components: {
        MyPopupMessage
    },
    data() {
        return {
            user_logged_in: this.$store.state.user_logged_in,

            // Input field for user sign up
            sign_up_user_name: "",
            sign_up_password: "",
            sign_up_dmail: "",
            sign_up_phone_number: "",

            // Input fields for user sign in
            sign_in_dmail: "",
            sign_in_password: "",

            // Sign up option for new user
            show_sign_up_form: false,

            // Message shown in case of errors
            show_popup_message: false,
            message_body: "",

            // Loading gif - waiting to be redirected
            wait_to_sign_up: false,
            wait_to_sign_in: false,

            // Account Confirmation
            need_account_confirmation: false,

            // User need to check dmail/password
            user_logged_in_failed: false
        }
    },
    created() {
        this.watch_user_status_message();

        window.addEventListener("unload", (event) => {
            let status = window.atob(this.$store.state.user_logged_in);
            let message = "";
            this.$store.commit("update_user_login_status", { status, message });
        })
    },
    methods: {
        sign_up_option_selected() {
            this.show_sign_up_form = true;
        },
        sign_in_option_selected() {
            this.show_sign_up_form = false;
        },
        async user_signed_up() {
            let input_field_list = [this.sign_up_user_name, this.sign_up_password, 
                this.sign_up_dmail, this.sign_up_phone_number];
            
            let empty_input_field = false;
            input_field_list.forEach(input_field => {
                if (input_field === "") {
                    empty_input_field = true;
                }
            })

            if (!empty_input_field) {
                let email = this.sign_up_dmail;
                let phone = this.sign_up_phone_number;
                let validation_result = this.validate_user_login_inputs(email, phone);

                if (validation_result === "Validation passed") {
                    let user_sign_up_infos = {
                        username: this.sign_up_user_name,
                        password: this.sign_up_password,
                        email: this.sign_up_dmail,
                        phone: this.sign_up_phone_number
                    }
                    
                    this.sign_up_first_name = "";
                    this.sign_up_last_name = "";
                    this.sign_up_dmail = "";
                    this.sign_up_phone_number = "";
                    this.sign_up_user_name = "";
                    this.sign_up_password = "";

                    this.wait_to_sign_up = true;

                    await this.$store.dispatch("user_signed_up", user_sign_up_infos).then(response => {
                        if (response.status === 200) {
                            let status = false;
                            let message = "Signed up successfully";
                            this.$store.commit("update_user_login_status", { status, message });

                            this.$router.push({
                                path: "/Lcgin"
                            })
                        } else {
                            location.reload();
                        }
                    });
                }
                else {
                    this.message_body = validation_result;
                    this.show_popup_message = true;
                }
            } 
            else {
                this.message_body = "Please fill out all fields";
                this.show_popup_message = true;
            }
        },
        async user_signed_in() {
            let input_field_list = [this.sign_in_dmail, this.sign_in_password];
            
            let empty_input_field = false;
            input_field_list.forEach(input_field => {
                if (input_field === "") {
                    empty_input_field = true;
                }
            })

            if (!empty_input_field) {
                let user_sign_in_infos = {
                    email: this.sign_in_dmail,
                    password: this.sign_in_password
                }

                this.sign_in_dmail = "";
                this.sign_in_password = "";
                
                this.wait_to_sign_in = true;

                await this.$store.dispatch("user_signed_in", user_sign_in_infos).then(response => {
                    if (response.status === 200) {
                        let status = true;
                        let message = "Logged in successfully";
                        this.$store.commit("update_user_login_status", { status, message });
                    }
                }).catch(error => {
                    let status = false;
                    let message = "Logged in failed";
                    this.$store.commit("update_user_login_status", { status, message });
                });

                this.$router.push({
                    path: "/Lcgin"
                })
            } 
            else {
                this.message_body = "Please fill out all fields";
                this.show_popup_message = true;
            }
        },
        watch_user_status_message() {
            let decrypted_message = window.atob(this.$store.state.user_status_message);
            if (decrypted_message === "Signed up successfully") {
                this.need_account_confirmation = true;
            }
            else if (decrypted_message === "Logged in successfully") {
                this.$router.push({
                    path: "/"
                })
            }
            else if (decrypted_message === "Logged in failed") {
                this.user_logged_in_failed = true;
            }
        },
        validate_user_login_inputs(email, phone) {
            let validation_result;

            if (!email.includes("@dmail.dixie.edu") || email.length < 25) {
                validation_result = "Invalid email address";
            }
            else if (phone.length < 10) {
                validation_result = "Invalid phone number";
            }
            else {
                let validate_phone_number = /^\d+$/.test(phone);
                if (validate_phone_number) {
                    validation_result = "Validation passed";
                } else {
                    validation_result = "Invalid phone number";
                }
            }

            return validation_result;
        }
    }
}
</script>

<style scoped>
.my_login_page_wrapper {
    background-color: var(--gray);
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

h1 {
	font-family: 'Roboto Slab', serif;
    font-size: 40px;
    color: var(--navy);
    margin: 0;
}

.overlay_panel > h1 {
    color: white;
}

h2 {
	text-align: center;
}

p {
	font-size: 15px;
	font-weight: 100;
	line-height: 25px;
	letter-spacing: 0.5px;
	margin: 20px 0 30px;
    padding: 0 30px;
}

p > span {
    font-size: 15px;
    color: var(--yellow);
}

span {
	font-size: 12px;
}

.forgot_password {
	color: var(--gray-dark);
	font-size: 14px;
	margin: 15px 0;
}

.forgot_password:hover {
    cursor: pointer;
    color: var(--red);
}

button {
	border-radius: 20px;
	border: 1px solid var(--red);
	background-color: var(--red);
	color: #FFFFFF;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
}

button:hover {
    cursor: pointer;
}

button:active {
	transform: scale(0.95);
}

button:focus {
	outline: none;
}

button.ghost {
	background-color: transparent;
	border-color: #FFFFFF;
}

button.ghost:hover {
    background-color: var(--red);
    border-color: var(--red);
}

.form {
	background-color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 50px;
	height: 100%;
	text-align: center;
}

input {
	background-color: #eee;
	border: none;
	padding: 12px 15px;
	margin: 8px 0;
	width: 100%;
    z-index: 1;
}

.container {
	background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
    position: relative;
    overflow: hidden;
    width: 55%;
    max-width: 100%;
    min-height: 550px;
}

.form_container {
	position: absolute;
	top: 0;
	height: 100%;
	transition: all 0.6s ease-in-out;
}

.sign_in_container {
	left: 0;
	width: 50%;
	z-index: 2;
}

.container.right_panel_active .sign_in_container {
	transform: translateX(100%);
}

.sign_up_container {
	left: 0;
	width: 50%;
	opacity: 0;
	z-index: 1;
}

.container.right_panel_active .sign_up_container {
	transform: translateX(100%);
	opacity: 1;
	z-index: 5;
	animation: show 0.6s;
}

@keyframes show {
	0%, 49.99% {
		opacity: 0;
		z-index: 1;
	}
	
	50%, 100% {
		opacity: 1;
		z-index: 5;
	}
}

.overlay_container {
	position: absolute;
	top: 0;
	left: 50%;
	width: 50%;
	height: 100%;
	overflow: hidden;
	transition: transform 0.6s ease-in-out;
	z-index: 100;
}

.container.right_panel_active .overlay_container{
	transform: translateX(-100%);
}

.overlay {
	background-color: var(--navy);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 0 0;
	color: #FFFFFF;
	position: relative;
	left: -100%;
	height: 100%;
	width: 200%;
  	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.container.right_panel_active .overlay {
  	transform: translateX(50%);
}

.overlay_panel {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 40px;
	text-align: center;
	top: 0;
	height: 100%;
	width: 50%;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.overlay_left {
	transform: translateX(-20%);
}

.container.right_panel_active .overlay_left {
	transform: translateX(0);
}

.overlay_right {
	right: 0;
	transform: translateX(0);
}

.container.right_panel_active .overlay_right {
	transform: translateX(20%);
}

.sign_up_container > .form > button {
    margin-top: 15px;
}

.sign_up_container > .form > h1 {
    margin-bottom: 10px;
}

.back_button {
    position: fixed;
    top: 2%;
    left: 2%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: fit-content;
    padding: 10px 17px;
    border-radius: 25px;
    box-shadow: 0px 2px 7px var(--gray-dark);
    margin: 30px 0 0 40px;
    text-decoration: none;
}

.back_button:hover {
    cursor: pointer;
    background-color: var(--red);
}

.back_button:hover .icon > span,
.back_button:hover .name {
    color: white;
}

.back_button > .icon {
    display: flex;
}

.back_button > .icon > span {
    font-size: 16px;
    color: var(--gray-dark);
}

.back_button > .name {
    font-size: 15px;
    margin-left: 5px;
    color: var(--gray-dark);
}

.form > .wait_to_sign_up {
    width: 100%;
    height: 50%;
    position: fixed;
    bottom: -30px;
}

.form > .wait_to_sign_in {
    width: 100%;
    height: 50%;
    position: absolute;
    bottom: 30px;
}

.instruction_messages > p {
    margin: 20px 0 0;
    padding: 0;
}

.instruction_messages > button {
    margin-top: 20px;
}

#logged_in_failed_message {
    animation: alert 0.5s ease;
}

@keyframes alert {
    0% {
        transform: translateX(-30px);
    }
    50% {
        transform: translateX(30px);
    }
    100% {
        transform: translateX(0);
    }
}

#confirm_instruction {
    animation: zoom 0.6s ease;
}

@keyframes zoom {
    0% {
        transform: scale(0.6);
    }
    100% {
        transform: scale(1);
    }
}
</style>