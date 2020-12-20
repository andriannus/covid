<template>
  <div class="TopBar">
    <div class="TopBar-wrapper">
      <router-link class="TopBar-logo" to="/">
        <covid-logo></covid-logo>
      </router-link>

      <div class="TopBar-actions">
        <div class="TopBar-action">
          <app-button-language></app-button-language>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./top-bar.component.ts"></script>
<style lang="scss" scoped src="./top-bar.component.scss"></style>
