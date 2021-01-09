<template>
  <app-loader :is-loading="state.isLoading">
    <div class="Landing">
      <app-top-bar></app-top-bar>

      <app-page>
        <app-card
          :borderless="true"
          class-name="MarginBottom"
          :radiusless="true"
        >
          <div class="TextAlign-center">
            <h1 class="FontSize-2xlarge">{{ t('landing.title') }}</h1>
          </div>
        </app-card>

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
              <small>{{ t('landing.confirmed') }}</small>
            </p>

            <span class="FontSize-xlarge FontWeight-semibold">
              {{ confirmed }}
            </span>
          </div>

          <div class="MarginBottom">
            <p>
              <small>{{ t('landing.recovered') }}</small>
            </p>

            <span class="FontSize-xlarge FontWeight-semibold">
              {{ recovered }}
            </span>
          </div>

          <div>
            <p>
              <small>{{ t('landing.deaths') }}</small>
            </p>

            <span class="FontSize-xlarge FontWeight-semibold">
              {{ deaths }}
            </span>
          </div>
        </app-card>

        <app-card
          :borderless="true"
          class-name="MarginBottom"
          :radiusless="true"
        >
          <h3 class="FontWeight-medium FontSize-large MarginBottom">
            {{ t('landing.lastUpdate') }}
          </h3>

          <span>{{ lastUpdate }}</span>
        </app-card>
      </app-page>

      <app-dialog v-model="state.didSomethingWrong">
        <div class="TextAlign-center">
          <p class="FontSize-large MarginBottom">Something wrong.</p>

          <button
            class="Button Button--primary Button--rounded"
            type="button"
            @click="fetchCovidData"
          >
            Refresh
          </button>
        </div>
      </app-dialog>

      <app-bottom-bar></app-bottom-bar>
    </div>
  </app-loader>
</template>

<script lang="ts" src="./landing.component.ts"></script>
<style lang="scss" scoped src="./landing.component.scss"></style>
