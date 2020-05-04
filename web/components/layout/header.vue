<template>
  <header>
    <v-card class="header" color="#DCDCDC" flat tile>
      <nuxt-link to="/" target="_self">
        <v-card-title class="logo hidden-xs-only">
          <img src="" alt="title" height="" />
        </v-card-title>
        <v-card-title class="logo-left hidden-sm-and-up">
          <img src="" alt="title" height="" />
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
.logo {
  justify-content: center;
}
.logo-left {
  justify-content: left;
}
</style>
