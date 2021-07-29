<template>
    <div class="my_login_page_wrapper">
        <div class="container" 
            :class="{ right_panel_active : show_sign_up_form }">
            <div class="form_container sign_up_container">
                <div class="form">
                    <h1>Create Account</h1>

                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Dmail" />
                    <input type="password" placeholder="Password" />

                    <button>Sign Up</button>
                </div>
            </div>

            <div class="form_container sign_in_container">
                <div class="form">
                    <h1>Sign in</h1>
                    
                    <input type="email" placeholder="Dmail" />
                    <input type="password" placeholder="Password" />
                    <div class="forgot_password">Forgot your password?</div>

                    <button>Sign In</button>
                </div>
            </div>

            <div class="overlay_container">
                <div class="overlay">
                    <div class="overlay_panel overlay_left">
                        <h1>Welcome Back!</h1>
                        <p>Sign in if you already have an account</p>
                        <button class="ghost" @click="sign_in_option_selected">Sign In</button>
                    </div>

                    <div class="overlay_panel overlay_right">
                        <h1>Hello, Friend!</h1>
                        <p>Let's start your journey with Campus Eats by creating an account!</p>
                        <button class="ghost" @click="sign_up_option_selected">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show_sign_up_form: false
        }
    },
    methods: {
        sign_up_option_selected() {
            this.show_sign_up_form = true;
        },
        sign_in_option_selected() {
            this.show_sign_up_form = false;
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
	font-size: 14px;
	font-weight: 100;
	line-height: 20px;
	letter-spacing: 0.5px;
	margin: 20px 0 30px;
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
}

.container {
	background-color: #fff;
	border-radius: 10px;
  	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
			0 10px 10px rgba(0,0,0,0.22);
	position: relative;
	overflow: hidden;
	width: 768px;
	max-width: 100%;
	min-height: 480px;
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
</style>