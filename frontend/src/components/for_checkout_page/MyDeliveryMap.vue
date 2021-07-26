<template>
    <div class="my_delivery_map_wrapper">
        <iframe :src="map" allowfullscreen="" loading="lazy"></iframe>

        <img src="../../assets_others/loading.gif" alt="Loading gif">
    </div>
</template>

<script>
export default {
    props: {
        main_restaurant_paths: Array
    },
    data() {
        return {
            map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3182.115087344501!2d-113.56902643442095!3d37.10237785833036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x80ca5b9f9be09795%3A0x757b98363308137f!2sChick-fil-A%2C%20Gardner%20Center%2C%20South%20700%20East%2C%20St.%20George%2C%20UT!3m2!1d37.1036205!2d-113.5660187!4m5!1s0x80ca5b2a08264067%3A0x89cd12e393b7cb19!2sSmith%20Computer%20Center%2C%20225%20S%20700%20E%2C%20St.%20George%2C%20UT%2084770!3m2!1d37.1011267!2d-113.56777539999999!5e0!3m2!1sen!2sus!4v1626751512455!5m2!1sen!2sus"
        }
    }
}
</script>

<style scoped>
.my_delivery_map_wrapper {
    margin: 0 40px;
    position: relative;
}

iframe {
    width: 100%;
    height: 300px;
    border: 0;
}

img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    animation-name: disappears_after_2s;
    animation-duration: 5s;
    animation-fill-mode: forwards;
}

@keyframes disappears_after_2s {
    0% {
      opacity: 0.5;
      z-index: 1;
    }
    100% {
      opacity: 0;
      z-index: -1;
    }
}
</style>