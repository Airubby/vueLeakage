<template>
    <el-dialog :title="dialogInfo.title" :visible.sync="dialogInfo.visible" width="1000px" :append-to-body='true'>
        <div class="loncom_dialog_con" style="height:500px;overflow:hidden;">
            <div class="show_box">
                <object type='application/x-vlc-plugin' id='vlcs2' events='True' width="100%" height="100%" pluginspage="http://www.videolan.org" codebase="http://downloads.videolan.org/pub/videolan/vlc-webplugins/2.0.6/npapi-vlc-2.0.6.tar.xz">
                    <param name='mrl' />
                    <param name="ShowDisplay" value="true" />
                    <param name='volume' value='50' />
                    <param name='autoplay' value='true' />
                    <param name='loop' value='false' />
                    <param name='fullscreen' value='true' />
                    <EMBED pluginspage="http://www.videolan.org"
                    type="application/x-vlc-plugin"
                    version="VideoLAN.VLCPlugin.2"
                    width="100%"
                    height="100%"
                    text="Waiting for video"
                    name="vlcs2"
                    ></EMBED>
                </object>
                <div style="clear:both;margin-top:20px;">
                    <div class="scale_panel">
                        <div class="scale" ref="scale">
                            <div ref="scale_con"></div>
                            <span ref="btn"></span>
                        </div>
                        <div class="revBtn" ref="revBtn">
                            <em v-if="play=='true'" class="pause"></em>
                            <em v-else class="play"></em>
                        </div>
                    </div>
                </div>
            </div>
            <div class="show_title">

            </div>
        </div>
    </el-dialog>
</template>
<style>
    .show_box{
        
    }
    .scale_panel {
        font-size: 12px;
        width: 100%;
        padding-right: 18px;
        position: relative;
    }
    .scale {
        background-repeat: repeat-x;
        background-position: 0 100%;
        background-color: #E4E4E4;
        width: 100%;
        height: 8px;
        position: relative;
        font-size: 0px;
    }
    .scale div {
        background-repeat: repeat-x;
        background-color: #16C5BB;
        width: 0px;
        position: absolute;
        height: 8px;
        left: 0;
        bottom: 0;
        border-radius: 3px 0 0 3px;
    }
    .scale span {
        background: #4299F4;
        width: 8px;
        height: 16px;
        position: absolute;
        left: 0px;
        top: -4px;
        cursor: pointer;
        border-radius: 2px;
    }
    .revBtn {
        position: absolute;
        right: 0;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background: #16C5BB;
        top: -4px;
        cursor: pointer;
    }
    .revBtn em.pause {
        content: '';
        width: 6px;
        border-left: 2px solid #fff;
        border-right: 2px solid #fff;
        height: 8px;
        position: absolute;
        left: 5px;
        top: 4px;
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
            play:'true',

        }
    },
    methods:{
        
    },
    
    props:["dialogInfo"],
    components:{}

}
</script>

