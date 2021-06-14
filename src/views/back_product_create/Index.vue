<template>
    <div class="backend">
        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <div class="back_logo">
                    <p class="navbar-brand">隨星所遇後台管理</p>
                </div>
                <div class="back_btn">
                    <router-link to="/landing">登出</router-link>
                </div>
            </div>
        </nav>
        <div class="container mt-5">
            <div class="row">
                <div class="col-2">
                    <ul>
                        <li>
                            <router-link
                                to="back_member"
                                class="btn btn-warning"
                                >會員管理</router-link
                            >
                        </li>
                        <li>
                            <router-link to="back_test" class="btn btn-warning"
                                >心理測驗</router-link
                            >
                        </li>
                        <li>
                            <router-link
                                to="#article-list"
                                class="btn btn-warning"
                                data-bs-toggle="collapse"
                                role="button"
                                aria-expanded="false"
                                aria-controls="order-list"
                                >星座內容</router-link
                            >
                            <ul class="collapse" id="article-list">
                                <li>
                                    <router-link
                                        to="back_stararticle"
                                        class="btn btn-secondary btn-sm"
                                        >星座文章</router-link
                                    >
                                </li>
                                <li>
                                    <router-link
                                        to="back_starintro"
                                        class="btn btn-secondary btn-sm"
                                        >星座介紹</router-link
                                    >
                                </li>
                                <li>
                                    <router-link
                                        to="back_starmatch"
                                        class="btn btn-secondary btn-sm"
                                        >星座配對</router-link
                                    >
                                </li>
                                <li>
                                    <router-link
                                        to="back_stardaily"
                                        class="btn btn-secondary btn-sm"
                                        >每日運勢</router-link
                                    >
                                </li>
                            </ul>
                        </li>
                        <li>
                            <router-link
                                to="#teacher-list"
                                class="btn btn-warning"
                                data-bs-toggle="collapse"
                                role="button"
                                aria-expanded="false"
                                aria-controls="product-list"
                                >老師資訊</router-link
                            >
                            <ul class="collapse" id="teacher-list">
                                <li>
                                    <router-link
                                        to="back_thorder"
                                        class="btn btn-secondary btn-sm"
                                        >預約訂單</router-link
                                    >
                                </li>
                                <li>
                                    <router-link
                                        to="back_thdate"
                                        class="btn btn-secondary btn-sm"
                                        >預約時段</router-link
                                    >
                                </li>
                                <li>
                                    <router-link
                                        to="back_teacher"
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
                                @click="showTitle = !showTitle"
                                >商品管理</router-link
                            >
                            <ul class="collapse" id="product-list">
                                <li>
                                    <router-link
                                        to="back_customized"
                                        class="btn btn-secondary btn-sm"
                                        v-if="showTitle"
                                        >客製化商品</router-link
                                    >
                                </li>
                                <li>
                                    <router-link
                                        to="back_shopping_product"
                                        class="btn btn-secondary btn-sm"
                                        v-if="showTitle"
                                        >商品管理</router-link
                                    >
                                </li>

                                <li>
                                    <router-link
                                        to="back_message_list"
                                        class="btn btn-secondary btn-sm"
                                        v-if="showTitle"
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
                    <h2 class="mb-3">商品新增</h2>
                    <!-- <form action="./php/back_end_API/I_Insert.php" method="post" enctype="multipart/form-data"> -->
                        <table class="table table-striped">
                            <tbody>
                                <tr>
                                    <td>商品名稱</td>
                                    <td><input type="text" id="ProductName" name="ProductName"></td>
                                </tr>
                                <tr>
                                    <td>商品圖片</td>
                                    <td><input type="file" id="ProductImage" name="ProductImage"></td>
                                </tr>
                                <tr>
                                    <td>商品分類</td>
                                     <td><input type="text" id="Category" name="Category"></td>
                                </tr>
                                <tr>
                                    <td>商品價格</td>
                                     <td><input type="text" id="Price" name="Price" ></td>
                                </tr>
                                <tr>
                                    <td>商品狀態</td>
                                    <td>
                                        <input type="radio" name="Status" value="1" checked>
                                        <label for="online">上架中</label>
                                        <input type="radio" name="Status" value="0">
                                        <label for="offonline">下架中</label>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="d-flex justify-content-center">
                            <button type="reset" class="btn btn-outline-success" id="cancel" value="取消" onclick="javascript: history.go(-1);">取消</button>
                            <button type="submit" class="btn btn-success ms-3" @click="dosubmit">新增</button>
                        </div>
                    <!-- </form> -->
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>
import axios from 'axios';
export default {
     data() {
        return {
            
            
        }
    },

    mounted() {
        axios
            .post('http://localhost/tfd101/project/g3/php/back_CreateProduct.php')
            .then((res) => {
                // console.log(res);
                this.product_info = res.data;


            });
    },

    methods: {
        
        dosubmit(){
        
            if (document.getElementById('ProductName').value == '') {
                alert("請填寫[商品名稱]");
                return false;
            }
            if (document.getElementById('Price').value == '') {
                alert("請填寫[商品價格]");
                return false;
            }

            //判斷Status(radio button)是否有值?
            var isChecked = false;
            var obj = document.getElementsByName('Status');    
            for(var i=0; i< obj.length; i++){
                if (obj[i].checked) {
                    isChecked = true;
                }
            }    
            if(!isChecked){
                alert("請選擇[狀態]");
                return false;
            }

            if (document.getElementById('ProductImage').value == '') {
                alert("請選擇[商品圖片]");
                return false;
            }
        }

        

    },

}
</script>
<style lang="scss">

</style>