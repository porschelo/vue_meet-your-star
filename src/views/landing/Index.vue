<template>
    <div class="wrapper_landing">
        <div class="landingtitle">
            <img src="images/header/logo.png" alt="" />
        </div>
        <div class="choose">
            <div class="twoend">
                <img
                    class="whichend"
                    src="images/landing/gofrontend.png"
                    alt=""
                />
                <h1>前台</h1>
                <router-link to="/" class="enda">
                    <img
                        class="lighthere"
                        src="images/landing/light.png"
                        alt=""
                    />
                </router-link>
            </div>
            <div class="twoend">
                <img
                    class="whichend"
                    src="images/landing/gobackend.png"
                    alt=""
                />
                <h1>後台</h1>
                <router-link to="/back_member" class="enda">
                    <img
                        class="lighthere"
                        src="images/landing/light.png"
                        alt=""
                    />
                </router-link>
            </div>
        </div>

        <my-footer></my-footer>
    </div>
</template>

<script>
import myFooter from '@/components/myFooter';

export default {
    components: {
        myFooter,
    },
};
</script>

<style lang="scss">
@import '@/scss/mixins.scss';
@import '@/scss/rwd.scss';
@import '@/scss/var.scss';

// header{
//     display: none;
// }

.wrapper_landing {
    background-image: url(/images/landing/landingbg.svg);
    width: 100%;
    .landingtitle {
        img {
            width: 300px;
            display: block;
            margin: 0 auto;
            padding: 80px 0 60px;
            @include rwd(mobile) {
                width: 200px;
                padding: 60px 0 40px;
            }
        }
    }
    .choose {
        display: flex;
        align-items: center;
        justify-content: center;
        @include rwd(mobile) {
            flex-direction: column;
        }
        .twoend {
            position: relative;
            width: 390px;
            height: 380px;
            margin-top: 30px;
            @include rwd(mobile) {
                width: 300px;
                height: 280px;
            }
            .whichend {
                position: absolute;
                width: 300px;
                z-index: 2;
                margin-left: 45px;
                @include rwd(mobile) {
                    width: 220px;
                    margin-left: 40px;
                }
            }
            h1 {
                z-index: 2;
                position: absolute;
                font-size: $h1;
                color: #fff;
                text-decoration: none;
                left: 157px;
                top: 200px;
                pointer-events: none;
                @include rwd(mobile) {
                    left: 113px;
                    top: 160px;
                }
            }
            .enda {
                opacity: 0.3;
                &:hover {
                    opacity: 1;
                }
                .lighthere {
                    position: absolute;
                    width: 300px;
                    top: 130px;
                    margin-left: 45px;
                    @include rwd(mobile) {
                        width: 220px;
                        top: 100px;
                        margin-left: 40px;
                    }
                }
            }
        }
    }
}
</style>
