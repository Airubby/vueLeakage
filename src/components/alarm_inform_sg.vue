<template>
    <el-dialog :title="dialogInfo.title" :visible.sync="dialogInfo.visible" width="500px" :append-to-body='true'>
        <el-scrollbar style="height:350px;" class="loncom_scrollbar">
            <div class="loncom_dialog_con">
                <el-form :model="form_info" :rules="formRules" ref="formInfo" label-width="100px">
                    <el-form-item prop="port" label="端口">
                        <el-select v-model="form_info.port" size="small">
                            <el-option
                            v-for="item in port"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item prop="type" label="短信猫类型">
                        <el-select v-model="form_info.type" size="small">
                            <el-option
                                v-for="item in type"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                    </el-form-item>
                    <el-form-item prop="com" label="声光延时" size="small">
                        <el-radio-group v-model="com" size="small" disabled>
                            <el-radio label="1" style="height:35px;line-height:35px;">
                                持续报警<el-input size="mini" style="width:50px;"></el-input>秒后，自动关闭
                            </el-radio>
                            <el-radio label="2" style="height:35px;line-height:35px;margin-left:0;">
                                一直报警，直到报警恢复或被确认
                            </el-radio>
                        </el-radio-group>
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
            com:'2',
            port:[
                {value:'DIDO',label:'DIDO卡'}
            ],
            type:[
                {value:'ETH12',label:'12'},{value:'"ETH16"',label:'16'}
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

