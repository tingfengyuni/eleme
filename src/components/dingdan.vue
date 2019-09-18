<template>
    <div id="home">
        <div class="header">
            <router-link to="/grxxxq">
                <van-icon name="arrow-left"  class="tb1"/>
            </router-link>
            <p>订单列表</p>
        </div>
        <section class="aa">
             
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
  data() {
      return{

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
        // justify-content: space-between;
        .tb1{
            margin-right: 4rem;
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
        padding-top: 0.3rem;
        background: #ececec;
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
