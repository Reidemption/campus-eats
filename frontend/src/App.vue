<template>
    <router-view/>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Varela Round', sans-serif;
  }
  :root {
    --yellow   : hsl(60, 83%, 62%);
    --red      : hsl(358, 90%, 42%);
    --red-dark : hsl(358, 73%, 31%);
    --gray     : hsl(0, 0%, 94%);
    --gray-fade: hsl(0, 0%, 77%);
    --gray-dark: hsl(355, 4%, 45%);
    --navy     : hsl(213, 68%, 15%);
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
      width: 12px;
  }

  ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px var(--gray-dark); 
      border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
      background: var(--gray-fade); 
      border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
      background: var(--gray-dark); 
  }
</style>
