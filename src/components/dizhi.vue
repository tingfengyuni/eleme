<template>
    <div id="home">
        <div class="header">
            <router-link to="/grxxxq">
                <van-icon name="arrow-left"  class="tb1"/>
            </router-link>
            <p>选择地址</p>
        </div>
        <section class="aa">
            <div class="dizhi" v-for="(item,k) in info" :key="k">
              <input type="radio"/>
              <div class="dizhi1">
                <p class="p1">{{item.name}},{{item.phone}}</p>
                <p class="p2">{{item.address}}</p>
              </div>
              <van-icon name="edit" class="tb1"/>
            </div>
            <router-link to="/dizhibianji">
              <button class="btn1">新增地址</button>
            </router-link>
            
        </section>
    </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      info:[]
    }
  },

  methods: {
  },
  
  mounted(){
    this.axios.get(`http://elm.cangdu.org/v1/users/38605/addresses`).then((e)=>{
    console.log(e.data)
    this.info=e.data
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
    .dizhi{
      width: 100%;
      height:1.3rem;
      border-bottom: solid 1px black;
      display: flex;
      background: white;
      justify-content: space-between;
      input{
        width: 0.5rem;
        height: 0.5rem;
        margin: 0.4rem 0.2rem; 
      }
      .dizhi1{
        width: 85%;
        height: 1.3rem;
        .p1{
          font-size: 0.3rem;
          color: black;
          height: 0.5rem;
          margin-top: 0.2rem;

        }
        .p2{
          font-size: 0.26rem;
          color: gray;
          height: 0.8rem;
        }
      }
      .tb1{
        // margin: 0.4rem 0.2rem; 
        margin-left: 0.2rem;
        margin-right: 0.2rem;
        font-size: 0.28rem;
        line-height: 1.3rem;
      }
    }
    .btn1{
      width: 90%;
      height: 0.8rem;
      font-size: 0.28rem;
      line-height: 0.8rem;
      background: red;
      color: black;
      text-align: center;
      border: 0;
      margin-left: 5%
    }
</style>
