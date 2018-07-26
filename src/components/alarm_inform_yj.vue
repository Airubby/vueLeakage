<template>
    <el-dialog :title="dialogInfo.title" :visible.sync="dialogInfo.visible" width="600px" :append-to-body='true'>
        <el-scrollbar style="height:350px;" class="loncom_scrollbar">
            <div class="loncom_dialog_con">
                <el-form :model="form_info" :rules="formRules" ref="formInfo" label-width="120px">
                    <el-form-item prop="user" label="账号">
                            <el-input v-model="form_info.user" size="small" placeholder="请输入账号"></el-input>
                        </el-form-item>
                    <el-form-item prop="password" label="密码">
                        <el-input v-model="form_info.password" size="small" placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <el-form-item prop="smtp_addr" label="SMTP服务地址">
                        <el-input v-model="form_info.smtp_addr" size="small" placeholder="请输入SMTP服务地址"></el-input>
                    </el-form-item>
                    <el-form-item prop="smtp_port" label="SMTP端口">
                        <el-input v-model="form_info.smtp_port" size="small" placeholder="请输入SMTP端口"></el-input>
                    </el-form-item>
                    <el-form-item prop="pop_addr" label="POP服务地址">
                        <el-input v-model="form_info.pop_addr" size="small" placeholder="请输入POP服务地址"></el-input>
                    </el-form-item>
                    <el-form-item prop="pop_port" label="POP端口">
                        <el-input v-model="form_info.pop_port" size="small" placeholder="请输入POP端口"></el-input>
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
                user:'',
                password:'',
                smtp_addr:'',
                smtp_port:'',
                pop_addr:'',
                pop_port:''
            },
            //验证规则
            formRules:{
                user:[
                    { required: true, message: '请输入账号', trigger: 'blur' }
                ],
                password:[
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ],
                smtp_addr:[
                    { required: true, message: '请输入SMTP服务地址', trigger: 'blur' }
                ],
                smtp_port:[
                    { required: true, message: '请输入SMTP端口', trigger: 'blur' }
                ],
                pop_addr:[
                    { required: true, message: '请输入POP服务器地址', trigger: 'blur' }
                ],
                pop_port:[
                    { required: true, message: '请输入POP端口', trigger: 'blur' }
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

