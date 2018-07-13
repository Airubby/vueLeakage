<template>
    <div slot="footer" class="dialog-footer">
        <el-button @click="dialogCancel">取 消</el-button>
        <el-button type="primary" @click="dialogSure">保 存</el-button>
    </div>
</template>

<script>

export default {
    created () {
        
    },
    mounted() {
        
    },
    data() {
        return {
            
        }
    },
    methods:{
      
        //保存的操作
        dialogSure:function(){
            this.$emit('dialogSure');
        },
        //取消操作
        dialogCancel:function(){
            this.dialogInfobtn.visible=false;   
        },

    },
    props:["dialogInfobtn"]  
}
</script>

