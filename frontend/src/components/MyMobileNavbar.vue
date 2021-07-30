<template>
    <div class="my_mobile_nav_bar_wrapper">
        <nav role="navigation">
            <div id="menu_toggle" @click="toggle_hamburger_menu">
                <input class="hamburger_checkbox" type="checkbox"/>
                    
                <span></span>
                <span></span>
                <span></span>
                    
                <ul id="menu">
                    <MyNavBar :current_page_path="current_page_path" ></MyNavBar>
                </ul>
            </div>
        </nav>

        <div class="overlay_section" v-if="mini_nav_bar_open" @click.self="close_mini_nav_bar"></div>
    </div>
</template>

<script>
import MyNavBar from "../components/MyNavBar.vue"

export default {
    components: {
        MyNavBar
    },
    data() {
        return {
            mini_nav_bar_open: false,
        }
    },
    created () {
        window.addEventListener('scroll', this.handle_scroll);

    },
    methods: {
        toggle_hamburger_menu() {
            this.mini_nav_bar_open = !this.mini_nav_bar_open;
        },
        close_mini_nav_bar() {
            this.mini_nav_bar_open = false;

            if( document.querySelector(".hamburger_checkbox") ) {
                document.querySelector(".hamburger_checkbox").checked = false;
            }
        },
        handle_scroll(event) {
            this.mini_nav_bar_open = false;
            
            if( document.querySelector(".hamburger_checkbox") ) {
                document.querySelector(".hamburger_checkbox").checked = false;
            }
        }
    },
    computed: {
        current_page_path() {
            if(this.$route.path === "/") {
                return "/";
            } else {
                return "/" + this.$route.path;
            }
        }
    }
}
</script>

<style scoped>
nav {
    display: none;
}

.app_name_and_hamburger_menu {
    display: flex;
    align-items: center;
}

#menu_toggle {
    position: relative;
    z-index: 2;
    user-select: none;
    margin: 10px 20px 0 0;
}

#menu_toggle input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;
    cursor: pointer;
    opacity: 0; 
    z-index: 2;
    -webkit-touch-callout: none;
}

#menu_toggle > span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background-color: var(--gray-dark);
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                opacity 0.55s ease;
}

#menu_toggle > span:first-child {
    transform-origin: 0% 0%;
}

#menu_toggle > span:nth-last-child(2) {
    transform-origin: 0% 100%;
}

#menu_toggle input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background-color: var(--navy);
}

#menu_toggle input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
}

#menu_toggle input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
}

#menu {
    position: fixed;
    height: 200vh;
    width: 300px;
    margin: -100px 0 0 -50px;
    padding: 50px;
    padding-top: 125px;
    background-color: white;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    transform-origin: 0% 0%;
    transform: translate(-100%, 0);
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
}

#menu_toggle input:checked ~ ul {
    transform: none;
}

.overlay_section {
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.4);
}
</style>