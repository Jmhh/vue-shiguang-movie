<template>
  <header>
       <div class="ih">
         时光网
       </div>
       <mt-search
        v-model="value"
        cancel-text="坖消"
        placeholder="搜索">
      </mt-search>
  </header>
</template>
<script>
import { Swipe, SwipeItem } from 'mint-ui';
export default {
  data () {
    return {
      value:'',
    };
  }
}
</script>
<style style lang="less" scoped>
header{
  height:100px;
}
h1.mint-header-title{
    font-size: 18px !important;
}
.ih {
    background: #1c2635;
    text-align: center;
    color: #fff;
    font-size: 18px;
    line-height: 45px;
    height: 45px;
  img {
max-height: 50%;
    padding: 3vw;
  }
  span {
display: inline-block;
    color: #fff;
    font-size: 17px;
    padding-top: 4vw;
    padding-left: 6vw;
  }
}
</style>