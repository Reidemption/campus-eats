<template>
    <div class="delivery_locations_page_wrapper">
        <router-link to="/" class="back_button">
            <div class="icon">
                <span class="material-icons">arrow_back</span>
            </div>
            <div class="name">Back</div>
        </router-link>

        <MyGoogleMap 
            :location_lists="location_lists"
            :center="center">
        </MyGoogleMap>
    </div>
</template>

<script>
import MyGoogleMap from "../components/MyGoogleMap.vue"

export default {
    components: {
        MyGoogleMap
    },
    data() {
        return {
            //! Default to the center of DSU campus
            center: { 
                lat: 37.10368, 
                lng: -113.56593
            }
        }
    },
    computed: {
        location_lists() {
            let all_campus_location_lists = this.$store.state.all_campus_location_lists;
            let location_lists = [];

            all_campus_location_lists.forEach(location => {
                if (location.type === "Delivery Location") {
                    location_lists.push(location);
                }
            });

            return location_lists;
        }
    }
}
</script>

<style scoped>
.delivery_locations_page_wrapper {
    height: 100vh;
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
    z-index: 1;
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
</style>