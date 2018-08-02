<template>
    <el-dialog :title="dialogInfo.title" :visible.sync="dialogInfo.visible" width="600px" :append-to-body='true'>
        <el-scrollbar style="height:400px;" class="loncom_scrollbar">
            <div class="loncom_dialog_con">
                
                <div class="loncom_sysinfo_box loncom_dialog_system_informtop">
                    提醒：设置告警提醒时间。
                </div>
                <el-form :model="form_info" :rules="formRules" ref="formInfo" label-width="100px">
                    <el-form-item prop="week" label="周范围" size="small">
                        <el-checkbox-group v-model="form_info.week">
                            <el-checkbox label="周一"></el-checkbox>
                            <el-checkbox label="周二"></el-checkbox>
                            <el-checkbox label="周三"></el-checkbox>
                            <el-checkbox label="周四"></el-checkbox>
                            <el-checkbox label="周五"></el-checkbox>
                            <el-checkbox label="周六"></el-checkbox>
                            <el-checkbox label="周日"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item prop="time" label="时间范围" size="small">
                        <div>
                            <el-radio-group v-model="form_info.time">
                                <el-radio label="1">全天</el-radio>
                                <el-radio label="2">以下时间段</el-radio>
                            </el-radio-group>
                        </div>
                    </el-form-item>
                    <el-form-item prop="value" v-if="form_info.time==2||form_info.time=='2'">
                        <el-time-picker
                            is-range
                            v-model="form_info.value"
                            :picker-options="pickerOptions"
                            format="HH:mm"
                            value-format="HH:mm"
                            range-separator="至"
                            start-placeholder="开始时间"
                            end-placeholder="结束时间"
                            placeholder="选择时间范围"
                            size="mini"
                            >
                        </el-time-picker>
                    </el-form-item>
                </el-form>
            <!--结束-->
            </div>
        </el-scrollbar>
        <dialogBtnInfo v-bind:dialogInfobtn="dialogInfo" v-on:dialogSure="dialogSure('formInfo')"></dialogBtnInfo>
    </el-dialog>
</template>
<style>
    .el-checkbox+.el-checkbox{
        margin-left: 18px;
    }
    .el-checkbox__label{
        padding-left:5px;
    }
</style>
<script>
import dialogBtnInfo from './dialogBtnInfo.vue'
export default {
    created () {
       
    },
    mounted() {
        
    },
    data() {
        var validatePass = (rule, value, callback) => {
            console.log(value)
            if (this.form_info.time==='2') {
                if(value===''||value===null){
                    callback("请选择时间范围");
                }else{
                    callback();
                }
            } else {
                callback();
            }
        };
        return {
            form_info:{
               week:[],
               time:'1',
               value:'',
            },
            formRules:{
                week:[
                    { required: true, message: '请选择周范围', trigger: 'change' },
                ],
                value:[
                    { required: true,validator: validatePass, trigger: 'change' }
                ],
               
            },
            //时间范围
            pickerOptions: {
                shortcuts: [{
                    text: '全天',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24);
                    picker.$emit('pick', [start, end]);
                    }
                }]
            },
            value:"",
            //显示自定义时间
            show_time:false,
            system_time:"",
            begintime:"",
            endtime:""
           
        }
    },
    methods:{
        //保存的操作
        dialogSure:function(formName){
            this.$refs[formName].validate((valid) => {
                if(valid){
                    
                    this.dialogInfo.visible=false;
                }
            })
        },
       
    },
    
    props:["dialogInfo"],
    components:{dialogBtnInfo}

}
</script>

