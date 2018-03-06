<template lang="html">
  <section class="section4">
    <div class="sm-banner">
    <router-link :to="{ name: 'Index'}"  >
          <img v-lazy="'http://img5.mtime.cn/mg/2018/01/23/095857.65140112.jpg'">
      </router-link>
    </div>
    <h2 class="section4-title">
      影院热映
      <router-link :to="{name:'HotList'}">
            更多 <i class="icon-right"></i>
      </router-link>
       
    </h2>
    <ul class="section4-list">
       <li v-for="k in hotList">
        <router-link :to="{name:'Detail',query:{Id:k.id}}" :key="k.id">
          <img v-lazy="k.img">
          <p>{{k.movieType}}</p>
        </router-link>
        <h3>{{k.tCn}}</h3>
        <h5><span v-if="k.r > 1">{{k.r}}</span> <span v-else style="color:#74ab34;font-size: 15px;">暂无评分</span></h5>
      </li>
    </ul>
  </section>
</template>

<script>
import { getHotList } from "@/api/getData";
import { Lazyload } from "mint-ui";
export default {

  created() {
    this._getHotList();
  },
  
  data() {
    return {
      hotList: ""
    };
  },

  

  methods: {
    _getHotList() {
      getHotList().then(res => {
        this.hotList = res.ms;
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/fz.less";
@import "../../assets/index/style.css";

.section4 {
  width: 100%;
  overflow: hidden;
  .pt();
  .section4-title {
    .bt();
    text-align: left;
    .fz(font-size, 35);
    padding: 2vw 0;
    margin: 4vw 4vw;
    position: relative;
    background-color: #ffffff;
        border-bottom: 1px solid #ddd;
    a {
position: absolute;
    right: 0vw;
    font-size: 16px;
    top: 9px;
    color: #74ab34;
    }
  }

  .section4-list {
    width: 100%;
    display: -ms-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    overflow: hidden;
    li {
      width: 33%;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      padding: 0 3vw;
      margin-bottom: 10px;
      > a {
        display: block;
        width: 100%;
        position: relative;
        img {
          display: block;
          width: 100%;
        }
        p {
          font-size: 10px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background-color: #1e7dd7;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          padding: 1.2vw 2vw;
          color: #fff;
        }
      }

      > h3 {
        padding-top: 1vw;
        position: relative;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        .fz(font-size,30);
        margin-bottom: 0;
        span {
          position: absolute;
          right: 1vw;
          font-size: 12px;
          color: #f77603;
          top: 3.5vw;
        }
      }
    }
  }

  .sm-banner {
    img {
      width: 100%;
    }
  }
}
</style>
