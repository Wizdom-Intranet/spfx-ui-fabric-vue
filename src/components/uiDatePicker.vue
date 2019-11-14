<template>
    <div class="uiDatePicker">
        <popper
            trigger="click"
            ref="popper"
            :options="popperOptions">
            <div class="popper foldout">
                <div class="dayPicker">
                    <div class="header">
                        <span class="current">{{currentMonth}}</span>
                        <span class="navigate">
                            <span class="up" @click="monthUp()"><uiIconUp /></span>
                            <span class="down" @click="monthDown()"><uiIconDown /></span>
                        </span>
                    </div>
                    <div class="days">
                        <span v-for="(day, index) in daysOfWeek" :key="index">{{ day }}</span>
                    </div>
                    <div class="days">
                        <template v-if="blankDaysStart > 0">
                            <span  v-for="d in blankDaysStart" :key="d.timestamp"></span>
                        </template>
                        <span
                            v-for="day in days"
                            :key="day.timestamp"
                            :class="getDayClasses(day)"
                            @click="selectDate(day)">{{day.date}}</span>
                        <template v-if="blankDaysEnd > 0">
                            <span  v-for="d in blankDaysEnd" :key="d.timestamp"></span>
                        </template>
                    </div>
                    
                </div>
                <div class="monthPicker" v-if="!showYear">
                    <div class="header">
                        <span class="current pointer" @click="showYear=true">{{year}}</span>
                        <span class="navigate">
                            <span class="up" @click="year++"><uiIconUp /></span>
                            <span class="down" @click="year--"><uiIconDown /></span>
                        </span>
                    </div>
                    <div class="months">
                        <span v-for="(month, index) in months" @click="selectMonth(index)" :key="index">
                            {{month}}
                        </span>
                    </div>
                    <div class="goToToday"><span @click="goToToday()">{{localeObj.goToToday}}</span></div>
                </div>
                <div class="yearPicker" v-if="showYear">
                    <div class="header">
                        <span class="current pointer" @click="showYear=false">{{yearStart}} - {{yearEnd-1}}</span>
                        <span class="navigate">
                            <span class="up" @click="yearStart+=12"><uiIconUp /></span>
                            <span class="down" @click="yearStart-=12"><uiIconDown /></span>
                        </span>
                    </div>
                    <div class="years">
                        <span v-for="year in years" @click="selectYear(year)" :key="year">
                            {{year}}
                        </span>
                    </div>
                    <div class="goToToday"><span @click="goToToday()">{{localeObj.goToToday}}</span></div>
                </div>
            </div>
            <div class="inputGroup" slot="reference">
                <div class="inputContainer">
                    <input 
                        type="text" 
                        v-model="inputVal"
                        @blur="parseTypedDate"
                    >
                </div>
                <div class="iconContainer">
                    <uiIconCalendar />
                </div>
            </div>
        </popper>
    </div>
</template>

<script>
const dateUtils = {
    compareDates (date1, date2) {
        const d1 = new Date(date1.getTime())
        const d2 = new Date(date2.getTime())
        d1.setHours(0, 0, 0, 0)
        d2.setHours(0, 0, 0, 0)
        return d1.getTime() === d2.getTime()
    },  
    daysInMonth (year, month) {
        return /8|3|5|10/.test(month) ? 30 : month === 1 ? (!(year % 4) && year % 100) || !(year % 400) ? 29 : 28 : 31
    },
    formatDate (date, localeObj) {
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        let day = date.getDate()
        let str = localeObj.format
        .replace(/dd/, ('0' + day).slice(-2))
        .replace(/d/, day)
        .replace(/yyyy/, year)
        .replace(/yy/, String(year).slice(2))
        .replace(/MMMM/, localeObj.months[date.getMonth()])
        .replace(/MMMM/, localeObj.short[date.getMonth()])
        .replace(/MM/, ('0' + month).slice(-2))
        .replace(/M(?!a|ä|e)/, month)
        // .replace(/su/, this.getNthSuffix(this.getDate(date)))
        // .replace(/D(?!e|é|i)/, this.getDayNameAbbr(date, translation.days))
        return str
    }
}
import { uiIconUp, uiIconDown, uiIconCalendar } from "./uiIcon";
import Popper from 'vue-popperjs';
// import Moment from "moment";
import parse from 'date-fns/parse'
import { loadStyles } from '@microsoft/load-themed-styles';
const locale = {
    "da" : {
        goToToday : "Gå til idag",
        format : "dd/MM/yyyy",
        firstDay : 1,
        days : ["M","T","O","T","F","L","S"],
        months : ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December'],
        short : ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec']
    },
    "de" : {
        goToToday : "gehe heute hin",
        format : "dd.MM.yyyy",
        firstDay : 1,
        days : ["M","D","M","D","F","S","S"],
        months : ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
        short : ['Jan', 'Febr', 'Mrz', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sept', 'Okt', 'Nov', 'Dez']
    },
    "es":{
        goToToday : "ir a hoy",
        format : "dd/MM/yyyy", 
        firstDay : 1,
        days : ["L","M","M","J","V","S","D"],
        months : ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        short : ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
    },
    "en-uk" : {
        goToToday : "Go to today",
        format : "dd/MM/yyyy",
        firstDay : 1,
        days : ["M","T","W","T","F","S","S"],
        months : ["January", "February", "March", "April", "May", "June", "July","August", "September","October", "November","December"],
        short : ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    },
    "en-gb" : {
        goToToday : "Go to today",
        format : "dd/MM/yyyy",
        firstDay : 1,
        days : ["M","T","W","T","F","S","S"],
        months : ["January", "February", "March", "April", "May", "June", "July","August", "September","October", "November","December"],
        short : ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    },
    "en-us" : {
        goToToday : "Go to today",
        format : "M/d/yyyy",
        firstDay : 0,
        days : ["S", "M","T","W","T","F","S"],
        months : ["January", "February", "March", "April", "May", "June", "July","August", "September","October", "November","December"],
        short : ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    },
    "fi":{
        goToToday : "mene tänään",
        format : "M/d/yyyy", 
        firstDay : 1,
        days : ["M", "T","K","T","P","L","S"],
        months : ["Tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"],
        short : ["Tam","Hel","Maa","Huh","Tou","Kes","Hei","Elo","Syy","Lok","Mar","Jou"]
    },
    "fr":{
        goToToday : "Aller à aujourd'hui",
        format : "dd/MM/yyyy",
        firstDay : 1,
        days : ["L", "M","M","J","V","S","D"],
        months : ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
        short : ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.']
    },
    "it":{
        goToToday : "Vai a oggi",
        format : "dd/MM/yyyy",
        firstDay : 1,
        days : ["L", "M","M","G","V","S","D"],
        months : ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'],
        short : ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic']
    },
    "nl":{
        goToToday : "Ga naar vandaag",
        format : "dd-MM-yyyy",
        firstDay : 1,
        days : ["M", "D","W","D","V","Z","Z"],
        months : ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
        short : ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec']
    },
    "pl":{
        goToToday : "Idź do dzisiaj",
        format : "dd.MM.yyyy",
        firstDay : 1,
        days : ["P","W","Ś","C","P","S","N"],
        months : ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'],
        short : ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paź', 'lis', 'gru']
    }
}
export default {
    loadStyles, 
    components:{
        uiIconUp, 
        uiIconDown,
        uiIconCalendar,
        Popper
    },
    props:{
        value:{
            type:Date
        },
        locale:{
            type:String,
            default:"en-us"
        },
        placement:{
            type:String, 
            default: "top-end"
        }
    },
    watch:{
        value:{
            handler(newVal){
                // console.log("value watch", newVal);
                if(newVal){
                    this.inputVal = dateUtils.formatDate(newVal, this.localeObj);
                    this.pickerDate = newVal;
                }
                else{
                    this.inputVal = "";
                    this.pickerDate = new Date();
                }                
            },
            immediate:true
        }
    },
    computed:{
        popperOptions(){
            return {
                placement:"bottom-start",
                modifiers:{
                    preventOverflow: {enabled: false},
                    offset: {enabled: false},
                    keepTogether: {enabled: false},
                    arrow: {enabled: false},
                    flip: {enabled: false},
                    hide: {enabled: false},
                    computeStyle: {
                        enabled: false,
                    },
                    applyStyle: {
                        enabled:true,
                        fn(data, options){
                            var input = data.instance.reference.getClientRects()[0];
                            var popper = data.instance.popper.getClientRects()[0];
                            var windowWidth = document.documentElement.clientWidth;
                            var windowHeight = document.documentElement.clientHeight;

                            // below of above the input
                            var top = 0;
                            if(input.height + input.y + popper.height < windowHeight)
                                top = input.height; // yay room to place it beneath
                            else 
                                top = 0-popper.height; //crap, place it above

                            // left or rightside of the input
                            var right = 0;
                            
                            if (popper.x + popper.width + input.width >= windowWidth)
                                right = 0-popper.width + input.width;
    
                            // apply style
                            data.instance.popper.style.transform = "translate(" + right + "px, " + top + "px)";
                        }
                    }
                }
            }
        },
        localeObj(){
            if(locale[this.locale.toLowerCase()])
                return locale[this.locale.toLowerCase()];
            if(locale[this.locale.split("-")[0].toLowerCase()])
                return locale[this.locale.split("-")[0].toLowerCase()];
            return locale["en-us"];
        },
        years(){
            var rtn=[];
            for(var i=this.yearStart;i<this.yearEnd;i++)
                rtn.push(i);
            return rtn;
        },
        yearStart:{
            get(){return this.yearEnd-12;},
            set(val){this.yearEnd = val+12;}
        },
        currentMonth(){
            return this.localeObj.months[this.pickerDate.getMonth()] + " " + this.pickerDate.getFullYear();
            // return ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December'][this.pickerDate.getMonth()]
            // + " " + this.pickerDate.getFullYear();// TODO
        },
        months(){
            return this.localeObj.short;
            // return ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'];
        },
        daysOfWeek(){
            return this.localeObj.days;
            // ["M","T","O","T","F","L","S"]
        },
        blankDaysStart () {
            let dObj = new Date(this.pickerDate.getFullYear(), this.pickerDate.getMonth(), 1, this.pickerDate.getHours(), this.pickerDate.getMinutes())
            // if (this.mondayFirst) {
            if (this.localeObj.firstDay == 1) {
                return dObj.getDay() > 0 ? dObj.getDay() - 1 : 6
            }
            return dObj.getDay();
        },
        blankDaysEnd(){
            return 7-((this.blankDaysStart+this.days.length)%7);
        },
        days () {
            const d = this.pickerDate
            let days = []
            let dObj = new Date(this.pickerDate.getFullYear(), this.pickerDate.getMonth(), 1, this.pickerDate.getHours(), this.pickerDate.getMinutes());
            let daysInMonth = dateUtils.daysInMonth(dObj.getFullYear(), dObj.getMonth());

            for (let i = 0; i < daysInMonth; i++) {
                days.push({
                    date: dObj.getDate(),
                    timestamp: dObj.getTime(),
                    isSelected: this.value && dateUtils.compareDates(dObj, this.value),
                    // isDisabled: this.isDisabledDate(dObj),
                    // isHighlighted: this.isHighlightedDate(dObj),
                    // isHighlightStart: this.isHighlightStart(dObj),
                    // isHighlightEnd: this.isHighlightEnd(dObj),
                    isToday: dateUtils.compareDates(dObj, new Date()),
                    isWeekend: dObj.getDay() === 0 || dObj.getDay() === 6,
                    isSaturday: dObj.getDay() === 6,
                    isSunday: dObj.getDay() === 0
                })
                dObj.setDate(dObj.getDate() + 1)
            }
            return days
        },
    },
    methods:{
        parseTypedDate(){
            if(!this.inputVal || this.inputVal == "")
            {
                this.$emit("input", "");
                return;
            }

            try{
                var parsed = parse(this.inputVal, this.localeObj.format);
                // this.pickerDate = parsed;
                if(parsed != "Invalid Date" && !dateUtils.compareDates(parsed, this.value))
                    this.$emit("input", parsed);
            }
            catch(ex){}

            // var parsed = Moment(this.inputVal, this.localeObj.format.toUpperCase());
            // if(parsed.isValid()){
            //     // this.pickerDate = parsed.toDate();
            //     if(!dateUtils.compareDates(parsed.toDate(), this.value))
            //         this.$emit("input", parsed.toDate());
            // }
            // console.log("parsed", parsed);
        },
        selectDate(val){
            this.$emit("input", new Date(val.timestamp));
            this.inputVal = dateUtils.formatDate(new Date(val.timestamp), this.localeObj);
            // this.showPicker = false;
            this.$refs.popper.doClose();
            this.$nextTick(()=>{
                this.$refs.popper.doClose();
            })
            // console.log("inputval", this.inputVal);
        },
        selectYear(year){
            this.year = year;
            this.showYear = false;
        },
        selectMonth(index){
            this.pickerDate.setMonth(index);
            this.pickerDate.setFullYear(this.year);
            this.pickerDate = new Date(this.pickerDate); // fire off change detection
        },
        getDayClasses(day){
            return {
                'selectable': true,
                'selected': day.isSelected,
                // 'disabled': day.isDisabled,
                // 'highlighted': day.isHighlighted,
                'today': day.isToday,
                'weekend': day.isWeekend,
                'sat': day.isSaturday,
                'sun': day.isSunday,
                // 'highlight-start': day.isHighlightStart,
                // 'highlight-end': day.isHighlightEnd
            }
        },
        // inputBlurred(){
        //     setTimeout(()=>{
        //         if(!this.cancelBlur)
        //             this.showPicker = false;
        //         this.cancelBlur = false;
        //     },500);            
        // },
        monthUp(){
            this.pickerDate.setMonth(this.pickerDate.getMonth()+1);
            this.pickerDate = new Date(this.pickerDate); // fire off change detection
        },
        monthDown(){
            this.pickerDate.setMonth(this.pickerDate.getMonth()-1);
            this.pickerDate = new Date(this.pickerDate); // fire off change detection
        },
        goToToday(){
            this.year = new Date().getFullYear();
            this.pickerDate = new Date();
        }
    },
    data(){
        return{
            // showPicker : true, // TODO
            // cancelBlur : false,
            inputVal : "",
            showYear : false, 
            pickerDate : this.value || new Date(),
            year : (this.value || new Date()).getFullYear(),
            yearEnd : new Date().getFullYear() - new Date().getFullYear() % 12 + 12
        }
    }
}
</script>

<style lang="scss" scoped>
    @import 'node_modules/office-ui-fabric-core/src/sass/_Fabric.Common';
    @import '../misc/fixThemeVars';
    @import 'node_modules/vue-popperjs/dist/vue-popper';
    .uiDatePicker{
        position:relative;
        @include ms-baseFont;
        @include ms-u-normalize;
        color: $ms-color-neutralPrimary;
        font-size: $ms-font-size-s;
        font-weight: $ms-font-weight-regular;
    }
    .foldout{
        // position:absolute;
        // z-index:100;
        background-color:white;
        width: 420px;
        box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.75);
        user-select: none;
        > div{
            display:table-cell;
            vertical-align: top;
        }
    }
    .header{ // used in all pickers
        padding: 7px;
        display: flex;
        justify-content: space-between;
        .current{
            font-weight: bold;
        }
        .navigate{
            cursor: pointer;
            .up{
                padding:6px 8px;
                &:hover{
                    background-color:lightgray;
                }
            }
            .down{
                // margin-left:4px;
                padding:6px 8px;
                &:hover{
                    background-color:lightgray;
                }
            }
        }
    }
    .yearPicker,
    .monthPicker{
        width:210px;
        padding:5px;
        .years,
        .months{
            width:200px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            span{
                flex-basis: 40px;
                padding:12px 2px;
                text-align: center;
                margin-bottom:12px;
                cursor: pointer;
                &:hover{
                    background-color:lightgray;
                }
            }
        }
        .goToToday{
            text-align: right;
            padding:5px;
            span{
                 cursor: pointer;
            }
        }
    }
    .dayPicker{
        width:210px;
        // height:220px;
        padding:5px;
        border-right:solid 1px #edebe9;
        .days{
            width:200px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            span{
                flex-basis: 20px;
                padding:4px;
                text-align: center;
                // background-color:lightcyan;
                &.selectable{
                    cursor: pointer;
                    &:hover{
                        background-color:lightgray;
                    }
                }
                &.today{
                    background-color:$ms-color-themePrimary;
                    color: $ms-color-white;
                }
                &.selected{
                    background-color:$ms-color-themeLight;
                }
            }
        }
    }
    .pointer{
        cursor: pointer;
    }
    .inputGroup{
        display: inline-block;
        padding-right: 8px;
        // border:solid 1px rgb(138, 136, 134);
        border: 1px solid $ms-color-neutralTertiaryAlt;
        border-radius:2px;
        .inputContainer{
            display: table-cell;
            width:100%;
            input{
                height:30px;
                width:100%;
                box-sizing: border-box;
                padding: 0 8px;
                border: none;
                // @include ms-u-normalize;
                font-weight: $ms-font-weight-semilight;
                font-size: $ms-font-size-m;
                color: $ms-color-neutralPrimary;
                &:focus{
                    outline:none;
                }
            }
        }
        .iconContainer{
            display: table-cell;
            .ms-Icon{
                vertical-align: -4px;
                font-size:18px;
            } 
        }
     
    }

    @media screen and (max-width: 450px) {
        .yearPicker,
        .monthPicker{
            display: none !important;
        }
        .dayPicker{
            border-right:none !important;
        }
        .foldout{
            width:210px;
        }
    }
</style>
