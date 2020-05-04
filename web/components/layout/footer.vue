<template>
  <v-footer color="secondary" padless>
    <v-row no-gutters class="footer">
      <v-col class="darken-4 py-4 text-center white--text" cols="12">
        <div class="footer-inner">
          <p class="footer-copyright">
            <strong>&copy;2020</strong>
          </p>
        </div>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Footer extends Vue {}
</script>

<style scoped>
p {
  margin: 0;
}
.footer a {
  text-decoration: none;
}
.footer p {
  color: white;
}
.footer-inner {
  width: 1140px;
  margin: 0 auto;
  padding: 0;
}
.footer-copyright {
  font-size: 2em;
}
@media screen and (max-width: 959px) {
  .footer-inner {
    width: 100%;
  }
}
</style>
