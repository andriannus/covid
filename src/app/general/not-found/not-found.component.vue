<template>
  <app-content :has-top-bar="false" padding="base">
    <app-card>
      <app-icon class="MarginBottom" icon="exclamation" size="3x"></app-icon>

      <h1 class="FontSize-large FontWeight-medium">
        Halaman yang kamu cari tidak ditemukan.
      </h1>
    </app-card>

    <template #contentFooter>
      <router-link class="Button Button--primary Button--fullWidth" to="/">
        Kembali ke Beranda
      </router-link>
    </template>
  </app-content>
</template>

<script lang="ts" src="./not-found.component.ts"></script>
<style lang="scss" scoped src="./not-found.component.scss"></style>
