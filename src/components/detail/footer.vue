<template lang="html">
  <footer class="footer">
    <router-link :to="{name:'Index'}" class="footer-index">
      <i class="icon-index"></i>
    </router-link>
    <router-link  :to="{name:'Car'}" class="footer-gocar">
      <i class="icon-car"></i>
      <span v-if="count">{{count}}</span>
    </router-link>
    <span class="footer-addcar" @click="openCar">
      购票
    </span>
    <mt-popup class="page-popup-car" v-model="popupVisible" position="bottom">
      <div class="poCar">
        <div class="">
            <p>{{this.detailData.name}}</p>
            <p>单价：￥28 /张</p>
            <p>
              数量：
              <span>
                1
              </span class="count">
            </p>
            <p style="margin-top: 6vw;">合计：<span class="price">￥28</span> </p>
            <mt-button type="primary" plain  @click="colseCar">取消</mt-button>
            <mt-button type="danger" @click="addCar">确认</mt-button>
        </div>
        
      </div>
    </mt-popup>
  </footer>
</template>

<script>
import { MessageBox } from "mint-ui";
import { Toast } from "mint-ui";
import { Popup } from "mint-ui";
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["detailData"]),
    count(){
       return this.$store.state.detail.carList.length
     }
  },
  created() {
    
  },
  data() {
    return {
      popupVisible: false,
      movieCount: '',
    };
  },
  methods: {
    openCar() {
      this.popupVisible = true;
    },
    colseCar() {
      this.popupVisible = false;
    },
    addCar(){
       this.popupVisible = false;
       const movieData = {
         title:this.detailData.name,
         count:this.movieCount,
         id:this.detailData.movieId,
         img:this.detailData.img,
         price:28
       }
        this.$store.commit('ADD_CAR',movieData); 
        this.$store.dispatch('addCarlist',movieData);
        console.log(this.$store.state.detail.carList.length);
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/fz.less";
@import "../../assets/index/style.css";

.footer {
  width: 100%;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  height: 14vw;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  -moz-user-select: none;
  -webkit-user-select: none;
  .bt();
  .footer-index,
  .footer-gocar,
  .footer-addcar {
    text-align: center;
  }

  .footer-index {
    -webkit-flex: 3;
    -ms-flex: 3;
    flex: 3;
    line-height: 14vw;
    height: 14vw;
    padding-top: 1.5vw;
    border-right-color: #f7f7f7;
    border-right-style: solid;
    .fz(border-right-width,1);

    i {
      .fz(font-size,45);
    }
    &:active {
      background-color: #f1f1f1;
    }
  }

  .footer-gocar {
    position: relative;
    -webkit-flex: 3;
    -ms-flex: 3;
    flex: 3;
    height: 14vw;
    line-height: 14vw;
    padding-top: 1.6vw;
    span {
      height: 5.5vw;
      width: 5.5vw;
      line-height: 5.5vw;
      position: absolute;
      top: 0.5vw;
      right: 5.5vw;
      background-color: @cl;
      border-radius: 50%;
      color: #fff;
      .fz(font-size,24);
    }

    &:active {
      background-color: #f1f1f1;
    }
    i {
      .fz(font-size,48);
    }
  }

  .footer-addcar {
    -webkit-flex: 6;
    -ms-flex: 6;
    flex: 6;
    line-height: 14vw;
    height: 14vw;

    color: #fff;
    background-color: @cl;
    letter-spacing: 0.2vw;
    font-size: 18px;
    &:active {
      background-color: #ff8600;
    }
  }
}

.mint-msgbox-message {
  color: #333;
}

.mint-popup.page-popup-car.mint-popup-bottom {
  width: 100%;
  height: 30%;
  background-color: #fff;
  z-index: 1000;
  .poCar {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center;
    font-size: 16px;
    line-height: 20px;
    position: relative;
    padding: 20px 0;
    color: #999;
    p {
      margin-bottom: 2vw;
      span.price {
        font-size: 24px;
        color: #ff8600;
        font-weight: 100;
      }
      span {
        input {
          border: 1px solid #ddd;
          width: 50px;
          line-height: 24px;
          text-align: center;
          font-size: 16px;
          color: #888;
        }
      }
    }
  }
}
</style>
