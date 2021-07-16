<template>
  <div class="my_categories_nav_wrapper">
      <b>Catergories Navigation Bar</b>

      <div v-for="category in categories" :key="category">
        {{ category.name }}
      </div>

      <br>
  </div>
</template>

<script>
export default {
  props: {
    categories: Array
  }
}
</script>

<style>

</style>