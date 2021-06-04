<template>
    <div class="wrapper_tQuestion">
        <div class="tQuestion_header"></div>
        <div class="tResult_section" v-if="final">
            <!-- 標題 -->
            <div class="tResult_title">
                <div class="tResult_title-c">
                    <img src="/images/store/uv_icone.png" alt="" />
                    <h1>心理測驗結果</h1>
                    <img src="/images/store/uv_icone.png" alt="" />
                </div>
                <div class="tResult_title-e">
                    <h4>— Personality Test Result —</h4>
                </div>
            </div>

            <!-- <div class="tResult_content" v-if="final_answer"> -->
            <div class="tResult_content">
                <div class="tResult_main">
                    <div class="result_left">
                        <!-- 結果直條圖 -->
                        <div class="tr_chart">
                            <canvas
                                id="myChart2"
                                width="400"
                                height="400"
                            ></canvas>
                        </div>

                        <!-- 結果敘述 -->
                        <div class="tr_result">
                            <p>{{ results[finalAnswer].personality }}</p>
                        </div>
                    </div>

                    <div class="result_right">
                        <!-- 適合星座 -->
                        <div class="right_top">
                            <h2>適合相處的星座</h2>
                            <div class="kind_Constellations">
                                <div class="kc_one">
                                    <img :src="results[finalAnswer].matchOne" />
                                    <h3>
                                        {{ results[finalAnswer].matchTitleOne }}
                                    </h3>
                                </div>
                                <div class="kc_two">
                                    <img :src="results[finalAnswer].matchTwo" />
                                    <h3>
                                        {{ results[finalAnswer].matchTitleTwo }}
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <!-- 不適合星座 -->
                        <div class="right_bottom">
                            <h2>需要保持距離的星座</h2>
                            <div class="distance_Constellations">
                                <div class="dc_one">
                                    <img
                                        :src="results[finalAnswer].distanceOne"
                                    />
                                    <h3>
                                        {{
                                            results[finalAnswer]
                                                .distanceTitleOne
                                        }}
                                    </h3>
                                </div>
                                <div class="dc_two">
                                    <img
                                        :src="results[finalAnswer].distanceTwo"
                                    />
                                    <h3>
                                        {{
                                            results[finalAnswer]
                                                .distanceTitleTwo
                                        }}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="tQuestion_section" v-else> -->

        <div class="tQuestion_section">
            <div class="tQuestion_title">
                <div class="tQuestion_title-c">
                    <img src="/images/store/uv_icone.png" alt="" />
                    <h1>心理測驗</h1>
                    <img src="/images/store/uv_icone.png" alt="" />
                </div>
                <div class="tQuestion_title-e">
                    <h4>— Personality Test —</h4>
                </div>
            </div>

            <div class="tQuestion_content">
                <div class="tq_main">
                    <div
                        v-for="(question, index) in questions"
                        :key="question.title"
                    >
                        <template v-if="index == vars">
                            <p>{{ question.title }}</p>

                            <div
                                class="tq_answer"
                                v-for="(choice, key) in question.choices"
                                :key="key"
                            >
                                <!-- 用 javasript 的概念去想這邊，這邊是對 question.choices 做迴圈，choice 則是每一個值 -->
                                <input
                                    type="radio"
                                    v-model="question.value"
                                    :value="choice.value"
                                />
                                <p>{{ choice.content }}</p>

                                <!-- <p>{{question.value}}</p> -->
                            </div>
                            <p>選擇{{ question.value }}</p>
                        </template>
                    </div>
                </div>

                <button
                    class="tQuestion_next"
                    @click="next"
                    v-if="this.vars < this.questions.length - 1"
                >
                    NEXT
                </button>

                <button class="tQuestion_next" @click="dealData" v-else>
                    NEXT
                </button>
            </div>
        </div>
        <div class="tQuestion_footer">
            <my-footer></my-footer>
        </div>
      </div>
    
</template>
<script>
import myFooter from '@/components/myFooter';
import Chart from 'chart.js/auto';
export default {
    data() {
        return {
            is_page: true,
            vars: 0,
            final: false,
            finalAnswer: [],
            constellations: [
                '牡羊座',
                '金牛座',
                '雙子座',
                '巨蟹座',
                '獅子座',
                '處女座',
                '天秤座',
                '天蠍座',
                '射手座',
                '摩羯座',
                '水瓶座',
                '雙魚座',
            ],
            answers: [],
            questions: [
                {
                    num: '1',
                    title:
                        '1. 街角的便利店貼了一張懸賞一萬元的告示，你覺得那告示的內容是？',
                    value: null,
                    choices: [
                        {
                            content: 'A.尋找寵物',
                            value: '巨蟹座',
                        },
                        {
                            content: 'B.尋人啟事',
                            value: '處女座',
                        },
                        {
                            content: 'C.尋找失物',
                            value: '魔羯座',
                        },
                        {
                            content: 'D.尋找車禍目擊證人',
                            value: '天蠍座',
                        },
                    ],
                },

                {
                    num: 2,
                    title:
                        '2.在非洲旅行途中,你造訪了一個部落,部落首領堅持讓你選一種動物帶回去當紀念品,你會選擇哪一種?',
                    value: null,
                    choices: [
                        {
                            content: 'A.猴',
                            value: '處女座',
                        },
                        {
                            content: 'B.獅',
                            value: '水瓶座',
                        },
                        {
                            content: 'C.蛇',
                            value: '天秤座',
                        },
                        {
                            content: 'D.長頸鹿',
                            value: '雙魚座',
                        },
                    ],
                },
                {
                    num: 3,
                    title:
                        '3.到牛肉麵店不見得就要吃牛肉麵，你點哪一種餐點次數較多呢？',
                    value: null,
                    choices: [
                        {
                            content: 'A.牛肉麵',
                            value: '魔羯座',
                        },
                        {
                            content: 'B.牛肉湯麵',
                            value: '獅子座',
                        },
                        {
                            content: 'C.搾菜肉絲面',
                            value: '天秤座',
                        },
                        {
                            content: 'D.陽春麵再點些小菜',
                            value: '牡羊座',
                        },
                    ],
                },
                {
                    num: 4,
                    title: '4.你最喜歡哪種口味的冰淇淋？',
                    value: null,
                    choices: [
                        {
                            content: 'A.香草',
                            value: '天蠍座',
                        },
                        {
                            content: 'B.巧克力',
                            value: '處女座',
                        },
                        {
                            content: 'C.香蕉',
                            value: '水瓶座',
                        },
                        {
                            content: 'D.草莓',
                            value: '金牛座',
                        },
                    ],
                },
                {
                    num: 5,
                    title:
                        '5.巫婆握住你手的一瞬間，寶石會發出萬丈光芒，你認為它是什麼顏色？',
                    value: null,
                    choices: [
                        {
                            content: 'A.紅',
                            value: '獅子座',
                        },
                        {
                            content: 'B.黑',
                            value: '魔羯座',
                        },
                        {
                            content: 'C.藍',
                            value: '射手座',
                        },
                        {
                            content: 'D.綠',
                            value: '水瓶座',
                        },
                    ],
                },
                {
                    num: 6,
                    title:
                        '6.當你和朋友或其他人到了一間飯店或酒店裡用餐時，你點菜時通常是？',
                    value: null,
                    choices: [
                        {
                            content: 'A.不管別人，只點自己想吃的菜',
                            value: '牡羊座',
                        },
                        {
                            content: 'B.先說出自己想吃的東西',
                            value: '金牛座',
                        },
                        {
                            content: 'C.點和別人同樣的菜',
                            value: '魔羯座',
                        },
                        {
                            content: 'D.猶猶豫豫，點菜慢吞吞的',
                            value: '水瓶座',
                        },
                    ],
                },
                {
                    num: 7,
                    title: '7.你認為什麼樣的環境是最不適合人類生存的？',
                    value: null,
                    choices: [
                        {
                            content: 'A.酷熱',
                            value: '金牛座',
                        },
                        {
                            content: 'B.嚴寒',
                            value: '雙魚座',
                        },
                        {
                            content: 'C.乾燥',
                            value: '獅子座',
                        },
                        {
                            content: 'D.狂風',
                            value: '牡羊座',
                        },
                    ],
                },
                {
                    num: 8,
                    title:
                        '8.在你的生日晚會上，有四位重要嘉賓，你選誰坐在你身邊？',
                    value: null,
                    choices: [
                        {
                            content: 'A.運動員',
                            value: '雙魚座',
                        },
                        {
                            content: 'B.作家',
                            value: '雙子座',
                        },
                        {
                            content: 'C.長相專家',
                            value: '射手座',
                        },
                        {
                            content: 'D.流行歌手',
                            value: '巨蟹座',
                        },
                    ],
                },
                {
                    num: 9,
                    title:
                        '9.上班時偷偷打瞌睡，突然感覺狠狠挨了一巴掌，你的第一反應是什麼？',
                    value: null,
                    choices: [
                        {
                            content: 'A.在做夢',
                            value: '天秤座',
                        },
                        {
                            content: 'B.大概是因為臉癢癢，自己下手重了',
                            value: '金牛座',
                        },
                        {
                            content: 'C.同事搞怪',
                            value: '巨蟹座',
                        },
                        {
                            content: 'D.被上司發現',
                            value: '獅子座',
                        },
                    ],
                },
                {
                    num: 10,
                    title: '10.你認為下列各項那一個最恐怖？',
                    value: null,
                    choices: [
                        {
                            content: 'A.青面獠牙的妖怪',
                            value: '雙子座',
                        },
                        {
                            content: 'B.女鬼',
                            value: '天蠍座',
                        },
                        {
                            content: 'C.老鼠',
                            value: '射手座',
                        },
                        {
                            content: 'D.童話故事裡的單眼怪獸',
                            value: '雙魚座',
                        },
                    ],
                },
                {
                    num: 11,
                    title: '11.有一位美女走在街上，突然驚叫了一聲，你認為是?',
                    value: null,
                    choices: [
                        {
                            content: 'A.高跟鞋跟斷',
                            value: '雙子座',
                        },
                        {
                            content: 'B.發現自己踩到了狗屎了，扭到了腳',
                            value: '牡羊座',
                        },
                        {
                            content: 'C.一隻老鼠從眼前竄出',
                            value: '天蠍座',
                        },
                        {
                            content: 'D.看見地上有一大疊鈔票',
                            value: '處女座',
                        },
                    ],
                },
                {
                    num: 12,
                    title:
                        '12.當你和朋友介紹的一個「陌生人」第一次見面時，你最反感對方的是?',
                    value: null,
                    choices: [
                        {
                            content: 'A.不停地問你個人的問題，像身家調查一樣',
                            value: '巨蟹座',
                        },
                        {
                            content: 'B.搶著講話，油腔滑調，把你當聽眾',
                            value: '雙子座',
                        },
                        {
                            content: 'C.主動靠近你，拍你的肩膀，跟你稱兄道弟',
                            value: '天秤座',
                        },
                        {
                            content: 'D.和你很疏遠，不夠大方',
                            value: '射手座',
                        },
                    ],
                },
            ],
            results: [
                {
                    constellation: '牡羊座',
                    personality:
                        '經常給人一種活力無限，對凡事都充滿熱情的積極態度，特別是面對自己感興趣的事物時，幾乎是只要想到就會馬上付諸行動。喜歡無拘無束過日子，不喜歡自己的生活受到外界的壓抑，天生就是一名自由追求者，越是想要控制他卻越容易得到反效果。',
                    matchOne: '/images/test/taurus.png',
                    matchTwo: '/images/test/gemini.png',
                    matchTitleOne: '金牛',
                    matchTitleTwo: '雙子',
                    distanceOne: '/images/test/capricorn.png',
                    distanceTwo: '/images/test/scorpio.png',
                    distanceTitleOne: '摩羯',
                    distanceTitleTwo: '天蠍',
                },
                {
                    constellation: '金牛座',
                    personality:
                        '具有拘謹，緩慢，沉默，踏實和溫順的特性，會運用穩定和可靠的行為風格，建立熟悉的生活習慣和安定的做事方式。 不過，金牛座的人習慣待在自己熟悉的安定環境，習慣千篇一律的單調做事方式，遇到臨機應變的事情，就會變得慢吞吞和不靈光。',
                    matchOne: '/images/test/virgo.png',
                    matchTwo: '/images/test/capricorn.png',
                    matchTitleOne: '處女',
                    matchTitleTwo: '摩羯',
                    distanceOne: '/images/test/leo.png',
                    distanceTwo: '/images/test/scorpio.png',
                    distanceTitleOne: '獅子',
                    distanceTitleTwo: '天蠍',
                },
                {
                    constellation: '雙子座',
                    personality:
                        '意志一體兩面的積極與消極，多才多藝，也可同時處理很多事情，有些則會表現出明顯的兩種或多種人格，這種多變的特性，往往令人難以捉摸。具有靈性、聰明、心智活躍敏銳，喜歡忙碌和追求新的概念及作事的方法。對事物的思考很快，改變主意也比一般人快。',
                    matchOne: '/images/test/aquarius.png',
                    matchTwo: '/images/test/libra.png',
                    matchTitleOne: '水瓶',
                    matchTitleTwo: '天秤',
                    distanceOne: '/images/test/virgo.png',
                    distanceTwo: '/images/test/sagittarius.png',
                    distanceTitleOne: '處女',
                    distanceTitleTwo: '射手',
                },
                {
                    constellation: '巨蟹座',
                    personality:
                        '具有旺盛的精力和敏銳的感覺，道德意識很強烈，對慾望的追求也總能適度的停止。有精闢的洞察能力，自尊心也很強，同時也生性慷慨、感情豐富，樂意幫助有需要的人，並喜歡被需要與被保護的感覺。',
                    matchOne: '/images/test/pisces.png',
                    matchTwo: '/images/test/scorpio.png',
                    matchTitleOne: '雙魚',
                    matchTitleTwo: '天蠍',
                    distanceOne: '/images/test/libra.png',
                    distanceTwo: '/images/test/capricorn.png',
                    distanceTitleOne: '天秤',
                    distanceTitleTwo: '魔羯',
                },
                {
                    constellation: '獅子座',
                    personality:
                        '具有權威感與支配能力，通常有一種貴族氣息或是王者風範。受人尊重，做事相當獨立，知道如何運用能力和權術以達到目的。有時也相當浪漫，喜歡美麗的事並愛炫耀、豪華及被人圍繞與讚美。個性溫暖、友善、體貼、外向、對人慷慨大方，很容易交朋友，人緣當然也很不錯。',
                    matchOne: '/images/test/aries.png',
                    matchTwo: '/images/test/sagittarius.png',
                    matchTitleOne: '牡羊',
                    matchTitleTwo: '射手',
                    distanceOne: '/images/test/scorpio.png',
                    distanceTwo: '/images/test/aquarius.png',
                    distanceTitleOne: '天蠍',
                    distanceTitleTwo: '水瓶',
                },
                {
                    constellation: '處女座',
                    personality:
                        '有豐富的知性，做事一絲不苟，有旺盛的批判精神，是個完美主義者，極度的厭惡虛偽與不正當的事。無論年紀大小，都保有一顆赤子之心，充滿了對過去的回憶及對未來的夢想。通常他們也很實際，總是可以使愛幻想和實際的性格共存且並榮。',
                    matchOne: '/images/test/taurus.png',
                    matchTwo: '/images/test/capricorn.png',
                    matchTitleOne: '金牛',
                    matchTitleTwo: '魔羯',
                    distanceOne: '/images/test/sagittarius.png',
                    distanceTwo: '/images/test/pisces.png',
                    distanceTitleOne: '射手',
                    distanceTitleTwo: '雙魚',
                },
                {
                    constellation: '天秤座',
                    personality:
                        '凡事講求邏輯和策略，絕對不以暴力解決事情，而是以巧妙的手腕，在對等的權利和利害中找出平衡點。優柔而不寡斷，八面玲瓏，頗有社交才華，容易搏得在上位者的眷顧和禮遇。有強烈的求知慾，領悟力，想像力，和直覺力，天生喜歡表現，並要求別人給與熱烈的反應和激賞。',
                    matchOne: '/images/test/aquarius.png',
                    matchTwo: '/images/test/gemini.png',
                    matchTitleOne: '水瓶',
                    matchTitleTwo: '雙子',
                    distanceOne: '/images/test/sagittarius.png',
                    distanceTwo: '/images/test/pisces.png',
                    distanceTitleOne: '射手',
                    distanceTitleTwo: '雙魚',
                },
                {
                    constellation: '天蠍座',
                    personality:
                        '有著強烈的第六感、神秘的探視能力及吸引力，做事常憑直覺；雖然有著敏銳的觀察力，但往往仍靠感覺來決定一切。個性強悍而不妥協，也非常好勝，這是一種自我要求的自我超越，以不斷填補內心深處的慾望。',
                    matchOne: '/images/test/pisces.png',
                    matchTwo: '/images/test/cancer.png',
                    matchTitleOne: '雙魚',
                    matchTitleTwo: '巨蟹',
                    distanceOne: '/images/test/aquarius.png',
                    distanceTwo: '/images/test/capricorn.png',
                    distanceTitleOne: '水瓶',
                    distanceTitleTwo: '金牛',
                },
                {
                    constellation: '射手座',
                    personality:
                        '有很好的幽默感，有決斷力及意志力，但生氣時會變得非常頑固。心智反應很快，任何事學得很快。有靈活的想像力用於實際事物上。對週遭的事感到興趣而能專心致力。有直覺而能洞悉人們的動機。身體健康，但有點神經質。感情上時而熱情如火，時而漠不關心。這種起伏不定的感情是造成失敗的原因。',
                    matchOne: '/images/test/aries.png',
                    matchTwo: '/images/test/capricorn.png',
                    matchTitleOne: '牡羊',
                    matchTitleTwo: '金牛',
                    distanceOne: '/images/test/virgo.png',
                    distanceTwo: '/images/test/capricorn.png',
                    distanceTitleOne: '處女',
                    distanceTitleTwo: '魔羯',
                },
                {
                    constellation: '摩羯座',
                    personality:
                        '腦子機警，時時想要抓住並利用環境，腦子的滲透力大，眼睛明亮，很快就可以看出別人的弱點以供自己利用。一般來說，是討人喜歡的，表現出整齊而吸引人的外貌，具有迷人的風度，不易受刺激，在危急時表現甚佳。深思熟慮，長於外交，小心而保守，能克服膽小的傾向。',
                    matchOne: '/images/test/virgo.png',
                    matchTwo: '/images/test/capricorn.png',
                    matchTitleOne: '處女',
                    matchTitleTwo: '金牛',
                    distanceOne: '/images/test/aries.png',
                    distanceTwo: '/images/test/cancer.png',
                    distanceTitleOne: '牡羊',
                    distanceTitleTwo: '巨蟹',
                },
                {
                    constellation: '水瓶座',
                    personality:
                        '有天生的理性瞭解人類內心的本性，同時擁有高度的容忍力，性格通常是均衡而健康的。富於研究精神，喜愛一切新穎的東西，能接受新的發現。具有好的觀察能力及建立理論的能力，常常造成天才人物，發明家，科學家或成為一位精明的人類行為研究者。',
                    matchOne: '/images/test/gemini.png',
                    matchTwo: '/images/test/libra.png',
                    matchTitleOne: '雙子',
                    matchTitleTwo: '天秤',
                    distanceOne: '/images/test/capricorn.png',
                    distanceTwo: '/images/test/leo.png',
                    distanceTitleOne: '金牛',
                    distanceTitleTwo: '獅子',
                },
                {
                    constellation: '雙魚座',
                    personality:
                        '有良好的觀察力，領悟力和判斷力，學習能力相當快，記憶力很好，也有靈活的想像力，喜愛白日夢，享受奇思妙想之境界，也有好的推理能力，喜歡旅行而得到舒暢。天生有仁慈，大方，憐憫，耐心，和保守的性情。',
                    matchOne: '/images/test/cancer.png',
                    matchTwo: '/images/test/scorpio.png',
                    matchTitleOne: '巨蟹',
                    matchTitleTwo: '天蠍',
                    distanceOne: '/images/test/gemini.png',
                    distanceTwo: '/images/test/virgo.png',
                    distanceTitleOne: '雙子',
                    distanceTitleTwo: '處女',
                },
            ],
        };
    },

    methods: {
        next() {
            this.vars++;
        },
        dealData() {
            // 選擇的value放入陣列
            for (let i = 0; i < this.questions.length; i++) {
                this.answers.push(this.questions[i].value);
                console.log(this.answers);
            }

            //計算陣列中星座出現的次數
            let totalCount = this.answers.reduce(function (obj, item) {
                if (item in obj) {
                    obj[item]++;
                } else {
                    obj[item] = 1;
                }
                return obj;
            }, {});
            console.log(totalCount);

            //顯示陣列中出現最多的星座
            var names = this.answers;
            function getMaxRepetData(arr) {
                const obj = {};
                const newObj = {
                    max: 0,
                    key: 0,
                };
                for (let i = 0; i < arr.length; i++) {
                    obj[arr[i]] ? obj[arr[i]]++ : (obj[arr[i]] = 1);
                }
                for (const i in obj) {
                    if (obj[i] > newObj.max) {
                        newObj.max = obj[i];
                        newObj.key = i;
                    }
                }
                return newObj;
            }
            console.log(getMaxRepetData(names));
            let maxRepetName = getMaxRepetData(names);
            console.log(maxRepetName.key);

            let maxRepetkey = this.constellations.indexOf(maxRepetName.key);
            console.log(maxRepetkey);

            this.finalAnswer.push(maxRepetkey);
            console.log(maxRepetkey);

            //顯示結果和長條圖
            this.final = true;
            this.$nextTick(() => {
                this.getChart();
            });
        },

        getChart() {
            var ctx = document.getElementById('myChart2').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: [
                        '牡羊座',
                        '金牛座',
                        '雙子座',
                        '巨蟹座',
                        '獅子座',
                        '處女座',
                        '天秤座',
                        '天蠍座',
                        '射手座',
                        '摩羯座',
                        '水瓶座',
                        '雙魚座',
                    ],
                    datasets: [
                        {
                            label: '# of Votes',
                            data: [1, 1, 1, 2, 2, 1, 3, 0, 0, 1, 1, 0],
                            backgroundColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)',
                                'rgba(188,70,254,1)',
                                'rgba(119,105,127,0.89)',
                                'rgba(178,76,102,0.87)',
                                'rgba(190,215,117,0.86)',
                                'rgba(56,215,241,0.49)',
                                'rgba(121,161,224,0.71)',
                            ],
                            borderColor: [
                                'rgb(255, 255, 255)',
                                'rgb(255, 255, 255)',
                                'rgb(255, 255, 255)',
                                'rgb(255, 255, 255)',
                                'rgb(255, 255, 255)',
                                'rgb(255, 255, 255)',
                            ],
                            borderWidth: 1,
                        },
                    ],
                },

                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });
        },
    },

    computed: {},

    components: {
        myFooter,
    },

    // mounted(){
    //     this.getChart();
    // },
};
</script>
<style lang="scss">
@import '@/scss/color.scss';
@import '@/scss/var.scss';
@import '@/scss/center.scss';
@import '@/scss/mixins.scss';
@import '@/scss/rwd.scss';
.wrapper_tQuestion {
    .tQuestion_header {
        height: 140px;
        background-color: #023552;
        @include rwd(mobile) {
            height: 100px;
        }
    }

    .tResult_section {
        //背景圖
        background-image: url(/images/test/bgi_star.png);
        background-size: 100% 100%;
        padding-bottom: 140px;
        @include rwd(mobile) {
            background-size: 100% 30%;
            background-image: url(/images/test/bgi_phone.png);
        }
    }

    /*===== 標題 =====*/
    .tResult_title {
        // border: 1px solid red;
        color: $colorT;
        padding: 80px * 0.7 0 0;
        &-c {
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 63px * 0.7;
                height: 43px * 0.7;
                margin-bottom: 5px;
            }
        }

        h1 {
            font-size: $h1;
            padding: 5px 20px 10px;
            @include rwd(mobile) {
                font-size: $h1 - 8px;
            }
        }

        &-e {
            text-align: center;
            font-size: $p1;
            @include rwd(mobile) {
                font-size: $p1 - 6px;
            }
        }
    }

    .tResult_content {
        // border: 1px solid yellow;
        width: 85%;
        height: 85%;
        color: white;
        @include center;

        //儀錶板
        background-image: url(/images/test/bgi-2.png);
        background-size: 100% 100%;
        background-repeat: no-repeat;
        margin-top: 56px;
        @include rwd(mobile) {
            background-image: none;
            margin-top: 0px;
        }

        .tResult_main {
            // border: 1px solid white;
            width: 70%;
            @include center;
            padding-top: 180px;
            display: flex;
            line-height: 1.6;
            @include rwd(mobile) {
                display: block;
                width: 100%;
                padding-top: 100px;
            }
        }

        .result_left {
            // border: 1px solid greenyellow;
            width: 50%;
            padding: 0px 0px 0 10px;
            @include rwd(mobile) {
                width: 100%;
            }
        }

        /*===== 結果直條圖=====*/
        .tr_chart {
            @include rwd(mobile) {
                width: 100%;
                margin-bottom: 50px;
            }
        }

        /*===== 結果敘述=====*/
        .tr_result {
            margin-bottom: 230px * 0.7;
            @include rwd(mobile) {
                margin-bottom: 80px;
            }
        }

        .result_right {
            width: 50%;
            padding: 0 10px;
            @include rwd(mobile) {
                width: 100%;
            }

            h2 {
                margin-bottom: 10px;
            }
            img {
                width: 90%;
            }
        }

        /*===== 適合星座=====*/
        .right_top {
            border: 3px solid $colorT;
            text-align: center;
            border-radius: 20px;
            padding: 10px;
            margin-top: 20px;
        }

        .kind_Constellations {
            display: flex;
            justify-content: center;
            align-content: center;
        }

        /*===== 不適合星座=====*/
        .right_bottom {
            @extend.right_top;
            margin-top: 10px;
        }

        // .distance_Constellations {
        //     @extend.kind_constellations;
        //     .dc_one {
        //         margin: 5px;
        //     }
        //     .dc_two {
        //         margin: 5px;
        //     }
        // }
    }

    .tQuestion_section {
        //背景圖
        background-image: url(/images/test/bgi_star.png);
        background-size: 100% 100%;
        padding-bottom: 140px;
        @include rwd(mobile) {
            background-size: 100% 50%;
            background-image: url(/images/test/bgi_phone.png);
        }
    }

    .tQuestion_title {
        color: $colorT;
        padding: (80px) * 0.7 0 0;
        &-c {
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 63px * 0.7;
                height: 43px * 0.7;
                margin-bottom: 5px;
            }
        }

        h1 {
            font-size: $h1;
            padding: 5px 20px 10px;
            @include rwd(mobile) {
                font-size: $h1 - 8px;
            }
        }

        &-e {
            text-align: center;
            font-size: $p1;
            @include rwd(mobile) {
                font-size: $p1 - 6px;
            }
        }
    }

    .tQuestion_content {
        // border: 1px solid yellow;
        width: 85%;
        height: 85%;
        padding-top: 10px;
        padding-bottom: 220px * 0.7;
        color: white;
        font-size: $h3;
        line-height: 1.6;
        @include center;

        //儀錶板
        background-image: url(/images/test/bgi-2.png);
        background-size: 100% 100%;
        background-repeat: no-repeat;
        margin-top: 56px;
        @include rwd(mobile) {
            background-image: none;
            margin-top: 0px;
            font-size: $h3 - 6px;
            padding-bottom: 30px;
        }
        .tq_main {
            width: 65%;
            @include center;
            margin-top: 240px * 0.7;
            @include rwd(mobile) {
                width: 100%;
                margin-top: 80px;
            }
            p {
                margin-bottom: 20px;
            }
            .tq_answer {
                display: flex;
                input {
                    width: 18px;
                    height: 18px;
                    margin-top: 10px;
                    margin-right: 10px;
                }
            }
        }
    }

    @include btn-module('.tQuestion_next', 280, 100) {
        color: white;
        display: block;
        margin: 28px auto;
        a {
            text-decoration: none;
            color: white;
        }
    }

    .tQuestion_footer {
        width: 100%;
        height: 200px;
        background-color: #44796a;
    }

    // .overlaymenu{
    //     .menulist{
    //         .nav-menu{
    //             ul{
    //                 li:nth-child(3){
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
