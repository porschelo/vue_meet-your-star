<template>
    <div class="wrapper_unstore">
        <div class="unstore_section">
            <!-- 標題 -->
            <div class="unstore_title">
                <div class="unstore_title-c">
                    <img src="images/store/uv_icone.png" alt="" />
                    <h1>宇宙商城</h1>
                    <img src="images/store/uv_icone.png" alt="" />
                </div>
                <div class="unstore_title-e">
                    <h4>— Universe Store —</h4>
                </div>
            </div>

            <!-- 頁籤 -->
            <ul class="unstore_sort">
                <li>健康</li>
                <li>愛情</li>
                <li>工作</li>
                <li>學業</li>
                <li><a href="customized.html">客製化</a></li>
            </ul>

            <!-- 商品內容 -->
            <div class="unstore_content">
                <div class="unstore_product">
                    <div class="item">
                        <a href="product_detail.html"
                            ><img src="images/store/hPd_1.png" alt="" />
                            <h4>七星陣水晶原石能量陣</h4></a
                        >
                    </div>

                    <div class="item">
                        <a href="#"
                            ><img src="images/store/hPd_2.png" alt="" />
                            <h4>水向魔法石融蠟燈</h4></a
                        >
                    </div>

                    <div class="item">
                        <a href="#">
                            <img src="images/store/hPd_3.png" alt="" />
                            <h4>生命之花奧剛金字塔</h4>
                        </a>
                    </div>

                    <div class="item">
                        <a href="#"
                            ><img src="images/store/hPd_4.png" alt="" />
                            <h4>天然擴香健康石</h4></a
                        >
                    </div>

                    <div class="item">
                        <a href="#"
                            ><img src="images/store/hPd_5.png" alt="" />
                            <h4>冥王星晶石手鍊</h4>
                        </a>
                    </div>

                    <div class="item">
                        <a href="#">
                            <img src="images/store/hPd_6.png" alt="" />
                            <h4>德國花果茶與乾燥花盒</h4>
                        </a>
                    </div>
                </div>

                <!-- 頁碼 -->
                <ul class="unstore_pagination">
                    <li><a href="#">&lt;</a></li>
                    <li><a href="#" class="-on">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">&gt;</a></li>
                </ul>
            </div>

            <div class="unstore_monster">
                <a href="customized.html"
                    ><img src="images/store/unstore-monster.png" alt=""
                /></a>
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
};
</script>
<style lang="scss">
@import '@/scss/color.scss';
@import '@/scss/var.scss';
@import '@/scss/center.scss';
@import '@/scss/mixins.scss';
@import '@/scss/pagination.scss';
@import '@/scss/rwd.scss';
.wrapper_unstore {
    overflow: hidden;
    //背景圖
    background-image: url(/images/store/unstorebg1200.png);
    background-size: cover;
    box-sizing: border-box;

    @include rwd(pad) {
        background-image: url(/images/store/unstorebg.png);
    }

    @include rwd(mobile) {
        background-image: url(/images/store/pdctD_bg.png);
    }

    /*===== 標題 =====*/
    .unstore_title {
        color: $colorT;
        padding: (80px + 240px) * 0.7 0 0;
        @include rwd(mobile) {
            padding: 220px * 0.7 0 0;
        }
        &-c {
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 63px * 0.7;
                height: 43px * 0.7;
                margin-bottom: 5px;
            }
        }

        h1 {
            font-size: $h1;
            padding: 5px 20px 10px;
            @include rwd(mobile) {
                font-size: $h1 - 8px;
            }
        }

        &-e {
            text-align: center;
            font-size: $p1;
            @include rwd(mobile) {
                font-size: $p1 - 6px;
            }
        }
    }

    /*===== 頁籤 =====*/
    @include bookmark('.unstore_sort') {
        a {
            text-decoration: none;
            color: white;
        }
    }

    /*===== 商品內容 =====*/
    .unstore_content {
        width: 85%;
        height: 85%;
        color: white;
        @include center;
        line-height: 1.2;
        text-align: center;
        padding-top: 20px;

        //儀錶板
        background-image: url(/images/store/pdctFrame_bg.png);
        background-size: 100% 100%;
        background-repeat: no-repeat;

        @include rwd(mobile) {
            background-image: none;
            border: 3px solid #f8f8f8;
            margin-top: 11px;
            text-align: left;
        }

        a {
            text-decoration: none;
            color: white;
        }

        .unstore_product {
            width: 90%;
            max-width: 1200px;
            @include center;
            display: flex;
            flex-wrap: wrap;
            padding-top: 50px;
            @include rwd(mobile) {
                padding-top: 10px;
            }
        }

        .item {
            width: calc((100% - 60px) / 3);

            // flex-grow: 1;
            margin: 0 10px 60px 10px;
            font-size: 0;

            @include rwd(pad) {
                width: calc((100% - 20px) / 2);
                margin: 0 5px 20px 5px;
                margin-bottom: 40px;
            }

            @include rwd(mobile) {
                width: calc((100% - 20px) / 2);
                margin: 0 5px 20px 5px;
            }

            img {
                border: 3px solid $colorBd;
                width: calc(100% - 10px);
            }
        }

        h4 {
            font-size: $p1;
            padding: 10px;
            @include rwd(mobile) {
                font-size: 14px;
                padding: 5px;
            }
        }

        /*===== 頁碼 =====*/
        .unstore_pagination {
            @include pagination;
            padding-bottom: 100px;
        }
    }

    /*===== 客製我小怪獸 =====*/
    .unstore_monster {
        position: relative;

        a:hover {
            opacity: 0.7;
        }

        img {
            position: absolute;
            right: 0;
            width: 28vw;
            @include rwd(mobile) {
                width: 40vw;
            }
        }
    }

    //nav-list 所在頁面樣式
    .overlaymenu {
        .menulist {
            .nav-menu {
                ul {
                    li:nth-child(4) {
                        a {
                            color: yellow;
                        }
                    }
                }
            }
        }
    }
}
</style>