<template>
    <div class="i-section4">
        <div class="i-section4-earth">
            <a class="icon_capricorn" href="">
                <img
                    src="/images/index/planet/土象/planet_icon_capricorn.svg"
                    alt=""
                />
            </a>
            <a class="icon_Taurus" href="">
                <img
                    src="/images/index/planet/土象/planet_icon_Taurus.svg"
                    alt=""
                />
            </a>
            <a class="icon_virgo" href="">
                <img
                    src="/images/index/planet/土象/planet_icon_virgo.svg"
                    alt=""
                />
            </a>

            <div class="planet earth">
                <img src="/images/index/planet/土象/土象.svg" alt="" />
            </div>
            <div class="planet capricorn">
                <img src="/images/index/planet/土象/70_1.svg" alt="" />
                <a href="">
                    <img
                        class="planet-monst-capricorn"
                        src="/images/index/planet/土象/capricorn_click_me.svg"
                        alt=""
                    />
                </a>
            </div>
            <div class="planet taurus">
                <img src="/images/index/planet/土象/70_2.svg" alt="" />
                <a href="">
                    <img
                        class="planet-monst-taurus"
                        src="/images/index/planet/土象/taurus_click me.svg"
                        alt=""
                    />
                </a>
            </div>
            <div class="planet virgo">
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
export default {};
</script>

<style lang="scss">
@import '../../../scss/commons.scss';
@import '../../../scss/mixins.scss';

.i-section4 {
    position: relative;
    text-align: right;

    //只對inline-block有用
    .i-section4-earth {
        position: relative;
        display: inline-block;
        //變成行內元素
        right: 0;
        width: whForPC(750);

        .icon_capricorn {
            width: whForPC(225, 750);
            position: absolute;
            margin-top: whForPC(-90, 750);
            left: whForPC(120, 750);
        }
        .icon_Taurus {
            width: whForPC(225, 750);
            position: absolute;
            margin-top: whForPC(100, 750);
            left: whForPC(-240, 750);
        }
        .icon_virgo {
            width: whForPC(225, 750);
            position: absolute;
            margin-top: whForPC(340, 750);
            left: whForPC(-280, 750);
        }
        .planet {
            width: 100%;
            position: relative;
            visibility: hidden;
            img {
                width: 100%;
            }
            &.earth {
                width: whForPC(1737, 750);
                transform: translate(-47.7%, -52%) rotate(-20deg);
                position: absolute;
                visibility: visible;
                top: 50%;
                left: 50%;
            }
            &.capricorn {
                position: relative;
                visibility: visible;
                .planet-monst-capricorn {
                    width: whForPC(190, 750);
                    position: absolute;
                    left: 35%;
                    top: 0;
                    margin-top: 30%;
                }
            }
            &.taurus {
                position: absolute;
                .planet-monst-taurus {
                    width: whForPC(190, 750);
                    position: absolute;
                    left: 35%;
                    top: 0;
                    margin-top: 30%;
                }
            }
            &.virgo {
                position: absolute;
                .planet-monst-irgo {
                    width: whForPC(190, 750);
                    position: absolute;
                    left: 35%;
                    top: 0;
                    margin-top: 30%;
                }
            }
        }
    }
    @include mobile {
        .i-section4-earth {
            //變成行內元素
            width: wh(300);
            margin-right: wh(-70);

            .icon_capricorn {
                width: wh(225);
                margin-top: wh(-90);
                left: wh(120);
            }
            .icon_Taurus {
                width: wh(225);
                margin-top: wh(100);
                left: wh(-240);
            }
            .icon_virgo {
                width: wh(225);
                margin-top: wh(340);
                left: wh(-280);
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
                        width: wh(190);
                        left: 35%;
                        top: 0;
                        margin-top: 30%;
                    }
                }
                &.taurus {
                    .planet-monst-taurus {
                        width: wh(190);
                        left: 35%;
                        top: 0;
                        margin-top: 30%;
                    }
                }
                &.virgo {
                    .planet-monst-irgo {
                        width: wh(190);
                        left: 35%;
                        top: 0;
                        margin-top: 30%;
                    }
                }
            }
        }
    }
}
</style>
