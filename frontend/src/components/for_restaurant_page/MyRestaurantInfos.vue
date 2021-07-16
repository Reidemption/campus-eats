<template>
  <div class="my_restaurant_infos">
      <b>Restaurant Information</b>
      <br>
      {{ description }}
      <br>
      {{ location }}
      <br>
      <br>
  </div>
</template>

<script>
export default {
  props: {
    description: String,
    location: String
  }
}
</script>

<style>

</style>