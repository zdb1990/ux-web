<template>
<div class="login-page">
    <v-row class="signin-main" :gutter="24">
         <v-col class="gutter-row" span="6" offset="9">
            <v-form class="user-from" direction="vertical" :model="userFrom" :rules="rules" ref="userFrom">
                <v-form-item label="账户"  prop="user">
                        <v-input placeholder="请输入账户名"  v-model="userFrom.user"></v-input>
                </v-form-item>
                <v-form-item label="密码"  prop="pass">
                        <v-input placeholder="请输入密码" v-model="userFrom.pass"></v-input>
                </v-form-item>
                 <v-form-item  class="btn-box" style="margin-top:24px">
                    <v-button type="primary" @click.prevent="signIn('userFrom','add')">注册</v-button>
                    <v-button type="primary" @click.prevent="signIn('userFrom','signin')">登录</v-button>
                    <v-button type="primary" @click.prevent="resetForm('userFrom')">重置</v-button>
                </v-form-item>
            </v-form>
         </v-col>
    </v-row>
   </div>
</template>

<script>
import methodsFunc from'./../../config/Baserequest';
import comUrl from './../../config/comUrl';
   export default {
       data(){
           return{
               //表单数据
               userFrom:{
                 user:'',
                 pass:''
               },
               //校验的规则
               rules:{
                user:[
                    {required:true,message:'请输入用户名'}
                ],
                pass:[
                    {required:true,message:'请输入密码'}
                ]
               }
           }
       },
       methods:{
           //登陆
           signIn(name,type){
                //提交验证
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        let params={user:this.userFrom.user,pass:this.userFrom.pass}
                        if(type==='signin'){
                            //登陆
                             methodsFunc.Post(comUrl.login,params).then((res)=>{
                                if(res.success){
                                    sessionStorage.setItem('user',res.session);
                                    this.$message['success']("登陆成功");
                                    this.$router.push({path:'content'});
                                  }
                                }).catch((err)=>{
                                    console.log(err);
                                    if(!err.success){
                                        this.$message['error']("用户名或密码错误");
                                    }
                             })
                        }else{
                            methodsFunc.Post(comUrl.add_user,params).then((res)=>{
                                 console.log(res)
                                if(res.success){
                                     this.$message['success']("注册成功");
                                }
                            }).catch((err)=>{
                                console.log(err);
                                if(!err.success){
                                    this.$message['error']("用户名已被注册");
                                }
                            })
                        }
                    } else {
                        return false;
                    }
                });
           },
           //重置
            resetForm(name) {
            this.$refs[name].resetFields();
           }
       }
   }
</script>

<style lang="scss">
   
      .login-page{
          width:100%;
          height: 100%;
      }
      .signin-main{
          width:100%;
          height: 100%;
      }
      .gutter-row{
          height: 100%;
      }
      .user-from{
          position: relative;
          top:50%;
          transform: translateY(-50%);
      }
      .btn-box  .ant-form-item-control{
          text-align: center;
      }
</style>