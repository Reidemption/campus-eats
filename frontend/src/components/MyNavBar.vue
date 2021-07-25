<template>
    <div class="my_nav_bar_wrapper">
        <div class="main_menu_options">
            <router-link class="single_option" :to="option.path"
                v-for="option in main_menu_options_list" :key="option.name"
                :class="{ current_menu_option: current_page === option.name }">
                
                <div class="icon" :class="{ current_menu_icon: current_page === option.name }">
                    <i :class="option.icon"></i>
                </div>
                
                <div class="option_name"
                    :class="{ current_menu_name: current_page === option.name }">
                    {{ option.name }}
                </div>

            </router-link>
        </div>

        <div class="log_out_wrapper">
            <div class="single_option logout_option">
                <div class="icon">
                    <i class="las la-sign-out-alt"></i>
                </div>
                <div class="option_name">Logout</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        current_page: String
    },
    data() {
        return {
            main_menu_options_list: [
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
                    icon: "las la-user",
                    name: "Account",
                    path: "/Account"
                }
            ]
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

.logout_option {
    margin-bottom: 0;
}

@media only screen and (max-width: 1650px) {
  .icon {
      font-size: 25px;
      padding: 25px;
  }
  .option_name {
      font-size: 17px;
  }
}

@media only screen and (max-width: 1425px) {
  .icon {
      font-size: 20px;
      padding: 20px;
  }
  .option_name {
      font-size: 15px;
  }
}
</style>