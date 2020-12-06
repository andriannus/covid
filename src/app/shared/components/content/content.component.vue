<template>
  <div :class="contentClassNames">
    <div v-if="hasContentHeader" :class="contentHeaderClassNames">
      <slot name="contentHeader"></slot>
    </div>

    <div :class="contentBodyClassNames">
      <slot></slot>
    </div>

    <div v-if="hasContentFooter" :class="contentFooterClassNames">
      <slot name="contentFooter"></slot>
    </div>
  </div>
</template>

<script lang="ts" src="./content.component.ts"></script>
<style lang="scss" scoped src="./content.component.scss"></style>
