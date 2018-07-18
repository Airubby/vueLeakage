<template>
    <div class="loncom_content">
        <div class="loncom_public_top">
            <div class="loncom_fl">档案管理</div>
        </div>
        <div class="loncom_public_con">
            <div class="loncom_public_add">
                <div class="loncom_public_add_title">
                    <span>鱼苗种类配置</span>
                    <div class="loncom_fr">
                        <el-button type="primary" size="mini" @click="save('formInfo')">保存</el-button>
                    </div>
                </div>
                <div class="loncom_public_add_con loncom_scroll_con">
                    <div style="max-width:450px;">
                        <el-form :model="itemList" :rules="formRules" ref="formInfo" label-width="80px">
                            <el-row v-for="(item,index) in itemList">
                                <el-col :span="18">
                                    <el-form-item prop="name" :label="'种类'+(index+1)" size="small">
                                        <el-input v-model="itemList[index].name"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6" style="padding-left:10px;">
                                    <el-button-group>
                                    <el-button type="primary" @click="addItem(index)" size="small">+</el-button>
                                    <el-button type="primary" @click="minusItem(index)" size="small">-</el-button>
                                    </el-button-group>
                                </el-col>
                            </el-row>
                        </el-form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    created () {
        
    },
    mounted() {
        scrollCon();
    },
    data() {
       return {
            formRules:{
                name:[
                    { required: true, message: '请输入种类名称', trigger: 'blur' },
                ]
            },
            itemList:[{name:''}],
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
       addItem:function(index){
            this.itemList.splice(index+1,0,{name:''});
        },
        minusItem:function(index){
            this.itemList.splice(index,1);
        },
        
    },
    components:{}
}
</script>