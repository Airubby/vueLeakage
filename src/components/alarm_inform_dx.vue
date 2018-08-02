<template>
    <el-dialog :title="dialogInfo.title" :visible.sync="dialogInfo.visible" width="500px" :append-to-body='true'>
        <el-scrollbar style="height:350px;" class="loncom_scrollbar">
            <div class="loncom_dialog_con">
                <el-form :model="form_info" :rules="formRules" ref="formInfo" label-width="100px">
                    <el-form-item prop="port" label="端口" size="small">
                        <el-select v-model="form_info.port" size="small">
                            <el-option
                            v-for="item in port"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item prop="type" label="短信猫类型" size="small">
                        <el-select v-model="form_info.type" size="small">
                            <el-option
                                v-for="item in type"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
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
            port:[
                {value:'ttymxc1',label:'1'},{value:'ttymxc2',label:'2'},{value:'ttymxc3',label:'3'},{value:'ttymxc4',label:'4'},
                {value:'ttyHBB0',label:'5'},{value:'ttyHBB1',label:'6'},{value:'ttyHBB2',label:'7'},{value:'ttyHBB3',label:'8'}
            ],
            type:[
                {value:'GPRS',label:'GPRS'},{value:'CDMA',label:'CDMA'}
            ],
            form_info:{
                port:'',
                type:''
            },
            //验证规则
            formRules:{
                port:[
                    { required: true, message: '请选择端口', trigger: 'change' }
                ],
                type:[
                    { required: true, message: '请选择类型', trigger: 'change' }
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

