<template>
    <el-dialog :title="dialogInfo.title" :visible.sync="dialogInfo.visible" width="1000px" :append-to-body='true'>
        <el-scrollbar style="height:400px;" class="loncom_scrollbar">
            <div class="loncom_dialog_con">
                <el-form :model="form_info" :rules="formRules" ref="formInfo" label-width="80px">
                    <el-row :gutter="40">
                        <el-col :span="12">
                            <el-form-item prop="name" label="姓名" size="small">
                                <el-input v-model="form_info.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item prop="userid" label="账号" size="small">
                                <el-input v-model="form_info.userid"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item prop="psword" label="密码" size="small">
                                <el-input v-model="form_info.psword"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item prop="tpassword" label="确认密码" size="small">
                                <el-input v-model="form_info.tpassword"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item prop="state" label="是否启用" size="small">
                                <el-radio v-model="form_info.state" label="1">启用</el-radio>
                                <el-radio v-model="form_info.state" label="2">禁用</el-radio>
                            </el-form-item>
                        </el-col>
                        
                        <el-col :span="12">
                            <el-form-item prop="phone" label="手机" size="small">
                                <el-input v-model="form_info.phone"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item prop="phone1" label="办公电话" size="small">
                                <el-input v-model="form_info.phone1"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item prop="email" label="邮箱" size="small">
                                <el-input v-model="form_info.email"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item prop="sex" label="性别" size="small">
                                <el-radio v-model="form_info.sex" label="男">男</el-radio>
                                <el-radio v-model="form_info.sex" label="女">女</el-radio>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item prop="orname" label="部门" size="small">
                                <el-input v-model="form_info.orname" readonly @focus="getDepart"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item prop="rolename" label="角色" size="small">
                                <el-input v-model="form_info.rolename" readonly @focus="getRole"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item prop="details" label="备注" size="small">
                                <el-input v-model="form_info.details" type="textarea"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </div>
        </el-scrollbar>
        <dialogBtnInfo v-bind:dialogInfobtn="dialogInfo" v-on:dialogSure="dialogSure('formInfo')"></dialogBtnInfo>
        <DepartGet v-bind:dialogInfo="getInfo" v-if="getInfo.visible"></DepartGet>
        <RoleGet v-bind:dialogInfo="roleInfo" v-if="roleInfo.visible"></RoleGet>
    </el-dialog>
</template>
<style>
    
</style>
<script>
import dialogBtnInfo from './dialogBtnInfo.vue'
import DepartGet from '@/components/limits_depart_get.vue'
import RoleGet from '@/components/limits_role_get.vue'
export default {
    created () {
       
    },
    mounted() {
        
    },
    data() {
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback("请输入确认密码");
            } else {
                if(this.form_info.psword!=""&&this.form_info.psword!=value){
                    callback("两次密码不一致");
                }
                callback();
            }
        };
        return {
            form_info:{
                id:'',
                userid:'',
                psword:'',
                tpassword:'',
                state:'',
                name:'',
                phone:'',
                phone1:'',
                email:'',
                sex:'',
                orid:'',
                orname:'',
                rolename:'',
                roleid:'',
                details:'',
            },
            formRules:{
                userid:[
                    { required: true, message: '请输入账号', trigger: 'blur' },
                ],
                psword:[
                    { required: true, message: '请输入密码', trigger: 'blur' },
                ],
                tpassword:[
                    { required: true,validator: validatePass, trigger: 'blur' }
                ],
                state:[
                    { required: true, message: '请选择是否启用', trigger: 'change' },
                ],
                name:[
                    { required: true, message: '请输入姓名', trigger: 'blur' },
                ],
                orname:[
                    { required: true, message: '请选择部门', trigger: 'change' },
                ],
                rolename:[
                    { required: true, message: '请选择角色', trigger: 'change' },
                ]
            },
           //获取部门信息
            getInfo:{
                title:"获取部门信息",
                visible:false,
                id:'',
                data:{},
            },
            roleInfo:{
                title:"获取角色信息",
                visible:false,
                id:'',
                data:[],
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
        //获取部门
        getDepart:function(){
            this.getInfo.visible=true;
            this.getInfo.id=this.form_info.orid;
        },
        //获取角色
        getRole:function(){
            this.roleInfo.visible=true;
            this.roleInfo.id=this.form_info.roleid;
        },
       
    },
    watch:{
        'getInfo.data':{
            handler:function(val,oldval){
                this.form_info.orid=val.id;
                this.form_info.orname=val.label;
            },
            deep: true
        },
        'roleInfo.data':{
            handler:function(val,oldval){
                var idarr=[];
                var labelarr=[];
                for(var i=0;i<val.length;i++){
                    idarr.push(val[i].id);
                    labelarr.push(val[i].label);
                }
                this.form_info.roleid=idarr.toString();
                this.form_info.rolename=labelarr.toString();
            },
            deep: true
        }

    },
    props:["dialogInfo"],
    components:{dialogBtnInfo,DepartGet,RoleGet}

}
</script>

