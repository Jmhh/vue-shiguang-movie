<template lang="html">
  <!-- gotoRouter:点击后路由跳转到与id名相同的route.name所对应的路径 -->
  <footer class="footer" @click.stop='gotoRouter'>
    <mt-tabbar v-model="selected" fixed>
    <mt-tab-item id="Index">
      <i slot="icon" class="icon-index"></i>
        首页
    </mt-tab-item>
    <mt-tab-item id="HotList">
      <i slot="icon" class="icon-category"></i>
       热映
    </mt-tab-item>
    <mt-tab-item id="User">
      <i slot="icon" class="icon-user"></i>
       我的
    </mt-tab-item>
  </mt-tabbar>
  </footer>
</template>

<script>
  export default {
    methods: {
      gotoRouter() {
        this.$router.push({
          name: this.selected
        })
      }
    },
    data() {
      return {
        //对应mt-tab-item 的id值
        selected: ''
      }
    },
    mounted() {

      //获取当前路由名称，根据该名称给当前footer添加is-selected
      let Rname = this.$route.name;
      switch (Rname) {
        case 'Index':
          this.selected = 'Index';
          break;
        case 'HotList':
          this.selected = 'HotList';

          break;
        case 'Car':
          this.selected = 'Car';

          break;
        case 'User':
          this.selected = 'User';
          break;
      }
    }

  }
</script>

<style lang="less" scoped>
  @import '../assets/fz.less';
  @import '../assets/index/style.css';

.mint-tab-item-label:hover {
  color:#333;

}
  .footer {


    .mint-tabbar {
      background-color: #fff;
      background-image: none;
      box-shadow: 0 0 2.2vw 0 hsla(0, 6%, 50%, .13);
      -webkit-box-shadow: 0 0 2.2vw 0 hsla(0, 6%, 50%, .13);
      .is-selected {
        color: @cl;
        background-color: #fff;
        i {
          &::before {
            color: @cl;
          }
        }
      }
      i {
        .fz(font-size, 42);
      }
    }
  }
</style>
