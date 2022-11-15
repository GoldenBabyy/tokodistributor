<template>
  <Component
    :is="componentType"
    type="button"
    :tabindex="focusIndex"
    class="button"
    :class="buttonClasses"
    @click="click">
    <slot />
  </Component>
</template>

<script src="./js/button.js"></script>
<style lang="scss" scoped>
  @import './scss/button';
</style>
