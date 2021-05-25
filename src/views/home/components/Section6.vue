<template>
    <div class="i-section6">
        <div class="i-section6-water">
            <a @click="changePlanet($event, 1)" class="icon_Cancer" href="">
                <img src="/images/index/planet/水象/cancer_icon.svg" alt="" />
            </a>
            <a @click="changePlanet($event, 2)" class="icon_Scorpio" href="">
                <img src="/images/index/planet/水象/scorpio_icon.svg" alt="" />
            </a>
            <a @click="changePlanet($event, 3)" class="icon_Pisces" href="">
                <img src="/images/index/planet/水象/pisces_icon.svg" alt="" />
            </a>

            <div :class="isShow(0)" class="planet water">
                <img src="/images/index/planet/水象/水象.svg" alt="" />
            </div>
            <div :class="isShow(1)" class="planet Cancer">
                <img src="/images/index/planet/水象/planet_Cancer.svg" alt="" />
                <a href="">
                    <img
                        class="planet-monst-Cancer"
                        src="/images/index/planet/水象/巨蠍帶字.svg"
                        alt=""
                    />
                </a>
            </div>
            <div :class="isShow(2)" class="planet Scorpio">
                <img
                    src="/images/index/planet/水象/planet_Scorpio.svg"
                    alt=""
                />
                <a href="">
                    <img
                        class="planet-monst-Scorpio"
                        src="/images/index/planet/水象/天蠍帶字.svg"
                        alt=""
                    />
                </a>
            </div>
            <div :class="isShow(3)" class="planet Pisces">
                <img src="/images/index/planet/水象/planet_Pisces.svg" alt="" />
                <a href="">
                    <img
                        class="planet-monst-Pisces"
                        src="/images/index/planet/水象/雙魚帶字.svg"
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
            e.preventDefault();
            this.showNum = num;
        },
        isShow(num) {
            //回傳物件 key:value
            return {
                isShow: this.showNum === num,
            };
        },

        // isShow(num){
        //     return{
        //         isShow : this.showNum === num
        //     }
        // }
    },
    computed: {},
};
</script>

<style lang="scss">
@import '../../../scss/commons.scss';
@import '../../../scss/mixins.scss';
@import '../../../scss/rwd.scss';

.i-section6 {
    position: relative;
    text-align: right; //只對inline-block有用
    padding: 200px 0 150px;
    margin-bottom: 250px;

    //此區塊做定位且稱寬高
    .i-section6-water {
        position: relative;
        display: inline-block; //變成行內元素
        right: 0;
        width: whForPC(850);

        .icon_Cancer {
            width: whForPC(225, 850);
            position: absolute;
            margin-top: whForPC(-120, 850);
            left: whForPC(120, 850);
        }
        .icon_Scorpio {
            width: whForPC(225, 850);
            position: absolute;
            margin-top: whForPC(90, 850);
            left: whForPC(-290, 850);
        }
        .icon_Pisces {
            width: whForPC(225, 850);
            position: absolute;
            margin-top: whForPC(340, 850);
            left: whForPC(-380, 850);
        }
        .planet {
            width: 100%;
            position: relative;
            visibility: hidden;

            //讓圖片撐滿
            img {
                width: 100%;
            }
            &.water {
                width: whForPC(1300, 850);
                transform: translate(-48.2%, -46.9%) rotate(-35deg);
                position: absolute;
                top: 50%;
                left: 50%;
            }
            &.Cancer {
                position: relative;
                .planet-monst-Cancer {
                    filter: drop-shadow(13px 10px 7px rgba(0, 0, 0, 0.4));
                    width: whForPC(230, 850);
                    position: absolute;
                    left: 35%;
                    top: 0;
                    margin-top: 30%;
                }
            }
            &.Scorpio {
                position: absolute;
                top: 0;

                .planet-monst-Scorpio {
                    filter: drop-shadow(13px 10px 7px rgba(0, 0, 0, 0.4));
                    width: whForPC(230, 850);
                    position: absolute;
                    left: 35%;
                    top: 0;
                    margin-top: 30%;
                }
            }
            &.Pisces {
                position: absolute;
                top: 0;

                .planet-monst-Pisces {
                    filter: drop-shadow(13px 10px 7px rgba(0, 0, 0, 0.4));
                    width: whForPC(230, 850);
                    position: absolute;
                    left: 35%;
                    top: 0;
                    margin-top: 30%;
                }
            }
            &.isShow {
                visibility: visible;
            }
        }
    }
}

@include rwd1260 {
    .i-section6-water {
        img {
            width: 180px;
        }
    }
}

@include index-md {
    .i-section6 {
        .i-section6-water {
            width: whForPC(1200);
            margin-right: -100px;
        }
        img {
            width: 160px;
        }
    }
}

@include index-mobile {
    .i-section6 {
        .i-section6-water {
            //變成行內元素
            width: wh(400);
            margin-right: wh(-120);
            img {
                width: 130px;
            }

            .icon_Cancer {
                width: wh(250);
                margin-top: wh(-130);
                left: wh(-10);
            }
            .icon_Scorpio {
                width: wh(250);
                margin-top: wh(-75);
                left: wh(-80);
            }
            .icon_Pisces {
                width: wh(250);
                margin-top: wh(-20);
                left: wh(-160);
            }
            .planet {
                &.water {
                    width: wh(610);
                    transform: translate(-48.8%, -46.5%) rotate(-20deg);
                    top: 50%;
                    left: 50%;
                }
                &.Cancer {
                    .planet-monst-Cancer {
                        width: wh(120);
                        left: 25%;

                        margin-top: 25%;
                    }
                }
                &.Scorpio {
                    .planet-monst-Scorpio {
                        width: wh(120);
                        left: 25%;

                        margin-top: 25%;
                    }
                }
                &.Pisces {
                    .planet-monst-Pisces {
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
