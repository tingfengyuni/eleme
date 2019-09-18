<template>
    <div class="dl">
        <div class="head">
            <van-icon name="arrow-left"  @click="tui" class="a1"/>
            <span class="a2">密码登录</span>
        </div>
        <div class="center">
            <div class="zhang">
                <input type="text" class="inp1" placeholder="账号" v-model="name">
                <!-- {{name}} -->
            </div>
            <div class="mima">
                <input type="text" class="inp1" placeholder="密码" v-model="pass">
            </div>
            <div class="yanzheng">
                <input type="text" class="inp1" placeholder="验证码" v-model="captcha_code">
                <img :src="code" alt="" v-if="code">
               <button @click="cheng">换一张</button>
            </div>
            <div class="wen">
                <p>温馨提示：未注册过的账号，登录时将自动注册</p>
                <p>注册过的用户可凭账号密码登录</p>
            </div>
            <div class="deng">
               <span @click="deng">登录</span>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"
axios.defaults.withCredentials=true //让axios请求cookie
export default {
    data(){
        return{
            name:"",
            pass:"",
            code:"",
            captcha_code:""
        }
    },
    methods:{

        tui(){
            this.$router.go(-1)
            // this.$router.push({path:'/wode'})
        },
    
        deng(){
          
           
           
            var Regname=/^[1][3,4,5,7,8][0-9]{9}$/;
          
           console.log(Regname.test(this.name))
           console.log(this.pass.length)
           console.log(this.captcha_code)
           if(Regname.test(this.name)==true&&this.pass.length<6){
         axios.post("http://elm.cangdu.org/v2/login",
           {captcha_code:this.captcha_code,
           password:this.pass,
           username:this.name
           }).then(res=>{
               var q=res.config.data.split(',')[0].split(':')[1].slice(1,5)
               if(this.captcha_code==q){
                    this.$router.push('/')
                    this.$store.commit('faA',this.name)
               }else{
                   alert('验证码错误')
               }
           })
            //  var obj={"name":this.name,"pass":this.pass}
            // //  localStorage.setItem("login",JSON.stringify(obj))
            //    localStorage.setItem("obj",JSON.stringify(obj))
           }else{
               alert('用户名或密码错误')
           }
            if (!this.name) {
                this.$message.error('请输入用户名');
                return;
                }
                
         if (!this.pass) {
                this.$message.error('请输入密码');
                return;
                }

            // setTimeout(() => {
            //     this.$router.push({path:'/'})
            // }, 1000);

            
        },
        cheng(){
             axios.post("http://elm.cangdu.org/v1/captchas").then(res=>{
                console.log(res)
                if(res.data.code!=''){
                    this.code=res.data.code
                }
                    
            })
        }
    },
      mounted(){
            console.log()
            this.cheng()
        },
}
</script>

<style  lang='scss' scoped>
*{
    width: 100%;
    margin: 0;
    list-style: none;
    padding:0;
}
.head{
    width:100%;
    height:1rem;
    background: blue;
    display: flex;
    justify-content: space-between;
    .a1{
        width: 70%;
        font-size: 0.4rem;
        line-height:1rem;
        color: white;
    }
    .a2{
        font-size: 0.4rem;
        line-height:1rem;
        color: white;
    }
    
}
.center{
        width: 100%;
      .zhang{
             width: 100%;
            height:1rem;
            .inp1{
                padding-left: 0.2rem;
                font-size: 0.2rem;
                width: 100%;
                height: 1rem;
                line-height: 1rem;
                border-bottom: solid 1px gray;
            }
         }
        .mima{
            width: 100%;
            height:1rem;
            margin-bottom: 0.5rem;
            .inp1{
                padding-left: 0.2rem;
                font-size: 0.2rem;
                width: 100%;
                height: 1rem;

            }
        }
        .yanzheng{
            width:100%;
            height:1rem;
            display: flex;
            border: solid 1px gray;
            .inp1{
                padding-left: 0.2rem;
                font-size: 0.2rem;
                width: 40%;
                border: 0;
            }
            img{
                font-size: 0.2rem;
                width: 30%;
                height: 1rem;

            }
            button{
                 font-size: 0.2rem;
                width: 30%;
                height: 1rem;

            }
        }
        
    }

    .wen{
        width: 100%;
        height: 1.6rem;
        padding-left: 0.2rem;
        p{
            font-size: 0.2rem;
            color: red;
            margin-top: 0.3rem;
        }
    }
    .deng{
        width: 100%;
        height: 1.2rem;

        span{
            text-align: center;
            display: inline-block;
            margin-left:2.5%;
            width: 95%;
            height: 1.2rem;
            border-radius: 0.5rem;
            line-height: 1.2rem;
            font-size: 0.5rem;
            color: white;

            background: greenyellow;
        }
    }
</style>