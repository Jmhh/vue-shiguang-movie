<template>
  <div>
      <div class="actors">
        <h3>职演员: </h3>
            <div class="actors-list">
                <ul>
                    <li v-for="k in actors" :key="k.id">
                        <img v-lazy="k.img" style="width: 115px; height: 115px;">
                        <h2 class="actors-listt-title ac">
                            {{k.name}}
                        </h2>
                        <p class="actors-list-intro">
                            {{k.nameEn}}
                        </p>
                   </li>
                </ul>
            </div>
        </div>
  </div>
</template>
<script>
export default {
  props:['actors'],
  
  data () {
    return {
    };
  }
}
</script>
<style lang="less" scoped>
  @import '../../assets/fz.less';
  @import '../../assets/index/style.css';
.actors {
  overflow: hidden;
  padding: 1.1em 1.5em 0px;
  border-top: 8px solid rgb(246, 246, 246);
  h3 {
    font-size: 1.3em;
    font-weight: 600;
    overflow: hidden;
    color: #333;
    margin-bottom: 2vw;
  }
  ul {
    li {
      float: left;
      display: inline-block;
      width: 100px;
      vertical-align: top;
      margin-right: 10px;
      text-align: center;
      margin-bottom: 30px;
    }
  }
}

.actors-list {
    overflow-x: auto;
    width: 100%;
    .pt();
    /*原生滑动*/
    -webkit-overflow-scrolling: touch;
    >ul {
      .bt();
      display: -ms-flex;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      width: 380%;
      li {
        margin-right: 4vw;
        width: 26vw;
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

        p.actors-list-intro {
          padding-top: 2vw;
          .fz(font-size, 26);
          color: rgb(150, 150, 150);
        }

        p.actors-list-price {
          color: #b4282d;
        }
      }
    }
  }
</style>