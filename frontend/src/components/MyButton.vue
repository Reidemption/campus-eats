<template>
  <div class="my_button_wrapper"><slot></slot></div>
</template>

<style scoped>
.my_button_wrapper {
    padding: 15px 35px;
    border: 1px solid var(--red);
    background-color: var(--red);
    border-radius: 25px;
    width: fit-content;
    cursor: pointer;
}

.my_button_wrapper:hover {
    cursor: pointer;
    border: 1px solid var(--yellow);
    background-color: var(--yellow);
    color: var(--navy);
}

@media only screen and (max-width: 1650px) {
  .my_button_wrapper {
    padding: 11px 35px;
  }
}
</style>