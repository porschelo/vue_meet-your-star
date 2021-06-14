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
                                <h1>預約談星</h1>
                                <img
                                    src="images/appointment/earth2.png"
                                    alt=""
                                    id="earth"
                                />
                            </div>

                            <div class="j_subtitle">
                                <p>— Reservation With Experts —</p>
                            </div>
                        </div>
                        <!-- 進度條 -->
                        <div class="j_progress">
                            <div class="progress">
                                <div class="progress-bar progress-bar-info progress-bar-striped" role="progressbar"
                                aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%; ">
                                    100%
                                </div>
                            </div>
                            
                        </div>
                        <!-- 儀錶板 -->
                        <div class="j_panel">
                            <div class="j_panel_inner">
                                <div class="j_panel_title">
                                    <h2>預約完成</h2>
                                    <h4>恭喜您,您的預約已經完成!</h4>
                                </div>

                                <div class="j_panel_content">
                                    <p>訂單編號: 073294758302</p>
                                    <p>預約姓名: 糖老鴨</p>
                                    <p>預約時段: {{setAppointed}} <br> {{selectteacher}}</p>
                                </div>

                                <div class="j_panel_notice">
                                    <p>
                                        提醒您,
                                        請依預約時間抵達,若有任何問題,請事先來電告知<br />
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
    
      axios.post('http://localhost/meetyourstars/selectappointment.php',
      
      )
      .then((res) => {
        console.log(res);
        this.teacher = res.data;
      });

    },
    computed:{
        selectteacher(){
            return this.$store.state.selectteacher;
        },
        setAppointed(){
            return this.$store.state.setAppointed;
        },
    },
};
</script>

<style lang="scss">
@import '@/scss/color.scss';
@import '@/scss/var.scss';
@import '@/scss/center.scss';
@import '@/scss/mixins.scss';
@import '@/scss/rwd.scss';
@import '@/scss/ap.scss';
</style>
