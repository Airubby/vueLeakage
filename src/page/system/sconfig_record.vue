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
                        <el-button type="primary" size="mini" @click="addItem">新增种类</el-button>
                    </div>
                </div>
                <div class="loncom_public_add_con loncom_scroll_con">
                    <div style="max-width:500px;">
                        <el-form ref="formInfo" label-width="80px">
                            <el-row>
                                <div v-for="(item,index) in itemList">
                                    <el-col :span="18">
                                        <el-form-item prop="name" :label="'种类'+(index+1)" size="small">
                                            <el-input v-model="itemList[index].name" placeholder="种类名称"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6" style="padding-left:10px;">
                                        <el-button-group>
                                        <el-button type="primary" @click="saveItem(index)" size="small">保存</el-button>
                                        <el-button type="primary" @click="removeItem(index)" size="small">删除</el-button>
                                        </el-button-group>
                                    </el-col>
                                </div>
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
            itemList:[{name:'',id:''}]
       }
   },
    methods:{
       saveItem:function(index){
           if(this.itemList[index].name==""){
               this.$message.warning("请输入种类名称");
           }else{
               if(this.itemList[index].id==""){ //新增

               }else{ //修改

               }
           }
       },
       addItem:function(){
            this.itemList.splice(this.itemList.length,0,{name:'',id:''});
        },
        removeItem:function(index){
            if(this.itemList[index].id==""){
                this.itemList.splice(index,1);
            }else{ //删除已有的
                
            }
            
        },
        
    },
    components:{}
}
</script>