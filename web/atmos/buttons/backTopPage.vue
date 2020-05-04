<template>
  <NuxtLink to="/">
    <v-btn large depressed rounded color="primary" class="back-btn">
      トップページに戻る
    </v-btn>
  </NuxtLink>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class BackTopPageButton extends Vue {}
</script>

<style scoped></style>
