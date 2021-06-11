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
                    <h2>會員管理</h2>
                    <input type="text" name="" id="" />
                    <button class="btn btn-dark btn-sm">搜尋</button>
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr class="table-warning">
                                <th>會員編號</th>
                                <th>會員帳號</th>
                                <th>會員姓名</th>
                                <th>會員權限</th>
                                <th>加入日期</th>
                                <th>詳細資料</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><a href="###">編輯</a></td>
                            </tr>
                            <tr>
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
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.min.css';
export default {};
</script>
<style lang="scss">
</style>