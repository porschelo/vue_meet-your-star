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
                                    src="images/appointment/earth2.png"
                                    alt=""
                                    id="earth"
                                />
                                <h1>訂購完成</h1>
                                <img
                                    src="images/appointment/earth2.png"
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
                            <div class="j_panel_inner2">
                                <div class="j_panel_title">
                                    <h2>購買完成</h2>
                                    <h4>恭喜您,您購買的商品已經準備出貨中!</h4>
                                </div>

                                <div class="j_panel_content">
                                    <p>訂單編號: {{ listId }}</p>
                                    <p>訂單日期:{{ listdate }}</p>
                                    <p>訂單金額:${{ listPrice }}</p>
                                </div>

                                <div class="j_panel_notice">
                                    <p>
                                        欲查看訂單詳情請前往會員中心<br />
                                        若有任何問題,歡迎來電02-27580000告知
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
    data() {
        return {
            list: [],
            listdate: '',
            listId: '',
            listPrice: 0,
        };
    },
    components: {
        myFooter,
    },
<<<<<<< HEAD
=======

>>>>>>> development
    created() {
        axios
            .post('php/selectListFinished.php', {
                memberId: this.$store.state.loginID,
            })
            .then((res) => {
                this.list = res.data;
                console.log(this.list);
                this.listId = this.list[0].LIST_ID;
                this.listPrice = this.list[0].LIST_PRICE;
                this.listdate = this.list[0].LIST_CREATDATE;
            });
    },
<<<<<<< HEAD
    mounted() {
        //清空購物車
        // localStorage.removeItem('storageCart');
        let emptyArr = [];
        localStorage.setItem('storageCart', JSON.stringify(emptyArr));

        this.$store.dispatch('updateCart', emptyArr);
=======

    mounted() {
        //清空購物車
        // localStorage.removeItem('storageCart');
         let emptyArr = [];
        localStorage.setItem('storageCart', JSON.stringify(emptyArr));

        this.$store.dispatch('updateCart', emptyArr);
    
>>>>>>> development
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
.j_panel_inner2 {
    height: 550px;
}
</style>
