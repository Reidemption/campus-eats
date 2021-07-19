import App from './App.vue'
import router from './router'
import { store } from './store/store'

new Vue({
    el: "#app",
    router,
    store: store,
    components: {
        App
    }
})