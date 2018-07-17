<template>
    <div class="loncom_public_top">
        <div class="search loncom_fl">
            <el-input placeholder="请输入" v-model="searchInfo" size="mini">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
        <div class="sort loncom_fr">
            <ul>
                <li class="active">全部</li>
                <li class="warning"><em></em>危险池塘</li>
                <li class="lost"><em></em>废弃池塘</li>
                <li class="normal"><em></em>健康池塘</li>
            </ul>
        </div>
    </div>
</template>
<style>
    .search{
        width: 250px;
    }
    .sort ul{
        border: 1px solid #D5D4D1;
        border-radius: 4px;
        background: #fff;
        overflow:hidden;
    }
    .sort li{
        width:80px;
        height: 28px;
        float: left;
        text-align: center;
        line-height: 28px;
        font-size:12px;
        border-right: 1px solid #D5D4D1;
        cursor: pointer;
    }
    .sort li:nth-last-of-type(1){
        border: none;
    }
    .sort li.active{
        color: #fff;
        background:#13AE67;
    }
    .sort li em{
        width: 14px;
        height: 20px;
        display: inline-block;
        margin-right: 5px;
        vertical-align: middle;
    }
    .sort li.warning em{
        background: url(/static/images/sli_warning.svg) no-repeat;
    }
    .sort li.lost em{
        background: url(/static/images/sli_lost.svg) no-repeat;
    }
    .sort li.normal em{
        background: url(/static/images/sli_normal.svg) no-repeat;
    }
</style>

<script>
export default {
    created () {
        
    },
    mounted() {
        
    },
    data() {
       return {
          　searchInfo:""
       }
   },
    methods:{
       
    },
    props:["controlTop"],
    components:{}
}
</script>