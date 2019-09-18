<template>
    <div id="home">
        <div class="header">
            <router-link to="/queren">
                <van-icon name="arrow-left"  class="tb1"/>
            </router-link>
            <router-link to="">
                <p>订单列表</p>
            </router-link>
            <router-link to="">
                <p></p>
            </router-link>
        </div>
        <section>
            <div class="ddd" v-for="item in list" :key="item">
                <div class="ddlb">
                    <div class="img">
                        <img :src="'http://elm.cangdu.org/img/'+item.img" alt="">
                    </div>
                    <div class="wenzi">
                        <div class="dm1">
                            <div class="aa">
                                <p>{{item.name}}</p>
                                <van-icon name="arrow" class="tb1"/>
                            </div>
                            <span>等待支付</span>
                        </div>
                        <p>2019-09-08 18：39</p>
                    </div>
                    
                </div>
                <div class="pp">
                    <p class="p1">的味道切尔奇群翁</p>
                    <p class="p2">￥{{item.num*item.price}}</p>
                </div>
                <div class="bb">
                    <p>去支付还剩<van-count-down :time="time" class="tb1"/></p>
                </div>
                <div class="ccc">

                </div>
            </div>
           


           
        </section>
        <mt-tabbar  class="footer">
            <router-link to='/'>
                <mt-tab-item id="外卖" class="footer1">
                    <van-icon name="smile"  class="footer2"/>
                     外卖
                </mt-tab-item>
            </router-link>
             <router-link to='/search'>
                 <mt-tab-item id="搜索" class="footer1">
                    <van-icon name="browsing-history"   class="footer2"/>
                    搜索
                </mt-tab-item>
            </router-link>
             <router-link to='/dingdan' >
                <mt-tab-item id="订单" class="footer1">
                    <van-icon name="wap-nav"   class="footer2"/>
                    订单
                </mt-tab-item>
            </router-link>
             <router-link to='/wode'>
                <mt-tab-item id="我的" class="footer1">
                    <van-icon name="manager"   class="footer2"/>
                    我的
                </mt-tab-item>
            </router-link>
        </mt-tabbar>
    </div>
</template>

<script>
export default {
  name: 'home',
  data () {
   return{
     list:[],
     time:30 * 60 * 1000,
   }
  },
  methods:{
      faA(){
          if(JSON.parse(localStorage.vuex).user){
              this.list=JSON.parse(localStorage.vuex).user
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
    .ddd{
        width: 100%;
        height: 3.2rem;
    }
    .ddlb{
        margin: 0.3rem 0.3rem 0rem 0.3rem;
        width: 100%;
        height: 1rem;
        display: flex;
        .img{
            width: 1.2rem;
            height: 1rem;
            img{
                width:1rem;
                height: 1rem;
            }
        }
    }
    .wenzi{
        height: 1rem;
        border-bottom: solid 1px #eeebeb;
        .dm1{
            display: flex;
            // justify-content: space-between;
            .aa{
                display: flex;
                p{
                    font-size: 0.35rem;
                    color: black;   
                }
                .tb1{
                    margin-top: 0.1rem;
                    font-size: 0.35rem;
                        // line-height: 0.5rem;
                    color: gray;
                    margin-right: 5.7rem;
                }
            }
            span{
                width: 1.4rem;
                 margin-top: 0.1rem;
                 font-size: 0.33rem;
                 color: black;
                margin-right: 0.6srem;
            }
        }
       p{
           margin-top: 0.02rem;
           font-size: 0.25rem;
       } 
    }
    .pp{
        // width: 100%;
        margin-left: 1.5rem;
        margin-right: 0.5rem;
        border-bottom: solid 1px #eeebeb;
        height: 1rem;
        display: flex;
        justify-content: space-between;
        .p1{
            font-size: 0.28rem;
            line-height: 1rem;
        }
        .p2{
            font-size: 0.3rem;
            font-weight: bold;
            color: red;
            line-height: 1rem;
        }
    }
    .bb{
        margin-left: 1.5rem;
        margin-right: 0.5rem;
        p{
            margin-top: 0.35rem;
            margin-bottom: 0.35rem;
            width:2.6rem;
            height: 0.3rem;
            margin-left: 6.1rem;
            font-size: 0.28rem;
            line-height: 0.3rem;
            text-align: center;
            display: flex;
            border: solid 1px orangered;
            color: orangered;
            .tb1{
                font-size: 0.28rem;
                color: orangered;
                line-height: 0.3rem;
            }
        }
    }
    .ccc{
        width: 100%;
        height: 0.2rem;
        background: #eeebeb;
    }
    .footer{
         display: flex;
         justify-content: space-around;
         .footer1 {
             width:0.6rem;
             .footer2 {
                 margin-top: 0.2rem;
                 font-size:0.4rem;
                 display: block;
             }
         }
     } 
</style>
