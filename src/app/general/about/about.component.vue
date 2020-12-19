<template>
  <app-content :has-top-bar="false" padding="base">
    <app-card>
      <h1 class="FontSize-large FontWeight-medium">Tentang aplikasi ini</h1>

      <div class="MarginTop">
        <p class="FontWeight-semibold">Sumber data</p>
        <span>
          Data berasal dari API yang dikembangkan oleh

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
        <p class="FontWeight-semibold">Icon pada aplikasi</p>
        <span>
          Icon pada aplikasi baik itu berupa PNG atau SVG, berasal dari

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
        Beranda
      </router-link>
    </template>
  </app-content>
</template>

<script lang="ts" src="./about.component.ts"></script>
