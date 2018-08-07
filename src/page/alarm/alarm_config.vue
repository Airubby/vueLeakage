<template>
    <div class="loncom_content">
       <div class="loncom_public_top">
            <div class="loncom_fl">阀值配置</div>
        </div>
        <div class="loncom_public_con">
            <div class="loncom_tree">
                <div class="loncom_tree_title">
                    设备
                </div>
                <div class="loncom_tree_con numScroll0">
                    <div class="numScrollCon0">
                        <el-tree
                        ref="tree"
                        :props="defaultProps"
                        :data="tree_data"
                        node-key="id"
                        default-expand-all
                        @node-click="nodeClick"
                        :filter-node-method="filterNode"
                        >
                        </el-tree>
                    </div>
                </div>
            </div>
            <div class="loncom_table">
                <div class="loncom_tab">
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="测点信息" name="first">
                            <div class="loncom_tabbox numScroll1">
                                <div class="loncom_tabbox_con numScrollCon1">
                                    <el-search-table-pagination  type="local"
                                        url=""
                                        list-field="list" 
                                        total-field="total"
                                        method='post' 
                                        :formOptions="table_forms"
                                        border :data="table_data" :columns="table_columns" ref="thisRef">   
                                        <el-table-column slot="prepend" type="selection"></el-table-column>       
                                        <template slot-scope="scope" slot="preview-handle">
                                            <div>
                                                <a href="javascript:;" class="loncom_color" @click="set(scope.row)">设置阀值</a> 
                                            </div>
                                        </template>
                                    </el-search-table-pagination>
                                </div>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </div>
        </div>
    </div>
</template>
<style>

</style>

<script>

export default {
    created () {
        
    },
    mounted() {
        numScroll(0);
        numScroll(1);
    },
    data() {
       return {
            tree_data: [{
                label: '海南养殖基地',
                id:'1',
                children:[
                    {
                        label: '动力楼',
                        id:'2',
                        children:[
                            {
                                label:'动力一号',
                                id:'3',
                            }
                        ]
                    },{
                        label: '数据楼',
                        id:'4'
                    }
                ]
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            activeName: 'first',
            table_data:[
                {id:'1',level:'1',name:'温度过低',remark:'#鱼塘水温，温度=16.2',alarmTime:'2018-02-01 11:20:29',relieveTime:'2108-02-01 11:20:29'},
                {id:'2',level:'2',name:'34',remark:''},
            ],
            table_forms: {
                inline: true,
                size:'small',
                initParams:{queryKey:""},
                forms: []
            },
            table_columns:[
                { prop: 'level', label: '设备名称',minWidth:10,slotName:'preview-level'},
                { prop: 'name', label: '测点名称',minWidth:10},
                { prop: 'handle', label: '操作',slotName:'preview-handle',width:100},
            ],

            
       }
   },
    methods:{
       
      set:function(){
         
      },
  

    },
    watch: {
      
    },
    components:{}
}
</script>