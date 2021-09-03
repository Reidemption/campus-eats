<template>
    <GMapMap class="my_google_map_wrapper"
        :center="center" 
        :zoom="17" 
        map-type-id="terrain">
            <GMapMarker v-for="location in location_lists" :key="location.info_window_name"
                :position="location.position" 
                :clickable="true" 
                :draggable="false"
                :icon="location.icon"
                @mouseover="view_info_window(location)"
                @mouseout="hide_info_window(location)">

                    <GMapInfoWindow v-if="location.show_info_window">
                        <div>{{ location.info_window_name }}</div>
                    </GMapInfoWindow>
            </GMapMarker>
    </GMapMap>
</template>

<script>
export default {
    props: {
        location_lists: Array,
        center: Object
    },
    mounted() {
        this.check_location_marker_icon();
    },
    methods: {
        view_info_window(location) {
            location.show_info_window = true;
        },
        hide_info_window(location) {
            location.show_info_window = false;
        },
        check_location_marker_icon() {
            let counter = 0;
            this.location_lists.forEach(location => {
                if (location.type === "Delivery Location") {
                    counter += 1;
                }
            });

            if (counter !== this.location_lists.length) {
                this.location_lists.forEach(location => {
                    if (location.type === "Delivery Location") {
                        location.icon = 'http://maps.google.com/mapfiles/ms/icons/grn-pushpin.png'
                    }
                    else if (location.type === "Dining Location") {
                        location.icon = '';
                    }
                });
            }
        }
    }
}
</script>

<style scoped>
.my_google_map_wrapper {
    width: 100%;
    height: 100%;
}
</style>