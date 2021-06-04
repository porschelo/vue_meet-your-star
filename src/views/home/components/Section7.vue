<template>
    <div class="i-section7">
        <div class="i-section7-fire">
            <a @click="changePlanet($event, 1)" class="icon_Aries" href="">
                <img src="/images/index/planet/火象/Aries_icon.svg" alt="" />
            </a>
            <a @click="changePlanet($event, 2)" class="icon_Leo" href="">
                <img src="/images/index/planet/火象/Leo_icon.svg" alt="" />
            </a>
            <a
                @click="changePlanet($event, 3)"
                class="icon_Sagittarius"
                href=""
            >
                <img
                    src="/images/index/planet/火象/Sagittarius_icon.svg"
                    alt=""
                />
            </a>

            <div :class="isShow(0)" class="planet fire">
                <img src="/images/index/planet/火象/火象.svg" alt="" />
            </div>
            <div :class="isShow(1)" class="planet Aries">
                <img src="/images/index/planet/火象/planet_Aries.svg" alt="" />
                <router-link :to="{ name: 'Starsign', query: { id: 10 } }">
                    <img
                        class="planet_monst_Aries"
                        src="/images/index/planet/火象/牡羊帶字.svg"
                        alt=""
                    />
                </router-link>
            </div>
            <div :class="isShow(2)" class="planet Leo">
                <img src="/images/index/planet/火象/planet_Leo.svg" alt="" />
                <router-link :to="{ name: 'Starsign', query: { id: 11 } }">
                    <img
                        class="planet_monst_Leo"
                        src="/images/index/planet/火象/獅子帶字.svg"
                        alt=""
                    />
                </router-link>
            </div>
            <div :class="isShow(3)" class="planet Sagittarius">
                <img
                    src="/images/index/planet/火象/planet_Sagittarius.svg"
                    alt=""
                />
                <router-link :to="{ name: 'Starsign', query: { id: 12 } }">
                    <img
                        class="planet_monst_Sagittarius"
                        src="/images/index/planet/火象/射手帶字.svg"
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
        return { showNum: 0 };
    },
    methods: {
        changePlanet(e, num) {
            e.preventDefault();
            this.showNum = num;
        },
        isShow(num) {
            return { isShow: this.showNum === num };
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

.i-section7 {
    position: relative;
    text-align: left;
    padding: 300px 0 0px;
    // margin-bottom: 250px;

    .i-section7-fire {
        display: inline-block;
        position: relative;
        left: 0;
        width: whForPC(850);

        .icon_Aries {
            position: absolute;
            width: whForPC(225, 850);
            margin-top: whForPC(-150, 850);
            right: whForPC(80, 850);
        }
        .icon_Leo {
            position: absolute;
            width: whForPC(225, 850);
            margin-top: whForPC(70, 850);
            right: whForPC(-300, 850);
        }
        .icon_Sagittarius {
            position: absolute;
            width: whForPC(225, 850);
            margin-top: whForPC(455, 850);
            right: whForPC(-446, 850);
        }
        .planet {
            width: 100%;
            position: relative;
            visibility: hidden;
            img {
                width: 100%;
            }
            &.fire {
                position: absolute;
                width: whForPC(1520, 850);
                top: 50%;
                left: 50%;
                transform: translate(-47.3%, -49.4%) rotate(35deg);
            }
            &.Aries {
                position: relative;
                .planet_monst_Aries {
                    position: absolute;
                    filter: drop-shadow(13px 10px 7px rgba(0, 0, 0, 0.4));
                    width: whForPC(230, 850);
                    top: 0;
                    margin-top: 30%;
                    right: 32%;
                }
            }
            &.Leo {
                position: absolute;
                top: 0;

                .planet_monst_Leo {
                    position: absolute;
                    filter: drop-shadow(13px 10px 7px rgba(0, 0, 0, 0.4));
                    width: whForPC(230, 850);
                    top: 0;
                    margin-top: 30%;
                    right: 32%;
                }
            }
            &.Sagittarius {
                position: absolute;
                top: 0;

                .planet_monst_Sagittarius {
                    filter: drop-shadow(13px 10px 7px rgba(0, 0, 0, 0.4));
                    position: absolute;
                    width: whForPC(230, 850);
                    top: 0;
                    margin-top: 30%;
                    right: 32%;
                }
            }
            &.isShow {
                visibility: visible;
            }
        }
    }
}

@include rwd1260 {
    .i-section7-fire {
        img {
            width: 180px;
        }
    }
}

@include index-md {
    .i-section7 {
        .i-section7-fire {
            width: whForPC(1200);
            margin-left: -100px;
        }
        img {
            width: 160px;
        }
    }
}

@include index-mobile {
    .i-section7 {
        .i-section7-fire {
            //變成行內元素
            width: wh(400);
            margin-right: wh(-120);
            img {
                width: 130px;
            }

            .icon_Aries {
                width: wh(250);
                margin-top: wh(-130);
                left: wh(130);
            }
            .icon_Leo {
                width: wh(250);
                margin-top: wh(-85);
                left: wh(210);
            }
            .icon_Sagittarius {
                width: wh(250);
                margin-top: wh(-30);
                left: wh(290);
            }
            .planet {
                &.fire {
                    width: wh(690);
                    top: 50%;
                    right: 50%;
                }
                &.Aries {
                    .planet_monst_Aries {
                        width: wh(120);
                        right: 35%;
                        margin-top: 25%;
                    }
                }
                &.Leo {
                    .planet_monst_Leo {
                        width: wh(120);
                        right: 35%;
                        margin-top: 25%;
                    }
                }
                &.Sagittarius {
                    .planet_monst_Sagittarius {
                        width: wh(120);
                        right: 35%;
                        margin-top: 25%;
                    }
                }
            }
        }
    }
}
</style>
