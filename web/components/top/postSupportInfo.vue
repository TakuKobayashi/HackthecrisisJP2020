<template>
  <section>
    <div class="register-inner">
      <div class="register-bg">
        <h2>登録お待ちしております</h2>
        <p class="description">
          地方自治体が主体となっている飲食店経営者向けの支援情報をまとめました。
          <br />
          新たな支援情報がありましたら下記フォームよりご登録お願いします。
        </p>
      </div>
      <br />
      <nuxt-link to="/register">
        <v-btn large depressed rounded color="primary" class="btn">
          登録フォームへ
        </v-btn>
      </nuxt-link>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class PostSupportInfo extends Vue {}
</script>

<style scoped>
section {
  display: flex;
  justify-content: center;
  margin-bottom: 64px;
}
p {
  margin: 0;
  text-align: center;
}
.description {
  font-size: 1.4em;
  line-height: 1.5rem;
}
h2 {
  margin-bottom: 24px;
  font-size: 3em;
  text-align: center;
  font-weight: 300;
  color: var(--v-primary-base);
}
.register-inner {
  width: 1140px;
  margin: 0 auto;
  padding: 0 30px;
}
.btn {
  margin: 0 auto;
  align-self: center;
  display: flex;
  justify-content: center;
}
</style>
