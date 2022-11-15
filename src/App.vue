<template>
  <div id="app">
    <transition>
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  background-color: #F9F9F9;
  font-family: 'Inter';
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
