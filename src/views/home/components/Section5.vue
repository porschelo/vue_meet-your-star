<template>
    <div class="i-section5">
        <div class="i-section5-wind">
            <a @click="changePlanet($event, 1)" class="icon_libra" href="">
                <img src="images/index/planet/風象/libra_icon.svg" alt="" />
            </a>
            <a @click="changePlanet($event, 2)" class="icon_aquarius" href="">
                <img src="images/index/planet/風象/aquarius_icon.svg" alt="" />
            </a>
            <a @click="changePlanet($event, 3)" class="icon_gemini" href="">
                <img src="images/index/planet/風象/gemini_icon.svg" alt="" />
            </a>

            <div :class="{ isShow: showNum === 0 }" class="planet wind">
                <img src="images/index/planet/風象/風向.svg" alt="" />
            </div>
            <div :class="{ isShow: showNum === 1 }" class="planet libra">
                <img src="images/index/planet/風象/planet_libra.svg" alt="" />
                <router-link :to="{ name: 'Starsign', query: { id: 4 } }">
                    <img
                        class="planet_monst_libra"
                        src="images/index/planet/風象/天秤帶字.svg"
                        alt=""
                    />
                </router-link>
            </div>
            <div :class="{ isShow: showNum === 2 }" class="planet aquarius">
                <img
                    src="images/index/planet/風象/planet_aquarius.svg"
                    alt=""
                />
                <router-link :to="{ name: 'Starsign', query: { id: 5 } }">
                    <img
                        class="planet_monst_aquarius"
                        src="images/index/planet/風象/水瓶帶字.svg"
                        alt=""
                    />
                </router-link>
            </div>
            <div :class="{ isShow: showNum === 3 }" class="planet gemini">
                <img src="images/index/planet/風象/planet_gemini.svg" alt="" />
                <router-link :to="{ name: 'Starsign', query: { id: 6 } }">
                    <img
                        class="planet_monst_gemini"
                        src="images/index/planet/風象/雙子帶字.svg"
                        alt=""
                    />
                </router-link>
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
            e.preventDefault();
            this.showNum = num;
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

.i-section5 {
    position: relative;
    text-align: left;
    padding: 300px 0 150px;
    margin-bottom: 250px;

    .i-section5-wind {
        display: inline-block;
        position: relative;
        left: 0;
        width: whForPC(850);

        .icon_libra {
            width: whForPC(225, 850);
            position: absolute;
            margin-top: whForPC(-150, 850);
            right: whForPC(80, 850);
        }
        .icon_aquarius {
            width: whForPC(225, 850);
            position: absolute;
            margin-top: whForPC(70, 850);
            right: whForPC(-300, 850);
        }
        .icon_gemini {
            width: whForPC(225, 850);
            position: absolute;
            margin-top: whForPC(455, 850);
            right: whForPC(-446, 850);
            z-index: 1;
        }

        .planet {
            width: 100%;
            position: relative;
            visibility: hidden;

            img {
                width: 100%;
            }
            &.wind {
                position: absolute;
                width: whForPC(1890, 850);
                top: 50%;
                left: 50%;
                transform: translate(-49.1%, -42.4%) rotate(15deg);
            }
            &.libra {
                position: relative;
                // visibility: hidden;
                .planet_monst_libra {
                    position: absolute;
                    filter: drop-shadow(13px 10px 7px rgba(0, 0, 0, 0.4));
                    width: whForPC(230, 850);
                    top: 0;
                    margin-top: 30%;
                    right: 32%;
                }
            }
            &.aquarius {
                position: absolute;
                top: 0;

                .planet_monst_aquarius {
                    filter: drop-shadow(13px 10px 7px rgba(0, 0, 0, 0.4));
                    position: absolute;
                    width: whForPC(230, 850);
                    top: 0;
                    margin-top: 30%;
                    right: 32%;
                }
            }
            &.gemini {
                position: absolute;
                top: 0;

                .planet_monst_gemini {
                    filter: drop-shadow(13px 10px 7px rgba(0, 0, 0, 0.4));
                    position: absolute;
                    width: whForPC(230, 850);
                    top: 0;
                    margin-top: 30%;
                    right: 32%;
                }
            }
            //切換class 注意權重 可以寫在必須要改的class裡面！
            &.isShow {
                visibility: visible;
            }
        }
    }
}

@include rwd1260 {
    .i-section5-wind {
        img {
            width: 180px;
        }
    }
}

@include index-md {
    .i-section5 {
        .i-section5-wind {
            width: whForPC(1200);
            margin-left: -100px;
        }
        img {
            width: 160px;
        }
    }
}

@include index-mobile {
    .i-section5 {
        .i-section5-wind {
            //變成行內元素
            width: wh(400);
            margin-right: wh(-120);
            img {
                width: 130px;
            }

            .icon_libra {
                width: wh(250);
                margin-top: wh(-130);
                left: wh(130);
            }
            .icon_aquarius {
                width: wh(250);
                margin-top: wh(-85);
                left: wh(210);
            }
            .icon_gemini {
                width: wh(250);
                margin-top: wh(-30);
                left: wh(290);
            }
            .planet {
                &.wind {
                    width: wh(690);

                    top: 50%;
                    left: 50%;
                }
                &.libra {
                    .planet_monst_libra {
                        width: wh(120);
                        left: 35%;

                        margin-top: 25%;
                    }
                }
                &.aquarius {
                    .planet_monst_aquarius {
                        width: wh(120);
                        left: 35%;

                        margin-top: 25%;
                    }
                }
                &.gemini {
                    .planet_monst_gemini {
                        width: wh(120);
                        left: 35%;

                        margin-top: 25%;
                    }
                }
            }
        }
    }
}
</style>
