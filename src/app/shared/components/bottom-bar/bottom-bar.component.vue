<template>
  <div class="BottomBar">
    <ul class="BottomBar-menu">
      <li class="BottomBar-menuItem">
        <router-link class="Flex-column" to="/">
          <app-icon icon="home" size="lg"></app-icon>
          <span>Home</span>
        </router-link>
      </li>

      <li class="BottomBar-menuItem">
        <router-link class="Flex-column" to="/about">
          <app-icon icon="info-circle" size="lg"></app-icon>
          <span>About</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" src="./bottom-bar.component.ts"></script>
<style lang="scss" scoped src="./bottom-bar.component.scss"></style>
