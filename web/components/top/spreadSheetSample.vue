<template>
  <section>
    <a
      href="https://docs.google.com/spreadsheets/d/1g3FVspY09I1qf6xABN8Xoz2JG-8O_zRYjVDq0mEpceM/edit?usp=sharing"
    >
      <v-btn large depressed rounded color="primary" class="back-btn">
        Google Spreadsheetで表示
      </v-btn>
    </a>
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
