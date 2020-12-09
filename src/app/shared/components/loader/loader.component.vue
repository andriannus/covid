<template>
  <div>
    <div v-if="isLoading" class="Loader">
      <virus-logo class="Loader-logo"></virus-logo>
    </div>

    <slot v-else></slot>
  </div>
</template>

<script lang="ts" src="./loader.component.ts"></script>
<style lang="scss" scoped src="./loader.component.scss"></style>
