<template>
    <div>
        <div class="j_wrapper">
            <!-- @@include('layout/header.html') -->

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
                        <div class="j_panel_pic" v-for="(item,index) in teacher" :key="item">
                    
                            <img :src="item.TEACHER_IMG" @click="selectteacher(index)">
                            <div class="j_panel_info" >
                            <h4>{{item.TEACHER_NAME}}</h4>
                            <p>{{item.TEACHER_INFO}}</p>

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
                        </div>
                        <div class="button_page">
                        <button type="button" value="page" class="j_page" onclick="location.href ='/apdate'" >下一頁
                            <!-- <div class="dialog"
                                v-show="show"
                                transition="dialog-fade">
                                <div class="dialog-content">
                                <slot></slot>
                                </div>
                            </div> -->
                        </button>
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
            //  TEACHER:[
            //     {img:'/images/appointment/dr1.png',name:'安格斯雞老師', special:'開啟財運大門',money:'1,000'},
            //     {img:'/images/appointment/dr2.png',name:'危機老師', special:'工作危機處理',money:'1,500'},
            //     {img:'/images/appointment/dr3.png',name:'唐揚雞老師', special:'愛情魔幻靈藥',money:'2,000'},
            //     {img:'/images/appointment/dr2.png',name:'卡拉雞老師', special:'運動除油幫手',money:'2,500'},
                

                
                
            //     ],

            teacher:[],
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
        selectteacher(index){
            let teachername = this.teacher[index].TEACHER_NAME;
            // console.log(teachername);
            this.$store.dispatch('setselectteacher',teachername );
            localStorage.setItem('saveteacher', JSON.stringify(this.$store.state.selectteacher));
        }
    },
    
}



</script>


<style lang="scss">
     @import '@/scss/color.scss';
     @import '@/scss/var.scss';
     @import '@/scss/center.scss';
     @import '@/scss/mixins.scss';
     @import '@/scss/rwd.scss';
     @import '@/scss/ap.scss'; 

</style>
