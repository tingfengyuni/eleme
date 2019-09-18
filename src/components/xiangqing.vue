<template>
  <div class="shopping">
    <div class="head">
      <span>商品</span>
      <span>评分</span>
    </div>
    <div class="center">
      <div class="left">
        <ul v-for="(v,i) in list" :key="i">
          <li class="li2"></li>
          <li class="li1">{{v.name}}</li>
        </ul>
      </div>
      <div class="right">
        <div class="two" v-for="(v,i) in list" :key="i">
          <h3>{{v.name}}</h3>
          <div class="zuo" v-for="(item,k) in v.foods" :key="k">
            <div class="tu">
              <img :src="'http://elm.cangdu.org/img/'+item.image_path" alt />
            </div>
            <div class="wenzi">
              <span class="span1">{{item.name}}</span>
              <span class="span2">发111</span>
              <span class="span3">
                月售40
                <span>好评率85%</span>
              </span>
              <span class="span4">的</span>
              <span class="span5">
                ￥
                <span>20</span>
                <span class="qi">起</span>
              </span>
            </div>
            <div class="you">
              <div class="zhao">
                <span>招牌</span>
              </div>
              <div class="xuan">
                <span>选规格</span>
              </div>
              <!-- <div class="jia">+</div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="foot"></div>
  </div>
</template>
<script>
import { TreeSelect } from "vant";
import { Area } from "vant";
import axios from "axios";
export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    axios
      .get(
        "http://elm.cangdu.org/shopping/v2/menu?restaurant_id=" +
          this.$route.query.id
      )
      .then(res => {
        console.log(res.data);
        this.list = res.data;
      });
    console.log(this.$route.query.id);
  }
};
</script>
<style scoped lang="scss">
.shopping {
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  .head {
    height: 2.5rem;
    border-bottom: 1px solid #cccccc;
    display: flex;
    justify-content: space-around;
    position: relative;
    top: 0;
    span {
      line-height: 2rem;
      font-size: 0.6rem;
      height: 1.5rem;
    }
    span:hover {
      color: #3190e8;
      border-bottom: 2px solid #3190e8;
    }
  }
  .center {
    width: 100%;
    display: flex;
    height: 100%;
    position: relative;
    .left {
      width: 27%;
      height: 100%;
      position: absolute;

      ul,
      li {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      ul {
        width: 100%;
        display: flex;
        height: 2.3rem;
        border-bottom: #cccccc 1px solid;
        background: #f5f5f5;
        display: flex;
        flex-direction: column;
        .li1 {
          line-height: 2.3rem;
          margin-left: 0.3rem;
          font-size: 0.5rem;
        }
        .li2 {
          width: 0.3rem;
          height: 2.5rem;
          // background: #3190E8;
          // z-index: 99;
        }
      }
      ul:hover {
        background: white;
        .li2 {
          background: #3190e8;
          z-index: 99;
        }
      }
    }
    .left:hover {
      background: white;
      .zuo:hover {
        background: #3190e8;
      }
    }
    .right {
      width: 73%;
      height: 100%;
      position: absolute;
      left: 27%;
      overflow: auto;
      border-bottom: 1px solid #f5f5f5;

      .one {
        width: 100%;
        height: 2rem;
        display: flex;
        background: #f5f5f5;
        border-bottom: #cccccc 1px solid;
        justify-content: space-between;
        overflow: hidden;
        .zi {
          display: flex;
          p {
            line-height: 0.4rem;
            font-size: 0.8rem;
            margin-left: 10px;
          }
          span {
            line-height: 2rem;
            margin-left: 10px;
            color: gray;
          }
        }
        .dian {
          width: 1rem;
          span {
            line-height: 2rem;
            color: gray;
          }
        }
      }
      .two {
        width: 100%;
        height: auto;
        border-bottom: #cccccc 1px solid;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        // overflow: hidden;
        // margin-top: 2.2rem;
        // flex-grow: 1;
        // overflow: auto;
        // height: 100%;
        h3 {
          width: 100%;
          line-height: 0.4rem;
          font-size: 0.7rem;
        }
        .zuo {
          display: flex;
          border-bottom: 1px solid #cccccc;
          justify-content: space-between;
          .tu {
            width: 1.5rem;
            height: 1.5rem;
            border: 1px solid #cccccc;
            margin-left: 0.2rem;
            margin-top: 0.3rem;
            img {
              width: 1.5rem;
              height: 1.5rem;
            }
          }
          .wenzi {
            display: flex;
            flex-direction: column;
            margin-left: 0.2rem;
            .span1 {
              margin-top: 0.3rem;
              font-size: 0.6rem;
              font-weight: bold;
            }
            .span2 {
              color: gray;
              margin-top: 0.1rem;
              font-size: 0.4rem;
            }
            .span3 {
              margin-top: 0.1rem;
              font-size: 0.4rem;
              span {
                margin-left: 0.3rem;
                font-size: 0.4rem;
              }
            }
            .span4 {
              margin-top: 0.2rem;
              width: 0.6rem;
              height: 0.6rem;
              border: 1px solid orangered;
              text-align: center;
              line-height: 0.6rem;
              border-radius: 50%;
              color: orangered;
              font-size: 0.4rem;
            }
            .span5 {
              // margin-top: 0.1rem;
              color: orangered;
              font-size: 0.5rem;
              span {
                font-size: 0.7rem;
                font-weight: bold;
              }
              .qi {
                color: gray;
                margin-left: 0.2rem;
                font-size: 0.4rem;
              }
            }
          }
        }
        .you {
          display: flex;
          flex-direction: column;
          .zhao {
            width: 1.3rem;
            height: 0.6rem;
            margin-top: 0.5rem;
            border: orangered 1px solid;
            border-radius: 0.3rem;
            text-align: center;
            span {
              color: orangered;
              line-height: 0.6rem;
              font-size: 0.3rem;
              display: block;
            }
          }
          .xuan {
            
            width: 1.6rem;
            height: 0.8rem;
            background: #3190e8;
            margin-top: 1.4rem;
            margin-right: 0.2rem;
            border-radius: 0.3rem;
            text-align: center;
            span {
              
              line-height: 0.8rem;
              color: white;
              font-size: 0.4rem;
              display: block;
            }
          }
          .jia {
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            background: #3190e8;
            color: white;
            text-align: center;
            line-height: 1rem;
          }
        }
      }
    }
  }
  .foot {
    height: 2.5rem;
    background: gray;
  }
}
</style>