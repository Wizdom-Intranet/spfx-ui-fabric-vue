import { loadStyles } from '@microsoft/load-themed-styles';
import uiTextfield from './uiTextfield.vue.js';

//
var script = {
  loadStyles: loadStyles,
  components: {
    uiTextfield: uiTextfield
  },
  props: ["value"],
  watch: {
    hour: function hour(newVal, oldVal) {
      var _this = this;

      if (newVal * 1 != newVal || newVal < 0 || newVal > 23) this.$nextTick(function () {
        return _this.hour = oldVal;
      });else {
        var newDate = this.value ? new Date(this.value) : new Date(0);
        newDate.setHours(this.hour);
        this.$emit("input", newDate);
      }
    },
    minute: function minute(newVal, oldVal) {
      var _this2 = this;

      if (newVal * 1 != newVal || newVal < 0 || newVal > 59) this.$nextTick(function () {
        return _this2.minute = oldVal;
      });else {
        var newDate = this.value ? new Date(this.value) : new Date(0);
        newDate.setMinutes(this.minute);
        this.$emit("input", newDate);
      }
    },
    value: {
      handler: function handler(newVal) {
        if (newVal) {
          this.hour = newVal.getHours();
          this.minute = newVal.getMinutes();
        }
      },
      immediate: true
    }
  },
  methods: {
    upHour: function upHour() {
      this.hour = (this.hour + 1) % 24;
    },
    upMinute: function upMinute() {
      this.minute++;

      if (this.minute > 59) {
        this.upHour();
        this.minute = 0;
      }
    },
    downHour: function downHour() {
      this.hour--;
      if (this.hour < 0) this.hour = 23;
    },
    downMinute: function downMinute() {
      this.minute--;

      if (this.minute < 0) {
        this.downHour();
        this.minute = 59;
      }
    }
  },
  data: function data() {
    return {
      hour: 0,
      minute: 0
    };
  }
};

export default script;
