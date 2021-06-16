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
                                    src="images/appointment/earth2.png"
                                    alt=""
                                    id="earth"
                                />
                                <h1>預約談星</h1>
                                <img
                                    src="images/appointment/earth2.png"
                                    alt=""
                                    id="earth"
                                />
                            </div>

                            <div class="j_subtitle">
                                <p>— Reservation With Experts —</p>
                            </div>
                        </div>
                        <!-- 進度條 -->
                        <div class="j_progress">
                            <div class="progress">
                        <div class="progress-bar progress-bar-info progress-bar-striped" role="progressbar"
                        aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:50%; ">
                            50%
                        </div>
                    </div>
                            
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

                            <table class="rwd-table">
                                
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
                                        <td data-th="6/06(日)" @click.prevent="checkAppointed('6/06 11:00~13:00') ? setAppointed('') : setAppointed('6/06 11:00~13:00')" :class="checkAppointed('6/06 11:00~13:00') ? 'appointed' : 'able'">
                                            {{checkAppointed('6/06 11:00~13:00') ? '已預約' : '可預約' }}
                                        </td>

                                        <td data-th="6/07(一)" @click.prevent="checkAppointed('6/07 11:00~13:00') ? setAppointed('') : setAppointed('6/07 11:00~13:00')" :class="checkAppointed('6/07 11:00~13:00') ? 'appointed' : 'able'">
                                            {{checkAppointed('6/07 11:00~13:00') ? '已預約' : '可預約' }}
                                        </td>

                                        <td data-th="6/08(二)" ></td>

                                        <td data-th="6/09(三)" @click.prevent="checkAppointed('6/09 11:00~13:00') ? setAppointed('') : setAppointed('6/09 11:00~13:00')" :class="checkAppointed('6/09 11:00~13:00') ? 'appointed' : 'able'">
                                            {{checkAppointed('6/09 11:00~13:00') ? '已預約' : '可預約' }}
                                        </td>

                                        <td data-th="6/10(四)" @click.prevent="checkAppointed('6/10 11:00~13:00') ? setAppointed('') : setAppointed('6/10 11:00~13:00')" :class="checkAppointed('6/10 11:00~13:00') ? 'appointed' : 'able'">
                                            {{checkAppointed('6/10 11:00~13:00') ? '已預約' : '可預約' }}
                                        </td>


                                        <td data-th="6/11(五)"></td>
                                        <td data-th="6/12(六)" @click.prevent="checkAppointed('6/12 11:00~13:00') ? setAppointed('') : setAppointed('6/12 11:00~13:00')" :class="checkAppointed('6/12 11:00~13:00') ? 'appointed' : 'able'">
                                            {{checkAppointed('6/12 11:00~13:00') ? '已預約' : '可預約' }}
                                        </td>

                                    </tr>
                                    <tr>
                                        <td data-th="時間">13:00~15:00</td>
                                        <td data-th="6/06(日)">
                                            
                                        </td>
                            

                                        <td data-th="6/07(一)"></td>
                                        <td data-th="6/08(二)" @click.prevent="checkAppointed('6/08 13:00~15:00') ? setAppointed('') : setAppointed('6/08 13:00~15:00')" :class="checkAppointed('6/08 13:00~15:00') ? 'appointed' : 'able'">
                                            {{checkAppointed('6/08 13:00~15:00') ? '已預約' : '可預約' }}
                                        </td>


                                        <td data-th="6/09(三)" >
                                            
                                        </td>
                                        <td data-th="6/10(四)"></td>
                                        <td data-th="6/11(五)" @click.prevent="checkAppointed('6/11 13:00~15:00') ? setAppointed('') : setAppointed('6/11 13:00~15:00')" :class="checkAppointed('6/11 13:00~15:00') ? 'appointed' : 'able'">
                                            {{checkAppointed('6/11 13:00~15:00') ? '已預約' : '可預約' }}
                                        </td>
                                        <td data-th="6/12(六)">
                                        </td>

                                         
                                    </tr>
                                    <tr>
                                        <td data-th="時間">15:00~17:00</td>
                                        <td data-th="6/06(日)" >
                                            
                                        </td>
                                        <td data-th="6/07(一)"></td>
                                        <td data-th="6/08(二)">
                                        </td>
                                        <td data-th="6/09(三)" @click.prevent="checkAppointed('6/09 15:00~17:00') ? setAppointed('') : setAppointed('6/09 15:00~17:00')" :class="checkAppointed('6/09 15:00~17:00') ? 'appointed' : 'able'">
                                            {{checkAppointed('6/09 15:00~17:00') ? '已預約' : '可預約' }}
                                        </td>
                                        <td data-th="6/10(四)"></td>
                                        <td data-th="6/11(五)">
                                        </td>
                                        <td data-th="6/12(六)"></td>
                                    </tr>
                                </tbody>
                            </table>

                            <!-- button -->
                            <div class="j_btn">

                                <router-link to="/appointment" class="j_btn2">
                                    回上頁
                                </router-link>

                                 <router-link to="/apconfirm" class="j_btn2">
                                    下一頁
                                </router-link>
                                
                            </div>
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
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default {
    // el:".j_wrapper",
    data() {
        return {
            
            // datestatus:0,
            // status: '可預約',
            
            appointed:'6/11 15:00~17:00', //string 單個預約日期 
            
                      
            
            appointment:[],
            teacher: [],
        };
    },
    mounted() {
        axios.post('php/appointment.php').then((res) => {
            console.log(res);
            this.appointment = res.data;
        });
    },

    components: {
        myFooter,
    },

    methods: {
        toggle() {
        this.isActive = !this.isActive;
        },
        checkAppointed(date){
            return this.appointed === date;
        },
        setAppointed(date){
        this.appointed = date;
        
        if (this.datestatus == 0) {
            this.status = '已預約';
        }else{
            this.status = '可預約';
            this.datestatus = 1;

        }
        



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
