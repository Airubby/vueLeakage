<template>
    <div class="loncom_content">
       <div class="loncom_public_top">
            <div class="loncom_fl">通知管理</div>
        </div>
        <el-scrollbar class="content">
            <div class="loncom_p15">
                <div class="loncom_mb20">
                    <div class="loncom_system_inform_top">
                        <div class="loncom_sysinfo_box_left"><h2>事件通知</h2></div>
                        <div class="loncom_sysinfo_box loncom_system_inform_top_right">
                            提示：您可以为每类事件设置接收人，对于设备故障等重要事件，建议您务必设置接收，防止事件遗漏造成损失。
                        </div>
                    </div>
                    <div class="loncom_system_inform_table">
                        <el-search-table-pagination  type="local"
                            url=""
                            list-field="list" 
                            total-field="total"
                            method='post' 
                            :show-pagination="false"
                            border :data="table_data" :columns="table_columns" ref="thisRef">                                     
                            <template slot-scope="scope" slot="preview-level">
                                <div v-if="scope.row.level==4">
                                    <span class="alarm_one_color"><i class="fa fa-exclamation-triangle loncom_mr5"></i>紧急</span>
                                </div>
                                <div v-if="scope.row.level==3">
                                    <span class="alarm_two_color"><i class="fa fa-exclamation-circle loncom_mr5"></i>重要</span>
                                </div>
                                <div v-if="scope.row.level==2">
                                    <span class="alarm_three_color"><i class="fa fa-exclamation-circle loncom_mr5"></i>一般</span>
                                </div>
                                <div v-if="scope.row.level==1">
                                    <span class="alarm_four_color"><i class="fa fa-exclamation-circle loncom_mr5"></i>提示</span>
                                </div>
                            </template>
                            <template slot-scope="scope" slot="preview-dx">
                                <div v-if="scope.row.system_dx">
                                    <span class="loncom_color"><i class="el-icon-circle-check-outline loncom_mr5"></i>启用</span>
                                </div>
                                <div v-else>
                                    <span><i class="el-icon-remove-outline loncom_mr5"></i>不启用</span>
                                </div>
                            </template>
                            <template slot-scope="scope" slot="preview-sg">
                                <div v-if="scope.row.system_sg">
                                    <span class="loncom_color"><i class="el-icon-circle-check-outline loncom_mr5"></i>启用</span>
                                </div>
                                <div v-else>
                                    <span><i class="el-icon-remove-outline loncom_mr5"></i>不启用</span>
                                </div>
                            </template>
                            <template slot-scope="scope" slot="preview-dh">
                                <div v-if="scope.row.system_dh">
                                    <span class="loncom_color"><i class="el-icon-circle-check-outline loncom_mr5"></i>启用</span>
                                </div>
                                <div v-else>
                                    <span><i class="el-icon-remove-outline loncom_mr5"></i>不启用</span>
                                </div>
                            </template>
                            <template slot-scope="scope" slot="preview-yj">
                                <div v-if="scope.row.system_yj">
                                    <span class="loncom_color"><i class="el-icon-circle-check-outline loncom_mr5"></i>启用</span>
                                </div>
                                <div v-else>
                                    <span><i class="el-icon-remove-outline loncom_mr5"></i>不启用</span>
                                </div>
                            </template>
                            <template slot-scope="scope" slot="preview-time">
                                <p>
                                    {{scope.row.system_time}}
                                </p>
                                <a href="javascript:;" class="loncom_color" @click="informEditTime(scope.row)">修改</a>
                            </template>
                            <template slot-scope="scope" slot="preview-user">
                                <p>
                                    {{scope.row.system_user}}
                                </p>
                                <a href="javascript:;" class="loncom_color" @click="informEditUser(scope.row)">修改</a>
                            </template>
                        </el-search-table-pagination>
                    </div>
                </div>
                <!--通知装置-->
                <div class="loncom_system_inform_top">
                    <div class="loncom_sysinfo_box_left"><h2>通知装置</h2></div>
                    <div class="loncom_sysinfo_box loncom_system_inform_top_right">
                         提示：设置事件通知前请配置告警装置，告警装置工作异常将会影响告警通知正常发送。
                    </div>
                </div>
                <div class="loncom_system_inform_card">
                    <ul>
                        <li>
                            <div class="loncom_system_inform_cardbox loncom_public_shadow">
                                <div class="loncom_system_inform_cardboxtop">
                                    <div class="loncom_system_inform_cardboxcon">
                                        <div class="loncom_system_inform_cardboxtopimg loncom_system_inform_dxmimg"></div>
                                        <div class="loncom_system_inform_cardboxtoptext">
                                            <h2>短信猫</h2>
                                            <p>说明：通过短信猫将告警事件以短信形式通知到用户手机</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="loncom_system_inform_cardboxbottom">
                                    <div class="loncom_system_inform_cardbottomcon">
                                        <a href="javascript:;" class="loncom_system_inform_test"><em></em>测试</a>
                                        <a href="javascript:;" class="loncom_system_inform_set" @click="informDX()"><em></em>设置</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="loncom_system_inform_cardbox loncom_public_shadow">
                                <div class="loncom_system_inform_cardboxtop">
                                    <div class="loncom_system_inform_cardboxcon">
                                        <div class="loncom_system_inform_cardboxtopimg loncom_system_inform_sgimg"></div>
                                        <div class="loncom_system_inform_cardboxtoptext">
                                            <h2>声光报警器</h2>
                                            <p>说明：通过现场声光通知用户处理告警事件</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="loncom_system_inform_cardboxbottom">
                                    <div class="loncom_system_inform_cardbottomcon">
                                        <a href="javascript:;" class="loncom_system_inform_test"><em></em>测试</a>
                                        <a href="javascript:;" class="loncom_system_inform_set" @click="informSG()"><em></em>设置</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="loncom_system_inform_cardbox loncom_public_shadow">
                                <div class="loncom_system_inform_cardboxtop">
                                    <div class="loncom_system_inform_cardboxcon">
                                        <div class="loncom_system_inform_cardboxtopimg loncom_system_inform_yjimg"></div>
                                        <div class="loncom_system_inform_cardboxtoptext">
                                            <h2>邮件服务器</h2>
                                            <p>说明：通过邮件将告警事件或报表发送到用户指定邮箱</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="loncom_system_inform_cardboxbottom">
                                    <div class="loncom_system_inform_cardbottomcon">
                                        <a href="javascript:;" class="loncom_system_inform_test"><em></em>测试</a>
                                        <a href="javascript:;" class="loncom_system_inform_set" @click="informYJ()"><em></em>设置</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="loncom_system_inform_cardbox loncom_public_shadow">
                                <div class="loncom_system_inform_cardboxtop">
                                    <div class="loncom_system_inform_cardboxcon">
                                        <div class="loncom_system_inform_cardboxtopimg loncom_system_inform_dhimg"></div>
                                        <div class="loncom_system_inform_cardboxtoptext">
                                            <h2>电话盒</h2>
                                            <p>说明：通过自动拨打电话将告警事件以语音形式通知到用户手机或座机</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="loncom_system_inform_cardboxbottom">
                                    <div class="loncom_system_inform_cardbottomcon">
                                        <a href="javascript:;" class="loncom_system_inform_test"><em></em>测试</a>
                                        <a href="javascript:;" class="loncom_system_inform_set" @click="informDH()"><em></em>设置</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </el-scrollbar>
        <Time v-bind:dialogInfo="inform_editTime" v-if="inform_editTime.visible"></Time>
        <User v-bind:dialogInfo="inform_editUser" v-if="inform_editUser.visible"></User>
        <DX v-bind:dialogInfo="inform_dx" v-if="inform_dx.visible"></DX>
        <SG v-bind:dialogInfo="inform_sg" v-if="inform_sg.visible"></SG>
        <YJ v-bind:dialogInfo="inform_yj" v-if="inform_yj.visible"></YJ>
        <DH v-bind:dialogInfo="inform_dh" v-if="inform_dh.visible"></DH>
    </div>
</template>
<style>
    .loncom_sysinfo_box_left{
        color: #333;
        min-width: 90px;
        padding: 4px 0;
        float: left;
    }
    .loncom_sysinfo_box_left h2{
        border-left: 3px solid #0096ba;
        text-indent: 10px;
        height: 18px;
        line-height: 18px;
    }
    .loncom_sysinfo_box{
        height: 26px;
        line-height: 26px;
        text-indent: 15px;
        color: #8E7D5D;
        font-size: 12px;
        background: #F9F6E4;
    }
    .loncom_sysinfo_box_right{
        height: 26px;
        line-height: 26px;
    }
    .loncom_system_inform_top{
        width: 100%;
        height: 30px;
        font-size: 12px;
        font-family: "微软雅黑";
        margin-bottom: 15px;
    }
    .loncom_system_inform_top_right{
        width: -webkit-calc(100% - 90px);
        width: -moz-calc(100% - 90px);
        width: calc(100% - 90px);
        float: left;
    }
    .loncom_system_inform_tableimg{
        width: 14px;
        height: 14px;
        display: block;
        float: left;
        margin-top: 5px;
    }
    .loncom_system_inform_table .loncom_public_check{
        margin-top: 5px;
        float: left;
    }

    .loncom_dialog_system_informtop{
        width: 100%;
        margin-bottom: 20px;
    }
    .loncom_system_inform_card{
        width: 100%;
    }
    .loncom_system_inform_card ul{
        width: calc(100% + 20px);
    }
    .loncom_system_inform_card li{
        width: 50%;
        padding-right: 20px;
        float: left;
    }
    .loncom_system_inform_cardbox{
        width: 100%;
        min-height: 130px;
        border: 1px solid #e0e0e0;
        background: #fff;
        border-radius: 3px;
    }
    .loncom_system_inform_cardboxcon{
        max-width: 280px;
        margin: 0 auto;
    }
    .loncom_system_inform_cardbottomcon{
        max-width: 240px;
        margin: 0 auto;
        overflow: hidden;
    }
    .loncom_system_inform_cardboxtop{
        padding: 40px 15px;
        overflow: hidden;
        height: 170px;
    }
    .loncom_system_inform_cardboxtopimg{
        width: 60px;
        height: 60px;
        float: left;
        margin-right: 20px;
        background: #ccc;
    }
    .loncom_system_inform_dxmimg{
        background: url(../../../static/images/icon-duanxinmao.png) no-repeat center;
    }
    .loncom_system_inform_sgimg{
        background: url(../../../static/images/icon-shengguang.png) no-repeat center;
    }
    .loncom_system_inform_yjimg{
        background: url(../../../static/images/icon-email.png) no-repeat center;
    }
    .loncom_system_inform_dhimg{
        background: url(../../../static/images/icon-tel.png) no-repeat center;
    }
    .loncom_system_inform_cardboxtoptext{
        width: -webkit-calc(100% - 80px);
        width: -moz-calc(100% -80px);
        width: calc(100% - 80px);
        height: auto;
        float: left;
    }
    .loncom_system_inform_cardboxtoptext h2{
        height: 18px;
        line-height: 18px;
        margin-bottom: 5px;
        color: #333;
    }
    .loncom_system_inform_cardboxtoptext p{
        font-size: 12px;
        color: #999;
        line-height: 20px;
    }
    .loncom_system_inform_cardboxbottom{
        width: 100%;
        text-align: right;
        padding: 15px;
        color: #999;
        font-size: 12px;
        background: #eee;
    }
    .loncom_system_inform_cardbottomcon em{
        width: 16px;
        height: 16px;
        display: block;
        float: left;
        margin-right: 5px;
    }
    .loncom_system_inform_cardboxbottom a{
        color: #999;
    }
    .loncom_system_inform_test{
        float: left;
    }
    .loncom_system_inform_test em{
        background: url(../../../static/images/icon-test.png) no-repeat 0 0;
    }
    .loncom_system_inform_set{
        float: right;
    }
    .loncom_system_inform_set em{
        background: url(../../../static/images/icon-set.png) no-repeat 0 0;
    }
    .loncom_system_inform_cardboxbottom a:hover{
        color: #0096ba
    }
    .loncom_system_inform_cardboxbottom a:hover em{
        background-position: 0 -16px;
    }
    @media (min-width: 1200px) {
        .loncom_system_inform_card li{
            width: 25%;
        }
    }
</style>

<script>
import Time from '@/components/alarm_inform_time.vue'
import User from '@/components/limits_user_get.vue'
import DX from '@/components/alarm_inform_dx.vue'
import SG from '@/components/alarm_inform_sg.vue'
import YJ from '@/components/alarm_inform_yj.vue'
import DH from '@/components/alarm_inform_dh.vue'
export default {
    created () {
        
    },
    mounted() {
        
    },
    data() {
       return {
            table_columns:[
              { prop: 'level', label: '事件等级',minWidth:10,slotName:'preview-level'},
              { prop: 'system_dx', label: '短信',minWidth:10,slotName:'preview-dx'},
              { prop: 'system_sg', label: '声光',minWidth:10,slotName:'preview-sg'},
              { prop: 'system_dh', label: '电话',minWidth:10,slotName:'preview-dh'},
              { prop: 'system_yj', label: '邮件',minWidth:10,slotName:'preview-yj'},
              { prop: 'system_time', label: '接收时段',slotName:'preview-time',minWidth:15},
              { prop: 'system_user', label: '告警接收人',slotName:'preview-user',minWidth:15},
           ],
           table_data:[
               {level:4,system_dx:false,system_sg:false,system_dh:false,system_yj:true,system_time:'',system_user:""},
               {level:3,system_dx:true,system_sg:false,system_dh:false,system_yj:false,system_time:'',system_user:""},
               {level:2,system_dx:false,system_sg:true,system_dh:false,system_yj:false,system_time:'',system_user:""},
               {level:1,system_dx:false,system_sg:false,system_dh:true,system_yj:false,system_time:'',system_user:""},
           ],
           
             
             timedetaillist:[],
        
            //修改通知时段
            inform_editTime:{
                visible:false,
                title:"告警等级通知配置",
                row:{}
            },
            //修改通知用户
            inform_editUser:{
                visible:false,
                title:"修改通知接收人",
                row:{}
            },
            //短信猫设置
            inform_dx:{
                visible:false,
                title:"短信猫设置",
                row:{}
            },
            //声光设置
            inform_sg:{
                visible:false,
                title:"声光设置",
                row:{}
            },
            //邮件设置
            inform_yj:{
                visible:false,
                title:"邮件设置",
                row:{}
            },
            //电话设置
            inform_dh:{
                visible:false,
                title:"电话设置",
                row:{}
            },
       }
   },
    methods:{
       informEditTime:function(){
           this.inform_editTime.visible=true;
       },
       informEditUser:function(){
           this.inform_editUser.visible=true;
       },
        //设置短信
        informDX:function(){
            this.inform_dx.visible=true;
        },
        //设置声光
        informSG:function(){
            this.inform_sg.visible=true;
        },
        //设置邮件
        informYJ:function(){
            this.inform_yj.visible=true;
        },
        //设置电话
        informDH:function(){
            this.inform_dh.visible=true;
        },

    },
    components:{Time,User,DX,SG,YJ,DH}
}
</script>