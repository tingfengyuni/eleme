<template>
    <div class="home">
        <div class="ball-container">
        <transition v-on:after-enter="afterEnter" v-on:enter="enter" v-on:before-enter="beforeEnter" name="drop" v-for="(litterBall,indexBall) in balls" :key="indexBall">
          <div v-show="litterBall.show" class="ball">
            <div class="inner" :class="indexBall">

            </div>
          </div>
        </transition>
      </div>
    </div>
     
</template>

<script>
  import axios from "axios";
  import $ from 'jquery';
  import Velocity from 'velocity-animate'
export default {
  name: 'home',

  data(){
      return{
           balls:[//小球
            {show:false,index:0},
            {show:false,index:1},
            {show:false,index:2},
            {show:false,index:3},
            {show:false,index:4},
            {show:false,index:5},
            {show:false,index:6},
            {show:false,index:7},
            {show:false,index:8},
            {show:false,index:9},
            {show:false,index:10},
            {show:false,index:11}
          ],
          dropBall:[] 
      }
  },
  methods:{//别的一些方法
    drop(el){//小球动画方法,el就是加号按钮元素
        for(var i=0;i<this.balls.length;i++){
           if(!this.balls[i].show){//把小球show为false的变成true，展示出来
            let ball = this.balls[i];
            ball.show = true;  //这里这样写他继承的this.balls的值也会变成true
            ball.el = el; //把这个球的位置保留下来
            this.dropBall.push(ball);  //把这个已经drop的球放到dropBall中
            //console.log(this.dropBall,222)
            return  //结束循环和函数，不会让循环再往后执行了
          }
        }
      },
    },
    methods:{
  //别的方法省略，具体看github上有源代码
     beforeEnter(els){
              let count = this.dropBall.length -1 ;  //获取要下降中的小球个数
              let ball = this.dropBall[count];  //获取最新点击成show:true的小球
                    let rect = ball.el.getBoundingClientRect();  //getBoundingClientRect()可以获取到元素对象和窗口的相对上下左右的距离
                    var rect2 = els.getBoundingClientRect();
                    let x = rect.left -500 ; //点击元素的左边距离 - 下面购物车左边的距离，就是小球要运动的X轴距离
                    let y =-(window.innerHeight - rect.top -650) ;//窗口的高度 - 点击元素离窗口的高度 - 购物车底部的padding,margin高度，就是小球要运动的y轴距离，且是向下运动，所以是负值
                    //els.style.display ="";
                    els.style.opacity = 1;
                    els.style.webkitTransform = `translate3d(0,${y}px,0)`;
                    els.style.transform = `translate3d(0,${y}px,0)`; //外层做纵轴运动

                    //内层做横轴运动
                    let inner = els.getElementsByClassName('inner')[0];
                    inner.style.webkitTransform = `translate3d(${x}px,0,0)`;
                    inner.style.transform = `translate3d(${x}px,0,0)`;
            },
            enter(els,done){
              var _this = this;
              let hh = els.offsetHeight; //手动获取这个值，触发浏览器重绘
               _this.$nextTick(function(){
                  //内层做横轴运动
                  els.style.opacity = "0";
                   let inner = els.getElementsByClassName('inner')[0];
            Velocity(els,{translate3d:"translate3d(0,0,0)"},{duration:600});  //这里引入了第三方动画插件，需要先 npm i velocity-animate --save ，和 引入 import Velocity from 'velocity-animate'
            Velocity(inner,{translate3d:"translate3d(0,0,0)"},{duration:600,complete:function(){
                        done();
                      }
                   });
             });


            },
            afterEnter(els){
                 let ball = this.dropBall.shift();
                  if(ball){
                    ball.show = false;
                    els.style.display = "none"; //这个很重要
                  }
            },
    }
}
</script>
<style>
    .ball-container,
    .ball{
      position:fixed;
      left: 500px;
      bottom :650px;
      z-index :900;
      transform :translate3d(0,0,0);
      transition :all 0.6s cubic-bezier(0.49,-0.29,0.75,0.41);
        width :16px;
        height :16px;
        border-radius :50%;
        background :rgb(0,160,220);
        transition: all 0.6s linear;
        transform :translate3d(0,0,0);
    }
</style>
