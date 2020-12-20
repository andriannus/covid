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
        class="Button Button--primary Button--outlined Button--fullWidth MarginBottom"
        @click="setLocale('id')"
      >
        Bahasa Indonesia
      </button>

      <button
        class="Button Button--primary Button--outlined Button--fullWidth MarginBottom"
        @click="setLocale('en')"
      >
        English
      </button>

      <button
        class="Button Button--primary Button--fullWidth"
        @click="toggleDialog"
      >
        {{ t('buttonLanguage.close') }}
      </button>
    </app-dialog>
  </div>
</template>

<script lang="ts" src="./button-language.component.ts"></script>
<style lang="scss" scoped src="./button-language.component.scss"></style>
