<template>
    <div id="home">
        <!-- <mt-header title="北京" class="header">
            <router-link to="/search" slot="left">
                <mt-button icon="search"></mt-button>
            </router-link>
            <router-link to="/Du" slot="right">
                <mt-button icon="more"></mt-button>
            </router-link>
            
        </mt-header> -->
        <div class="header">
            <router-link to="/search">
                <van-icon name="search"  class="tb1"/>
            </router-link>
            <router-link to="/city">
                <p>北京</p>
            </router-link>
             <router-link to="/Du">
                <van-icon name="contact"   class="tb1"/>
            </router-link>
            
        </div>
        <section>
                 <mescroll-vue ref="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit">

            <div>
                <van-swipe :autoplay="0" indicator-color="white" class="a1">
                    <van-swipe-item class="lun">
                        <div v-for="(item,i) in list" :key="i">
                            <img :src='item.img1' alt=""/>
                            <p>{{item.naem}} </p>
                        </div>
                    </van-swipe-item>
                    <van-swipe-item class="lun">
                        <div v-for="(item,i) in list1" :key="i">
                            <img  :src='item.img1' alt=""/>
                            <p>{{item.naem}} </p>
                        </div>
                    </van-swipe-item>
                </van-swipe>
                <hr/>
                <div class="bee">
                     
                    <van-icon name="shop-o" class="zt"/>
                    <p>附近商家</p>
                </div>
                <div class="fu"  v-for="(item,i) in dataList" :key="i" @click="fBq(item.id)">
                    <div class="left">
                            <div class="img">
                                <img :src="'http://elm.cangdu.org//img/'+item.image_path" alt=""/>
                            </div>
                            <div class="wenzi">
                                <div class="mc">
                                    <span>品牌</span> 
                                    <h4>{{item.name}}</h4>
                                </div>
                                <div class="pj">
                                    <span> 
                                        <!-- <van-rate v-model="value" :count="item.rating"  class="daxiao"/> -->
                                        <van-rate :value='item.rating' allow-half class="daxiao"/>
                                        {{item.rating}}
                                    </span>
                                    <p>月销售{{item.recent_order_num}}单</p>
                                </div>
                                <div class="jg">
                                    <span>￥{{item.float_minimum_order_amount}}起送/配送费约￥{{item.float_delivery_fee}}</span>
                                </div>
                            </div>
                    </div>
                    <div class="right">
                        <p>保准票</p>
                        <div class="ps">
                            <span class="blue">{{item.delivery_mode.text}}</span>
                            <span class="white">{{item.supports[1].name}}</span>
                        </div>
                        <div class="sj">
                            <span class="gray">{{item.distance}}/</span><span class="bl">{{item.order_lead_time}}</span>
                        </div>
                    </div>
                </div>
            </div>
             </mescroll-vue>
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
import axios from 'axios'
import { Header } from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui';
import MescrollVue from 'mescroll.js/mescroll.vue';
export default {
    components:{
       Header,
       Swipe,
       SwipeItem,
       MescrollVue,
    },  
  name: 'home',
  data () {
    return {
      list:[],
      list1:[],
      q:8,
      w:0,
      busy: true,
      txt:'el-icon-star-off',
      txt1:'主页面',

       
			 
			      mescroll: null, // mescroll实例对象
			      mescrollDown:{}, //下拉刷新的配置. (如果下拉刷新和上拉加载处理的逻辑是一样的,则mescrollDown可不用写了)
			      mescrollUp: { // 上拉加载的配置.
			        callback: this.upCallback, // 上拉回调,此处简写; 相当于 callback: function(page, mescroll) { }
			        //以下是一些常用的配置,当然不写也可以的.
				page: {
					num: 0, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
					size: 5 //每页数据条数,默认10
				},
				htmlNodata: '<p class="upwarp-nodata">-- END --</p>',
				noMoreSize: 5, //如果列表已无数据,可设置列表的总数量要大于5才显示无更多数据;
							// 避免列表数据过少(比如只有一条数据),显示无更多数据会不好看
							// 这就是为什么无更多数据有时候不显示的原因
				
			      },
            dataList: [], // 列表数据
            
playerOptions : {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
            type: "video/ogg",
            type:"video/webm",
            type: "video/mp4",
            // mp4
            src: "http://vjs.zencdn.net/v/oceans.mp4",  
        }],
        poster: "/static/rBACE1KwRmCS2DRgAAFYIFXH6bc789.jpg", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true  //全屏按钮
        }
    }

                }
               
  },
  mounted(){
    this.axios(`https://www.easy-mock.com/mock/5d47d0537f5a7d14b6b7fb51/example_copy/qune`).then((e)=>{
         this.list=e.data.qune1.slice(0,8);
         this.list1=e.data.qune1.slice(1,9)
    })
  
  },
   beforeMount(){
    localStorage.biao=this.txt;
    localStorage.zhu=this.txt1;
    },
    
    methods:{
         // mescroll组件初始化的回调,可获取到mescroll对象
			    mescrollInit (mescroll) {
			      this.mescroll = mescroll  // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
			    },
			    // 上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
			    upCallback (page, mescroll) {
			      // 联网请求
			      this.axios.get('http://elm.cangdu.org/shopping/restaurants?latitude=39.78493&longitude=116.49476&offset=&limit=30&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=&delivery_mode[]=', {
			        params: {
			          num: page.num, // 页码
			          size: page.size // 每页长度
			        }
			      }).then((response) => {
              // 请求的列表数据
               this.q+=5;
              this.w+=5;
              let arr = response.data.splice(this.q,this.w)
             
			        // 如果是第一页需手动置空列表
			        if (page.num === 1) this.dataList = []
			        // 把请求到的数据添加到列表
                    this.dataList = this.dataList.concat(arr)
                    // console.log(this.dataList.concat)
			        // 数据渲染成功后,隐藏下拉刷新的状态
			        this.$nextTick(() => {
			          mescroll.endSuccess(arr.length)
			        })
			      }).catch((e) => {
			        // 联网失败的回调,隐藏下拉刷新和上拉加载的状态;
			        mescroll.endErr()
			      })
                },
                 fBq(id){
                    this.$router.push({name:'xing',query:{id:id}})
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
    .a1{
        width: 100%;
    }
    .lun{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        height: 3.8rem;
    }
    .lun{
        div{
            width: 25%;
        }
    }
    .lun{
        div{
            img{
                margin-left: 20px;
                width: 1.5rem;
                height: 1.5rem;
            }
            p{
                font-size: 0.25rem;
                text-align: center;
                margin-right: 0.2rem;
            }
        }
    }
    hr{
        width: 100%;
        height: 0.4rem;
        background:#cec4c4;
        margin: 0;
    }
    .bee{
        margin-left: 0.2rem;
        width: 100%;
        height: 1.3rem;
        display: flex;
        .zt{
            font-size: 0.6rem;
            line-height:1.3rem;
            color: gray;

        }
        p{
           font-size: 0.4rem;
            line-height:1.3rem;
            color: gray;
            margin: 0;
        }
    }
    .fu{
        width: 100%;
        height: 1.8rem;
        display:flex;
        justify-content: space-between;
        margin: 0 0.15rem;
        .left{
            width: 80%;
            display: flex;
            .img{
                width: 1.5rem;
                height: 1.5rem;
                margin-left: 0.15rem;
                margin-right: 0.15rem;
                img{
                    width: 1.5rem;
                    height: 1.5rem;
                }
            }
            .wenzi{
                .mc{
                    display: flex;
                    span{
                        width: 0.65rem;
                        height: 0.4rem;
                        font-size:0.26rem;
                        background: orange;
                        text-align: center;
                        line-height: 0.4rem;
                        margin-right: 0.15rem;
                    }
                    h4{
                        width: 1.6rem;
                        height: 0.4rem;
                        font-size: 0.4rem;
                        line-height: 0.4rem;
                        overflow: hidden;
                    }
                }
                .pj{
                    margin-top: 0.2rem;
                    display: flex;
                    height: 0.24rem;
                    span{
                        font-size: 0.24rem;
                        color: orange;
                        display: flex;
                        .daxiao{
                            width: 2.8rem;
                            height: 0.24rem;
                        }
                    }
                    p{
                        font-size: 0.24rem;
                        color: gray;
                    }
                }
                .jg{
                    margin-top: 0.4rem;
                    font-size: 0.28rem;
                    color: gray;
                }
            }
        }
        .right{
            margin-top: -0.3rem;
            width: 40%;
            p{
                margin-top: -0.03rem;
                display: flex;
                margin: 0.25rem;
                margin-left: 2.4rem;
                font-size:0.28rem;
                color: gray;
            }
            .ps{
                margin-left: 0.9rem;
                margin-top: 0.15rem;
                margin-bottom: 0.3rem;
                display: flex;
                span{
                    width: 1.2rem;
                    height: 0.3rem;
                    text-align: center;
                    font-size: 0.27rem;
                    line-height: 0.3rem;
                    border:solid 1px blue;
                }
                .blue{
                    background: blue;
                    color: white;
                }
                .white{
                    color: blue;
                }
            }
            .sj{
                margin-left: 0.2rem;
                margin-top: 0.15rem;
                display: flex;
                span{
                     font-size: 0.27rem;
                    
                }
                .bl{
                    color: blue;
                }
                .gray{
                    color: gainsboro
                }
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
