<template>
  <div>
      <div class="hot">
        <mt-navbar v-model="selected">
          <mt-tab-item id="1">
            <router-link to="/hot">
                  正在热映
              </router-link>
          </mt-tab-item>
          <mt-tab-item id="2">
            <router-link to="/hot/cominglist">
                   即将上线
              </router-link>
           </mt-tab-item>
        </mt-navbar>
      </div>
      
      
      <router-view></router-view>
      <v-footer></v-footer>
  </div>
</template>
<script>
import Footer from '@/common/footer'
export default {
  data () {
    return {
      selected:'1',
    };
  },
  components:{
    'v-footer': Footer,
  }
}
</script>
<style lang="less" scoped>
.mint-tab-item-label{
  font-size: 15px;
}
.mint-navbar{
  background-color: #1c2635;
}
.mint-tab-item-label a{
  color: #bbb;
    font-size: 16px;
}
a.router-link-exact-active.router-link-active {
    color: #fff;
    padding: 12px 30px;
    background: #89b446;
    border-radius: 20px;
}
.mint-navbar .mint-tab-item.is-selected{
      border-bottom: none;
}
</style>