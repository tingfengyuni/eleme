<template>
    <div id="home">
       <div class="header">
            <router-link to="/">
                <van-icon name="arrow-left"  class="tb1"/>
            </router-link>
            <router-link to="">
                <p>我的</p>
            </router-link>
            <router-link to="/Du">
                <van-icon name="contact"   class="tb1"/>
            </router-link>
        </div>
        <section class="aa">
            <div class="touxiang">
                <img :src="img1" alt="">
                <div class="phone">
                    <h5>{{txt}}</h5>
                    <div class="sjtb">
                        <van-icon name="phone" class="tb"/>
                        <span>暂无绑定手机号</span>
                    </div>
                </div>
                <router-link  to="/grxxxq">
                    <van-icon name="arrow"  class="tb1"/>
                </router-link>
                
            </div>
            <div class="jyy">
                <div>
                    <span class="span1">0.00</span><span class="span2">元</span>
                    <p>我的余额</p>
                </div>
                <div>
                    <span class="span3">3</span><span class="span2">个</span>
                    <p>我的优惠</p>
                </div>
                <div>
                    <span class="span4">0</span><span class="span2">分</span>
                    <p>我的积分</p>
                </div>
            </div>

            <div class="wje">
                <div>
                    <van-icon name="wap-nav" class="tb1"/>我的订单
                </div>
                 <van-icon name="arrow" class="tb2"/>
            </div>
            <div class="wje">
                <div>
                    <van-icon name="smile-comment" class="tb3"/>积分商城
                </div>
                 <van-icon name="arrow" class="tb2"/>
            </div>
            <div class="wje">
                <div>
                    <van-icon name="smile" class="tb4"/>饿了么会员卡
                </div>
                 <van-icon name="arrow" class="tb2"/>
            </div>
            <div class="bb">
                <div class="wje">
                    <div>
                        <van-icon name="todo-list" class="tb4"/>服务中心
                    </div>
                    <van-icon name="arrow" class="tb2"/>
                </div>
                <div class="wje">
                <div>
                    <van-icon name="gift" class="tb4"/>下载饿了么APP
                </div>
                 <van-icon name="arrow" class="tb2"/>
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
        return {
            txt:'',
            img1:'http://elm.cangdu.org/img/default.jpg'
        }
    },
    mounted(){
        if(localStorage.vuex){
            this.txt=JSON.parse(localStorage.vuex).arr
        }
        if(localStorage.img){
            this.img1=localStorage.img
        }
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
    .aa{
        background: #f3f2f2;
    }
    .touxiang{
        display: flex;
        width: 100%;
        height: 2.2rem;
        background: blue;
        img{
            width: 1.7rem;
            height: 1.7rem;
            border-radius: 50%;
            margin: 0.1rem 0.2rem 0.5rem 0.3rem;
        }
        .phone{
            margin-top: 0.25rem;
            font-size: 0.7rem;
            color: white;
            .sjtb{
                display: flex;
                .tb{
                    font-size:0.5rem;
                    color: white;
                    margin-top: 0.03rem;
                    margin-right: 0.1rem;
                }
                span{
                    font-size:0.4rem;
                    color: white;
                }
            }
        }
        .tb1{
            font-size: 0.7rem;
            color: white;
            margin-left: 3.6rem;
            margin-top: 0.5rem;
        }
        
    }
     .jyy{
            margin-bottom: 0.3rem;
            background: white;
            width:100%;
            height: 2rem;
            display: flex;
            flex-wrap: wrap;
            div{
                text-align: center;
                width: 32.8%;
                height: 2rem;

                border: solid 1px gray;
                .span1{
                    font-size:0.8rem;
                    color: orange;
                    font-weight: bold;
                }
                .span3{
                    font-size:0.8rem;
                    color: orangered;
                    font-weight: bold;
                }
                .span4{
                    font-size:0.8rem;
                    color: green;
                    font-weight: bold;
                }
                .span2{
                    font-size:0.4rem;
                    color: black;
                }
                p{
                     font-size:0.4rem;
                    color: gray;
                }
            }
        }


    .wje{
        padding-left:0.3rem;
        background: white;
        width: 100%;
        height: 1.2rem;
        display: flex;
        justify-content: space-between;
        div{
            width: 100%;
            height: 1.2rem;
            font-size: 0.4rem;
            line-height: 1.2rem;
            border-bottom: solid 1px gray;
            .tb1{
                font-size: 0.4rem;
                color: gray;
                margin-right: 0.2rem;
            }
            .tb3{
                font-size: 0.4rem;
                color: red;
                margin-right: 0.2rem;
            }
            .tb4{
                font-size: 0.4rem;
                color: orange;
                margin-right: 0.2rem;
            }
        }
        .tb2{
            line-height: 1.2rem;
            font-size: 0.4rem;
            color: gray;
             margin-right: 0.5rem;
        }
    }
    .bb{
        width: 100%;
        margin-top: 0.3rem;
        height: 2.4rem;
        .wje{
            padding-left:0.3rem;
            background: white;
            width: 100%;
            height: 1.2rem;
            display: flex;
            justify-content: space-between;
            div{
                width: 100%;
                height: 1.2rem;
                font-size: 0.4rem;
                line-height: 1.2rem;
                border-bottom: solid 1px gray;
                .tb1{
                    font-size: 0.4rem;
                    color: gray;
                    margin-right: 0.2rem;
                }
                .tb4{
                    font-size: 0.4rem;
                    color: blue;
                    margin-right: 0.2rem;
                }
            }
            .tb2{
                line-height: 1.2rem;
                font-size: 0.4rem;
                color: gray;
                margin-right: 0.5rem;
            }
        }
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
