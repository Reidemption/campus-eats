<template>
  <div class="app_wrapper">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --red     : hsl(358, 74%, 42%);
  --red-dark: hsl(358, 73%, 31%);
  --gray    : hsl(355, 7%, 65%);
  --navy    : hsl(212, 68%, 15%);
}
</style>
