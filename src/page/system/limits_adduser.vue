<template>
    <div class="loncom_content">
       <div class="loncom_public_top">
            <div class="loncom_fl">用户管理</div>
        </div>
        <div class="loncom_public_con">
            <div class="loncom_public_add">
                <div class="loncom_public_add_title">
                    <span>新建用户</span>
                    <div class="loncom_fr">
                        <el-button type="primary" size="mini" @click="save('formInfo')" v-if="addState">保存</el-button>
                        <el-button type="primary" size="mini" @click="edit" v-if="detailState">编辑</el-button>
                        <el-button type="primary" size="mini" @click="save('formInfo')" v-if="editState">保存</el-button>
                        <el-button type="primary" size="mini" @click="remove" v-if="!addState">删除</el-button>
                        <el-button type="primary" size="mini" @click="cancel">返回</el-button>
                    </div>
                </div>
                <div class="loncom_public_add_con loncom_scroll_con">
                    <div style="max-width:1000px;margin:0 auto;">
                        <el-form :model="form_info" :rules="formRules" ref="formInfo" label-width="80px">
                            <el-row :gutter="40">
                                <el-col :span="12">
                                    <el-form-item prop="code" label="账号" size="small">
                                        <el-input v-model="form_info.code"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item prop="password" label="密码" size="small">
                                        <el-input v-model="form_info.password"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item prop="tpassword" label="确认密码" size="small">
                                        <el-input v-model="form_info.tpassword"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item prop="work" label="是否启用" size="small">
                                        <el-radio v-model="form_info.work" label="1">启用</el-radio>
                                        <el-radio v-model="form_info.work" label="2">禁用</el-radio>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item prop="name" label="姓名" size="small">
                                        <el-input v-model="form_info.name"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item prop="phone" label="手机" size="small">
                                        <el-input v-model="form_info.phone"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item prop="tel" label="办公电话" size="small">
                                        <el-input v-model="form_info.tel"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item prop="email" label="邮箱" size="small">
                                        <el-input v-model="form_info.email"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item prop="sex" label="性别" size="small">
                                        <el-radio v-model="form_info.sex" label="1">男</el-radio>
                                        <el-radio v-model="form_info.sex" label="2">女</el-radio>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item prop="depart" label="部门" size="small">
                                        <el-input v-model="form_info.depart" readonly @focus="getDepart"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item prop="role" label="角色" size="small">
                                        <el-input v-model="form_info.role" readonly @focus="getRole"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item prop="remark" label="备注" size="small">
                                        <el-input v-model="form_info.remark" type="textarea"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-form>
                    </div>
                </div>
            </div>
        </div>
        <DepartGet v-bind:dialogInfo="getInfo" v-if="getInfo.visible"></DepartGet>
        <RoleGet v-bind:dialogInfo="roleInfo" v-if="roleInfo.visible"></RoleGet>
    </div>
</template>
<style>
    
</style>

<script>
import DepartGet from '@/components/limits_depart_get.vue'
import RoleGet from '@/components/limits_role_get.vue'
export default {
    created () {
        var obj = this.$route.query;
        if(JSON.stringify(obj) == "{}"){ //新增
            this.addState=true;
        }else{ //编辑，详情
            if(obj.edit){ //编辑
                this.editState=true;
            }else{
                this.detailState=true;
            }
        }
    },
    mounted() {
        scrollCon();
    },
    data() {
       return {
          　addState:false,
            editState:false,
            detailState:false,

            form_info:{
                code:'',
                password:'',
                tpassword:'',
                work:'',
                name:'',
                phone:'',
                tel:'',
                email:'',
                sex:'',
                depart:'',
                departid:'',
                role:'',
                roleid:'',
                remark:'',
            },
            formRules:{
                code:[
                    { required: true, message: '请输入账号', trigger: 'blur' },
                ],
                password:[
                    { required: true, message: '请输入密码', trigger: 'blur' },
                ],
                tpassword:[
                    { required: true, message: '请输入确认密码', trigger: 'blur' },
                ],
                work:[
                    { required: true, message: '请选择是否启用', trigger: 'blur' },
                ],
                name:[
                    { required: true, message: '请输入姓名', trigger: 'blur' },
                ],
                depart:[
                    { required: true, message: '请选择部门', trigger: 'change' },
                ],
                role:[
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
       save:function(formName){
           this.$refs[formName].validate((valid) => {
                if(valid){
                   console.log(22)
                }
            })
       },
       cancel:function(){
           var str=this.$route.path;
            var index=str.lastIndexOf("\/")
            var _path=str.substring(0, index);
            this.$router.push({path:_path});
       },
       edit:function(){

       },
       remove:function(){

       },
        //获取部门
        getDepart:function(){
            this.getInfo.visible=true;
            this.getInfo.id=this.form_info.departid;
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
                this.form_info.departid=val.id;
                this.form_info.depart=val.label;
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
                this.form_info.role=labelarr.toString();
            },
            deep: true
        }

    },
    components:{DepartGet,RoleGet}
}
</script>