<template>
    <el-dialog :title="dialogInfo.title" :visible.sync="dialogInfo.visible" width="600px" :append-to-body='true'>
        <el-scrollbar style="height:350px;" class="loncom_scrollbar">
            <div class="loncom_dialog_con">
                <el-form :model="form_info" :rules="formRules" ref="formInfo" label-width="120px">
                    <el-form-item prop="alarmcom" label="告警通道">
                            <el-input v-model="form_info.alarmcom" size="small" placeholder="请输入账号"></el-input>
                        </el-form-item>
                    <el-form-item prop="com" label="查询通道">
                        <el-input v-model="form_info.com" size="small" placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <el-form-item prop="rate" label="拨号音频率">
                        <el-input v-model="form_info.rate" size="small" placeholder="请输入SMTP服务地址"></el-input>
                    </el-form-item>
                    <el-form-item prop="smtp_port" label="外线拨号前缀">
                        <el-input v-model="form_info.smtp_port" size="small" placeholder="请输入SMTP端口"></el-input>
                    </el-form-item>
                </el-form>
            <!--结束-->
            </div>
        </el-scrollbar>
        <dialogBtnInfo v-bind:dialogInfobtn="dialogInfo" v-on:dialogSure="dialogSure('formInfo')"></dialogBtnInfo>
    </el-dialog>
</template>
<style>

</style>
<script>
import dialogBtnInfo from './dialogBtnInfo.vue'
export default {
    created () {
       
    },
    mounted() {
        
    },
    data() {
        
        return {
            form_info:{
                alarmcom:'',
                com:'',
                rate:'',
                smtp_port:'',
            },
            //验证规则
            formRules:{
                alarmcom:[
                    { required: true, message: '请输入告警通道', trigger: 'blur' }
                ],
                com:[
                    { required: true, message: '请输入查询通道', trigger: 'blur' }
                ],
                rate:[
                    { required: true, message: '请输入拨号音频率', trigger: 'blur' }
                ],
                smtp_port:[
                    { required: true, message: '请输入外线拨号前缀', trigger: 'blur' }
                ],
           },
            
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

