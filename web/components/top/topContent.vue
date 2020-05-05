<template>
  <section class="top-content">
    <div class="top-content-inner">
      <h2>飲食店情報まとめ</h2>
      <v-select :items="items" outlined label="都道府県を選択して下さい" />
      <img src="@/assets/images/icons/line.svg" alt="logo" />
      <a
        href="https://e9vckioijb.execute-api.ap-northeast-1.amazonaws.com/production/line/notify/auth"
      >
        <v-btn large depressed rounded color="#00c300" class="back-btn">
          お知らせ登録
        </v-btn>
      </a>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class TopContent extends Vue {
  items: string[] = ['Foo', 'Bar', 'Fizz', 'Buzz'];
  model: string = 'Foo';
}
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
h2 {
  margin-bottom: 24px;
  font-size: 5em;
  text-align: center;
  font-weight: 300;
  color: '#000000';
}
.top-content {
  position: relative;
  padding: 64px 0;
  background-image: url('../../assets/images/backgrounds/large/two-men-in-izakaya.png');
  background-size: cover;
  background-position: 50%;
}
.top-content-inner {
  width: 1140px;
  margin: 0 auto;
  padding: 0 30px;
}
.top-content::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.5);
}
@media screen and (max-width: 599px) {
  section {
    margin-bottom: 40px;
  }
  h2 {
    margin-bottom: 8px;
    font-size: 2.6em;
  }
  .top-content {
    padding: 24px 0;
  }
  .top-content-inner {
    width: 100%;
    padding: 24px 16px;
  }
}
</style>
