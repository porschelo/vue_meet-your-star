<template>
    <div class="i-section5">
        <div class="i-section5-wind">
            <a class="icon_libra" href="">
                <img src="/images/index/planet/風象/libra_icon.svg" alt="" />
            </a>
            <a class="icon_aquarius" href="">
                <img src="/images/index/planet/風象/aquarius_icon.svg" alt="" />
            </a>
            <a class="icon_gemini" href="">
                <img src="/images/index/planet/風象/gemini_icon.svg" alt="" />
            </a>

            <div class="planet wind">
                <img src="/images/index/planet/風象/風向.svg" alt="" />
            </div>
            <div class="planet libra">
                <img src="/images/index/planet/風象/planet_libra.svg" alt="" />
                <a href="">
                    <img
                        class="planet_monst_libra"
                        src="/images/index/planet/風象/天秤帶字.svg"
                        alt=""
                    />
                </a>
            </div>
            <div class="planet aquarius">
                <img
                    src="/images/index/planet/風象/planet_aquarius.svg"
                    alt=""
                />
                <a href="">
                    <img
                        class="planet_monst_aquarius"
                        src="/images/index/planet/風象/水瓶帶字.svg"
                        alt=""
                    />
                </a>
            </div>
            <div class="planet gemini">
                <img src="/images/index/planet/風象/planet_gemini.svg" alt="" />
                <a href="">
                    <img
                        class="planet_monst_gemini"
                        src="/images/index/planet/風象/雙子帶字.svg"
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

.i-section5 {
    position: relative;
    // text-align: left;
    padding: 300px 0 150px;
    .i-section5-wind {
        display: inline-block;
        position: relative;
        left: 0;
        width: whForPC(850);

        .icon_libra {
        }
        .icon_aquarius {
        }
        .icon_gemini {
        }
        .planet {
            width: 100%;
            position: relative;
            img {
                width: 100%;
            }
            &.wind {
                position: absolute;
            }
            &.libra {
                .planet_monst_libra {
                    position: relative;
                    width: whForPC(230, 850);
                }
            }
            &.aquarius {
                .planet_monst_aquarius {
                    width: whForPC(230, 850);
                }
            }
            &.gemini {
                .planet_monst_gemini {
                    width: whForPC(230, 850);
                }
            }
        }
    }
}
</style>
