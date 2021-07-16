<template>
  <div class="my_back_ground_wrapper">
      <b>Background Section</b>
      <br>
      {{ name }}
      <br>
      {{ background_image }}
      <br>
      <br>
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

<style>

</style>