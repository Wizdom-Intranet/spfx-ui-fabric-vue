<template>
    <table>
        <tr>
            <td class="up" @click="upHour()">
                <svg viewBox="0 -0 2048 2048" width="16" height="16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#000000" stroke="none" transform="translate(0, 2048) scale(1, -1)" d="M1024 1607l1017 -1017l-242 -241l-775 775l-775 -775l-242 241l1017 1017v0z"/></svg>
            </td>
            <td class="seperator"></td>
            <td class="up" @click="upMinute()">
                <svg viewBox="0 -0 2048 2048" width="16" height="16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#000000" stroke="none" transform="translate(0, 2048) scale(1, -1)" d="M1024 1607l1017 -1017l-242 -241l-775 775l-775 -775l-242 241l1017 1017v0z"/></svg>
            </td>
        </tr>
        <tr>
            <td><uiTextfield class="textField" v-model="hour" /></td>
            <td class="seperator">:</td>
            <td><uiTextfield class="textField" v-model="minute" /></td>
        </tr>
        <tr>
            <td class="down" @click="downHour()">
                <svg viewBox="0 -0 2048 2048" width="16" height="16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#000000" stroke="none" transform="translate(0, 2048) scale(1, -1)" d="M1799 1699l242 -241l-1017 -1017l-1017 1017l242 241l775 -775l775 775v0z"/></svg>
            </td>
            <td class="seperator"></td>
            <td class="down" @click="downMinute()">
                <svg viewBox="0 -0 2048 2048" width="16" height="16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#000000" stroke="none" transform="translate(0, 2048) scale(1, -1)" d="M1799 1699l242 -241l-1017 -1017l-1017 1017l242 241l775 -775l775 775v0z"/></svg>
            </td>
        </tr>
    </table>
</template>

<script>
import { loadStyles } from '@microsoft/load-themed-styles';
import uiTextfield from "./uiTextfield.vue";
export default {
    loadStyles,
    components:{
        uiTextfield
    },
    props:["value"],
    watch:{
        hour(newVal, oldVal){
            if(newVal*1 != newVal || newVal<0 || newVal>23)
                this.$nextTick(()=>this.hour = oldVal);
            else
            {
                var newDate = this.value ? new Date(this.value) : new Date(0);
                newDate.setHours(this.hour);
                this.$emit("input", newDate);
            }
        },
        minute(newVal, oldVal){
            if(newVal*1 != newVal || newVal<0 || newVal>59)
                this.$nextTick(()=>this.minute = oldVal);
            else
            {
                var newDate = this.value ? new Date(this.value) : new Date(0);
                newDate.setMinutes(this.minute);
                this.$emit("input", newDate);
            }
        },
        value:{
            handler(newVal){
                if(newVal)
                {
                    this.hour = newVal.getHours();
                    this.minute = newVal.getMinutes();
                }
            },
            immediate : true
        }
    },
    methods:{
        upHour(){
            this.hour = (this.hour+1)%24;
        },
        upMinute(){
            this.minute++;
            if(this.minute>59)
            {
                this.upHour();
                this.minute = 0;
            }
        },
        downHour(){
            this.hour--;
            if(this.hour<0)
                this.hour = 23;

        },
        downMinute(){
            this.minute--;
            if(this.minute<0)
            {
                this.downHour();
                this.minute = 59;
            }
        },
    },
    data(){
        return{
            hour : 0,
            minute : 0
        }
    }
}
</script>
<style lang="scss" scoped>
    table{
        border-spacing: 0;
        min-width: 90px;
    }
    .seperator
    {
        text-align: center;
        width:10px;
    }
    .up, .down{
        cursor: pointer;
        text-align: center;
        user-select: none;
    }
    .textField{
        width:100%;
        margin: 0 !important;
        ::v-deep label{
            display: none;
        }
        ::v-deep input{
            text-align: center;
            min-width: unset;
            padding:6px 0;
        }
    }
</style>