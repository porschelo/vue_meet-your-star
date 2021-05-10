<template>
    <div>
        <header>
            <div class="navbar">
                <div class="logo">
                    <a href="index.html"
                        ><img src="/images/header/logo.png" alt=""
                    /></a>
                </div>

                <div class="nav-list">
                    <ul>
                        <li>
                            <a class="cart"
                                ><img src="/images/header/cart.png"
                            /></a>
                        </li>
                        <li>
                            <a class="login"
                                ><img src="/images/header/member.png"
                            /></a>
                        </li>
                        <li>
                            <button
                                type="button"
                                class="burgerbtn"
                                @click="onMenuOpen"
                            >
                                <img src="/images/header/burger.png" />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>

        <!-- nav list -->
        <div class="overlaymenu" v-show="menutogger">
            <div class="menulist">
                <div class="nav-menu">
                    <a class="closebtn" href="#" @click="onMenuClose"
                        >&times;</a
                    >
                    <ul>
                        <li><a href="starsign.html">星座探索</a></li>
                        <li><a href="appointment.html">大師預約</a></li>
                        <li><a href="matchtest.html">心星揭秘</a></li>
                        <li><a href="unstore.html">宇宙商城</a></li>
                        <li><a href="game.html">星幣遊戲</a></li>
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
    },
};
</script>

<style lang="scss">
@import '../scss/var.scss';
@import '../scss/mixins.scss';

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
    height: 240px * 0.7;
    background-color: rgba(255, 255, 255, 0.3);
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin: 25px 52px 0;
    }
    .logo img {
        width: 320px * 0.7;
        padding: 25px 0 0 15px;
    }
    .nav-list ul {
        display: flex;
        align-items: center;
        padding-top: 40px;
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
}

.overlaymenu {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(7, 7, 7, 0.6);
    // display: none;
    z-index: 1000;
    .menulist {
        display: flex;
        justify-content: flex-end;

        .nav-menu {
            background-image: url('../../public/images/header/nav.png');
            background-size: 600px 400px;
            width: 600px;
            height: 400px;
            position: relative;
            z-index: 1000;
            .closebtn {
                position: absolute;
                top: 34px;
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
                // width: 500px;
                width: 360px;
                padding-left: 145px;
                li {
                    list-style: none;
                    margin: 12px 15px;
                    &:nth-child(5) {
                        padding-left: 154px;
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
}
</style>
