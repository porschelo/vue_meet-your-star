<template>
    <div>
        <div class="wrapper_tResult">
        <div class="tResult_header">
            
        </div>
        
        <div class="tResult_section">

            <!-- 標題 -->
            <div class="tResult_title">
                <div class="tResult_title-c">
                    <img src="/images/store/uv_icone.png" alt="">
                    <h1>心理測驗結果</h1>
                    <img src="/images/store/uv_icone.png" alt="">
                </div>
                <div class="tResult_title-e">
                    <h4>— Personality Test Result —</h4>
                </div>
            </div>

            <div class="tResult_content">
                <div class="tResult_main">
                    <div class="result_left">

                        <!-- 結果直條圖 -->
                        <div class="tr_chart">
                            <canvas id="myChart2" width="400" height="400"></canvas>
                        </div>

                        <!-- 結果敘述 -->
                        <div class="tr_result">
                             <p>你的情商很高，什麼話該說什麼話不該說他們比任何人都清楚很多，所以在很多時候，雖然雙子什麼都不說，可是心裡卻比誰都要清楚。
                             在關鍵時刻會把自己強大的人際交往一面顯露出來，常常身邊人被他們的反應速度和口才所深深折服</p>
                        </div>
                    </div>
     
                    <div class="result_right">
                        <!-- 適合星座 -->
                        <div class="right_top">
                            <h2>適合相處的星座</h2>
                            <div class="kind_Constellations">
                                <div class="kc_one">
                                    <img src="/images/test/result-monster1.png" alt="">
                                    <h3>天蠍</h3>
                                </div>
                                <div class="kc_two">
                                    <img src="/images/test/result-monster2.png" alt="">
                                    <h3>處女</h3>
                                </div>
                            </div>    
                        </div>

                        <!-- 不適合星座 -->
                        <div class="right_bottom">
                            <h2>需要保持距離的星座</h2>
                            <div class="distance_Constellations">
                                <div class="dc_one">
                                    <img src="/images/test/result-monster3.png" alt="">
                                    <h3>天蠍</h3>
                                </div>
                                <div class="dc_two">
                                    <img src="/images/test/result-monster4.png" alt="">
                                    <h3>處女</h3>
                                </div>
                            </div>    

     
                        </div>
     
                    </div>

                </div>
               
            </div>
            
           
        </div>
        <div class="tResult_footer">
            <my-footer></my-footer>
        </div>
        
    </div>

    </div>
</template>
<script>
import myFooter from '@/components/myFooter';
import Chart from 'chart.js/auto';
export default {
    components: {
        myFooter,
    },

    methods: {
        getChart() {
            var ctx = document.getElementById('myChart2').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: [
                        '牡羊座',
                        '金牛座',
                        '雙子座',
                        '巨蟹座',
                        '獅子座',
                        '處女座',
                        '天秤座',
                        '天蠍座',
                        '射手座',
                        '摩羯座',
                        '水瓶座',
                        '雙魚座',
                    ],
                    datasets: [
                        {
                            label: '# of Votes',
                            data: [12, 19, 3, 5, 2, 3, 8, 6, 2, 13, 15, 3],
                            backgroundColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)',
                                'rgba(188,70,254,1)',
                                'rgba(119,105,127,0.89)',
                                'rgba(178,76,102,0.87)',
                                'rgba(190,215,117,0.86)',
                                'rgba(56,215,241,0.49)',
                                'rgba(121,161,224,0.71)',
                            ],
                            borderColor: [
                                'rgb(255, 255, 255)',
                                'rgb(255, 255, 255)',
                                'rgb(255, 255, 255)',
                                'rgb(255, 255, 255)',
                                'rgb(255, 255, 255)',
                                'rgb(255, 255, 255)',
                            ],
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });
        },
    },
    mounted(){
        this.getChart();
    }
};
</script>
<style lang="scss">
@import '@/scss/color.scss';
@import '@/scss/var.scss';
@import '@/scss/center.scss';
@import '@/scss/mixins.scss';
@import '@/scss/rwd.scss';
.wrapper_tResult{

    .tResult_header{
        height: 140px;
        background-color: #023552;
        @include rwd(mobile){
            height: 100px;
        }
    }

    .tResult_section{
        //背景圖
         background-image: url(/images/test/bgi_star.png);
         background-size: 100% 100%;
         padding-bottom: 140px;
         @include rwd(mobile){
            background-size: 100% 30%;
            background-image: url(/images/test/bgi_phone.png);
        }
     }

     /*===== 標題 =====*/
    .tResult_title{
        // border: 1px solid red;
        color: $colorT;
        padding: 80px  * .7 0 0;
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

    .tResult_content{
        // border: 1px solid yellow;
        width: 85%;
        height: 85%;
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
        }

        .tResult_main{
            // border: 1px solid white;
            width: 70%;
            @include center;
            padding-top: 180px;
            display: flex;
            line-height: 1.6;
            @include rwd(mobile){
                display: block;
                width: 100%;
                padding-top: 100px;
            }
        }

        

        .result_left{
            // border: 1px solid greenyellow;
            width: 50%;
            padding: 0px 0px 0 10px;
            @include rwd(mobile){
                width: 100%;
            }
        }

        /*===== 結果直條圖=====*/
        .tr_chart{
            @include rwd(mobile){
                width: 100%;
                margin-bottom: 50px;
            }
        }
        
        
         /*===== 結果敘述=====*/
        .tr_result{
            margin-bottom: 230px * .7;
            @include rwd(mobile){
                margin-bottom: 80px;
            }
        }

        .result_right{

            width: 50%;
            padding: 0 10px;
            @include rwd(mobile){
                width: 100%;
            }
            
            h2{
                margin-bottom: 10px;
            }
            img{
                width: 90%;
            }
        }

         /*===== 適合星座=====*/
        .right_top{
            border: 3px solid $colorT;
            text-align: center;
            border-radius: 20px;
            padding: 10px;
            margin-top: 50px;
        }
        
        .kind_Constellations{
            display: flex;
            justify-content: center;
            
        }

        /*===== 不適合星座=====*/
        .right_bottom{
            @extend.right_top;
            margin-top: 10px;
        }

        .distance_Constellations{
            @extend.kind_Constellations; 
            .dc_one{
                margin: 5px;
            }
            .dc_two{
                margin: 5px;
            }
        }
    }

    .tResult_footer{
        width: 100%;
        height: 200px;
        background-color: #44796A;
    }

    .overlaymenu{
        .menulist{
            .nav-menu{
                ul{
                    li:nth-child(3){
                        a{
                            color: yellow;
                        }
                    }
                }
            }
        }
    }
}
</style>