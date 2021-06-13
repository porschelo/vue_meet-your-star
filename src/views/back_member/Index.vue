<template>
    <div class="backend">
        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <div class="back_logo">
                    <p class="navbar-brand">隨星所遇後台管理</p>
                </div>
                <div class="back_btn">
                    <router-link to="landing">登出</router-link>
                </div>
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
                            <router-link to ="/back_stardaily"
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
                            <router-link to ="back_shopping_product"
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
                    <div class="member-top mb-3">
                        <h2>會員管理</h2>
                        <input type="text" class="me-4 border border-dark" placeholder="請輸入會員帳號" v-model="search_data" @keyup="searchMember"/>
                        <button class="btn btn-dark btn-sm " @click="searchMember">搜尋</button>
                    </div>
                    
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr class="table-warning">
                                <th>會員編號</th>
                                <th>會員帳號</th>
                                <th>會員姓名</th>
                                <th>會員密碼</th>                       
                                <th>星幣數量</th>
                                <th>加入日期</th>
                                <!-- <th>詳細資料</th> -->
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- <tr>
                                <td>1</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><a href="###">編輯</a></td>
                            </tr> -->

                            <tr v-for="(member,index) in member_info" :key="index">
                                <td>{{member.MEMBER_ID}}</td>
                                <td>{{member.MEMBER_EMAIL}}</td>
                                <td>{{member.MEMBER_NAME}}</td>                     
                                <td>
                                    <input type="text" v-model="member.MEMBER_PASSWORD" v-show="member.editStatus" class="border border-dark">
                                    <span v-show="!member.editStatus">
                                        {{member.MEMBER_PASSWORD}}
                                    </span>
                                </td>
                                <td>
                                    <input type="text" v-model="member.MEMBER_POINT" v-show="member.editStatus" class="border border-dark">
                                    <span v-show="!member.editStatus">
                                        {{member.MEMBER_POINT}}
                                    </span>
                                        
                                    
                                </td>
                                <td>{{member.CREAT_DATE}}</td>  
                                <td><a href="" @click.prevent="edit_data(index,member.editStatus)">{{member.edit}}</a></td>
                                
                                
                            </tr>


                            <!-- <tr>
                                <td>2</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><a href="###">編輯</a></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><a href="###">編輯</a></td>
                            </tr> -->
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
            member_info:[],
            search_data:"",
            
            
            
        }
    },

    mounted() {
        axios
            .post('http://localhost/tfd101/project/g3/php/back_Member.php'
        )
            .then((res) => {
                // console.log(res);
                this.member_info = res.data;

                for(let i = 0 ;i <this.member_info.length;i++){
                    this.member_info[i].editStatus = false; 
                    this.member_info[i].edit = "編輯";
                }
                
            });
    },

    methods: {
        searchMember(){
            axios
            .post('http://localhost/tfd101/project/g3/php/back_SearchMember.php',{
                search_data: this.search_data,
            }
        )
            .then((res) => {
                // console.log(res);
                this.member_info = res.data;
            });
        },
        edit_data(index,member_editStatus){
            if(member_editStatus == false){
                this.member_info[index].editStatus = true;
                this.member_info[index].edit = "儲存";
                this.$forceUpdate()
                // console.log(this.member_info[index].editStatus);
                // console.log(this.member_info[index].edit);

            }else{


                axios
                .post('http://localhost/tfd101/project/g3/php/back_UpdateMember.php',
                {
                    member_ID:this.member_info[index].MEMBER_ID,
                    member_Point: this.member_info[index].MEMBER_POINT,
                    member_Password: this.member_info[index].MEMBER_PASSWORD,

                }
            )

                this.member_info[index].editStatus = false;
                this.member_info[index].edit = "編輯";
                this.$forceUpdate()
                console.log(this.member_info[index].MEMBER_PASSWORD);

                // console.log(this.member_info[index].MEMBER_ID);
                // console.log(this.member_info[index].editStatus);
                // console.log(this.member_info[index].edit);

            }
  
        },

        

    },

    
    
};
</script>
<style lang="scss">
</style>