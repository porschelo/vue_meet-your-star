<template>
    <div>
        
        
                <div class="j_wrapper">
                    <!-- @@include('layout/header.html') -->

                    <!-- 中間背景 -->
                    <div class="j_middle">
                        <!-- 頁面標題 -->
                        <div class="j_title">
                            <div class="j_bigtitle">
                                <img
                                    src="/images/appointment/earth2.png"
                                    alt=""
                                    id="earth"
                                />
                                <h1>預約談星</h1>
                                <img
                                    src="/images/appointment/earth2.png"
                                    alt=""
                                    id="earth"
                                />
                            </div>

                            <div class="j_subtitle">
                                <h4>— Reservation With Experts —</h4>
                            </div>
                        </div>
                        <!-- 進度條 -->
                        <div class="j_progress">
                            <li class="container__item">
                                <div class="stepper">
                                    <input
                                        class="stepper__input"
                                        id="stepper-5-0"
                                        name="stepper-5"
                                        type="radio"
                                        checked="checked"
                                    />
                                    <div class="stepper__step">
                                        <label
                                            class="stepper__button"
                                            for="stepper-5-0"
                                        ></label>
                                        <p class="stepper__content">
                                            step 1:選擇老師
                                        </p>
                                    </div>
                                    <input
                                        class="stepper__input"
                                        id="stepper-5-1"
                                        name="stepper-5"
                                        type="radio"
                                    />
                                    <div class="stepper__step">
                                        <label
                                            class="stepper__button"
                                            for="stepper-5-1"
                                        ></label>
                                        <p class="stepper__content">
                                            step 2:選擇時段
                                        </p>
                                    </div>
                                    <input
                                        class="stepper__input"
                                        id="stepper-5-2"
                                        name="stepper-5"
                                        type="radio"
                                    />
                                    <div class="stepper__step">
                                        <label
                                            class="stepper__button"
                                            for="stepper-5-2"
                                        ></label>
                                        <p class="stepper__content">
                                            step 3: 確認結帳資料
                                        </p>
                                    </div>
                                    <input
                                        class="stepper__input"
                                        id="stepper-5-3"
                                        name="stepper-5"
                                        type="radio"
                                    />
                                    <div class="stepper__step">
                                        <label
                                            class="stepper__button"
                                            for="stepper-5-3"
                                        ></label>
                                        <p class="stepper__content">
                                            step 4: 預約完成
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </div>

                        <!-- 儀錶板 -->
                        <div class="j_panel">
                            <!-- <div class=".j_panel_date_inner"> -->

                            <div class="j_panel_title" >
                                <h2>選擇時段</h2>
                            </div>

                            <!-- <div class="j_panel_content">
                    
                    </div> -->
                            <!-- table -->

                            <table class="rwd-table" v-for="(item,index) in appointment .slice(0,1)" :key="index" >
                                
                                <tbody >
                                    <tr>
                                        <th>時間</th>
                                        <th>6/06(日)</th>
                                        <th>6/07(一)</th>
                                        <th>6/08(二)</th>
                                        <th>6/09(三)</th>
                                        <th>6/10(四)</th>
                                        <th>6/11(五)</th>
                                        <th>6/12(六)</th>
                                    </tr>
                                    <tr>
                                        <td data-th="時間">11:00-13:00</td>
                                        <td data-th="6/06(日)"  @click.prevent="appointed = ''" v-if="appointed === '6/06'" class="appointed">
                                            {{item.APPOINTMENT_DATE}}預約成功
                                        </td>
                                        <td data-th="6/06(日)" v-else @click.prevent="appointed = '6/06'" class="able">
                                            可預約
                                        </td> 

                                        <td data-th="6/07(一)" >
                                            
                                        </td>

                                        <td data-th="6/08(二)" ></td>

                                        <td data-th="6/09(三)" @click.prevent="setAppointed('')" v-if="appointed === '6/09'" class="appointed" >
                                            已預約
                                        </td> 
                                        <td data-th="6/09(三)" v-else @click.prevent="setAppointed('6/09 11:00-13:00')" class="able">
                                            可預約
                                        </td> 

                                        <td data-th="6/10(四)" @click.prevent="setAppointed('')" v-if="appointed === '6/10'" class="appointed">
                                            已預約
                                        </td>
                                        <td data-th="6/10(四)" v-else @click.prevent="setAppointed('6/10 11:00-13:00')" class="able">
                                            可預約
                                        </td> 


                                        <td data-th="6/11(五)"></td>
                                        <td data-th="6/12(六)" @click.prevent="setAppointed('')" v-if="appointed === '6/12'" class="appointed">
                                            已預約
                                        </td>
                                        <td data-th="6/12(六)" v-else @click.prevent="setAppointed('6/12 11:00-13:00')" class="able">
                                            可預約
                                        </td> 

                                    </tr>
                                    <tr>
                                        <td data-th="時間">13:00~15:00</td>
                                        <td data-th="6/06(日)">
                                            可預約
                                        </td>
                            

                                        <td data-th="6/07(一)"></td>
                                        <td data-th="6/08(二)" @click.prevent="setAppointed('')" v-if="appointed === '6/08'" class="appointed"
                                        v-class="{active: isActive}">
                                            可預約
                                        </td>
                                        <td data-th="6/08(二)" v-else @click.prevent="setAppointed('6/08 13:00~15:00')" class="able">
                                            可預約
                                        </td> 


                                        <td data-th="6/09(三)" class="able">
                                            可預約
                                        </td>
                                        <td data-th="6/10(四)"></td>
                                        <td data-th="6/11(五)"></td>
                                        <td data-th="6/12(六)">
                                        </td>

                                         
                                    </tr>
                                    <tr>
                                        <td data-th="時間">15:00~17:00</td>
                                        <td data-th="6/06(日)" class="able">
                                            可預約
                                        </td>
                                        <td data-th="6/07(一)"></td>
                                        <td data-th="6/08(二)">
                                        </td>
                                        <td data-th="6/09(三)"></td>
                                        <td data-th="6/10(四)"></td>
                                        <td data-th="6/11(五)" @click.prevent="setAppointed('')" v-if="appointed === '6/11'" class="able">
                                            {{status}}
                                        </td>
                                        <td data-th="6/11(五)" v-else @click.prevent="setAppointed('6/11 15:00~17:00')" class="appointed">
                                            {{status}}
                                        </td> 
                                        <td data-th="6/12(六)"></td>
                                    </tr>
                                </tbody>
                            </table>

                            <!-- button -->
                            <form action="" class="j_btn">
                                <button
                                    type="button"
                                    value="page"
                                    class="j_btn2"
                                    onclick="location.href='/appointment'"
                                >
                                    回上頁
                                </button>
                                <button
                                    type="button"
                                    value="page"
                                    class="j_btn2"
                                    onclick="location.href ='/apconfirm'"
                                >
                                    下一頁
                                </button>
                            </form>
                            <!-- </div>             -->
                        </div>
                    </div>

                    <!-- @@include('layout/footer.html') -->
                    <myFooter></myFooter>
                </div>
            
        
    </div>
</template>

<script>
import myFooter from '@/components/myFooter';
import axios from 'axios';

export default {
    // el:".j_wrapper",
    data() {
        return {
            // isActive: true,  //出現
            // hasError: false, //不出現
            datestatus:0,
            status: '可預約',
            // isShow: false,
            // changecolor: false,
            appointed:'6/11',
            
                      
            
            appointment:[],
            teacher: [],
        };
    },
    mounted() {
        axios.post('http://localhost/meetyourstars/appointment.php').then((res) => {
            console.log(res);
            this.appointment = res.data;
        });
    },

    components: {
        myFooter,
    },

    methods: {
        // toggle() {
        // this.isActive = !this.isActive;
        // },
        setAppointed(date){
        this.appointed = date;
        
        if (this.datestatus == 0) {
            this.status = '已預約';
        }else{
            this.status = '可預約';
            this.datestatus = 1;

        }
        // this.inner_text = '已預約';
        



        // console.log(date);
        let teacherdate = this.appointed;
            // teacherdate.push(value);
        console.log(teacherdate);
        
        this.$store.dispatch('setselectteacherdate',teacherdate);

        localStorage.setItem('saveteacherdate', JSON.stringify(this.$store.state.setAppointed));

            
        },
        
    },
    // computed:{
    //     setAppointed(){
    //         return this.$store.state.setAppointed;
    //     },
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

.active {
    color:rgb(252, 80, 36);
    // pointer-events: none;
}
.appointed{
    color:rgb(252, 80, 36);
}

</style>
