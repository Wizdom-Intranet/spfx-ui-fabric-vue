import { loadStyles } from '@microsoft/load-themed-styles';
import { uiIconUp, uiIconDown, uiIconCalendar } from '../uiIcon.js';
import Popper from '../../../node_modules/vue-popperjs/dist/vue-popper.min.js';
import Moment from 'moment';

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var dateUtils = {
  compareDates: function compareDates(date1, date2) {
    var d1 = new Date(date1.getTime());
    var d2 = new Date(date2.getTime());
    d1.setHours(0, 0, 0, 0);
    d2.setHours(0, 0, 0, 0);
    return d1.getTime() === d2.getTime();
  },
  daysInMonth: function daysInMonth(year, month) {
    return /8|3|5|10/.test(month) ? 30 : month === 1 ? !(year % 4) && year % 100 || !(year % 400) ? 29 : 28 : 31;
  },
  formatDate: function formatDate(date, localeObj) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var str = localeObj.format.replace(/dd/, ('0' + day).slice(-2)).replace(/d/, day).replace(/yyyy/, year).replace(/yy/, String(year).slice(2)).replace(/MMMM/, localeObj.months[date.getMonth()]).replace(/MMMM/, localeObj.short[date.getMonth()]).replace(/MM/, ('0' + month).slice(-2)).replace(/M(?!a|ä|e)/, month); // .replace(/su/, this.getNthSuffix(this.getDate(date)))
    // .replace(/D(?!e|é|i)/, this.getDayNameAbbr(date, translation.days))

    return str;
  }
};
var locale = {
  "da": {
    goToToday: "Gå til idag",
    format: "dd/MM/yyyy",
    firstDay: 1,
    days: ["M", "T", "O", "T", "F", "L", "S"],
    months: ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December'],
    short: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec']
  },
  "de": {
    goToToday: "gehe heute hin",
    format: "dd.MM.yyyy",
    firstDay: 1,
    days: ["M", "D", "M", "D", "F", "S", "S"],
    months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
    short: ['Jan', 'Febr', 'Mrz', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sept', 'Okt', 'Nov', 'Dez']
  },
  "es": {
    goToToday: "ir a hoy",
    format: "dd/MM/yyyy",
    firstDay: 1,
    days: ["L", "M", "M", "J", "V", "S", "D"],
    months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    short: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
  },
  "en-uk": {
    goToToday: "Go to today",
    format: "dd/MM/yyyy",
    firstDay: 1,
    days: ["M", "T", "W", "T", "F", "S", "S"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    short: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  },
  "en-gb": {
    goToToday: "Go to today",
    format: "dd/MM/yyyy",
    firstDay: 1,
    days: ["M", "T", "W", "T", "F", "S", "S"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    short: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  },
  "en-us": {
    goToToday: "Go to today",
    format: "M/d/yyyy",
    firstDay: 0,
    days: ["S", "M", "T", "W", "T", "F", "S"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    short: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  },
  "fi": {
    goToToday: "mene tänään",
    format: "M/d/yyyy",
    firstDay: 1,
    days: ["M", "T", "K", "T", "P", "L", "S"],
    months: ["Tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"],
    short: ["Tam", "Hel", "Maa", "Huh", "Tou", "Kes", "Hei", "Elo", "Syy", "Lok", "Mar", "Jou"]
  },
  "fr": {
    goToToday: "Aller à aujourd'hui",
    format: "dd/MM/yyyy",
    firstDay: 1,
    days: ["L", "M", "M", "J", "V", "S", "D"],
    months: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
    short: ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.']
  },
  "it": {
    goToToday: "Vai a oggi",
    format: "dd/MM/yyyy",
    firstDay: 1,
    days: ["L", "M", "M", "G", "V", "S", "D"],
    months: ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'],
    short: ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic']
  },
  "nl": {
    goToToday: "Ga naar vandaag",
    format: "dd-MM-yyyy",
    firstDay: 1,
    days: ["M", "D", "W", "D", "V", "Z", "Z"],
    months: ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
    short: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec']
  },
  "pl": {
    goToToday: "Idź do dzisiaj",
    format: "dd.MM.yyyy",
    firstDay: 1,
    days: ["P", "W", "Ś", "C", "P", "S", "N"],
    months: ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'],
    short: ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paź', 'lis', 'gru']
  }
};
var script = {
  loadStyles: loadStyles,
  components: {
    uiIconUp: uiIconUp,
    uiIconDown: uiIconDown,
    uiIconCalendar: uiIconCalendar,
    Popper: Popper
  },
  props: {
    value: {
      type: Date
    },
    locale: {
      type: String,
      default: "en-us"
    },
    placement: {
      type: String,
      default: "top-end"
    }
  },
  watch: {
    value: {
      handler: function handler(newVal) {
        // console.log("value watch", newVal);
        if (newVal) {
          this.inputVal = dateUtils.formatDate(newVal, this.localeObj);
          this.pickerDate = newVal;
        } else {
          this.inputVal = "";
          this.pickerDate = new Date();
        }
      },
      immediate: true
    }
  },
  computed: {
    popperOptions: function popperOptions() {
      return {
        placement: "bottom-start",
        modifiers: {
          preventOverflow: {
            enabled: false
          },
          offset: {
            enabled: false
          },
          keepTogether: {
            enabled: false
          },
          arrow: {
            enabled: false
          },
          flip: {
            enabled: false
          },
          hide: {
            enabled: false
          },
          computeStyle: {
            enabled: false
          },
          applyStyle: {
            enabled: true,
            fn: function fn(data, options) {
              var input = data.instance.reference.getClientRects()[0];
              var popper = data.instance.popper.getClientRects()[0];
              var windowWidth = document.documentElement.clientWidth;
              var windowHeight = document.documentElement.clientHeight; // below of above the input

              var top = 0;
              if (input.height + input.y + popper.height < windowHeight) top = input.height; // yay room to place it beneath
              else top = 0 - popper.height; //crap, place it above
              // left or rightside of the input

              var right = 0;
              if (input.width + input.x - popper.width > 0) right = 0 - popper.width + input.width; // if it still overflows the right side of the screen, move it left, until it dosnt

              if (right == 0 && input.x + popper.width > windowWidth) {
                right = 0 - (input.x + popper.width - windowWidth);
              } // apply style


              data.instance.popper.style.transform = "translate(" + right + "px, " + top + "px)";
            }
          }
        }
      };
    },
    localeObj: function localeObj() {
      if (locale[this.locale.toLowerCase()]) return locale[this.locale.toLowerCase()];
      if (locale[this.locale.split("-")[0].toLowerCase()]) return locale[this.locale.split("-")[0].toLowerCase()];
      return locale["en-us"];
    },
    years: function years() {
      var rtn = [];

      for (var i = this.yearStart; i < this.yearEnd; i++) {
        rtn.push(i);
      }

      return rtn;
    },
    yearStart: {
      get: function get() {
        return this.yearEnd - 12;
      },
      set: function set(val) {
        this.yearEnd = val + 12;
      }
    },
    currentMonth: function currentMonth() {
      return this.localeObj.months[this.pickerDate.getMonth()] + " " + this.pickerDate.getFullYear(); // return ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December'][this.pickerDate.getMonth()]
      // + " " + this.pickerDate.getFullYear();// TODO
    },
    months: function months() {
      return this.localeObj.short; // return ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'];
    },
    daysOfWeek: function daysOfWeek() {
      return this.localeObj.days; // ["M","T","O","T","F","L","S"]
    },
    blankDaysStart: function blankDaysStart() {
      var dObj = new Date(this.pickerDate.getFullYear(), this.pickerDate.getMonth(), 1, this.pickerDate.getHours(), this.pickerDate.getMinutes()); // if (this.mondayFirst) {

      if (this.localeObj.firstDay == 1) {
        return dObj.getDay() > 0 ? dObj.getDay() - 1 : 6;
      }

      return dObj.getDay();
    },
    blankDaysEnd: function blankDaysEnd() {
      return 7 - (this.blankDaysStart + this.days.length) % 7;
    },
    days: function days() {
      var d = this.pickerDate;
      var days = [];
      var dObj = new Date(this.pickerDate.getFullYear(), this.pickerDate.getMonth(), 1, this.pickerDate.getHours(), this.pickerDate.getMinutes());
      var daysInMonth = dateUtils.daysInMonth(dObj.getFullYear(), dObj.getMonth());

      for (var i = 0; i < daysInMonth; i++) {
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
        });
        dObj.setDate(dObj.getDate() + 1);
      }

      return days;
    }
  },
  methods: {
    parseTypedDate: function parseTypedDate() {
      if (!this.inputVal || this.inputVal == "") {
        this.$emit("input", "");
        return;
      }

      var parsed = Moment(this.inputVal, this.localeObj.format.toUpperCase());

      if (parsed.isValid()) {
        // this.pickerDate = parsed.toDate();
        if (!dateUtils.compareDates(parsed.toDate(), this.value)) this.$emit("input", parsed.toDate());
      } // console.log("parsed", parsed);

    },
    selectDate: function selectDate(val) {
      var _this = this;

      this.$emit("input", new Date(val.timestamp));
      this.inputVal = dateUtils.formatDate(new Date(val.timestamp), this.localeObj); // this.showPicker = false;

      this.$refs.popper.doClose();
      this.$nextTick(function () {
        _this.$refs.popper.doClose();
      }); // console.log("inputval", this.inputVal);
    },
    selectYear: function selectYear(year) {
      this.year = year;
      this.showYear = false;
    },
    selectMonth: function selectMonth(index) {
      this.pickerDate.setMonth(index);
      this.pickerDate.setFullYear(this.year);
      this.pickerDate = new Date(this.pickerDate); // fire off change detection
    },
    getDayClasses: function getDayClasses(day) {
      return {
        'selectable': true,
        'selected': day.isSelected,
        // 'disabled': day.isDisabled,
        // 'highlighted': day.isHighlighted,
        'today': day.isToday,
        'weekend': day.isWeekend,
        'sat': day.isSaturday,
        'sun': day.isSunday // 'highlight-start': day.isHighlightStart,
        // 'highlight-end': day.isHighlightEnd

      };
    },
    // inputBlurred(){
    //     setTimeout(()=>{
    //         if(!this.cancelBlur)
    //             this.showPicker = false;
    //         this.cancelBlur = false;
    //     },500);            
    // },
    monthUp: function monthUp() {
      this.pickerDate.setMonth(this.pickerDate.getMonth() + 1);
      this.pickerDate = new Date(this.pickerDate); // fire off change detection
    },
    monthDown: function monthDown() {
      this.pickerDate.setMonth(this.pickerDate.getMonth() - 1);
      this.pickerDate = new Date(this.pickerDate); // fire off change detection
    },
    goToToday: function goToToday() {
      this.year = new Date().getFullYear();
      this.pickerDate = new Date();
    }
  },
  data: function data() {
    return {
      // showPicker : true, // TODO
      // cancelBlur : false,
      inputVal: "",
      showYear: false,
      pickerDate: this.value || new Date(),
      year: (this.value || new Date()).getFullYear(),
      yearEnd: new Date().getFullYear() - new Date().getFullYear() % 12 + 12
    };
  }
};

export default script;
