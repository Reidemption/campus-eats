<template>
  <div class="my_button_wrapper"><slot></slot></div>
</template>

<style scoped>
.my_button_wrapper {
    padding: 15px 35px;
    border: 1px solid white;
    border-radius: 25px;
    width: fit-content;
}

.my_button_wrapper:hover {
    border: 1px solid var(--yellow);
    color: var(--yellow);
    cursor: pointer;
}
</style>