<template>
  <div>
    <button
      class="ButtonLanguage Button Button--primary Button--outlined Button--small Transform-uppercase"
      @click="toggleDialog"
    >
      {{ locale }}
    </button>

    <app-dialog v-model="state.isDialogShown">
      <button
        :class="{ 'Button--outlined': locale !== Locale.BahasaIndonesia }"
        class="Button Button--primary Button--fullWidth MarginBottom"
        @click="changeLanguage(Locale.BahasaIndonesia)"
      >
        Bahasa Indonesia (ID)
      </button>

      <button
        :class="{ 'Button--outlined': locale !== Locale.English }"
        class="Button Button--primary Button--fullWidth MarginBottom"
        @click="changeLanguage(Locale.English)"
      >
        English (EN)
      </button>

      <button
        class="Button Button--dark Button--fullWidth Button--small"
        @click="toggleDialog"
      >
        {{ t('buttonLanguage.close') }}
      </button>
    </app-dialog>
  </div>
</template>

<script lang="ts" src="./button-language.component.ts"></script>
<style lang="scss" scoped src="./button-language.component.scss"></style>
