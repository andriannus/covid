<template>
  <app-fade>
    <div v-if="value" class="Dialog">
      <div class="Dialog-backdrop"></div>

      <div class="Dialog-box">
        <div class="Dialog-block">
          <slot></slot>
        </div>
      </div>
    </div>
  </app-fade>
</template>

<script lang="ts" src="./dialog.component.ts"></script>
