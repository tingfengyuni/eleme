<template>
    <div id="home">
        <div class="header">
                <van-icon name="arrow-left"  class="tb1" @click="tui"/>
            <router-link to="">
                <p>确认订单</p>
            </router-link>
             <router-link to="/Du">
                <van-icon name="contact"   class="tb1"/>
            </router-link>
        </div>
        <section>
            <div class="dizhi">
                <div class="left">
                    <van-icon name="location-o" class="tb1"/>
                    <div class="name">
                        <div class="n1">
                            <h5>{{list.name}}</h5>
                            <p>女士</p>
                            <p>{{list.phone}}</p>
                        </div>
                        <div class="n2">
                            <span>学校</span>
                            <p>北小营</p>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <van-icon name="arrow" class="tb1"/>
                </div>
            </div>
            <div class="aa"></div>
            <div class="sdsj">
                <h5>送达时间</h5>
                <div class="right">
                    <p class="p1">尽快送达|预计<van-count-down :time="time" class="tb1"/></p>
                    <p class="p2">蜂鸟专送</p>
                </div>
            </div>
            <div class="aa"></div>
            <div class="zf">
                <div class="zf2">
                    <p>支付方式</p>
                    <div class="zf1">
                        <p>在线方式</p>
                        <van-icon name="arrow" class="tb1"/>
                    </div>
                </div>
                <div class="zf3">
                    <p>红包</p>
                    <p>暂时只在饿了么APP中支持</p>
                </div>
            </div>
            <div class="aa"></div>
                <div class="jj" v-for="item in Blist" :key='item'>
                    <div class="xg">
                    <img :src="'http://elm.cangdu.org/img/'+item.img" alt="">
                    <p>效果演示</p>
                </div>
                <div class="dd">
                    <div class="dd1">
                        <p class="p1">{{item.name}}</p>
                        <p class="p2">x{{item.num}}</p>
                        <p class="p1">￥{{item.price}}</p>
                    </div>
                    <div class="dd2">
                        <p>餐盒</p>
                        <p>￥1</p>
                    </div>
                    <div class="dd2">
                        <p>配送费</p>
                        <p>￥4</p>
                    </div>
                    <div class="dd3">
                        <p class="p1">订单￥{{fam}}</p>
                        <p class="p2">待支付￥{{fam}}</p>
                    </div>
                </div>
            </div>
            
        </section>
        <div class="footer">
            <div class="left">
                待支付￥{{fam}}
            </div>
            
                <div class="right">
                    <router-link to='/ddlb'>
                        确认下单
                     </router-link>
                </div>
           
            
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'home',
  data () {
   return{
       list:'',
        time:30 * 60 * 1000,
        Blist:[]
   }
  },
  computed:{
      fam(){
          var x=0
          for(var i in this.Blist){
              x+=this.Blist[i].num*this.Blist[i].price+5
          }
          return x
      }
  },
  methods:{
      tui(){
          this.$router.go(-1)
      },
      faA(){
          axios.get(`http://elm.cangdu.org/v1/users/38605/addresses`).then((e)=>{
              console.log(e.data[0])
              this.list=e.data[0]
          })
          if(JSON.parse(localStorage.vuex).user){
              this.Blist=JSON.parse(localStorage.vuex).user
          }
      }
  },
  mounted(){
      this.faA()
  }
}
</script>
<style lang='scss' scoped>
     *{
        margin: 0;
        padding: 0;
        list-style:none;
    }
    .header{
        height:1rem;
        font-size: 0.3rem;
        padding: 0 0.15rem;
        background: blue;
        display: flex;
        justify-content: space-between;
        .tb1{
            font-size: 0.5rem;
            line-height: 1rem;
            color: white;
        }
        p{
            font-size: 0.5rem;
            line-height: 1rem;
            color: white;
        }
    }
    .jj{
        width: 100%;
    }
     .dizhi{
         width: 100%;
         height: 2rem;
         display: flex;
         justify-content: space-between;
         .left{
             width: 100%;
             height: 2rem;
             display: flex;
             .tb1{
                 font-size: 0.6rem;
                 color: blue;
                 line-height: 2rem;
                 margin-left: 0.2rem;
                 margin-right: 0.2rem;
             }
             .name{
                width: 100%;
                height: 2rem;
                .n1{
                    display: flex;
                    h5{
                        margin-top: 0.4rem;
                        font-size: 0.6rem;
                        font-weight: bold;
                        margin-right: 0.15rem;
                    }
                    p{
                        margin-top: 0.6rem;
                        // margin-left: 0.15rem;
                        margin-right: 0.15rem;
                        font-size: 0.3rem;
                        color: black;
                    }
                }
                .n2{
                    display: flex;
                    span{
                        margin-top: 0.05rem;
                        width: 0.8rem;
                        text-align: center;
                        height: 0.3rem;
                        line-height: 0.3rem;
                        font-size: 0.25rem;
                        background: blue;
                        color:white;
                        margin-right: 0.1rem;
                        border-radius: 10px;
                    }
                    p{
                        font-size: 0.3rem;
                        color: gray;
                    }
                }
             }
         }
         .right{
             height: 2rem;
             .tb1{
                 font-size: 0.8rem;
                 line-height: 2rem;
                 margin-right: 0.2rem;
                 color: gray;
             }
         }
     }
     .aa{
         width:100%;
         height: 0.2rem;
         background: #e9e7e7;
     }
    .sdsj{
        width: 100%;
        height:2rem;
        display: flex;
        justify-content: space-between;
         border-left: solid 0.2rem blue;
        h5{
            font-size: 0.6rem;
            font-weight: bold;
            line-height:2rem;
            margin-left: 0.7rem;
           
        }
        .right{
            height:2rem;
            .p1{
                margin-top: 0.5rem;
                font-size: 0.31rem;
                color: blue;
                display: flex;
                margin-right: 0.7rem;
                .tb1{
                    margin-top: 0.07rem;
                    font-size: 0.31rem;
                    color: blue;
                }
            }
            .p2{
                margin-left: 1.8rem;
                margin-top: 0.2rem;
                width: 1.2rem;
                height: 0.4rem;
                font-size: 0.3rem;
                background: blue;
                line-height: 0.4rem;
                text-align: center;
                color:white;
            }
        }
    }
    .zf{
        width: 100%;
        height: 2rem;
        .zf2{
            width: 100%;
            height: 1rem;
            display: flex;
            justify-content: space-between;
            border-bottom: solid 1px gray;
            p{
                font-size: 0.3rem;
                color: gray;
                line-height: 1rem;
                margin-left: 0.25rem;
            }
            .zf1{
                // width: 100%;
                height: 1rem;

                display: flex;
            // justify-content: space-between;
                p{
                    font-size: 0.3rem;
                    color: darkgray;
                    line-height: 1rem;
                }
                .tb1{
                    font-size: 0.3rem;
                    color: darkgray;
                    line-height: 1rem;
                    margin-right: 0.2rem;
                }
            }
        }
       .zf3{
           width: 100%;
           height: 1rem;display: flex;
           justify-content: space-between;
           p{
               font-size: 0.3rem;
               line-height: 1rem;
               color: grey;
               margin-left: 0.3rem;
               margin-right: 0.3rem;
           }
       } 
        
    }
    .xg{
        width: 100%;
        height: 1.5rem;
        display: flex;
        border-bottom: solid 1px gray;
        img{
            width: 1rem;
            height: 1rem;
            margin: 0.25rem;
        }
        p{
            font-size: 0.6rem;
            color: black;
            line-height: 1.5rem;
        }
    }
    .dd{
        width: 100%;
        height:4rem;
        .dd1{
            width: 100%;
            height:1rem;
            display: flex;
            justify-content: space-between;
            .p1{
                font-size: 0.3rem;
                color: black;
                line-height: 1rem;
                margin-left: 0.25rem;
                margin-right: 0.25rem;
            }
            .p2{
                font-size: 0.3rem;
                color: red;
                line-height: 1rem;
            }
        }
        .dd2{
            width: 100%;
            height: 1rem;
            display: flex;
            justify-content: space-between;
            p{
                font-size: 0.3rem;
                color: black;
                margin-left: 0.25rem;
                margin-right: 0.25rem;
            }
        }
        .dd3{
            width: 100%;
            height: 1rem;
            display: flex;
            justify-content: space-between;
            .p1{
                font-size: 0.3rem;
                color: black;
                margin-left: 0.25rem;
                margin-right: 0.25rem;
            }
            .p2{
                font-size: 0.3rem;
                color: red;
                margin-left: 0.25rem;
                margin-right: 0.25rem;
            }
        }
    }
    .footer{
        width: 100%;
        height: 1rem;
        display: flex;
        .left{
            width: 70%;
            height: 1rem;
            font-size: 0.4rem;
            line-height: 1rem;
            color: white;
            padding-left: 0.2rem;
            background: #171718;
        }
        .right{
            width: 30%;
            height: 1rem;
            background: green;
            font-size: 0.4rem;
            text-align: center;
            line-height: 1rem;
        }
    }
</style>
