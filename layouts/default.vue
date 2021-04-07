<template>
<div>
  <van-nav-bar
    :title="title"
    left-arrow
    @click-left="onBack"
  >
    <template #right>
      <van-icon name="smile-o" @click="onOpenUser" size="18px" />
    </template>
    <template #left>
      <van-icon name="arrow-left" @click="onBack" size="18px" />
    </template>
  </van-nav-bar>
  <div class="page">
    <Nuxt />
  </div>
</div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  computed: {
    title () {
      console.log(this.$route.path)
    }
  },
  methods: {
    /**
     * 后退
     * @return {void}
     */
    onBack () {

    },

    /**
     * 打开用户抽屉
     * @return {void}
     */
    onOpenUser () {

    }
  }
});
</script>
