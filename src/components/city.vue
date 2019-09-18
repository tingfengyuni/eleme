<template>
    <div id="home">
        <!-- <mt-header class="header">
            <router-link to="/" slot="left">
                <mt-button>ele.me</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header> -->
        <div class="header">
            <router-link to="/">
                <p>ele.me</p>
            </router-link>
             <router-link to="/Du">
                <van-icon name="manager-o"   class="tb1"/>
            </router-link>
            
        </div>
        <section>
           <div class="dw">
               <p class="p1">当前定位城市</p><h5>定位不准时，请在城市列表中选择</h5>
           </div>
           <router-link to="/search">
                <div class="bj" @click="faA()">
                    <p class="p1">{{list}}</p>
                    <van-icon name="arrow" class="tb"/>
                </div>   
            </router-link>
           
           <hr>
           <div class="rmcs">
               <p>热门城市</p>
               <ul>
                   <li  v-for="(item,i) in arr" :key="i" @click="faC(aa)">{{item.name}}</li>
               </ul>
               <hr>
           </div>
           <div class="cs" v-for="(item,index,key) in Arr" :key="index">
               <p>{{txt[key]}}</p>
               <ul>
                   <li  v-for="(aa,it) in item" :key="it" @click="faC(aa)">{{aa.name}}</li>
               </ul>
               <hr>
           </div>
        </section>
    </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      list:'',
      arr:[],
      Arr:[],
      txt:[],
      name:'el-icon-eleme',
      txt1:'北京'
    }
  },
  beforeMount(){
  localStorage.biao=this.name
  localStorage.zhu=this.txt1
    },
  methods:{
   faA(){
     localStorage.n=this.list
     
   },
  
   faC(e){
     localStorage.n=e
     this.$router.push({name:'search',query:{id:e}})

   }
  },
    mounted(){
        this.axios(`http://elm.cangdu.org/v1/cities?type=guess`).then((e)=>{
        this.list=e.data.name
        })
        this.axios(`http://elm.cangdu.org/v1/cities?type=hot`).then((e)=>{
        this.arr=e.data;
        })
        this.axios(`http://elm.cangdu.org/v1/cities?type=group`).then((e)=>{
        this.Arr=e.data;
        Object.keys(this.Arr).sort().map((item,key)=>{
            this.txt.push(item)
        })
        })

        
        
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
            line-height: 0.8rem;
            color: white;
        }
        p{
            font-size: 0.5rem;
            line-height: 0.8rem;
            color: white;
        }
    }
    .dw{
        width: 100%;
        height: 1rem;
        padding-left: 0.15rem;
        display: flex;

        justify-content: space-between;
        border-bottom: solid 1px gray;
        .p1{
            font-size: 0.36rem;
            color:gray;
            line-height: 1rem;
        }
        h5{
            font-size: 0.28rem;
            color: gray;
            line-height: 1rem;
            margin-right: 0.45rem;
        }
    }
    .bj{
        width: 100%;
        height: 1rem;
        padding-left: 0.15rem;
        display: flex;
        justify-content: space-between;
        border-bottom: solid 1px gray;
        .p1{
            font-size: 0.44rem;
            color:blue;
            line-height: 1rem;
        }
        .tb{
            font-size: 0.44rem;
            color:gray;
            line-height: 1rem;
            margin-right: 0.30rem;
        }
    }
    hr{
        width: 100%;
        height: 0.3rem;
        background: #ebe4e4;
    }
    .header{
        height: 0.8rem;
        line-height: 0.8rem;
        font-size: 0.3rem;
        padding: 0 0.15rem;
    }
    .rmcs{
        margin-top: -0.03rem;
        width: 100%;
        height:3.2rem;
        
        p{
            padding-left:0.2rem;
            width:100%;
            height: 1rem;
            font-size:0.4rem;
            line-height: 1rem;
            border: solid 1px gray;
        }
        ul{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            li{
            //     display: flex;
            // flex-wrap: wrap;
            // width: 1rem;
                width: 24.615%;
                text-align: center;
                height: 1rem;
                font-size: 0.3rem;
                color: blue;
                line-height: 1rem;
                border: solid 1px gray;
            }
        }
    }
    .cs{
        margin-top: -0.03rem;
        width: 100%;
        // height:3.2rem;
        p{
            padding-left:0.2rem;
            width:100%;
            height: 1rem;
            font-size:0.4rem;
            line-height: 1rem;
            border: solid 1px gray;
        }
        ul{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            
            li{

                width: 24.615%;
                text-align: center;
                height: 1rem;
                font-size: 0.28rem;
                color: blue;
                line-height: 1rem;
                overflow: hidden;
                border: solid 1px gray;
            }
        }
    }
</style>
