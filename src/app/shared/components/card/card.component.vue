<template>
  <div :class="cardClassNames">
    <div v-if="hasCardHeader" class="Card-header">
      <slot name="cardHeader"></slot>
    </div>

    <div class="Card-body">
      <slot></slot>
    </div>

    <div v-if="hasCardFooter" class="Card-footer">
      <slot name="cardFooter"></slot>
    </div>
  </div>
</template>

<script lang="ts" src="./card.component.ts"></script>
<style lang="scss" scoped src="./card.component.scss"></style>
