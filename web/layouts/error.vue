<template>
  <div class="wrapper">
    <div v-if="error.statusCode === 404" class="404">
      <h1>
        {{ pageNotFound }}
      </h1>
      <p>
        該当ページが削除されたか、移動した可能性がございます
      </p>
    </div>
    <div v-else class="other">
      <h1>
        {{ otherError }}
      </h1>
      <p>
        お手数をお掛けするのですが、しばらくしてからもう一度お試し下さい
      </p>
    </div>
    <back-top-page-button />
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';
import { NuxtError } from '@nuxt/types';
import BackTopPageButton from '~/atmos/buttons/backTopPage.vue';

@Component({
  layout: 'empty',
  head(this: Error): object {
    return {
      title: this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    };
  },
  components: {
    BackTopPageButton
  }
})
export default class Error extends Vue {
  @Prop({ type: Object, required: true, default: null })
  error!: NuxtError;

  pageNotFound: string = 'お探しのページが見つかりません';
  otherError: string = 'エラーが発生しました';
}
</script>

<style scoped>
.wrapper {
  max-width: 720px;
  padding: 0;
  margin: 0 auto;
  text-align: center;
}
h1 {
  margin-bottom: 20px;
  font-size: 3.2em;
  font-weight: 300;
  color: var(--v-primary-base);
}
p {
  margin: 0;
}
.wrapper p {
  margin-bottom: 20px;
  font-size: 1.6em;
  line-height: 1.8;
  font-weight: 500;
}
@media screen and (max-width: 599px) {
  .wrapper {
    padding: 0 16px;
  }
  h1 {
    font-size: 2.8em;
    margin-bottom: 24px;
  }
  .wrapper p {
    font-size: 1.5em;
  }
}
</style>
