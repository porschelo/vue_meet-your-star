<template>
    <div class="wrapper_tSort">
        <div class="tSort_header">
           
        </div>
        
        <div class="tSort_section">

            <div class="tSort_title">
                <div class="tSort_title-c">
                    <img src="/images/store/uv_icone.png" alt="">
                    <h1>心理測驗</h1>
                    <img src="/images/store/uv_icone.png" alt="">
                </div>
                <div class="tSort_title-e">
                    <h4>— Personality Test —</h4>
                </div>
            </div>

            <div class="tSort_content">
                <div class="tSort_option">
                    <ul>
                        <li @click="showPoster = 0" :class="{highlight:showPoster == 0}"><img src="/images/test/starball.png" alt=""><h2>星座</h2></li>
                        <li @click="showPoster = 1" :class="{highlight:showPoster == 1}"><img src="/images/test/love.png" alt=""><h2>愛情</h2></li>
                        <li @click="showPoster = 2" :class="{highlight:showPoster == 2}"><img src="/images/test/bag.png" alt=""><h2>工作</h2></li>
                    </ul>
                </div>
                <div class="tSort_poster">
                    <img src="/images/test/poster1.png" alt="" v-if="showPoster == 0">
                    <img src="/images/test/poster2.png" alt="" v-if="showPoster == 1">
                    <img src="/images/test/poster3.png" alt="" v-if="showPoster == 2">
                </div>
                <button class="tSort_start"><router-link to ="test_qa">START</router-link></button>
               
                
            </div>
            
           
        </div>
        <div class="tSort_footer">
            <my-footer></my-footer>
        </div>
        
    </div>
</template>
<script>
import myFooter from '@/components/myFooter';
export default {
    data() {
        return {
            showPoster: 0,
        };
    },
    components: {
        myFooter,
    },
    methods: {
        
    },
};
</script>
<style lang="scss">
@import '@/scss/color.scss';
@import '@/scss/var.scss';
@import '@/scss/center.scss';
@import '@/scss/mixins.scss';
@import '@/scss/rwd.scss';
.wrapper_tSort{
    
    .tSort_header{
        height: 140px;
        background-color: #023552;
        @include rwd(mobile){
            height: 100px;
        }
    }

    .tSort_section{
        //背景圖
         background-image: url(/images/test/bgi_star.png);
         background-size: 100% 100%;
         padding-bottom: 140px;
         @include rwd(mobile){
            background-size: 100% 50%;
            background-image: url(/images/test/bgi_phone.png);
         }
     }

    .tSort_title{
        // border: 1px solid red;
        color: $colorT;
        padding: ( 80px ) * .7 0 0;
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
                font-size: $h1 - 8px;
            }
       }

       &-e{
            text-align: center;
            font-size: $p1;
            @include rwd(mobile){
                font-size: $p1 - 6px;
            }
       }

    }

    .tSort_content{
        // border: 1px solid yellow;
        width: 85%;
        height: 85%;
        padding-top: 10px;
        padding-bottom: 220px * .7;
        color: white;
        @include center;

        //儀錶板
        background-image: url(/images/test/bgi-2.png);
        background-size: 100% 100%;
        background-repeat: no-repeat;
        margin-top: 56px;
        @include rwd(mobile){
            background-image: none;
            margin-top: 0px;
            padding-bottom: 30px;
        }
    }

    .tSort_option{
        // border: 1px solid red;
        width: 70%;
        @include center;
        margin-top: 240px * .7;
        margin-bottom: 20px;
        @include rwd(mobile){
            width: 100%;
            margin-top: 56px;
        }
       
        ul{
            display: flex;
            justify-content: center;
        }
        li{
            display: flex;
            margin: 20px;
            cursor: pointer;
            opacity: .5;
            &:hover{
                opacity: 1;
            }
            
            img{
                width: 45px * .7;
                height: 31px * .7;
            }
            img:nth-child(3){
                width: 33px * .7;
                height: 32 * .7;
            }
            h2{
                font-size: $h2;
                margin-left: 5px;
                @include rwd(mobile){
                    font-size: $h2 - 6px;
                }
            }
        }
        .highlight{
                opacity: 1;
        }
       
    }

    .tSort_poster{
        // border: 1px solid red;
        width: 50%;
        @include center;
        font-size: 0;
        @include rwd(mobile){
            width: 100%;
        }
        img{
            width: 100%;
        }
    }

    @include btn-module('.tSort_start', 280, 100){
        color: white;
        display: block;
        margin: 28px auto;
        a{
            text-decoration: none;
             color: white;
         }
    }


    .tSort_footer{
        width: 100%;
        height: 200px;
        background-color: #44796A;
    }

    // .overlaymenu{
    //     .menulist{
    //         .nav-menu{
    //             ul{
    //                 li:nth-child(3){
    //                     a{
    //                         color: yellow;
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }
}

</style>