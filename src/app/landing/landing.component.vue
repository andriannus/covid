<template>
  <div>
    <app-top-bar></app-top-bar>

    <app-page>
      <app-content>
        <template #contentHeader>
          <app-card :borderless="true" :radiusless="true">
            <div class="TextAlign-center">
              <h1 class="FontSize-2xlarge">Virus Corona (COVID-19)</h1>
            </div>
          </app-card>
        </template>

        <app-card
          :borderless="true"
          class-name="MarginBottom"
          :radiusless="true"
        >
          <h2 class="FontWeight-medium FontSize-xlarge MarginBottom">
            Indonesia
          </h2>

          <div class="MarginBottom">
            <p>
              <small>Total Kasus</small>
            </p>

            <span class="FontSize-xlarge FontWeight-semibold">
              {{ confirmed }}
            </span>
          </div>

          <div class="MarginBottom">
            <p>
              <small>Sembuh</small>
            </p>

            <span class="FontSize-xlarge FontWeight-semibold">
              {{ recovered }}
            </span>
          </div>

          <div>
            <p>
              <small>Meninggal</small>
            </p>

            <span class="FontSize-xlarge FontWeight-semibold">
              {{ deaths }}
            </span>
          </div>
        </app-card>

        <app-card :borderless="true" :radiusless="true">
          <h3 class="FontWeight-medium FontSize-large MarginBottom">
            Terakhir diperbarui
          </h3>

          <span>{{ lastUpdate }}</span>
        </app-card>
      </app-content>
    </app-page>

    <app-bottom-bar></app-bottom-bar>
  </div>
</template>

<script lang="ts" src="./landing.component.ts"></script>
<style lang="scss" scoped src="./landing.component.scss"></style>
