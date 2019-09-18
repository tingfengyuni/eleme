<template>
    <div id="home">
        <!-- <mt-header title="北京" class="header">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
             <router-link to="/city" slot="right">
                <mt-button >切换城市</mt-button>
            </router-link>
        </mt-header> -->
        <div class="header">
            <router-link to="/">
                <van-icon name="arrow-left"  class="tb1"/>
            </router-link>
            <router-link to="/search">
                <p>搜索</p>
            </router-link>
        </div>
        <section>
           <div id="wu-1">
                <input type="text" v-model="txt" placeholder="请输入美食或商家名称"/>
                 <button value="提交" @click="faA()" >提交</button>
            </div>
            <!-- 历史记录 -->
            <div v-show="bSys" class="ssls">
                <p class="p1">搜索历史</p>
                <div v-for="(item,index) in list" @click='fn()' :key='index'>
                    <p class="p3"> {{ item.name}}</p>
                    <p class="p4"> {{item.name1}}</p>
                </div>
                <p @click="faB()" class="p2">全部清除</p>
            </div>
            <!-- <div v-show="bSys1">
              <p v-for="item in Arr">{{item.name}}</p>
            </div> -->
            <!-- 提交显示内容 -->
            <div v-for="(item,key) in arr" @click='faC(item),fn()' :key='key' class="p5">
                <p class="p3">{{item.name}}</p>
                <p class="p4">{{item.address}}</p>
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
       list:[],
       arr:[],
       txt1:'el-icon-arrow-left',
       bSys:true,
    }
  },
  methods:{
    faA(){
      if(this.txt!==''){
        this.bSys=!this.bSys
        this.axios.get('http://elm.cangdu.org/v1/pois?type=search&city_id='+this.$route.query.id+'&keyword='+this.txt).then((e)=>{
            this.arr=e.data
            console.log(this.arr)
        })
     
      }
    },
    faB(){
      localStorage.a=''
      this.list=[]
    },
    // 点击提交显示内容方法  
    // 往本地储存保存  然后方法跳转页面
    faC(e){
     var obj ={name:e.name,name1:e.address}
    //  this.list.unshift(obj)
    var index=this.list.findIndex((item)=>{
            return item.name==e.name
    })
    // console.log(index)
    if(index==-1){
        this.list.unshift(obj)
    }else{
      return false
    }
    console.log(this.list)
    localStorage.a=JSON.stringify(this.list)
    }, 
    fn(){
      this.$router.push({name:'home'})
    }
  },
  // 组件加载完成接受本地储存数据  显示历史纪录
  mounted(){
    if(localStorage.a){
      this.list=JSON.parse(localStorage.a)
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
    #wu-1{
 
        width: 100%;
        height: 1.2rem;
        display: flex;
        // flex-direction: column;
        align-items: center;
    }
    #wu-1>input{
        margin-left: 1rem;
        width: 60%;
        height: 0.8rem;
        border:1px solid;
        font-size: 0.3rem;
        padding-left: 0.15rem;
    }
    #wu-1>button{
        width: 20%;
         height: 0.83rem;
         background: blue;
        background: blue;
        color: #fff;
        font-size: 0.4rem;
        border: 0px;
    }
    .ssls{
        width: 100%;
        
        .p1{
            background: rgb(221, 216, 216);
            width: 100%;
            height: 0.4rem;
            font-size: 0.5rem;
            padding: 0.3rem;
            line-height: 0.4rem;
            font-weight: bold;
            color: gray;
            border-bottom: solid 1px gray;
        }
        div{
            width: 100%;
            height: 1rem;
            padding-left: 0.4rem;
            border-bottom: solid 1px gray;
            .p3{
                font-size: 0.4rem;
            }
            .p4{
                font-size: 0.25rem;
            }
        }
        .p2{
            width: 100%;
            height: 0.7rem;
            font-size: 0.6rem;
            padding: 0.3rem;
            line-height: 0.7rem;
            font-weight: bold;
            text-align: center;
            color: blue;
            border-bottom: solid 1px gray;
        }
    }
    .p5{
        padding-left: 0.4rem;
        width: 100%;
        height: 1rem;
        border-bottom: solid 1px gray;
        .p3{
            font-size: 0.4rem;
        }
        .p4{
            font-size: 0.25rem;
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
