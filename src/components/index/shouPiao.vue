<template lang="html">
  <section class="shoupiao">
    <h1 class="shoupiao-title">
       正在售票
    </h1>
    <div class="shoupiao-list">
      <ul>
        <li v-for="k in shouPiaoList" :key="k.id">
          <div class="shoupiao-con">
            <router-link :to="{name:'Detail',query:{Id:k.movieId}}" :key="k.id">
                <img  v-lazy="k.img">
            </router-link>
            <span class="shoupiao-con-intro" v-if="k.ratingFinal>0">{{k.ratingFinal}}</span>
          </div>
          <h2 class="shoupiao-list-title ac">
            {{k.titleCn}}
          </h2>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { getShouPiao } from '@/api/getData'
import { Lazyload } from 'mint-ui';

  export default {

     created(){
      this._getShouPiao();
    },

    data () {
        return{
            shouPiaoList:'',
        }
    },

   

    methods:{
        _getShouPiao() {
            getShouPiao().then((res) => {
                this.shouPiaoList = res.movies
            });
        }
    },

  }


</script>

<style lang="less" scoped>
  @import '../../assets/fz.less';
  @import '../../assets/index/style.css';
  section.shoupiao{
      padding-bottom: 10px;
    border-bottom: 3px solid #ddd;
  }
  .shoupiao-title {
      .bt();
      background-color: #ffffff;
      text-align: left;
      padding: 2vw 4vw;
      .fz(font-size, 35);
      position: relative;

      i {
        position: absolute;
        right: 6vw;
        top: 50%;
        .fz(font-size, 36);
        .fz(margin-top,-16);

        &::before {
          color: rgb(159, 159, 159);
        }
      }
    }
 .shoupiao-list {
    overflow-x: auto;
    width: 100%;
    padding-top: 2vw;
    .pt();
    /*原生滑动*/
    -webkit-overflow-scrolling: touch;
    >ul {
      .bt();
     // display: -ms-flex;
      display: -webkit-box;
      display: -ms-flexbox;
      //display: flex;
      padding: 0 3vw;
      width: 380%;
      li {
        margin-right: 5vw;
        width: 28vw;
        .shoupiao-con{
            position: relative;
            span.shoupiao-con-intro{
                position: absolute;
                bottom: 0px;
                right: 0;
                background: #74ab34;
                width: 32px;
                height: 20px;
                text-align: center;
                line-height: 20px;
                color: #fff;
                font-size: 13px;
            }
        }
        a,
        img {
          display: block;
          width: 100%;
        }

        h2,
        p {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        h2 {
          .fz(font-size, 32);
          padding-top: 3vw;
          color: #333;
        }

      }
    }



  }

</style>
