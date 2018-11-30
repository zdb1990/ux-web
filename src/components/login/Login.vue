<template>
   <div class="login-page">
       <div class="login-main">
           <p>登录页</p>
           <br>
            <label>用户名:</label>
            <input type="text" v-model="user"><br>
            <label>密码: </label>
            <input type="password" v-model="pass"><br>
            <button @click="add">注册</button>
            <button @click="submit">登陆</button>
       </div>
   </div>
</template>

<script>
import methodsFunc from'./../../config/Baserequest';
import comUrl from './../../config/comUrl';
   export default {
       data(){
           return{
               user:'',
               pass:''
           }
       },
       methods:{
           submit(){
               methodsFunc.Post(comUrl.login,{user:this.user,pass:this.pass}).then((res)=>{
                   console.log(res)
               }).catch((err)=>{
                   console.log(err);
               })
           },
           add(){
              methodsFunc.Post(comUrl.add_user,{user:this.user,pass:this.pass}).then((res)=>{
                   console.log(res)
               }).catch((err)=>{
                   console.log(err);
               })
           }
       }
   }
</script>

<style lang="scss">
   .login-main{
       text-align: center;
   }
</style>