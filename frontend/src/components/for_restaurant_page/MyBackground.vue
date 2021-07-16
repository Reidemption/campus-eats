<template>
    <div class="my_back_ground_wrapper">
        <img :src="require(`../../assets_main/${background_image}`)" :alt="name">

        <div class="overlay_section">
            <div class="back_button">
                <div class="icon">
                  
                </div>
                <p>Back</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    name: String,
    background_image: String
  }
}
</script>

<style scoped>
.my_back_ground_wrapper {
    position: relative;
}

img {
    width: 100%;
}
</style>