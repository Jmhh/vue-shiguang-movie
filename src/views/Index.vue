<template>
  <div>
      <v-header></v-header>
      <v-shoupiao></v-shoupiao>
      <v-hotMovie></v-hotMovie>
      <v-footer></v-footer>
  </div>
</template>
<script>

import Header from '@/common/header'
import Footer from '@/common/footer'
import Shoupiao from '@/components/index/shoupiao'
import HotMovie from '@/components/index/hotMovie'
export default {
  data () {
    return {
        datas:'',
    };
  },
  components:{
      'v-header': Header,
      'v-footer': Footer,
      'v-shoupiao': Shoupiao,
      'v-hotMovie': HotMovie,
  },
}
</script>
<style lang="css" scoped>
</style>