<template>
    <el-dialog :title="dialogInfo.title" :visible.sync="dialogInfo.visible" :width="dialogInfo.width" :append-to-body='true'>
        <div class="loncom_dialog_con" style="height:400px;overflow:auto;">
            <el-form :model="form_info" :rules="formRules" ref="formInfo" label-width="80px">
                <el-row :gutter="40">
                    <el-col :span="12">
                        <el-form-item prop="code" label="池塘编号" size="small">
                            <el-input v-model="form_info.code"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item prop="name" label="池塘名称" size="small">
                            <el-input v-model="form_info.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item prop="type" label="关联站点" size="small">
                            <el-input v-model="form_info.type" readonly placeholder="输选择关联站点" @focus="getScsi"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="水域面积" size="small">
                            <el-input v-model="form_info.mianji"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="养殖物种" size="small">
                            <div class="itembox" v-for="(item,index) in itemList">
                                <el-col :span="10" style="padding-right:0;">
                                    <el-form-item label="物种名称" size="small">
                                        <el-select v-model="item.name" placeholder="请选择物种">
                                            <el-option
                                                v-for="item in type_data"
                                                :key="item.id"
                                                :label="item.name"
                                                :value="item.id">
                                                </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="10" style="padding:0;">
                                    <el-form-item label="数量" size="small">
                                        <el-input v-model="item.num"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="4" style="padding-right:0;">
                                    <el-button-group>
                                    <el-button type="primary" @click="addItem(index)">+</el-button>
                                    <el-button type="primary" @click="minusItem(index)">-</el-button>
                                    </el-button-group>
                                </el-col>
                            </div>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="池塘图片" size="small">
                             <el-upload
                                class="upload-demo"
                                ref="upload"
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
        <GetInfo v-bind:dialogInfo="getInfo" v-if="getInfo.visible"></GetInfo>
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
    textarea{height: 100px}
</style>
<script>
import dialogBtnInfo from './dialogBtnInfo.vue'
import GetInfo from '@/components/sconfig_scsi_get.vue'
export default {
    created () {
       

    },
    mounted() {
        
    },
    data() {
        return {
            value8:'',
           form_info:{
                code:'',
                name:'',
                type:'',
                mianji:'',
                remark:'',
           },
           itemList:[{name:'',num:''}],
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
           //关联站点
            getInfo:{
                title:"管理站点信息",
                visible:false,
                id:'',
                type:'',
                data:{},
            },

        }
    },
    methods:{
        //获取站点信息
        getScsi:function(){
            this.getInfo.visible=true;
            this.getInfo.id=this.form_info.fworkshop;
        },
        //保存的操作
        dialogSure:function(formName){
            console.log(12312)
            this.$refs[formName].validate((valid) => {
                if(valid){
                   console.log(22)
                }
            })
        },
        addItem:function(index){
            console.log(index)
            this.itemList.splice(index+1,0,{name:'',num:''});
        },
        minusItem:function(index){
            this.itemList.splice(index,1);
            console.log(this.itemList)
        },
       
    },
    watch:{
        'getInfo.data':{
            handler:function(val,oldval){
                this.form_info.type=val.label;
            },
            deep: true
        }
    },
    props:["dialogInfo"],
    components:{dialogBtnInfo,GetInfo}

}
</script>

