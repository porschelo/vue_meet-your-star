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
                            <router-link
                                to="#product-list"
                                class="btn btn-warning"
                                data-bs-toggle="collapse"
                                role="button"
                                aria-expanded="false"
                                aria-controls="product-list"
                                >商品管理</router-link
                            >
                            <ul class="collapse" id="product-list">
                                <li>
                                    <router-link
                                        to="back_customized"
                                        class="btn btn-secondary btn-sm"
                                        >客製化商品</router-link
                                    >
                                </li>
                                <li>
                                    <router-link
                                        to="back_shopping_product"
                                        class="btn btn-secondary btn-sm"
                                        >商品管理</router-link
                                    >
                                </li>

                                <li>
                                    <router-link
                                        to="back_message_list"
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
                    <h2>商品管理</h2>
                    <button type="button" class="btn btn-danger btn-sm">
                        新增
                    </button>
                    <div class="back_choose">
                        <div>
                            <input type="checkbox" id="all" />
                            <label for="all">全選</label>
                            <button
                                type="button"
                                class="btn btn-outline-warning btn-sm"
                            >
                                上架
                            </button>
                            <button
                                type="button"
                                class="btn btn-outline-warning btn-sm"
                            >
                                下架
                            </button>
                        </div>
                        <select>
                            <option value="1">上架中</option>
                            <option value="0">下架中</option>
                        </select>
                    </div>
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr class="table-warning">
                                <th></th>
                                <th>商品編號</th>
                                <th>商品名稱</th>
                                <th>商品資訊</th>
                                <th>商品圖片</th>
                                <th>商品價格</th>
                                <th>商品狀態</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>1</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><a href="###">編輯</a></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>2</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><a href="###">編輯</a></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
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
// import 'bootstrap/dist/css/bootstrap.min.css';
export default {
    
};
</script>
<style lang="scss">
</style>