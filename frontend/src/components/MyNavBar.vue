<template>
    <div class="nav_bar_main_container">
        <div class="big_screen">
            <div class="my_nav_bar_wrapper">
                <div class="main_menu_options">
                    <router-link class="single_option" :to="option.path"
                        v-for="option in main_menu_options_list" :key="option.name"
                        @click="reset_cart_status_message"
                        :class="{ current_menu_option: current_page === option.name || current_page_path === option.path }">
                        
                        <div class="icon" :class="{ current_menu_icon: current_page === option.name || current_page_path === option.path }">
                            <i :class="option.icon"></i>
                        </div>
                        
                        <div class="option_name"
                            :class="{ current_menu_name: current_page === option.name || current_page_path === option.path }">
                            {{ option.name }}
                        </div>

                    </router-link>
                </div>

                <router-link to="/Login"
                    @click="reset_cart_status_message"
                    class="login_wrapper" v-if="!user_logged_in">
                    <div class="single_option login_option">
                        <div class="icon">
                            <i class="las la-sign-in-alt"></i>
                        </div>
                        <div class="option_name">Login</div>
                    </div>
                </router-link>

                <div class="logout_wrapper" v-else
                    @click="user_logged_out">
                    <div class="single_option logout_option">
                        <div class="icon">
                            <i class="las la-sign-out-alt"></i>
                        </div>
                        <div class="option_name">Logout</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="small_screen">
            <div class="my_nav_bar_wrapper">
                <div class="main_menu_options">
                    <router-link class="single_option" :to="option.path"
                        v-for="option in main_menu_options_list" :key="option.name"
                        @click="reset_cart_status_message">
                        
                        <div class="icon" :class="{ current_menu_icon_small: current_page === option.name }">
                            <i :class="option.icon"></i>
                        </div>

                        <div class="option_name"  
                            :class="{ current_menu_name_small: current_page === option.name }">
                            {{ option.name }}
                        </div>
                    </router-link>
                </div>

                <router-link to="/Login"
                    @click="reset_cart_status_message"
                    class="login_wrapper" v-if="!user_logged_in">
                    <div class="single_option login_option">
                        <div class="icon">
                            <i class="las la-sign-in-alt"></i>
                        </div>
                        <div class="option_name">Login</div>
                    </div>
                </router-link>

                <div class="logout_wrapper" v-else 
                    @click="user_logged_out">
                    <div class="single_option logout_option">
                        <div class="icon">
                            <i class="las la-sign-out-alt"></i>
                        </div>
                        <div class="option_name">Logout</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        current_page: String,
        current_page_path: String
    },
    data() {
        return {
            user_logged_in: ""
        }
    },
    methods: {
        user_logged_out() {
            this.$store.dispatch("user_logged_out");    
            
            this.$router.push({
                name: "Homc"
            })
        },
        reset_cart_status_message() {
            this.$store.commit("reset_cart_status_message");
        }
    },
    computed: {
        main_menu_options_list() {
            let encrypted_status = this.$store.state.user_logged_in;
            let decrypted_status;
            let main_menu_options_list;

            if (encrypted_status === false || encrypted_status === "" || encrypted_status === null) {
                this.user_logged_in = false;

                main_menu_options_list = [
                    {
                        icon: "las la-home",
                        name: "Home",
                        path: "/"
                    }
                ]
            } else {
                decrypted_status = window.atob(encrypted_status);
                
                if (decrypted_status === "true") {
                    this.user_logged_in = true;
                    
                    main_menu_options_list = [
                        {
                            icon: "las la-home",
                            name: "Home",
                            path: "/"
                        },
                        {
                            icon: "las la-concierge-bell",
                            name: "Orders",
                            path: "/Orders"
                        },
                        {
                            icon: "las la-clipboard-list",
                            name: "Tasks",
                            path: "/Tasks"
                        },
                        {
                            icon: "las la-business-time",
                            name: "Admin",
                            path: "/Admin"
                        },
                        {
                            icon: "las la-user",
                            name: "Account",
                            path: "/Account"
                        }
                    ]
                }
                else {
                    main_menu_options_list = [
                        {
                            icon: "las la-home",
                            name: "Home",
                            path: "/"
                        }
                    ]
                }
            }

            return main_menu_options_list;
        }
    }
}
</script>

<style scoped>
.my_nav_bar_wrapper {
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    position: fixed;
    width: 15%;
}

.single_option {
    display: grid;
    grid-template-columns: 3fr 4fr;
    border-radius: 18px;
    margin-bottom: 20px;
    cursor: pointer;
    text-decoration: none;
}

.current_menu_option {
    border: 1px solid white;
    background-color: var(--red);
}

.icon {
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--navy);
    background-color: var(--navy);
    color: white;
    border-radius: 18px;
    height: 50px;
    width: 50px;
    padding: 30px;
}

.current_menu_icon {
    border: 1px solid var(--red-dark);
    background-color: var(--red-dark);
    color: white;
}

.option_name{
    font-size: 20px;
    display: flex;
    align-self: center;
    color: var(--gray-dark);
}

.current_menu_name {
    color: white;
}

.la-search {
    transform: rotateY(180deg);
    display: flex;
    justify-content: center;
}

.logout_option, .login_option {
    margin-bottom: 0;
}

.small_screen {
    display: none;
}

.small_screen > .my_nav_bar_wrapper {
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    position: fixed;
    width: 8%;
}

.small_screen > .my_nav_bar_wrapper > .main_menu_options > .single_option,
.small_screen > .my_nav_bar_wrapper > .login_wrapper > .single_option,
.small_screen > .my_nav_bar_wrapper > .logout_wrapper > .single_option {
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-template-columns: none;
    border-radius: 18px;
    margin-bottom: 20px;
    cursor: pointer;
    text-decoration: none;
}

.small_screen > .my_nav_bar_wrapper > .main_menu_options,
.small_screen > .my_nav_bar_wrapper > .login_wrapper,
.small_screen > .my_nav_bar_wrapper > .logout_wrapper {
    display: flex;
    flex-direction: column;
    align-self: center;
}

.small_screen > .my_nav_bar_wrapper > .main_menu_options > .single_option > .icon,
.small_screen > .my_nav_bar_wrapper > .login_wrapper > .single_option > .icon,
.small_screen > .my_nav_bar_wrapper > .logout_wrapper > .single_option > .icon {
    border: 1px solid var(--navy);
    background-color: var(--navy);
}

.small_screen > .my_nav_bar_wrapper > .main_menu_options > .single_option > .option_name,
.small_screen > .my_nav_bar_wrapper > .login_wrapper > .single_option > .option_name,
.small_screen > .my_nav_bar_wrapper > .logout_wrapper > .single_option > .option_name {
    margin-top: 10px;
}

.current_menu_icon_small {
    border: 1px solid var(--red-dark) !important;
    background-color: var(--red-dark) !important;
    color: white;
}

.current_menu_name_small {
    color: var(--red-dark) !important;
}

.login_wrapper {
    text-decoration: none;
}
</style>