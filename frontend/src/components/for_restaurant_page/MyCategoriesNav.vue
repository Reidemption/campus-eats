<template>
  <div class="my_categories_nav_wrapper">
      <div class="nav_item" v-for="category in categories" :key="category">
        {{ category.name }}
      </div>
  </div>
</template>

<script>
export default {
  props: {
    categories: Array
  }
}
</script>

<style scoped>
.my_categories_nav_wrapper {
    margin: 10px 40px 0;
    display: flex;
    border-bottom: 1px solid var(--gray-fade);
    height: 70px;
}

.nav_item {
    padding: 20px 0 25px 0;
    margin-right: 40px;
    font-size: 19px;
    color: var(--navy);
}

.nav_item:last-child {
    margin-right: 0;
}

.nav_item:hover {
    cursor: pointer;
    border-bottom: 2px solid var(--navy);
}
</style>