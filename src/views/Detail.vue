<template>
<div>
  <div class="detail-cont">
      <span class="icon-go" @click="$router.go(-1)"></span>
      <div class="bg" :style="{backgroundImage: 'url(' + movieDetail.img+ ')'}" >
       
      </div>
      <article class="cont-box">
          <div class="box-pic">
             <img :src="movieDetail.img" alt="">
          </div>
          <div class="box-txt">
             <h3>{{movieDetail.name}}</h3>
             <em>{{movieDetail.nameEn}}</em>
             <ul>
               <li> <p>{{movieDetail.mins}}</p> </li>
                <li> 
                   <span>{{movieDetail.type}}</span> 
                </li>
               <li> <p>{{movieDetail.releaseDate}} - {{movieDetail.releaseArea}}上映</p> </li>
             </ul>
             <div>
                <mt-button type="primary" plain>我想看</mt-button>
                <mt-button type="danger" plain>看过</mt-button>
             </div>
          </div>
              
          
      </article>
      <div class="comm">
           <p v-if="movieDetail.commentSpecial"> <span>{{movieDetail.commentSpecial}}</span></p> 
           <div class="boxOffice">
               <tbody>
                <tr>
                  <td class="ol">{{movieBox.ranking}}</td>
                  <td class="ol">{{movieBox.todayBoxDes}}</td>
                  <td class="ol">{{movieBox.totalBoxDes}}</td>
                </tr>
                <tr>
                   <td>票房排名</td>
                   <td>{{movieBox.todayBoxDesUnit}}</td>
                  <td>{{movieBox.totalBoxUnit}}</td>
                </tr>
              </tbody>
           </div>
      </div>
      <div class="fix"></div>
      <div class="des-box">
         <p><b>剧情</b>： {{movieDetail.story}}</p>
      </div>
     <div class="potos">
         <h3>电影剧照</h3>
         <ul>
           <li v-for="p in moviePoto">
             <img :src="p.imgUrl" style="width:85px;height:85px" alt="">
           </li>
         </ul>
      </div>
、

      <v-actors :actors="movieDetail.actors"></v-actors>
      <v-comment :movieComment="movieComment" :movieTotalCount="movieTotalCount"></v-comment>
    </div>
    <v-footer></v-footer>
  </div>
</template>
<script>
import Footer from "@/components/detail/footer";
import Actors from "@/components/detail/actors";
import Comment from "@/components/detail/comment";
import { getDetail,getComment } from "@/api/getData";
import { mapMutations,mapActions } from 'vuex'
export default {
  created() {
    this.movieId = this.$route.query.Id; //获取路由传递的id
    this._getDetail(); //获取电影详情
    this._getComment(); //获取电影评论
  },


  data() {
    return {
      movieDetail: [], //电影详情
      movieComment: [], //电影评论
      movieBox: [], //电影票房
      movieTotalCount: "", //评论总数
      moviePoto: [], //电影剧照
      movieId: "", //当前电影id
    };
  },


  computed:{
    //电影类型
    types(){
      let tag = this.movieDetail.type.join('/');
      return tag;
    }
  },

   components: {
    "v-footer": Footer,
    "v-actors": Actors,
    "v-comment": Comment,
  },
  

  methods: {
        //获取电影详情方法
        _getDetail() {
          getDetail(this.movieId).then(res => {
            this.movieDetail = res.data.basic;
            this.movieBox = res.data.boxOffice;
            this.moviePoto = res.data.basic.stageImg.list;
            this.setData(this.movieDetail );
          });
        },

        //获取电影评论方法
        _getComment() {
          getComment(this.movieId).then(res => {
            this.movieComment = res.data.cts;
            this.movieTotalCount = res.data.totalCount;
          });
        },
        
        //
        ...mapActions([
          'setData'
        ])

   }
}
</script>
<style lang="less" scoped>
@import '../assets/fz.less';
@import '../assets/index/style.css';
.bg {
  -webkit-filter: blur(9px);
  -moz-filter: blur(9px);
  -ms-filter: blur(9px);
  filter: blur(9px);
  height: 10em;
  background-color: #4c4c4c;
  position: relative;
  z-index: 0;
  overflow: hidden;
  background-size: 100% auto;
}
article.cont-box {
  margin-top: -5.1em;
  padding: 0 0 0 1.5em;
  position: relative;
  .box-pic {
    float: left;
    img {
      overflow: hidden;
      background: #fff;
      margin-right: 1em;
      padding: 0.2em;
      width: 9.9em;
      height: 14em;
    }
  }
  .box-txt {
    h3 {
      color: #fff;
      font-weight: bold;
      font-size: 1.5em;
      line-height: 1.4;
      white-space: nowrap;
      text-overflow: ellipsis;
      -o-text-overflow: ellipsis;
      overflow: hidden;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
    em {
      color: #fff;
    }
    ul {
      min-height: 115px;
      margin-top: 4vw;
      padding-top: 2vw;
      li {
        padding-bottom: 0.4em;
        font-weight: bold;
        p {
          font-size: 1.2em;
          line-height: 1.4;
          font-size: 16px;
          color: #333;
        }
        span{
          color: #333;
        }
      }
    }
  }
}
.comm {
  overflow: hidden;
  position: absolute;
  display: block;
  margin-top: 2.5vw;
  color: #659d0e;
  font-size: 20px;
  padding-left: 20px;
  width: 90%;
  p {
    padding-left: 30px;
    font-weight: 700;
    span::before {
      left: 20px;
      top: -10px;
      color: #659d0e;
      content: "\201C";
      font-size: 55px;
      font-style: normal;
      line-height: 1;
      position: absolute;
    }
  }
  .boxOffice{
        border-top: 1px solid #ddd;
        margin-top: 10px;
            padding-top: 5px;
    td{
      border: none;
      color: #333;
      font-size: 15px;
      padding: 3px 23px;
      text-align: center;
    }
    td.ol{
      font-size: 22px;
    color: #fa0;
    }
  }
}
.fix {
  width: 100%;
  background: #fff;
  min-height: 250px;
  margin-top: -7em;
}
.des-box {
  padding: 1.1em 1.5em 0;
  border-top: 8px solid #f6f6f6;
  p {
    font-size: 1.2em;
    color: #333;
    line-height: 1.5;
    overflow: hidden;
  }
}
.potos {
  overflow: hidden;
  padding: 1.1em 1.5em 0px;
  border-top: 8px solid rgb(246, 246, 246);
  h3 {
    font-size: 1.3em;
    font-weight: 600;
    overflow: hidden;
    color: #333;
  }
  ul {
    list-style: none;
    margin: 2vw 0;
    li {
      float: left;
      margin: 0 1vw 2vw 0;
      img {
        width: 155px;
      }
    }
  }
}

.mint-button--danger.is-plain {
  border: 1px solid #659d0e;
  background-color: transparent;
  color: #659d0e;
}

span.icon-go{
      display: inline-block;
    font-size: 18px;
    -webkit-transform: rotate(-180deg);
    transform: rotate(-180deg);
    background: #00000063;
    position: absolute;
    z-index: 10;
    top: 3vw;
    left: 5vw;
    border-radius: 50%;
    padding: 3px;
}

</style>