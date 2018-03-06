<template>
  <div>
        <ul class="hotlist">
             <li v-for="k in comingList">
               <router-link :to="{name:'Detail',query:{Id:k.id}}">
                <div  class="item">
                  <div  class="info-img">
                    <img height="120" width="80" v-lazy="k.image">
                  </div>
                  <div class="info-desc">
                      <p  class="title">
                        {{k.title}}
                        <em class="score" v-if="k.r>0"><i>{{k.r}}</i></em>
                      </p>
                      <div  class="rData" v-if="k.releaseDate">
                        {{k.releaseDate}}
                      </div>
                      <div  class="casts">
                        {{k.actor1}}/{{k.actor2}}
                      </div>
                      <div  class="hasWatched">
                        {{k.type}}
                      </div>
                  </div>
                </div>
                </router-link>
             </li>
       </ul>
  </div>
</template>
<script>
import { getComingList } from "@/api/getData";
export default {
  created() {
    this._getComingList();
  },

  data() {
    return {
      comingList: ""
    };
  },

  methods: {
    _getComingList() {
      getComingList().then(res => {
        this.comingList = res.moviecomings;
      });
    }
  }
};
</script>
<style lang="less" scoped>
ul.hotlist {
  padding: 0 0 0 1em;
  li {
    border-bottom: 1px solid #ddd;
  }
  .item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    box-sizing: border-box;
    padding: 15px 0;
    .info-img {
      -webkit-box-flex: 80px;
      -ms-flex: 80px 0 0px;
      flex: 80px 0 0;
      margin-right: 10px;
    }
    .info-desc {

      height: 120px;
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      -ms-flex-pack: distribute;
      justify-content: space-around;
      overflow: hidden;
      .rData{
        color: #ff8600;
       font-weight: bold;
      }
      .director {
        color: #659d0e;
        font-size: 16px;
        position: relative;
        padding-left: 23px;
        
      }
      .director:before {
          left: 0px;
          top: -10px;
          color: #659d0e;
          content: "\201C";
          font-size: 55px;
          font-style: normal;
          line-height: 1;
          position: absolute;
        }
      .casts {
        font-size: 13px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .hasWatched {
        color: #999;
        font-size: 12px;
      }
      p.title {
        font-size: 17px;
        color: #222;
        font-weight: 600;
        em.score {
          background: #ff8600;
          width: 1.6em;
          height: 1.5em;
          color: #fff;
          display: inline-block;
          vertical-align: middle;
          overflow: hidden;
          line-height: 1.5em;
          text-align: center;
          border-radius: 2px;
          margin-left: 0.5em;
          i {
            font-size: 0.9em;
          }
        }
      }
    }
  }
}
</style>