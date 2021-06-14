<template>
    <div class="backend">
        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <div class="back_logo">
                    <p class="navbar-brand">隨星所遇後台管理</p>
                </div>
                <div class="back_btn"><a href="./landing.html">登出</a></div>
            </div>
        </nav>
       <div class="container mt-5">
           <div class="row">
            <div class="col-2">
                    <ul>
                        <li>
                            <router-link to="back_member" class="btn btn-warning"
                                >會員管理</router-link
                            >
                        </li>
                        <li>
                            <router-link to="back_test" class="btn btn-warning"
                                >心理測驗</router-link
                            >
                        </li>
                        <li>
                            <router-link to ="#article-list"
                                class="btn btn-warning"
                                data-bs-toggle="collapse"
                                role="button"
                                aria-expanded="false"
                                aria-controls="order-list"
                                >星座內容</router-link
                            >
                            <ul class="collapse" id="article-list">
                                <li>
                                    <router-link to ="back_stararticle"
                                        class="btn btn-secondary btn-sm"
                                        >星座文章</router-link
                                    >
                                </li>
                                <li>
                                    <router-link to ="back_starintro"
                                        class="btn btn-secondary btn-sm"
                                        >星座介紹</router-link
                                    >
                                </li>
                                <li>
                                    <router-link to ="back_starmatch"
                                        class="btn btn-secondary btn-sm"
                                        >星座配對</router-link
                                    >
                                </li>
                                <li>
                                    <router-link to ="back_stardaily"
                                        class="btn btn-secondary btn-sm"
                                        >每日運勢</router-link
                                    >
                                </li>
                            </ul>
                        </li>
                        <li>
                            <router-link to ="#teacher-list"
                                class="btn btn-warning"
                                data-bs-toggle="collapse"
                                role="button"
                                aria-expanded="false"
                                aria-controls="product-list"
                                >老師資訊</router-link
                            >
                            <ul class="collapse" id="teacher-list">
                                <li>
                                    <router-link to ="back_thorder"
                                        class="btn btn-secondary btn-sm"
                                        >預約訂單</router-link
                                    >
                                </li>
                                <li>
                                    <router-link to ="back_thdate"
                                        class="btn btn-secondary btn-sm"
                                        >預約時段</router-link
                                    >
                                </li>
                                <li>
                                    <router-link to ="back_teacher"
                                        class="btn btn-secondary btn-sm"
                                        >老師管理</router-link
                                    >
                                </li>
                            </ul>
                        </li>
                        <li>
                            <router-link to ="#product-list"
                                class="btn btn-warning"
                                data-bs-toggle="collapse"
                                role="button"
                                aria-expanded="false"
                                aria-controls="product-list"
                                >商品管理</router-link
                            >
                            <ul class="collapse" id="product-list">
                                <li>
                                    <router-link to="back_customized"
                                        class="btn btn-secondary btn-sm"
                                        >客製化商品</router-link
                                    >
                                </li>
                                <li>
                                    <router-link to="back_shopping_product"
                                        class="btn btn-secondary btn-sm"
                                        >商品管理</router-link
                                    >
                                </li>

                                <li>
                                    <router-link to="back_message_list"
                                        class="btn btn-secondary btn-sm"
                                        >留言管理</router-link
                                    >
                                </li>
                            </ul>
                        </li>
                        <li>
                            <router-link to="back_order" class="btn btn-warning"
                                >訂單管理</router-link
                            >
                        </li>
                    </ul>
                </div>
            <div class="col-10">
                <h2>每日運勢管理</h2>
                
                <table class="table table-striped table-hover">
                    <thead>
                        <tr class="table-warning">
                            <th>ID</th>
                            <th>星座名稱</th>
                            <th>每日運勢</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- <tr>
                            <td><input type="checkbox"></td>
                            <td>1</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><a href="###">編輯</a></td>
                        </tr> -->
                        
                        <tr v-for="(ssbdaily,index) in ssb_info" :key="index">
                                <td>{{ssbdaily.STAR_SIGN_ID}}</td>
                                <td>{{ssbdaily.STAR_SIGN_NAME}}</td>
                                <td>
                                    <textarea cols="80" rows="3" v-model="ssbdaily.DAILY" v-show="ssbdaily.editStatus" class="border border-dark"></textarea>
                                    <span v-show="!ssbdaily.editStatus">
                                        {{ssbdaily.DAILY}}
                                    </span>
                                        
                                    
                                </td>
                                <td><a href="" @click.prevent="edit_data(index,ssbdaily.editStatus)">{{ssbdaily.edit}}</a></td>
                                
                                
                            </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
// import 'bootstrap/dist/css/bootstrap.min.css'; 
import axios from 'axios';
export default {
    data() {
        return {
            ssb_info: [],

            
            
        }
    },

    mounted() {
        axios
            .post('php/back_daily.php'
            // .post('http://localhost/tfd101/project/g3/php/back_daily.php'
        )
            .then((res) => {
                console.log(res);
                this.ssb_info = res.data;
                

                for(let i = 0 ;i <this.ssb_info.length;i++){
                    this.ssb_info[i].editStatus = false; 
                    this.ssb_info[i].edit = "編輯";
                }
                
            });
    },
    methods:{

        edit_data(index,ssbdaily_editStatus){
            if(ssbdaily_editStatus == false){
                this.ssb_info[index].editStatus = true;
                this.ssb_info[index].edit = "儲存";
                this.$forceUpdate()
                // console.log(this.ssb_info[index].editStatus);
                // console.log(this.ssb_info[index].edit);

            }else{
                axios.post('php/back_Updatedaily.php',{
                    STAR_SIGN_ID: this.ssb_info[index].STAR_SIGN_ID,
                    DAILY: this.ssb_info[index].DAILY,
                })
                this.ssb_info[index].editStatus = false;
                this.ssb_info[index].edit = "編輯";
                this.$forceUpdate()
                // console.log(this.ssb_info[index].editStatus);
                // console.log(this.ssb_info[index].edit);
            }
  
        },
    }
}
</script>
<style lang="scss">

</style>
