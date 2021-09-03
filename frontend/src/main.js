import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGoogleMaps from "@fawmi/vue-google-maps";

createApp(App)
    .use(router)
    .use(store)
    .use(VueGoogleMaps, {
        load: {
          key: "AIzaSyApxazPDB6ZXfIKS4WZZsSiXjMYWInZxSQ"
        }
    })
    .mount("#app")