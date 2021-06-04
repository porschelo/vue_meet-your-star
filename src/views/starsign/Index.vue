<template>
    <div class="wrapper_starsign">
        
        <div class="galaxys__top galaxys">
            <div class="starsign_title">
                <div class="starsign_title-c">
                    <img src="/images/store/uv_icone.png" alt="">
                    <h1>星座探索</h1>
                    <img src="/images/store/uv_icone.png" alt="">
                </div>
                <div class="starsign_title-e">
                    <h4>— Explore Star Sign —</h4>
                </div>
            </div>
        </div>
        <div class="galaxys">
            <img class="starship" src="/images/starsign/ss_bg2.png" alt="">
            <!-- <a class="galx1" href="/starsign?id=3"><img src="/images/starsign/galx1.png" alt="" @click="this.starinfo[0].STAR_SIGN_ID = 3"></a> -->
            <router-link class="galx1" :to="{ name: 'Starsign', query: { id: 10 }}"><img src="/images/starsign/galx1.png" alt="" ></router-link>
            <router-link class="galx2" :to="{ name: 'Starsign', query: { id: 1 }}"><img src="/images/starsign/galx2.png" alt="" ></router-link>
            <router-link class="galx3" :to="{ name: 'Starsign', query: { id: 4 }}"><img src="/images/starsign/galx3.png" alt="" ></router-link>
            <router-link class="galx4" :to="{ name: 'Starsign', query: { id: 7 }}"><img src="/images/starsign/galx4.png" alt="" ></router-link>
        </div> 

        <section class="starsignsec">
            <div class="starsignswitch">
                <a class="prbtn" :href="'/starsign?id='+ prev"><img src="/images/starsign/prbtn.png" alt=""></a>
                <div class="drivingcard">
                    <h2>{{ starsignname }}</h2>
                    <div class="cardtop">
                        <img class="cardpt" :src="starsignpt" alt="">
                        <div class="cardct">
                            <h3 class="ssbday">生日 <span>{{ starsignbday1 }}</span><span> ～ </span><span>{{ starsignbday2 }}</span></h3>
                            <p class="ssprof">倔強，遇到討厭的人，寧可受罪也不向對方求助。陌生人面前很安靜很慢熱，熟了很鬧騰。有小脾氣但很隱忍，不輕易表露自己性情和內心。對繁瑣的事情沒耐心，容易放棄。</p>
                        </div>
                    </div>
                    <div class="cardbottom">
                        <h3 class="cdbtl">MYS-2021<br>星際駕駛證</h3>
                        <div class="cdbtr">
                            <div class="prs prs1">
                                <h3>{{ pers1 }}</h3>
                                <h3>{{ pers1val }}</h3>
                            </div>
                            <div class="prs prs2">
                                <h3>{{ pers2 }}</h3>
                                <h3>{{ pers2val }}</h3>
                            </div>
                            <div class="prs prs3">
                                <h3>{{ pers3 }}</h3>
                                <h3>{{ pers3val }}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="nxbtn" :href="'/starsign?id='+ next"><img src="/images/starsign/nxbtn.png" alt=""></a>
            </div>
            <div class="starsigncont">
                <div class="starsignleft">
                    <div class="luckyeveryday">
                        <h2>每日運勢</h2>
                        <!-- <p>今天的你想像力、洞察力強，如果是從事創意工作者在今天能好好發揮，但也要避免想太多而焦慮。感情方面桃花運旺盛，建議多參加社交認識新朋友，你會是大家的目光焦點。幸運色是橘色。</p> -->
                        <p>{{ starsigndaily }}</p>
                    </div>
                    <div class="productforyou">
                        <h2>開運商品</h2>
                        <div class="sspd">
                            <img src="/images/store/hPd_1.png" alt="">
                        </div>
                        <h3>七星陣水晶原石能量陣</h3>
                    </div>
                </div>
                <div class="starsignarticle">
                    <h2>相關文章</h2>
                    <ul class="artimenu">
                        <li class="artitem">
                            <a class="artitle">衝動、急躁激進！卻是牡羊對世界的挑戰</a>
                            <!-- <a class="artitle">{{ articletitle }}</a> -->
                            <p class="artminp"><span>牡羊座有天真又大膽的性格，讓他們勇敢接觸陌生的人事物，以此開創新的生活經驗，也給人活力洋溢的感覺</span> ...</p>
                            <a href="" class="armorebtn">more</a>
                        </li>
                        <li class="artitem">
                            <a class="artitle">愛就對了！牡羊座式的愛情</a>
                            <p class="artminp"><span>我們談談牡羊座，牡羊的愛，永遠那麼熱烈，愛就是坦誠相見、就是無怨無悔。想要靠近的時候，牡羊座才不會退讓</span> ...</p>
                            <a href="" class="armorebtn">more</a>
                        </li>
                        <li class="artitem">
                            <a class="artitle">牡羊座有很強的自我？其實是「心直口快」</a>
                            <p class="artminp"><span>很多人都覺得，牡羊座有很強的自我；他們自尊心很重，脾氣不太好，又常常有心或無意地挑釁其他人</span> ...</p>
                            <a href="" class="armorebtn">more</a>
                        </li>
                    </ul>
                    <ul class="ssarti_pagination">
                        <li><a href="#">&lt;</a></li>
                        <li><a href="#" class="-on">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">&gt;</a></li>
                    </ul>
                </div>
            </div>
        </section>
        
        <!-- article popup -->
        <div class="overlayarticle">
            <div class="artiflex">

                <div class="articlepop">
                        <a class="articlosebtn" href="#">&times;</a>
                        <h2>衝動、急躁激進！卻是牡羊對世界的挑戰</h2>
                        <img src="/images/starsign/arti1.png" alt="">
                        <p>牡羊座有天真又大膽的性格，讓他們勇敢接觸陌生的人事物，以此開創新的生活經驗，也給人活力洋溢的感覺。而率真且凡事不會多想就去實行的風格，也經常做出一些讓自己事後懊悔不已的衝動行為。</p><hr>
                        <p>熱情奔放的他們，清楚知道自己想要什麼，他們會用盡所有努力去爭取想要的事。講白了，牡羊座大多憑個人衝動行事，想做什麼就做什麼，對於自己的所作所為不會多想，具有自我投入和自得其樂的色彩。</p><hr>
                        <p>也因此，牡羊座與身俱來的自信，會感染給身邊的人。牡羊座的生活充滿刺激和趣事，全然投入享受生命的他們，總是帶著一股正能量，鼓勵朋友去做自己心之所嚮的事、以及跳脫舒適圈。他們乍看之下「有勇無謀」的個性，卻能發展出隨機應變以及處理緊急狀況的臨場應變能力喔！</p>
                        <div class="articlebtn">
                            <a href="" class="prarti">＜ 上一篇</a>
                            <a href="" class="nxarti">下一篇 ＞</a>
                        </div>
    
                </div>
                
            </div>
        </div>
         
        <my-footer></my-footer>

        <toTopBtn></toTopBtn>

    </div>

</template>

<script>

import myFooter from '@/components/myFooter';
import toTopBtn from '@/components/toTopBtn';
import axios from 'axios';

export default {
    components: {
        myFooter,
        toTopBtn,
    },
    data() {
        return {
            starinfo: [],
            starsignname: '',
            starsignbday1: '',
            starsignbday2: '',
            // starsignpers: '',
            starsignpt: '',
            pers1: '',
            pers1val: '',
            pers2: '',
            pers2val: '',
            pers3: '',
            pers3val: '',
            starsigndaily: '',
            // articletitle: '',
            next:null,
            prev:null,
            
        }
    },
    mounted(){
        let urlParams = new URLSearchParams(window.location.search);
        
        let id = urlParams.get("id")
        if(id){
            id = id -1
        }else{
            id = 0 //漢堡進入預設頁面
        }
        //左右切換id
        this.next = id === 11 ? 1 : (id + 2)
        this.prev = id === 0 ? 12 : (id)

        axios
            .post('http://localhost:8080/php/Select.php', 
               { id: this.$store.state.loginID },
            )
            .then((res) => {
                console.log(res);
                this.starinfo = res.data;
                // console.log(this.starinfo);
                
                this.starsignname = this.starinfo[id].STAR_SIGN_NAME;
                this.starsignbday1 = this.starinfo[id].STAR_SIGN_S;
                this.starsignbday2 = this.starinfo[id].STAR_SIGN_E;
                // this.starsignpers = this.starinfo[id].STAR_SIGN_E;
                this.starsignpt = this.starinfo[id].MONSTER_IMG;
                this.pers1 = this.starinfo[id].PERSONLITY_1;
                this.pers1val = this.starinfo[id].PERSONLITY_1_VALUE;
                this.pers2 = this.starinfo[id].PERSONLITY_2;
                this.pers2val = this.starinfo[id].PERSONLITY_2_VALUE;
                this.pers3 = this.starinfo[id].PERSONLITY_3;
                this.pers3val = this.starinfo[id].PERSONLITY_3_VALUE;
                this.starsigndaily = this.starinfo[id].DAILY;
                // this.articletitle = this.starinfo[id].ARTICLE_TITLE;

                
            });
    
    },
};


</script>

<style lang="scss">

@import '@/scss/mixins.scss';
@import '@/scss/rwd.scss';
@import '@/scss/color.scss';
@import '@/scss/var.scss';
@import '@/scss/pagination.scss';

.wrapper_starsign{
    background: linear-gradient(to right,#467B6B,#003352);
    width: 100%;
    letter-spacing: $ls;
    box-sizing: border-box;
    a{
       text-decoration: none;
    }
    .galaxys__top{
        background-color:rgb(53, 52, 67); 
        padding-bottom: 20px;
    }
    .galaxys{
        position: relative;
        overflow: hidden;
        height: auto;
        .starsign_title{
            position: relative;
            margin:auto;
            color: $colorT;
            padding: (80px+240px)*.7 0 0; 
            z-index: 15;
            @include rwd(mobile){
                padding: (220px)*.7 0 0; 
            }
            &-c{
                display: flex;
                justify-content: center;
                align-items: center;
                img{
                    width: 63px * .7;
                    height: 43px * .7;
                    margin-bottom: 5px;
                }
            }
            h1{
                font-size: $h1;
                padding: 5px 20px 10px;
                @include rwd(mobile){
                    font-size: $h1 - 8px;
                }
            }
            &-e{
                text-align: center;
                font-size: $p1;
                @include rwd(mobile){
                    font-size: $p1 - 6px;
                }
            }
        }
        .starship{
            width: 100%;
            height: auto;
            position: relative !important;
            display: block !important;
            z-index: 10;
            pointer-events: none; //穿透
        }
        .galx1{
            top:15vw; //根據vw縮放
            width: 100vw * 1000 /1920; 
            position: absolute;
            left: 16vw;
            z-index: 5;
            opacity: .9;
            img{
                width: 100%;
                height: auto;
            }
            &:hover{
                width: 100vw * 1020 /1920; 
                opacity: 1;
            }
        }
        .galx2{
            top:11vw; 
            width: 100vw * 800 /1920; 
            position: absolute;
            right: -20vw;
            z-index: 6;
            opacity: .9;
            img{
                width: 100%;
                height: auto;
            }
            &:hover{
                width: 100vw * 820 /1920; 
                opacity: 1;
            }
        }
        .galx3{
            top:3vw; 
            width: 100vw * 500 /1920; 
            position: absolute;
            left: 50vw;
            z-index: 6;
            opacity: .9;
            img{
                width: 100%;
                height: auto;
            }
            &:hover{
                width: 100vw * 520 /1920; 
                opacity: 1;
            }
        }
        .galx4{
            top:4vw; 
            width: 100vw * 600 /1920; 
            position: absolute;
            left: -10vw;
            z-index: 6;
            opacity: .9;
            img{
                width: 100%;
                height: auto;
            }
            &:hover{
                width: 100vw * 620 /1920; 
                opacity: 1;
            }
        }


    }
    .starsignsec{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 300;
        background-color:rgb(53, 52, 67); 

        .starsignswitch{
            display: flex;
            justify-content: center;
            align-items: center;
            button{
                outline: 0;
                border: 0;
                background: 0;
                width: 45px;
                box-sizing: content-box;
                cursor: pointer;
                @include rwd(mobile){
                    width: 5vw;
                }
                &:hover{
                    opacity: .7;
                }
                img{
                    width: 100%;
                }
            }
            .prbtn{
                margin-right: 30px;
                @include rwd(pad2){
                    margin-right: 2vw;
                }
            }
            .nxbtn{
                margin-left: 30px;
                @include rwd(pad2){
                    margin-left: 2vw;
                }
            }
            .drivingcard{
                background-color: rgb(230, 230, 230);
                width: 800px;
                height: 528px;
                border-radius: 10px;
                @include rwd(pad2){
                    margin-top: 20px;
                    width: 75vw;
                    height: auto;
                }
                h2{
                    font-size: $h2;
                    font-weight: 500;
                    color: rgb(82, 82, 121);
                    padding: 45px 0 30px;
                    text-align: center;
                    @include rwd(mobile){
                        font-size: $h2 - 6px;
                        padding: 30px 0 25px;
                    }
                }
                .cardtop{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    @include rwd(pad2){
                        align-items: flex-start;
                    }
                    .cardpt{
                        width: 180px;
                        @include rwd(pad2){
                            width: 140px;
                        }
                        @include rwd(mobile){
                            width: 20vw;
                        }
                    }
                    .cardct{
                        padding-left: 32px;
                        width: 60%;
                        color: #555;
                        @include rwd(mobile){
                            padding-left: 3vw;
                        }
                        h3{
                            font-size: $h3;
                            padding-bottom: 30px;
                            @include rwd(pad2){
                                padding-bottom: 2vw;
                            }
                            @include rwd(mobile){
                                font-size: 3vw;
                                padding-bottom: 2vw;
                            }
                        }
                        p{
                            font-size: $p1;
                            line-height: 1.2;
                            @include rwd(mobile){
                                font-size: 3vw;
                            }
                        }
                    }
                }
                .cardbottom{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    .cdbtl{
                        font-size: $h3;
                        line-height: 1.2;
                        color: #aaa;
                        padding-right: 30px;
                        padding-left: 15px;
                        @include rwd(pad2){
                            display: none;
                        }
                    }
                    .cdbtr{
                        display: flex;
                        margin-top: 24px;
                        @include rwd(pad2){
                            margin-top: 22px;
                            margin-bottom: 28px;
                            justify-content: center;
                        }
                        .prs{
                                box-sizing: border-box;
                                background-size: 145px 138px;
                                width: 145px;
                                height: 138px;
                                padding-top: 40px;
                                padding-left: 9px;
                                @include rwd(mobile){
                                    background-size: 20vw 19vw;
                                    width: 20vw;
                                    height: 19vw;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    flex-direction: column;
                                    padding-top: 0;
                                    padding-left: 7px;
                                }
                                h3{
                                    font-size: $h3;
                                    line-height: 1.2;
                                    text-align: center;
                                    @include rwd(mobile){
                                        font-size: 3.5vw;
                                        line-height: 1.1;
                                    }
                                }
                            }
                        .prs1{
                            background-image: url(/images/starsign/prs1.png);
                            margin-right: 1.5vw;
                            h3{
                                color: #FA5078;
                            }
                        }
                        .prs2{
                            background-image: url(/images/starsign/prs2.png);
                            margin-right: 1.5vw;
                            h3{
                                color: #4078C4;
                            }
                        }
                        .prs3{
                            background-image: url(/images/starsign/prs3.png);
                            h3{
                                color: #29B196;
                            }
                        }
                        
                    }
                }
            }

        }
        .starsigncont{
            display: flex;
            flex-direction: row;
            margin-top: 40px;
            @include rwd(pad2){
                flex-direction: column;
                align-items: center;
                margin-top: 30px;
            }
            h2{
                font-size: $h2;
                color: rgb(252, 140, 99);
                padding: 70px 0 40px;
                text-align: center;
                @include rwd(pad2){
                    padding: 32px 0 25px;
                }
                @include rwd(mobile){
                    font-size: $h2 - 6px;
                    padding: 32px 0 25px;
                }
            }
            .starsignleft{
                width: 530px;
                @include rwd(pad2){
                    width: 75vw;
                }
                .luckyeveryday{
                    background-image: url(/images/starsign/lfbg.png);
                    background-size: 500px 520px;
                    width: 500px;
                    height: 520px;
                    @include rwd(pad2){
                        background-image: none;
                        background-color: rgba(255, 255, 255, 0.1);
                        border: rgb(245, 245, 245) solid 3px;
                        width: 75vw;
                        height: auto;
                    }
                    p{
                        font-size: $h3 - 1px;
                        line-height: 1.6;
                        font-weight: 300;
                        width: 380px;
                        color: #fff;
                        margin: auto;
                        padding-left: 15px;
                        @include rwd(pad2){
                            font-size: $h3 - 4px;
                            width: 85%;
                            padding-left: 0;
                            margin-bottom: 30px;
                        }
                        @include rwd(mobile){
                            font-size: $h3 - 8px;
                            width: 85%;
                            padding-left: 0;
                            margin-bottom: 30px;
                        }
                    }
                }
                .productforyou{
                    background-image: url(/images/starsign/lfbg.png);
                    background-size: 500px 520px;
                    width: 500px;
                    height: 520px;
                    margin-top: 30px;
                    @include rwd(pad2){
                        background-image: none;
                        background-color: rgba(255, 255, 255, 0.1);
                        border: rgb(245, 245, 245) solid 3px;
                        width: 75vw;
                        height: auto;
                        margin-bottom: 30px;
                    }
                    .sspd{
                        margin: auto;
                        img{
                            width: 280px;
                            height: 250px;
                            display: block;
                            margin: 0 auto;
                            border-radius: 10px;
                            @include rwd(pad2){
                                width: 320px;
                                height: auto;
                            }
                            @include rwd(mobile){
                                width: 60%;
                                height: auto;
                            }
                        }
                    }
                    h3{
                        font-size: $h3 - 1px;
                        color: #fff;
                        text-align: center;
                        margin-top: 30px;
                        @include rwd(pad2){
                            font-size: $h3 - 4px;
                            margin-bottom: 30px;
                        }
                        @include rwd(mobile){
                            font-size: $h3 - 7px;
                            margin-bottom: 30px;
                        }
                    }
                }
            }
            .starsignarticle{
                background-image: url(/images/starsign/rtbg.png);
                background-size: 550px 900px;
                width: 550px;
                height: 900px;
                @include rwd(pad2){
                    background-image: none;
                    background-color: rgba(255, 255, 255, 0.1);
                    border: rgb(245, 245, 245) solid 3px;
                    width: 75vw;
                    height: auto;
                }
                .artimenu{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    .artitem{
                        padding-left: 10px;
                        width: 430px;
                        color: #fff;
                        margin-bottom: 50px;
                        @include rwd(pad2){
                            width: 85%;
                            padding-left: 0;
                        }
                        .artitle{
                            font-size: $h3 - 1px;
                            line-height: 1.4;
                            text-decoration: none;
                            cursor: pointer;
                            @include rwd(pad2){
                                font-size: $h3 - 3px;
                            }
                            @include rwd(mobile){
                                font-size: $h3 - 7px;
                            }
                        }
                        .artminp{
                            font-size: $p2;
                            line-height: 1.6;
                            padding-top: 10px;
                            font-weight: 300;
                            @include rwd(mobile){
                                font-size: $p2 - 3px;
                            }
                        }
                        .armorebtn{
                            font-size: $p2;
                            color: rgb(252, 140, 99);
                            display: block;
                            text-align: right;
                            padding-right: 15px;
                            padding-top: 10px;
                            @include rwd(pad2){
                                font-size: $p2 - 3px;
                                padding-right: 15px;
                            }
                        }
                    }
                }
                .ssarti_pagination{
                    @include pagination;
                    a{
                        color: white;
                    }
                    .-on{
                            color: rgb(252, 140, 99);
                    }
                    @include rwd(pad2){
                        margin-bottom: 30px;
                    }
                }

            }
            
        }
    }

    //article popup
    .overlayarticle{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(7, 7, 7, 0.6);
        display: none;
        z-index: 1000;
        overflow: scroll;
        .artiflex{
            display: flex;
            justify-content: center;
            .articlepop{
                margin: 110px 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                background-color: #fff;
                border-radius: 15px;
                width: 65%;
                position: relative;
                z-index: 1000;
                @include rwd(pad2){
                    width: 80%;
                }
                @include rwd(mobile){
                    width: 90%;
                    margin: 60px 0;
                }
                .articlosebtn {
                    position: absolute;
                    top: 3px;
                    right: 23px;
                    color: #aaa;
                    font-size: 55px;
                    font-weight: 200;
                    text-decoration: none;
                    &:hover {
                        opacity: 0.7;
                    }
                }
                h2{
                    color: rgb(82, 82, 121);
                    font-size: $h3;
                    margin: 70px 12% 10px;
                    @include rwd(mobile){
                        font-size: $h3 - 6px;
                        line-height: 1.5;
                        margin: 70px 10% 10px;
                    }
                }
                img{
                    width: 70%;
                    margin: 30px 0;
                    border-radius: 10px;
                    @include rwd(mobile){
                        width: 65%;
                        margin: 20px 0;
                    }
                }
                p{
                    color: #777;
                    font-size: $p2;
                    margin: 10px 15% 10px;
                    letter-spacing: $ls;
                    line-height: 1.4;
                    @include rwd(mobile){
                        font-size: $p2 - 3px;
                        margin: 10px 10% 10px;
                    }
                }
                .articlebtn{
                    margin: 40px 0 50px;
                    display: flex;
                    width: 70%;
                    justify-content: space-between;
                    align-items: center;
                    @include rwd(mobile){
                        width: 80%;
                    }
                    a{
                        color: rgb(82, 82, 121);
                        font-size: $p2;
                        @include rwd(mobile){
                            font-size: $p2 - 3px;
                        }
                    }
                }
                
            }
        }
    }


    footer{
        background-color: rgb(53, 52, 67); 
        margin-top: -10px;
    }

    // //nav-list 所在頁面樣式
    // .overlaymenu{
    //     .menulist{
    //         .nav-menu{
    //             ul{
    //                 li:nth-child(1){
    //                     a{
    //                         color: yellow;
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }


}

</style>