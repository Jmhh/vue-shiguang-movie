<template>
  <div class="shortComment">
        <h3>网友短评 ( {{movieTotalCount}} )</h3>
         <ul id="shortCommentUl">
              <li class="table" v-for="c in movieComment">
                <div class="cine_user">
                  <a><img :src="c.caimg" class="m_img img_box"></a>
                </div>
                <dl class="cine_txt td">
                  <dt><time> <b>{{c.ca}}</b></time> <b v-if="c.cal">{{c.cal}}网友</b> <b> - 评 <em>{{c.cr}}</em> </b></dt>
                  <dd>
                  <p>
                    <a href="#!">{{c.ce}}</a>
                  </p>
                  </dd>
                </dl>
              </li>
          </ul>
      </div>
</template>
<script>
export default {
  props:['movieComment','movieTotalCount'],
  data () {
    return {
    };
  }
}
</script>
<style lang="less" scoped>
.shortComment {
  margin-bottom: 18vw;
  overflow: hidden;
  padding: 1.1em 1.5em 0px;
  border-top: 8px solid #f6f6f6;
  h3 {
    font-size: 1.3em;
    font-weight: 600;
    overflow: hidden;
    color: #333;
    margin-bottom: 2vw;
  }
  li {
    padding: 1.5em 0 0;
    border-bottom: 1px solid #d8d8d8;
    .cine_user {
      margin-right: 1.3em;
      width: 4em;
      height: 4em;
      overflow: hidden;
      float: left;
      a {
        overflow: hidden;
        display: block;
        height: 3em;
        width: 3em;
        border-radius: 3.1em;
      }
      img {
        overflow: hidden;
        display: block;
        height: 4em;
        width: 4em;
        border-radius: 4.1em;
      }
    }
    dl.cine_txt.td {
      padding: 0 1.5em 0 0;
      dt {
        color: #999;
        line-height: 1.8;
        margin: 0 0 0.5em 0;
        font-size: 16px;
        .time {
          float: right;
        }
        b {
          font-weight: normal;
          display: inlne-block;
          vertical-align: middle;
          em{
              border-radius: 2px;
              font-size: 13px;
              background: #659d0e;
              width: 2em;
              height: 1.8em;
              color: #fff;
              display: inline-block;
              vertical-align: middle;
              overflow: hidden;
              line-height: 1.8em;
              text-align: center;
          }
        }
      }
      dd {
        p {
          font-size: 18px;
          line-height: 1.5;
          padding-bottom: 2vw;
        }
      }
    }
  }
}
</style>