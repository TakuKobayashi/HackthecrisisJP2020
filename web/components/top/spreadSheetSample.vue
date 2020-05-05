<template>
  <section>
    <nuxt-link to="/">
      <v-btn large depressed rounded color="primary" class="back-btn">
        Google Spreadsheetで表示
      </v-btn>
    </nuxt-link>
  </section>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class spreadSheetSample extends Vue {}
</script>
<style scoped>
section {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
</style>
