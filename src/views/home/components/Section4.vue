<template>
    <div class="i-section4">
        <div class="i-section4-earth">
            <a
                @click="changePlanet($event, 1)"
                class="icon_capricorn"
                href="#1"
            >
                <img
                    src="/images/index/planet/土象/planet_icon_capricorn.svg"
                    alt=""
                />
            </a>
            <a @click="changePlanet($event, 2)" class="icon_Taurus" href="#2">
                <img
                    src="/images/index/planet/土象/planet_icon_Taurus.svg"
                    alt=""
                />
            </a>
            <a @click="changePlanet($event, 3)" class="icon_virgo" href="#3">
                <img
                    src="/images/index/planet/土象/planet_icon_virgo.svg"
                    alt=""
                />
            </a>
            <!-- 方法一  style字串 -->
            <div
                :style="`visibility:${showNum === 0 ? 'visible' : 'hidden'}`"
                class="planet earth"
            >
                <img src="/images/index/planet/土象/土象.svg" alt="" />
            </div>
            <!-- 方法二  物件-->
            <div
                :style="{ visibility: showNum === 1 ? 'visible' : 'hidden' }"
                class="planet capricorn"
            >
                <img src="/images/index/planet/土象/70_1.svg" alt="" />
                <a href="">
                    <img
                        class="planet-monst-capricorn"
                        src="/images/index/planet/土象/capricorn_click_me.svg"
                        alt=""
                    />
                </a>
            </div>

            <div
                class="planet taurus"
                :style="`visibility:${showNum === 2 ? 'visible' : 'hidden'}`"
            >
                <img src="/images/index/planet/土象/70_2.svg" alt="" />
                <a href="">
                    <img
                        class="planet-monst-taurus"
                        src="/images/index/planet/土象/taurus_click me.svg"
                        alt=""
                    />
                </a>
            </div>
            <!-- 方法三 function-->
            <div class="planet virgo" :style="changeStyle(3)">
                <img src="/images/index/planet/土象/70_3.svg" alt="" />
                <a href="">
                    <img
                        class="planet-monst-irgo"
                        src="/images/index/planet/土象/virgo_click_me.svg"
                        alt=""
                    />
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            showNum: 0,
        };
    },
    methods: {
        changePlanet(e, num) {
            //停止herf的預設連結
            console.log(num);
            e.preventDefault();
            this.showNum = num;
        },
        changeStyle(num) {
            return {
                visibility: this.showNum === num ? 'visible' : 'hidden',
            };
        },
    },
    computed: {},
    mounted() {},
};
</script>

<style lang="scss">
@import '../../../scss/commons.scss';
@import '../../../scss/mixins.scss';
@import '../../../scss/rwd.scss';

.i-section4 {
    position: relative;
    text-align: right; //只對inline-block有用
    padding: 200px 0 150px;
    margin-bottom: 250px;

    //此區塊做定位且稱寬高
    .i-section4-earth {
        position: relative;
        display: inline-block; //變成行內元素
        right: 0;
        width: whForPC(850);

        .icon_capricorn {
            width: whForPC(225, 850);
            position: absolute;
            margin-top: whForPC(-120, 850);
            left: whForPC(120, 850);
        }
        .icon_Taurus {
            width: whForPC(225, 850);
            position: absolute;
            margin-top: whForPC(90, 850);
            left: whForPC(-290, 850);
        }
        .icon_virgo {
            width: whForPC(225, 850);
            position: absolute;
            margin-top: whForPC(340, 850);
            left: whForPC(-380, 850);
            z-index: 1;
        }
        .planet {
            width: 100%;
            position: relative;
            visibility: hidden;

            //讓圖片撐滿
            img {
                width: 100%;
            }
            &.earth {
                visibility: visible;
                width: whForPC(1737, 850);
                transform: translate(-47.7%, -52%) rotate(-20deg);
                position: absolute;
                top: 50%;
                left: 50%;
            }
            &.capricorn {
                position: relative;
                visibility: visible;

                .planet-monst-capricorn {
                    filter: drop-shadow(13px 10px 7px rgba(0, 0, 0, 0.4));
                    width: whForPC(230, 850);
                    position: absolute;
                    left: 35%;
                    top: 0;
                    margin-top: 30%;
                }
            }
            &.taurus {
                position: absolute;
                top: 0;

                .planet-monst-taurus {
                    filter: drop-shadow(13px 10px 7px rgba(0, 0, 0, 0.4));
                    width: whForPC(230, 850);
                    position: absolute;
                    left: 35%;
                    top: 0;
                    margin-top: 30%;
                }
            }
            &.virgo {
                position: absolute;
                top: 0;

                .planet-monst-irgo {
                    filter: drop-shadow(13px 10px 7px rgba(0, 0, 0, 0.4));
                    width: whForPC(230, 850);
                    position: absolute;
                    left: 35%;
                    top: 0;
                    margin-top: 30%;
                }
            }
        }
    }
}

@include rwd1260 {
    .i-section4-earth {
        img {
            width: 180px;
        }
    }
}

@include index-md {
    .i-section4 {
        .i-section4-earth {
            width: whForPC(1200);
            margin-right: -100px;
        }
        img {
            width: 160px;
        }
    }
}

@include index-mobile {
    .i-section4 {
        .i-section4-earth {
            //變成行內元素
            width: wh(400);
            margin-right: wh(-120);
            img {
                width: 130px;
            }

            .icon_capricorn {
                width: wh(250);
                margin-top: wh(-130);
                left: wh(-10);
            }
            .icon_Taurus {
                width: wh(250);
                margin-top: wh(-75);
                left: wh(-80);
            }
            .icon_virgo {
                width: wh(250);
                margin-top: wh(-20);
                left: wh(-160);
            }
            .planet {
                &.earth {
                    width: wh(690);
                    transform: translate(-47.7%, -52%) rotate(-20deg);
                    top: 50%;
                    left: 50%;
                }
                &.capricorn {
                    .planet-monst-capricorn {
                        width: wh(120);
                        left: 25%;

                        margin-top: 25%;
                    }
                }
                &.taurus {
                    .planet-monst-taurus {
                        width: wh(120);
                        left: 25%;

                        margin-top: 25%;
                    }
                }
                &.virgo {
                    .planet-monst-irgo {
                        width: wh(120);
                        left: 25%;

                        margin-top: 25%;
                    }
                }
            }
        }
    }
}
</style>
