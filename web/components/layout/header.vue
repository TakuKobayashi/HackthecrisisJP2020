<template>
  <header>
    <v-card class="header" color="#DCDCDC" flat tile>
      <nuxt-link to="/" target="_self">
        <v-card-title class="title hidden-xs-only">
          <img src="@/assets/images/icons/shakehands.svg" alt="logo" />
          <h2>飲食店支援情報まとめ</h2>
        </v-card-title>
        <v-card-title class="title-left hidden-sm-and-up">
          <img src="@/assets/images/icons/shakehands.svg" alt="logo" />
          <h3>飲食店支援情報まとめ</h3>
        </v-card-title>
      </nuxt-link>
    </v-card>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Header extends Vue {}
</script>

<style scoped>
header {
  background-color: #f5d1d9;
  z-index: 999;
  font-size: 62.5%;
}
.title {
  justify-content: center;
}
.title-left {
  justify-content: left;
}
</style>
