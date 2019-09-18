<template>
    <div id="home">
       <div class="header">
            <router-link to="/wode">
                <van-icon name="arrow-left"  class="tb1"/>
            </router-link>
            <p>账户信息</p>
        </div>
        <section class="aa">
            <div class="tx1">
                <p>头像</p>
                <div class="tx2" @click.stop="faB()">
                    <img :src="img1" alt="">
                    <van-icon name="arrow" class="i1"/>
                    <input type="file" @change="faA($event)" accept="image/*" class="faA"/>
                </div>
            </div>
            <div class="tx3">
                <p>用户名</p>
                <div class="tx2">
                    <p>{{txt}}</p>
                    <router-link to="" class="lkq">
                        <van-icon name="arrow" class="i1"/>
                    </router-link>
                </div>
            </div>
            <div class="tx3">
                <p>收货地址</p>
                <div class="tx2">
                    <router-link to="/dizhi" class="lkq">
                        <van-icon name="arrow" class="i2"/>
                    </router-link>
                </div>
            </div>
            <div class="a1">
                账号绑定
            </div>
             <div class="wje">
                <div>
                    <van-icon name="phone" class="tb3"/>积分商城
                </div>
                 <van-icon name="arrow" class="tb2"/>
            </div>
            <div class="a1">
                安全设置
            </div>
            <div class="tx3">
                <p>登陆密码</p>
                <div class="tx2">
                    <p>修改</p>
                    <van-icon name="arrow" class="i1"/>
                </div>
            </div>
            <button class="btn" @click="faC()">退出登录</button>
        </section> 
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
    },
    methods:{

        faA(e){
            var ev =e.target;
            var na=ev.files[0]
            console.log(na)
            var res=new FileReader()
            res.readAsDataURL(na)
            res.onload=(data)=>{
                let ss=data.target
                this.img1=ss.result
                localStorage.img=this.img1
            }

        },
        faC(e){
            alert("确认要退出吗？")
            localStorage.vuex='';
            localStorage.img=''
            this.$router.push("/wode")
        },
        faB(){
            this.$el.querySelector('.faA').click()
        }
    }
  
}
</script>
<style lang='scss' scoped>
.faA{
  display: none;
}
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
    .tx1{
        border-bottom: solid 1px gray;
        padding-left: 0.2rem;
        background: white;
        width: 100%;
        height: 1.5rem;
        display: flex;
        justify-content: space-between;
        p{
            font-size:0.4rem;
            line-height: 1.5rem;
            color: black;
        }
        .tx2{
            display: flex;
            img{
                width:1rem;
                height: 1rem;
                margin-top: 0.25rem;
                border-radius: 50%;
                margin-right: 0.1rem;
            }
            .i1{
                font-size: 0.4rem;
                line-height:1.5rem;
                color:gray;
                margin-right: 0.3rem;
            }
        }
    }
    .tx3{
        border-bottom: solid 1px gray;
        padding-left: 0.2rem;
        background: white;
        width: 100%;
        height: 1rem;
        display: flex;
        justify-content: space-between;
        p{
            font-size:0.4rem;
            line-height: 1rem;
            color: black;
        }
        .tx2{
            display: flex;
            p{
                font-size:0.4rem;
                line-height: 1rem;
                color: gray;
            }
            .i1{
                font-size: 0.4rem;
                line-height:1rem;
                color:gray;
                margin-right: 0.3rem;
            }
           .lkq{
               line-height: 0.6rem;
               .i2{
                    font-size: 0.4rem;
                    line-height:1rem;
                    // margin-top: -0.5rem;
                    color:gray;
                    margin-right: 0.3rem;
                }
            }
            
        }
    }
    .a1{
        width: 100%;
        height: 1rem;
        font-size: 0.26rem;
        color: black;
        padding-left: 0.2rem;
        line-height: 1rem;
        border-bottom: solid 1px gray;
    }
    .wje{
        padding-left:0.3rem;
        background: white;
        width: 100%;
        height: 1rem;
        display: flex;
        justify-content: space-between;
        border-bottom: solid 1px gray;
        div{
            width: 100%;
            height: 1rem;
            font-size: 0.4rem;
            line-height: 1rem;

            .tb1{
                font-size: 0.4rem;
                color: gray;
                margin-right: 0.2rem;
            }
            .tb3{
                font-size: 0.4rem;
                color: blue;
                margin-right: 0.2rem;
            }
            .tb4{
                font-size: 0.4rem;
                color: orange;
                margin-right: 0.2rem;
            }
        }
        .tb2{
            line-height: 1rem;
            font-size: 0.4rem;
            color: gray;
             margin-right: 0.5rem;
        }
    }
    .btn{
        width: 90%;
        margin:0.8rem 5%;
        height: 1rem;
        background: red;
        font-size: 0.28rem;
        color: white;
        border: 0;
        border-radius: 0.1rem;
    }
</style>
