<template>
    <div>
        <header>
            <div class="hnavbar">
                <div class="logo">
                    <router-link to="/" class="logo">
                        <img src="images/header/logo.png" alt="" />
                    </router-link>
                </div>

                <div class="hnav-list">
                    <ul>
                        <li>
                            <router-link to="/shoppingcart" class="cart">
                                <img src="images/header/cart.png" />
                            </router-link>
                        </li>
                        <li>
                            <a
                                class="login"
                                @click="onOpenLogin"
                                v-if="loginStatus == 0"
                            >
                                <img src="images/header/member.png" />
                            </a>
                            <!-- <a class="login" v-else>
                                <img :src = memberIcon >
                            </a> -->

                            <router-link
                                to="/membercentre"
                                class="login"
                                v-else
                            >
                                <img class="mosterImg" :src="memberIcon" />
                            </router-link>
                        </li>
                        <li>
                            <button
                                type="button"
                                class="burgerbtn"
                                @click="onMenuOpen"
                            >
                                <img src="images/header/burger.png" />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>

        <!-- nav list -->
        <div class="hoverlaymenu" v-show="menutogger">
            <div class="hmenulist">
                <div class="hnav-menu">
                    <a class="hclosebtn" href="#" @click="onMenuClose"
                        >&times;</a
                    >
                    <ul>
                        <li>
                            <router-link
                                :to="{ name: 'Starsign', query: { id: 1 } }"
                                >星座探索</router-link
                            >
                        </li>
                        <li>
                            <router-link to="/appointment"
                                >預約談星</router-link
                            >
                        </li>
                        <li>
                            <router-link to="/matchandtest"
                                >心星揭秘</router-link
                            >
                        </li>
                        <li>
                            <router-link to="/unstore">宇宙商城</router-link>
                        </li>
                        <li>
                            <router-link to="/game">星幣遊戲</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'myHeader',
    data() {
        return {
            menutogger: false,
        };
    },
    methods: {
        onMenuOpen() {
            this.menutogger = true;
        },
        onMenuClose() {
            this.menutogger = false;
        },

        onOpenLogin() {
            this.$store.commit('loginVisible', true);
        },
    },

    computed: {
        loginStatus() {
            return this.$store.state.loginStatus;
        },

        memberIcon() {
            return this.$store.state.memberIcon;
        },
    },
};
</script>

<style lang="scss">
@import '../scss/var.scss';
@import '../scss/mixins.scss';
@import '../scss/rwd.scss';

* {
    border: 0;
    margin: 0;
    font-family: 'Raleway', 'Noto Sans TC', sans-serif !important;
    letter-spacing: $ls;
}

header {
    position: fixed;
    top: 0;
    z-index: 999;
    width: 100%;
    height: 200px * 0.7;
    background: linear-gradient(to right, rgb(26, 98, 111), rgb(22, 46, 83));
    .hnavbar {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin: 25px 52px 0;
    }
    .logo img {
        width: 300px * 0.7;
        padding: 17px 0 0 15px;
    }
    .hnav-list ul {
        display: flex;
        align-items: center;
        padding-top: 30px;
        .mosterImg {
            width: 45px;
        }
        li {
            padding: 0 5px;
            list-style: none;
            a {
                img {
                    width: 100% * 0.8;
                }
                &:hover {
                    opacity: 0.7;
                }
                cursor: pointer;
            }
        }
    }
    .burgerbtn {
        background: none;
        border: 0;
        outline: 0;
        cursor: pointer;
        img {
            width: 100% * 0.8;
        }
        &:hover {
            opacity: 0.7;
        }
    }

    @include rwd(mobile) {
        height: 130px * 0.7;
        .hnavbar {
            margin: 10px 18px 0px 0px;
        }
        .logo img {
            width: 220px * 0.7;
            padding: 20px 0 0 27px;
        }
        .hnav-list ul {
            padding-top: 23px;
            li:nth-child(1) {
                padding: 0 0 1px;
                width: 50px;
                a {
                    img {
                        width: 100% * 0.7;
                    }
                    &:hover {
                        opacity: 0.7;
                    }
                    cursor: pointer;
                }
            }
            li:nth-child(2) {
                padding: 0 0;
                width: 22px;
                a {
                    img {
                        width: 100%;
                    }
                    &:hover {
                        opacity: 0.7;
                    }
                    cursor: pointer;
                }
            }

            li:nth-child(3) {
                padding: 0 0;
                margin-left: 4px;
                width: 50px;
                .burgerbtn {
                    img {
                        width: 100% * 0.7;
                    }
                    &:hover {
                        opacity: 0.7;
                    }
                }
            }
        }
    } //mobile end
}

.hoverlaymenu {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(7, 7, 7, 0.6);
    // display: none;
    z-index: 1000;
    .hmenulist {
        display: flex;
        justify-content: flex-end;

        .hnav-menu {
            background-image: url(/images/header/nav.png);
            background-size: 600px 400px;
            width: 600px;
            height: 400px;
            position: relative;
            z-index: 1000;
            .hclosebtn {
                position: absolute;
                top: 5px;
                right: 68px;
                color: #fff;
                font-size: 85px;
                font-weight: 200;
                text-decoration: none;
                &:hover {
                    opacity: 0.7;
                }
            }
            ul {
                font-size: $h2;
                padding-top: 80px;
                display: flex;
                flex-wrap: wrap;
                width: 500px;
                padding-left: 145px;
                box-sizing: border-box;
                li {
                    list-style: none;
                    margin: 6px 15px;
                    &:nth-child(5) {
                        padding-left: 154px;
                    }
                    a {
                        text-decoration: none;
                        color: #fff;
                        font-weight: 300;
                        letter-spacing: 3px;
                        &.router-link-active {
                            //所在頁面
                            color: yellow;
                        }
                        &:hover {
                            color: yellow;
                        }
                    }
                }
            }
        }
    }

    @include header-mobile {
        .hmenulist {
            display: flex;
            justify-content: flex-end;

            .hnav-menu {
                background: linear-gradient(
                    to right,
                    rgb(26, 111, 95),
                    rgb(22, 46, 83)
                );
                width: 70%;
                height: 100%;
                position: relative;
                z-index: 1000;
                border-radius: 0 0 0 160px;
                .hclosebtn {
                    position: absolute;
                    top: 0px;
                    right: 27px;
                    color: #fff;
                    font-size: 60px;
                    font-weight: 200;
                    text-decoration: none;
                    &:hover {
                        opacity: 0.7;
                    }
                }
                ul {
                    font-size: $h2 - 6px;
                    padding-top: 55px;
                    display: flex;
                    flex-wrap: wrap;
                    flex-direction: column;
                    justify-content: flex-end;
                    width: 48vw;
                    padding-left: 0vw;
                    padding-bottom: 80px;
                    li {
                        text-align: right;
                        list-style: none;
                        margin: 5px 0px;
                        &:nth-child(5) {
                            padding-left: 0px;
                        }
                        a {
                            text-decoration: none;
                            color: #fff;
                            font-weight: 300;
                            letter-spacing: 3px;
                            &:hover {
                                color: yellow;
                            }
                        }
                    }
                }
            }
        }
    } //mobile end
}
</style>
