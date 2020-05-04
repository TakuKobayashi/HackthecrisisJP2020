<template>
  <v-app>
    <header>
      <Header />
    </header>
    <v-content class="content">
      <v-container class="layout-container" fluid>
        <nuxt />
      </v-container>
    </v-content>
    <footer>
      <Footer />
    </footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from '~/components/layout/header.vue'
import Footer from '~/components/layout/footer.vue'

@Component({
  components: {
    Header,
    Footer
  }
})
export default class Default extends Vue {}
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  font-size: 62.5%;
  color: #2c2c2b;
}
.layout-container {
  padding: 0;
  width: 100%;
}
header {
  z-index: 999;
  font-size: 62.5%;
}
footer {
  font-size: 62.5%;
}
.wrapper {
  padding-top: 56px;
}
@media screen and (max-width: 599px) {
  .content {
    margin: 0 auto;
  }
}
@media screen and (max-width: 959px) {
  .wrapper {
    padding-top: 40px;
  }
}
* :not(.v-icon) {
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Yu Gothic',
    YuGothic, Verdana, Meiryo, sans-serif;
}
</style>
