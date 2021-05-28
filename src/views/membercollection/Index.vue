<template>
    <div>
        
        <div class="F_wrapper">
    

            <!-- Title -->

            <div class="MF_title">
                <div class="MF_title-c">
                    <img src="images/membercollection/earth.png" alt="">
                    <h1>會員中心</h1>
                    <img src="images/membercollection/earth.png" alt="">
                </div>
            
                <div class="MF_title-e">
                    <h4>一 Member Centre 一</h4>
                </div>
            </div>
            <!-- Title END-->


            <div class="MF_mid_block">
                <div class="tab">
                    <!-- <a href="./membercentre.html" class="tab_btn">個人資料</a>
                    <a href="./memberorderlist.html" class="tab_btn">訂單資料</a>
                    <a href="./membercollection.html" class="tab_btn">我的收藏</a> -->
                </div>
                
                <div class="mid">

                        <table>
                            <thead>
                                <tr class="collection_title">
                                    <td>商品圖片</td>
                                    <td>商品名稱</td>
                                    <td>金額</td>
                                    <!-- <td>
                                        <button class="canel_collection">前往付款</button>
                                    </td> -->
                                </tr>
                                <tr>
                                    <td colspan="5">
                                        <div class="line"></div>
                                    </td>
                                </tr>
                            </thead>
                        
                            <tbody>
                                <tr class="cn1">
                                    <td><img src="/images/membercollection/collection1.png" alt="" class="collection_item"></td>
                                    <td class="cn_name">能量手環</td>
                                    <td>500</td>
                                    <td rowspan="1">
                                        <button class="canel_collection">取消收藏</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="5">
                                        <div class="line"></div>
                                    </td>
                                </tr>
                        
                                <tr class="cn2">
                                    <td><img src="/images/membercollection/collection2.png" alt="" class="collection_item"></td>
                                    <td class="cn_name">宇宙能量手環喔</td>
                                    <td>600</td>
                                    <td rowspan="1">
                                        <button class="canel_collection">取消收藏</button>
                                    </td>
                                    
                                </tr>
                        
                                <tr>
                                    <td colspan="5">
                                        <div class="line"></div>
                                    </td>
                                </tr>
                        
                                <tr class="cn3">
                                    <td><img src="/images/membercollection/collection2.png" alt="" class="collection_item"></td>
                                    <td class="cn_name">宇宙能量手環</td>
                                    <td>700</td>
                                    <td rowspan="1">
                                        <button class="canel_collection">取消收藏</button>
                                    </td>
                                </tr>

                                
                                        
                            </tbody>
                        
                        </table>
                    
                </div>
                
                <!-- MF_mid_block END -->
            </div>

            <myFooter></myFooter>
            <!--wrapper END  -->
        </div>

        <!-- template END -->
    </div>
</template>

<script>
import myFooter from '@/components/myFooter'
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
    @import '@/scss/rwd.scss';

    // scss

    $font_size:(H1:52*.7px,
    H2:40*.7px,
    H3:35*.7px,
    H4:30*.7px,
    p:20*.7px);

$color:(white:#fff,
    gray:#CACACA,
    pink:#FFC2CF,
    lightblue:#D6E0F7,
    font_color:#777777,
);





.F_wrapper {
    @include rwd("mobile") {
        // h1 {
        //     font-size: $h1 - 8px !important;
        // }

        // h2 {
        //     font-size: $h2 - 6px !important;
        // }

        // h3 {
        //     font-size: $h3 - 6px !important;
        // }

        // h4 {
        //     font-size: $p1 - 6px !important;
        // }
    }

    * {
        box-sizing: border-box;
    }

    img {
        max-width: 100%;
    }

    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(/images/membercollection/member-bg2x.png);
    background-size: cover;


    .MF_title {
        // margin: 320*.7px 0 550*.7px 0;
        // border: $border red;

        color: $colorT;
        padding: (80px + 240px) * .7 0 0;

        margin-bottom: 280px*.7;

        &-c {
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 63px * .7;
                height: 43px * .7;
                margin-bottom: 5px;
            }
        }

        h1 {
            font-size: $h1;
            padding: 5px 20px 10px;
        }

        &-e {
            text-align: center;
            font-size: $p1;
        }
    }

    // 中間資料

    .MF_mid_block {
        // border: 1px solid red;
        max-width: 1300*.7px;
        width: 100%;


        .tab {
            display: flex;
            justify-content: space-evenly;


            a {

                font-size: $h3;
                background-color: map-get($color, gray);
                color: map-get($color, font_color);
                max-width: 265*.7px;
                max-height: 75*.7px;
                width: 100%;
                border-radius: 20*.7px 20*.7px 0 0;
                line-height: 75*.7px;
                text-align: center;
                cursor: pointer;
                // margin-left: 37*.7px;
                text-decoration: none;

                @include rwd("mobile") {
                    width: 25%;
                    font-size: $h3 - 6px
                }

                &:nth-of-type(3) {
                    background-color: map-get($color, white);
                }

            }
        }

        .mid {
            border: 3px solid white;
            font-size: $h3;
            color: map-get($color, white);
            margin: 0 5%;

            @include rwd("mobile") {

                font-size: 13px
            }

            table {
                text-align: center;
                width: 100%;
                margin-top: 4%;
                margin-bottom: 4%;



                td {
                    vertical-align: middle;
                    letter-spacing: 2px;
                    border: 1px solid green;

                }

                .line {
                    width: 90%;
                    margin: 5% auto;
                    border-top: 2px solid gray;
                }

                @include btn-module('.canel_collection', 191, 75) {
                    color: white;
                    line-height: (75*.7)-6px;
                    font-size: $p2;
                    @include center;

                    @include rwd("mobile") {
                        font-size: $p2 - 8px;
                        width: 110px*.7;
                        height: 50px*.7;
                        line-height: (50*.7) - 6px;
                        letter-spacing: 1px;
                    }
                }

                .collection_item {
                    margin: 5% auto;
                    max-width: 200px*.7;
                    width: 100%;
                    border-radius: 5px;
                    // border: 3px solid white;

                    @include rwd(mobile) {
                        max-width: 110px*.7;
                    }
                }
            }
        }

    }

}

</style>