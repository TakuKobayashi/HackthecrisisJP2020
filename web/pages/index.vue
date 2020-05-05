<template>
  <div class="wrapper">
    <top-content />
    <spread-sheet-sample />
    <post-support-info />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TopContent from '~/components/top/topContent.vue';
import SpreadSheetSample from '~/components/top/spreadSheetSample.vue';
import PostSupportInfo from '~/components/top/postSupportInfo.vue';

@Component({
  components: {
    TopContent,
    SpreadSheetSample,
    PostSupportInfo
  }
})
export default class Index extends Vue {}
</script>
