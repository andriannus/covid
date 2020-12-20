<template>
  <app-content :has-top-bar="false" padding="base">
    <app-card>
      <h1 class="FontSize-large FontWeight-medium">
        {{ t('about.title') }}
      </h1>

      <div class="MarginTop">
        <p class="FontWeight-semibold">{{ t('about.source.title') }}</p>

        <span>
          {{ t('about.source.description') }}

          <a
            href="http://https://github.com/mathdroid/covid-19-api"
            target="_blank"
            rel="noopener noreferrer"
          >
            mathdroid
          </a>
        </span>
      </div>

      <div class="MarginTop">
        <p class="FontWeight-semibold">{{ t('about.icon.title') }}</p>
        <span>
          {{ t('about.icon.description') }}

          <a
            href="https://www.flaticon.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Flaticon
          </a>
        </span>
      </div>
    </app-card>

    <template #contentFooter>
      <router-link class="Button Button--primary Button--fullWidth" to="/">
        {{ t('about.button') }}
      </router-link>
    </template>
  </app-content>
</template>

<script lang="ts" src="./about.component.ts"></script>
