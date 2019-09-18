<template>
    <div id="home">
        <div class="header">
            <ul>
                <li>商品</li>
                <li>评价</li>
            </ul>
        </div>
        <section>
            <div class="center">
                <div class="left">
                    <ul v-for="(v,i) in list" :key="i">
                        <li><a :href="'#fa'+i">{{v.name}}</a></li>
                    </ul>
                </div>
                <div class="right">
                    <div class="connect" v-for="(v,i) in list" :key="i">
                        <div class="top">
                            <p :id='"fa"+i'>{{v.name}}</p>
                            <div class="top1">
                                <p>大家喜欢吃，才叫真好吃</p>
                                <van-icon name="ellipsis" class="tb"/>
                            </div>
                        </div>
                        <div class="nei" v-for="(item,k) in v.foods" :key="k">
                            <div class="img">
                                <img :src="'http://elm.cangdu.org/img/'+item.image_path" alt >
                            </div>
                            <div class="wenzi">
                                <div class="name">
                                    <h5 >{{item.name}}</h5>
                                    <span>招牌</span>
                                </div>
                                <p class="p1">好吃</p>
                                <p class="p2">{{item.tips}}</p>
                                <p class="p3">打折</p>
                                <div class="price">
                                    <h5>￥{{item.satisfy_rate}}</h5>
                                    <!-- <p class="p1">选规格</p> -->
                                    <div class="jiajian">
                                        <div class="aa">
                                            <span>-</span>
                                            <p>1</p>
                                        </div>
                                        
                                        <span>+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        <div class="foot">
            <div class="zuo">
                <div class="gwc">
                    <van-icon name="shopping-cart" class="shop" info="5" />
                </div>
                <div class="money">
                    <span class="qian">￥0.00</span>
                    <span class="pei">配送费￥5</span>
                </div>
            </div>
            <div class="you">
                <span>还差￥20元起送</span>
            </div>
        </div>
    </div>
</template>

<script>
  import axios from "axios";
export default {
  name: 'home',

  data() {
    return {
      list: []
    };
  },
  mounted() {
    axios
      .get(
        "http://elm.cangdu.org/shopping/v2/menu?restaurant_id=" +
          this.$route.query.id
      )
      .then(res => {
        console.log(res.data);
        this.list = res.data;
      });
    console.log(this.$route.query.id);
  }
}
</script>
<style lang='scss' scoped>
    *{
        margin: 0;
        padding: 0;
        list-style:none;
        // height: 100%;
    }  
    .header{
        width: 100%;
        height: 1.5rem;
        ul{
            border-bottom: solid 1px #dbdbdb;
            width: 100%;
            height: 1.5rem;
            display: flex;
            justify-content: space-around;
            li{
                font-size: 0.6rem;
                height: 1rem;
                line-height: 1rem;
                margin-top: 0.25rem;
            }
            li:hover{
                color: blue;
                border-bottom: solid 1px blue;
            }
        }
    }
    .center{
        width: 100%;
        // height: 100%;
        display: flex;
        .left{
            width: 25%;
            background: #f0eded;
            // height: 3rem;
            // border-bottom: solid 1px #dbdbdb;
            ul{
                width: 100%;
                li{
                    width: 100%;
                    height: 1.5rem;
                    font-size: 0.6rem;
                   border-top:solid 1px #dbdbdb;
                    color: black;
                    line-height: 1.5rem;
                    text-align: center;
                }
                li:hover{
                    border-left: solid 4px blue;
                    color: #302f2f;
                    font-weight: 700;
                     background: white;
                }
            }
        }
        .right{
            // overflow: auto;
            width:75%;
            // height: 3rem;
            // border-bottom: solid 1px #dbdbdb;
            .connect{
                width: 100%;
                .top{
                    background: #f0eded;
                    width: 100%;
                    height: 1.2rem;
                    display: flex;
                    // justify-content: space-around;
                    p{
                        // width: 20%;
                        font-size: 0.55rem;
                        font-weight: 600;
                        line-height: 1.2rem;
                        margin-left: 0.2rem;
                    }
                    .top1{
                        // width: 80%;
                        display: flex;
                        justify-content: space-between;
                        p{
                            // display: flex;
                            margin-top: 0.1rem;
                            font-size: 0.35rem;
                            color: gray;
                            font-weight: normal;
                            line-height: 1.2rem;
                            margin-right:1.3rem;
                        }
                        .tb{
                            font-size: 0.6rem;
                            color: gray;
                            line-height: 1.2rem;
                            // font-weight: normal;
                        }
                    }
                }
                .nei{
                    padding-bottom: 0.5rem;
                    border-bottom:solid 1px #dbdbdb;
                    width: 100%;
                    display: flex;
                    .img{
                        width: 25%;
                        img{
                            width: 1.5rem;
                            height:1.5rem;
                            border-radius: 10px;
                            margin: 0.3rem 0.25rem;
                        }
                    }
                    .wenzi{
                        width: 75%;
                        .name{
                            width: 100%;
                            display: flex;
                            justify-content: space-between;
                            margin-bottom: 0.1rem;
                            h5{
                                font-size: 0.6rem;
                                color: black;
                                font-weight: 500;
                                margin-top: 0.25rem;
                            }
                            span{
                                width:0.9rem;
                                height: 0.4rem;
                                font-size: 0.35rem;
                                line-height: 0.4rem;
                                text-align: center;
                                color: red;
                                border: solid 1px red;
                                border-radius: 10px;
                                margin-top: 0.4rem;
                                margin-right: 0.2rem;
                            }
                        }
                        .p1{
                            font-size: 0.4rem;
                            // display: inline-block;
                            color: gray;
                            // margin-top: -1rem;
                            margin-bottom: 0.1rem;
                        }
                        .p2{
                            font-size: 0.4rem;
                            color: black;
                            margin-bottom: 0.25rem;
                        }
                        .p3{
                            margin-bottom: 0.1rem;
                            margin-top: 0.15rem;
                            width:0.9rem;
                            height: 0.4rem;
                            font-size: 0.35rem;
                            line-height: 0.4rem;
                            text-align: center;
                            color: red;
                            border: solid 1px red;
                            border-radius: 10px;
                        }
                        .price{
                            width: 100%;
                            display: flex;
                            justify-content: space-between;
                            h5{
                                color: red;
                                font-size: 0.8rem;
                            }
                            .p1{
                                width: 1.7rem;
                                height: 0.7rem;
                                background:blue;
                                font-size: 0.5rem;
                                color: white;
                                text-align: center;
                                line-height: 0.7rem;
                                border-radius: 5px;
                                margin: 0.2rem;
                            }
                            .jiajian{
                                display: flex;
                                margin-right: 0.2rem;
                                .aa{
                                    display: flex;
                                    span{
                                        margin-top: 0.2rem;
                                        width: 0.8rem;
                                        height: 0.8rem;
                                        line-height: 0.8rem;
                                        text-align: center;
                                        font-size: 0.6rem;
                                        color: white;
                                        background: blue;
                                        border-radius:50%;
                                    }
                                    p{
                                        font-size: 0.5rem;
                                        margin: 0.3rem 0.2rem 0rem 0.2rem;
                                    }
                                }
                                span{
                                        margin-top: 0.2rem;
                                        width: 0.8rem;
                                        height: 0.8rem;
                                        line-height: 0.8rem;
                                        text-align: center;
                                        font-size: 0.6rem;
                                        color: white;
                                        background: blue;
                                        border-radius:50%;
                                    }
                                
                            }
                        }
                    }
                }
                
            }
           
        }
    }
    .foot{
        height: 3rem;
        background: #3D3D3F;
        display: flex;
        .zuo{
            width: 63%;
        }
        .you{
            width: 37%;
            background: #535356;
            text-align: center;
            span{
                line-height: 1.5rem;
                color: white;
                font-size: 0.5rem;
                font-weight: bold;
            }
        }
        .zuo{
        display: flex;
            .gwc{
                width: 1.5rem;
                height: 1.5rem;
                margin-left: 0.5rem;
                border-radius: 50%;
                margin-top: -0.5rem;
                background: #3D3D3F;
                border: 3px solid #535356;
                z-index: 22;
                text-align: center;
                .shop{
                line-height: 1.5rem;
                color: white;
                font-size: 1rem;
            }
        }
        .money{
        margin-left: 0.3rem;
        display: flex;
        flex-direction: column;
            .qian{
                color: white;
                line-height: 0.8rem;
                font-size: 0.7rem;
                font-weight: bold;
            }
            .pei{
                color: white;
                font-size: 0.4rem;
                line-height: 0.5rem;
            }
        }
        }
    }
</style>
