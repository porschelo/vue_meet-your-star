<template>
    <div>
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Document</title>
                <!-- <link rel="stylesheet" href="ap_style.css"> -->
                @@include('layout/scripts.html')
            </head>

            <body>
                <div class="j_wrapper">
                    <!-- @@include('layout/header.html') -->

                    <!-- 中間背景 -->
                    <div class="j_middle">
                        <!-- 頁面標題 -->
                        <div class="j_title">
                            <div class="j_bigtitle">
                                <img
                                    src="/images/appointment/earth2.png"
                                    alt=""
                                    id="earth"
                                />
                                <h1>訂購完成</h1>
                                <img
                                    src="/images/appointment/earth2.png"
                                    alt=""
                                    id="earth"
                                />
                            </div>

                            <div class="j_subtitle">
                                <h4>— Order Complete —</h4>
                            </div>
                        </div>

                        <!-- 儀錶板 -->
                        <div class="j_panel">
                            <div class="j_panel_inner">
                                <div class="j_panel_title">
                                    <h2>購買完成</h2>
                                    <h4>恭喜您,您購買的商品已經準備出貨中!</h4>
                                </div>

                                <div class="j_panel_content">
                                    <p>訂單編號: 073294758302</p>
                                    <p>訂購姓名: 糖老鴨</p>
                                    <p>
                                        預約商品: 七星招財手環
                                        <!-- {{ selectteacher }} -->
                                    </p>
                                </div>

                                <div class="j_panel_notice">
                                    <p>
                                        欲查看訂單詳情請前往會員中心<br />
                                        若有任何問題,歡迎來電告知<br />
                                        電話:02-27580000
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- @@include('layout/footer.html') -->
                    <myFooter></myFooter>
                </div>
            </body>
        </html>
    </div>
</template>

<script>
import myFooter from '@/components/myFooter';
import axios from 'axios';

export default {
    components: {
        myFooter,
    },
    mounted() {
        axios
            .post('http://localhost/meetyourstars/selectappointment.php')
            .then((res) => {
                console.log(res);
                this.teacher = res.data;
            });
    },
    computed: {},
};
</script>

<style lang="scss">
@import '@/scss/color.scss';
@import '@/scss/var.scss';
@import '@/scss/center.scss';
@import '@/scss/mixins.scss';
@import '@/scss/rwd.scss';
@import '@/scss/ap.scss';
.j_subtitle {
    padding-bottom: 60px;
}
p {
    line-height: 1.6;
}
</style>
