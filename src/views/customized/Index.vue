<template>
    <div class="wrapper_customized">
        
        <div class="customized_section">

            <div class="customized_title">
                <div class="customized_title-c">
                    <img src="images/store/uv_icone.png" alt="">
                    <h1>宇宙商城</h1>
                    <img src="images/store/uv_icone.png" alt="">
                </div>
                <div class="customized_title-e">
                    <h4>— Universe Store —</h4>
                </div>
            </div>
            

            <ul class="customized_sort">
                <li>健康</li>
                <li>愛情</li>
                <li>工作</li>
                <li>學業</li>
                <li>客製化</li>
            </ul>

            <div class="customized_content">

                <div class="customized_top">
                    <h3>Step1. 請選擇客製化商品</h3>

                    <ul>
                        <li><img src="images/store/cPd_1.jpg" alt=""><h4>悠遊卡</h4></li>
                        <li><img src="images/store/cPd_2.jpg" alt=""><h4>Ｔ恤</h4></li>
                        <li><img src="images/store/cPd_3.jpg" alt=""><h4>抱枕</h4></li>
                        <li><img src="images/store/cPd_4.jpg" alt=""><h4>馬克杯</h4></li>
                    </ul>
                </div>

                <div class="customized_bottom">
                    <div class="customized_bottom-left">
                        <h3>Step2. 開始製作屬於你的小怪獸圖案吧！</h3>
                        <div class="customized_box">
                            <img src="images/store/customized-card.png" alt="" class="cust_prod"><img src="images/store/monster-yellow.png" alt="" class="cust_monster">
                        </div>
                        
                    </div>
                    

                    <div class="customized_bottom-right">
                        <div class="cust_select-first">
                            <p>選擇身體</p>
                            <ul class="cust-body">
                                <li><img src="images/store/body-one.png" alt=""></li>
                                <li><img src="images/store/body-two.png" alt=""></li>
                                <li><img src="images/store/body-three.png" alt=""></li>
                            </ul>
                            <p>選擇眼睛</p>
                            <ul class="cust-eyes">
                                <li><img src="images/store/eyes-one.png" alt=""></li>
                                <li><img src="images/store/eyes-two.png" alt=""></li>
                                <li><img src="images/store/eyes-three.png" alt=""></li>
                            </ul>
                            <p>選擇嘴巴</p>
                            <ul class="cust-mouth">
                                <li><img src="images/store/mouth-one.png" alt=""></li>
                                <li><img src="images/store/mouth-two.png" alt=""></li>
                                <li><img src="images/store/mouth-three.png" alt=""></li>
                            </ul>
                        </div>

                        <div class="cust_select-second">
                            <p>選擇配件</p>
                        <ul class="cust-fitting">
                            <li><img src="images/store/fitting-one.png" alt=""></li>
                            <li><img src="images/store/fitting-two.png" alt=""></li>
                            <li><img src="images/store/fitting-three.png" alt=""></li>
                        </ul>
                        <p>選擇背景</p>
                        <ul class="cust-color">
                            <li class="cust-white"></li>
                            <li class="cust-yellow"></li>
                            <li class="cust-green"></li>
                        </ul>
                        <p>輸入文字</p>
                        <div class="cust-word">
                            <input type="text" placeholder="請輸入文字" >
                        </div>            

                        </div>
                        
                           
                    </div>

                </div>

                <div class="customized_price">
                    <p><span>500</span>元 / 個 <input type="number" value="1" min="1">個 共<span style="color:#4EACF2"
                        >1000</span>元</p>
                    <button class="cust-add">加入購物車</button>
                    <button class="cust-buy">立即購買</button>
                </div>
            </div>
    
        </div>
        <my-footer></my-footer>

    </div>
</template>
<script>
import myFooter from '@/components/myFooter';
export default {
     components: {
        myFooter,
    },
    
}
</script>
<style lang="scss">
@import '@/scss/color.scss';
@import '@/scss/var.scss';
@import '@/scss/center.scss';
@import '@/scss/mixins.scss';
@import '@/scss/pagination.scss';
@import '@/scss/rwd.scss';
.wrapper_customized{
    
    background-image: url(/images/store/unstorebg1200.png);
    background-size: cover;
    box-sizing: border-box;

    @include rwd(pad){
       background-image:  url(/images/store/unstorebg.png);
    }

    @include rwd(mobile){
       background-image: url(/images/store/pdctD_bg.png);
    }

    .customized_title{
        color: $colorT;
        padding: ( 80px + 240px ) * .7 0 0;
        @include rwd(mobile){
            padding: 220px  * .7 0 0;
        }
        &-c{
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 63px * .7;
                height: 43px * .7;
                margin-bottom: 5px;
            }
        }
       
       h1{
           font-size: $h1;
           padding: 5px 20px 10px;
           @include rwd(mobile){
                font-size: $h1 - 6px;
            }
        }

       &-e{
            text-align: center;
            font-size: $p1;
            @include rwd(mobile){
                font-size: $p1 - 8px;
            }
        }
    }

    @include bookmark('.customized_sort'){
        a{
            text-decoration: none;
            color: $colorPb;
            background-color: $colorPb;
        }
    }
    
    .customized{
        &_content{
            width: 85%;
            color: white;
            line-height: 1.6;
            @include center;
            
            background-image: url(/images/store/frameC.png);
            background-size: 100% 100%;
            background-repeat: no-repeat;
            margin-top: 11px;

            @include rwd(mobile){
                background-image: none;
                border: 3px solid $colorPb;
                margin-top: 11px;
            }
        }

        &_top{
            padding-top: 60px;
            width: 85%;
            @include center;
            font-size: $h3;
            color: $colorPb;
            @include rwd(mobile){
                font-size: $h3 - 6px;
                padding-top: 30px;
            }
            
            h3{
                margin-bottom: 35px;
            }

            ul{
                display: flex;
                flex-wrap: wrap;
            }
            li{
                width: calc((100% - 120px) / 4);
                border: 3px solid $colorPb;
                margin: 10px;
                position: relative;
                font-size: 0;
                h4{
                    position: absolute;
                    top:70%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: $p1;
                }
                img{
                    width: 100%;
                }

                @include rwd(mobile){
                    width: calc((100% - 40px) / 2);
                    margin:0 5px 10px 5px;
                    h4{
                        font-size: $p1 - 8px;
                    }
                }
            }    
        }

        &_bottom{
            width: 80%;
            @include center;
            padding-top: 60px;
            display: flex;
            
            @include rwd(pad){
                display: block;
            }
        }

        &_bottom-left{
            font-size: $h3;
            width: 60%;
            @include rwd(pad){
                width: 100%;
            }
            @include rwd(mobile){
                font-size: $h3 - 6px;
            }
            h3{
                margin-bottom: 35px;
            }
           
        }

        &_box{
            width: 90%;
            // height: 420px;
            border: 3px solid $colorPb;
            margin-bottom: 56px;
            position: relative;
            @include rwd(mobile){
                @include center;
            }

            &::before{
                content:"";
                width: 100%;
                // padding-bottom: 720 * 100% / 1280;
                padding-bottom: 85%;
                display: block;
            }

            .cust_prod{
                width: 40%;
                position: absolute;
                right: 30%;
                top: 15%;
            }
            .cust_monster{
                width: 20%;
                position: absolute;
                right: 40%;
                top: 35%;
            }
        }

        &_bottom-right{
            width: 30%;
            margin-top: 60px;
            margin-left: 50px;
            font-size: $p1;
            img{
                width: 100%;
            }
            @include rwd(pad){
                display: flex;
                width: 100%;
                margin-left: 0;
            }

            @include rwd(mobile){
                font-size: $p1 - 6px;
            }

            .cust_select-first{
                @include rwd(mobile){
                    width: 48%;
                }
            }
            .cust_select-second{
                @include rwd(mobile){
                    width: 47%;
                    margin-left: 5%;
                }
            }

            ul{
                display: flex;
                margin-bottom: 30px;
            }
            p{
                margin-bottom: 20px;
            }
            li{
                margin-right: 20px;
            }

            .cust-white{
                width: 30px;
                height: 30px;
                border-radius: 5px;
                background-color: white;
            }
            .cust-yellow{
                @extend .cust-white;
                background-color: #FFF03C;
            }

            .cust-green{
                @extend .cust-white;
                background-color: #6EFF89;
            }

            .cust-word{
                input{
                    width: 80%;
                    height: 48px * .7;
                    border-radius: 5px;
                    font-size: $p1;
                    @include rwd(mobile){
                        font-size: $p1 - 6px;
                    }
                }
            }
            

        }

        &_price{
            // border: 1px solid red;
            width: 90%;
            @include center;
            padding-left: 10%;
            @include rwd(mobile){
                padding-left: 0;
                text-align: center;
            }
            p{
                font-size: $p1;
                margin-top: -70px;
                margin-bottom: 56px;
                @include rwd(pad){
                    margin-top: 50px;
                }
                @include rwd(mobile){
                    font-size: $p1 - 6px;
                }
            }

            input{
                width: 50px;
                height: 30px;
                font-size: $p1;
                margin-left: 10px;
                border-radius: 5px;
            } 

            @include btn-module('.cust-add', 236, 93){
                color: white;
                margin-right: 20px;
                margin-bottom: 127px * .7;
                @include rwd(mobile){
                    font-size: $h3 - 8px;
                    width: 170 * 0.7px;
                    height: 80 * 0.7px;
                    margin-right: 5px;
                }
            }

            @include btn-module('.cust-buy', 236, 93){
                color: white;
                @include rwd(mobile){
                    font-size: $h3 - 8px;
                    width: 170 * 0.7px;
                    height: 80 * 0.7px;
                }
            }  
        }    
    }
    
    .overlaymenu{
        .menulist{
            .nav-menu{
                ul{
                    li:nth-child(4){
                        a{
                            color: yellow;
                        }
                    }
                }
            }
        }
    }

    
  

}

.cls-2:hover{
    fill:#f00;
}

</style>