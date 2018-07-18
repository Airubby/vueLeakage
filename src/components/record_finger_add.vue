<template>
    <el-dialog :title="dialogInfo.title" :visible.sync="dialogInfo.visible" :width="dialogInfo.width" :append-to-body='true'>
        <div class="loncom_dialog_con" style="height:400px;overflow:auto;">
            <el-form :model="form_info" :rules="formRules" ref="formInfo" label-width="80px">
                <el-row :gutter="40">
                    <el-col :span="12">
                        <el-form-item prop="code" label="鱼种编号" size="small">
                            <el-input v-model="form_info.code"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item prop="name" label="鱼种名称" size="small">
                            <el-input v-model="form_info.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="种类" size="small">
                            <el-select v-model="form_info.type" placeholder="请选择种类">
                                 <el-option
                                v-for="item in type_data"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="图片" size="small">
                             <el-upload
                                class="upload-demo"
                                ref="upload"
                                name="imgurl"
                                :headers="config"
                                :data="form_info"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :file-list="fileList"
                                :auto-upload="false">
                                <el-button slot="trigger" size="small" type="primary">选取</el-button>
                            </el-upload>
                        </el-form-item>
                    </el-col>
                   <el-col :span="24">
                        <el-form-item label="说明" size="small">
                            <el-input type="textarea" v-model="form_info.remark"></el-input>
                        </el-form-item>
                   </el-col>
                </el-row>
            </el-form>
        </div>
        <dialogBtnInfo v-bind:dialogInfobtn="dialogInfo" v-on:dialogSure="dialogSure('formInfo')"></dialogBtnInfo>
    </el-dialog>
</template>
<style>
    .el-upload {
        float: right;
    }
    .el-upload-list{
        float: left;
        border: 1px solid #dcdfe6;
        width: calc(100% - 64px);
        height: 32px;
        border-radius: 4px;
    }
    .el-upload-list__item:first-child{
        margin-top:0px;
        line-height: 2.1;
    }
    textarea{height: 150px}
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
                code:'',
                name:'',
                type:'',
                remark:'',
           },
           formRules:{
                code:[
                    { required: true, message: '请输入编号', trigger: 'blur' },
                ],
                name:[
                    { required: true, message: '请输入名称', trigger: 'blur' },
                ],
           },
           type_data:[{id:'1',name:"物种一"}],
           fileList:[],
           config:{
                headers:{
                    'Content-Type': 'multipart/form-data'
                }
            },


        }
    },
    methods:{
        //保存的操作
        dialogSure:function(formName){
            console.log(12312)
            this.$refs[formName].validate((valid) => {
                if(valid){
                   console.log(22)
                   this.$refs.upload.submit();
                }
            })
        },

       
    },
    props:["dialogInfo"],
    components:{dialogBtnInfo}

}
</script>

