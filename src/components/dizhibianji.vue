<template>
    <div id="home">
        <div class="header">
            <router-link to="/dizhi">
                <van-icon name="arrow-left"  class="tb1"/>
            </router-link>
            <p>地址编辑</p>
        </div>
        <section class="aa">
          <div class="height">
            <div class="dzbjs">
               <p>姓名</p>
                <input type="text" placeholder="收货人姓名"  v-model="name">
             </div>
             <div class="dzbjs">
               <p>电话</p>
                <input type="text" placeholder="收货人手机号"  v-model="phone">
             </div>
             <div class="dzbjs"  >
               <p>地区</p>
                <input type="text" @click="dizhi()" :placeholder="obj">
             </div>
             <div class="dzbjs">
               <p>详细地址</p>
                <input type="text" placeholder="街道门牌、楼层房间号等信息"  v-model="xiangxidizhi">
             </div>
             <!-- <div class="dzbjs">
               <p>邮政编码</p>
                <input type="text" placeholder="邮政编码"   v-model="email">
             </div> -->
             <div class="jjjj">
               <p>设置为默认收货地址</p>
                <van-switch v-model="checked" class="qr"/>
             </div>
          </div>
          <div class="btn">
            <button class="btn1"  @click="tianjia">保存</button>
            <button class="btn2">清空</button>
          </div>
        </section>
    </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      checked:true,
      val:'',
      txt:'',
      arr:[],
      Arr:[],
      txt1:'el-icon-arrow-left',
      bSys:true,
      obj:'请输入地址/小区',
      name:'',
      phone:'',
      xiangxidizhi:'',
      // email:'',
    }
  },

  methods: {
    dizhi(e){
       this.$router.push('/disearch')
    },
    fn(){
      this.$router.push({name:'disearch'})
    },
    tianjia(){
      var userName=/^[\u4E00-\u9FA5]{2,4}$/;
      var phone=/^[1][3,4,5,7,8][0-9]{9}$/;
      console.log(this.phone)
      console.log('address:'+this.xiangxidizhi ,'name:'+this.name,'address_detail:'+this.obj,'phone:'+this.phone)
      if(userName.test(this.name)==true&&phone.test(this.phone)==true){
        this.axios.post('http://elm.cangdu.org/v1/users/38605/addresses',
        {address: this.xiangxidizhi,address_detail:this.obj,geohash: "31.22299,121.36025",name: this.name,phone: this.phone,phone_bk: "",
        poi_type: 0,sex: 1,tag: "公司",tag_type: 4
        }
            // {address:this.xiangxidizhi ,name:this.name,address_detail:this.obj,phone:this.phone,}
          ).then(res=>{
              console.log(res)
      this.$router.push("/dizhi")

        })
        console.log('成功')
      }
      // if(!this.name){
      //   this.$message.error("请输入收货人姓名");
      //   return;
      // }
      // if(!this.phone){
      //   this.$message.error("请输入收货人手机号")
      // }
      console.log(1212) 
    }
    
  },
   mounted(){
     
     console.log(this.$route.params.item)
     if(this.$route.params.item){
     this.obj=this.$route.params.item.name

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
        background: rgb(228, 225, 225);
    }
    .height{
      width: 100%;
      height: 7rem;
      .dzbjs{
        border-bottom: solid 1px gray;
        width: 100%;
        height: 1rem;
        background: white;
        display: flex;
        p{
          width: 20%;
          font-size: 0.3rem;
          line-height: 1rem;
          margin-left: 0.3rem;
        }
        span{
          width: 80%;
          border: 0;
          font-size: 0.3rem;
          color: gray;
          line-height: 1rem;
        }
        input{
          width: 80%;
          border: 0;
          font-size: 0.3rem;
          color: gray;
        }
      }
      .jjjj{
        border-bottom: solid 1px gray;
        width: 100%;
        height: 1rem;
        background: white;
        display: flex;
        justify-content: space-between;
        p{
          font-size: 0.3rem;
          line-height: 1rem;
          margin-left: 0.3rem;
        }
        .qr{
          margin-top: 0.05rem;
          margin-right: 0.1rem;
          // height: 0.8rem;
          font-size: 0.35rem;
        }
      }
    }
   .btn{
     width: 100%;
     .btn1{
       width: 80%;
       height: 1rem;
       background: red;
       font-size: 0.3rem;
        color: black;
        border: 0;
        margin:0.3rem 10% 0.1rem;
     }
     .btn2{
       width: 80%;
       height: 1rem;
       background: greenyellow;
       font-size: 0.3rem;
        color: black;
        border: 0;
        margin-left: 10%;
     }
   } 
</style>
