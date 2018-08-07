<template>
    <div class="loncom_login">
        <div class="loncom_login_con loncom_public_shadow">
            <div class="loncom_logo_img"></div>
            <div class="loncom_logo_text">基础设施管理系统</div>
            <div class="loncom_login_input">
                <el-form :model="user" :rules="rules" ref="userName">
                    <div class="loncom_user">
                        <el-form-item prop="userid">
                            <el-input v-model.trim="user.userid" placeholder="请输入用户名称"></el-input>
                        </el-form-item>
                    </div>
                    <div class="loncom_pass">
                        <el-form-item prop="psword">
                            <el-input v-model.trim="user.psword" type="password" placeholder="请输入登录密码" @keyup.native="keyLogin($event,'userName')"></el-input>
                        </el-form-item>
                    </div>
                    <el-button type="primary" @click="loginIn('userName')" @keydown="keyLogin($event,'userName')">登录</el-button>
                </el-form>
            </div>
        </div>
        
    </div>
</template>

<style>
    .loncom_login {
    width: 100%;
    height: 220px;
    background: #199ED8 url(../../static/images/login_bg.png) no-repeat right bottom;
    position: relative;
    top: 50%;
    margin-top: -110px;
    }

    .loncom_login_con {
    width: 350px;
    height: 420px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -175px;
    margin-top: -210px;
    background: #fff;
    padding: 20px 25px;
    border-top: 10px solid #199ED8;
    }

    .loncom_login_con .loncom_logo_img {
    width: 60px;
    height: 60px;
    margin: 0 auto;
    background: url(../../static/images/small_logo.png) no-repeat center center;
    background-size: contain;
    }

    .loncom_login_con .loncom_logo_text {
    text-align: center;
    font-style: normal;
    font-size: 24px;
    color: #199ED8;
    font-weight: bold;
    margin: 20px 0;
    }

    .loncom_login_input input {
    width: 100%;
    border: 1px solid #DBDBDB;
    border-radius: 3px;
    padding-left: 40px;
    color: #999;
    }

    .loncom_login_input p {
    margin-bottom: 20px;
    }
    input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset;  
    }
    .loncom_login_input .loncom_user,
    .loncom_login_input .loncom_pass{
    position: relative;
    }
    .loncom_login_input .loncom_user:after{
        content: "";
        position: absolute;
        width: 40px;
        height: 40px;
        top: 0;
        background: url(../../static/images/login_user.png) no-repeat 10px center !important;
    }
    .loncom_login_input .loncom_pass:after{
    content: "";
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    background: url(../../static/images/login_pass.png) no-repeat 10px center !important;
    }

    .loncom_login_input {
    margin-left:0 !important; 
    }

    .loncom_login_input button {
    width: 100%;
    height: 50px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    border-radius: 3px;
    background: #199ED8;
    color: #fff;
    }

</style>

<script>
export default {
  created () {
 },
 data(){
  
  	return {
          loginFlag:false,
        user:{
            userid:"",
            psword:""
        },
        rules: {
			userid:[
				{ required: true, message: '请输入用户名', trigger: 'blur' },
			],
			psword:[
				{ required: true, message: '请输入密码', trigger: 'blur' },
			]
		 }
  	}
  },
  methods:{
      keyLogin:function(ev,user){
		if(ev.keyCode == 13){
			this.loginIn(user);
		}
	  },
      loginIn:function(formName){
            var _this=this;
            this.$refs[formName].validate((valid) => {
            if (valid) {
                this.$message.success('登录成功！');
                //存登录信息
                var loginInfo={};
                if(sessionStorage.loginInfo){
                    loginInfo=JSON.parse(sessionStorage.loginInfo);
                }
                loginInfo.username=this.user.userid;
                loginInfo.psword=this.user.psword;
                sessionStorage.loginInfo = JSON.stringify(loginInfo);
                this.$router.push({path:'/'});
                // this.$api.post('/login/getSalt', {}, r => {
                //     if(r.success){
                //         var md5pwd= b64_md5(b64_md5(this.user.userid+ r.salt1 + b64_md5(this.user.psword)) + r.salt2);
                //         this.$api.post('/login/login', {user:this.user.userid,pagePwd:md5pwd}, re => {
                //             if(re.success){
                //                 this.$message.success('登录成功！');
                //                 //存登录信息
                //                 var loginInfo={};
                //                 if(sessionStorage.loginInfo){
                //                     loginInfo=JSON.parse(sessionStorage.loginInfo);
                //                 }
                //                 loginInfo.username=this.user.userid;
                //                 loginInfo.id=re.data.id;
                //                 sessionStorage.loginInfo = JSON.stringify(loginInfo);
                //                 //this.getComponent(re.data.id);
                //                 this.getComponent(r.data.roleid).then(function(data){
                //                     _this.loginFlag=data;
                //                 });
                //             }else{
                //                 this.$message.warning(re.msg);
                //             }
                //         });
                //     }
                // });
            } 
        });
          
      }
    },
    watch:{
        loginFlag: {
            handler: function(val) {
                if(this.$store.state.navList.length>0){
                    this.$router.push({path:this.$store.state.navList[0].url});
                }else{
                    this.$message.warning("你没有一个菜单权限！");
                }
            },
            deep: true
        },
    },
}
</script>