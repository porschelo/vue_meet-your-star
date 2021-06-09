<template>
    <div>
        <div class="j_wrapper">

            <!-- 中間背景 -->
            <div class="j_middle">
                <!-- 頁面標題 -->
                <div class="j_title">

                    <div class="j_bigtitle">
                        <img src="/images/appointment/earth2.png" alt="" id="earth">
                        <h1>預約談星</h1>
                        <img src="/images/appointment/earth2.png" alt="" id="earth">
                    </div>
                    
                    <div class="j_subtitle">
                        <h4>
                        — Reservation With Experts — 
                        </h4>
                    </div>
                    
                </div>
                <!-- 進度條 -->
                <div class="j_progress">
                    
                    <li class="container__item">
                        <div class="stepper">
                        <input class="stepper__input" id="stepper-5-0" name="stepper-5" type="radio" checked="checked"/>
                        <div class="stepper__step">
                            <label class="stepper__button" for="stepper-5-0"></label>
                            <p class="stepper__content">step 1:選擇老師</p>
                        </div>
                        <input class="stepper__input" id="stepper-5-1" name="stepper-5" type="radio"/>
                        <div class="stepper__step">
                            <label class="stepper__button" for="stepper-5-1"></label>
                            <p class="stepper__content">step 2:選擇時段</p>
                        </div>
                        <input class="stepper__input" id="stepper-5-2" name="stepper-5" type="radio"/>
                        <div class="stepper__step">
                            <label class="stepper__button" for="stepper-5-2"></label>
                            <p class="stepper__content">step 3: 確認結帳資料</p>
                        </div>
                        <input class="stepper__input" id="stepper-5-3" name="stepper-5" type="radio"/>
                        <div class="stepper__step">
                            <label class="stepper__button" for="stepper-5-3"></label>
                            <p class="stepper__content">step 4: 預約完成</p>
                        </div>
                        
                        </div>
                    </li>
                </div>
                <!-- 儀錶板 -->
                <div class="j_panel">
                    <div class="j_panel_inner">
                        <div class="j_panel_title">
                            <h2>星座老師</h2>
                        </div>
                            <div class="j_panel_img">
                                <div class="j_panel_pic" v-for="(item,index) in teacher" :key="item.TEACHER_ID"
                                >
                            
                                    <img :src="item.TEACHER_IMG" @click.prevent="selectteacher(index)"
                                     v-bind:class="{'selected': current == item.TEACHER_ID}" 

                                    >   
                                    <!-- <img :src="item.TEACHER_IMG" @click="selectteacher(index)"
                                    v-else @click.prevent="selectteacher(index)" class="selected"
                                    >   -->
                                    <!-- :class="[ isLoading ? 'is-blue' : 'is-red' ]"> -->
                                <!-- v-bind:class="{'selected': current === item.id}" v-on:click="setCurrent(item.id)" -->

                                    <!-- :class="{'selected': current === item.TEACHER_IMG}" 
                                    v-on:click="setCurrent(TEACHER_IMG)"
                                    > -->
                                        <div class="j_panel_info" >
                                        <h4>{{item.TEACHER_NAME}}</h4>
                                        <p>{{item.TEACHER_INFO}}</p>
                                        <p>{{item.TEACHER_SKILL}}</p>
                                        <p>{{item.TEACHER_PRICE}}</p>


                                        </div>

                                </div>

                                
                                <!-- <div class="j_panel_pic">
                            
                                    <img :src=teacherpic[0].img alt="">
                                    <div class="j_panel_info">
                                    <h4>{{teacherpic[0].name}}</h4>
                                    <p>{{teacherpic[0].special}}</p>
                                    
                                    </div>

                                </div>  

                                <div class="j_panel_pic">
                            
                                    <img :src=teacherpic[2].img alt="">
                                    <div class="j_panel_info">
                                    <h4>{{teacherpic[2].name}}</h4>
                                    <p>{{teacherpic[2].special}}</p>
                                    
                                    </div> -->

                            </div>                     
                        
                        <div class="button_page">
                            <button type="button" value="page" class="j_page" @click="checknext" >下一頁
                            </button>
                        </div>

                    </div>
                
                </div>
            </div>
            

          
           <myFooter></myFooter>
        
        </div>

    </div>
</template>


<script>
import myFooter from '@/components/myFooter'
import axios from 'axios'

export default {
    
    data() {
        return {
            // isLoading: true,
            // selected:false,
            hidden:[],
            teacher:[],
            current:null,
            userAccount:'',
            userPassword:'',
        }
    },
    mounted() {
    
      axios.post('http://localhost/meetyourstars/teacher.php',

      )
      .then((res) => {
        console.log(res);
        this.teacher = res.data;
      });

    },

    components: {
        myFooter,
        
    },
    methods: {
        // toggle() {
        // this.selected = !this.selected;
        // },
        selectteacher(index){
            

            let teachername = this.teacher[index].TEACHER_NAME;
            // confirm('確定選擇此老師?');

            let teacherprice = this.teacher[index].TEACHER_PRICE;
            // console.log(teacherprice);
            this.$store.dispatch('setselectteacher',teachername );
            this.$store.dispatch('setselectteacherprice',teacherprice);

            localStorage.setItem('saveteacher', JSON.stringify(this.$store.state.selectteacher));
            localStorage.setItem('saveteacherprice', JSON.stringify(this.$store.state.selectteacherprice));
        

            //  this.isLoading = !this.isLoading;
            
            // this.$selected.focus(
            // );
            this.current = index + 1;
            console.log(this.current);

        },
        checknext(){
            if (this.$store.state.loginStatus == 0) {
                this.$store.commit('loginVisible', true);
                // axios.post('http://localhost/meetyourstars/login.php',
                // {userAccount: this.userAccount,
                // userPassword: this.userPassword,}
                // )
            } else {
                this.$router.push({
                    path: '/apdate',
                });
            }
        },
        // setCurrent(id) {
        // this.current = id;
        // },
        
        

                
        // setCurrent(){
        //     this.current = TEACHER_IMG;
        // },
        
    },
    // computed:{
    //     teacher3(){
    //         return this.teacher.filter(number < 4);
    //     }
    // },
    
}



</script>


<style lang="scss">
     @import '@/scss/color.scss';
     @import '@/scss/var.scss';
     @import '@/scss/center.scss';
     @import '@/scss/mixins.scss';
     @import '@/scss/rwd.scss';
     @import '@/scss/ap.scss'; 
// .is-red{
// border: red solid 4px;
// }
.is-blue{
    
// border: rgb(16, 240, 27) solid 3px;
}
.selected{
border: #4F4FFF solid 5px;
box-shadow:4px 4px 12px;
border-style: inset;}

.selecting{
    border: 3px solid white;
}
</style>

