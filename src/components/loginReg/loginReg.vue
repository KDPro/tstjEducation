<template>
    <div class="container" v-if="show">
      <div class="login" v-if="login">
        <div class="close"><i class="iconfont icon-remove" @click="close"></i></div>
        <div class="loginName">登录</div>
        <div class="input">
          <i class="iconfont icon-gaiicon"></i>
          <input type="text" v-model="userName" placeholder="请输入用户名">
        </div>
        <div class="input">
          <i class="iconfont icon-mima"></i>
          <input type="password" v-model="passLg" placeholder="请输入密码">
        </div>
        <div class="input op">
          <span @click="toReg(1)">注册</span>
          <span @click="toReg(0)">忘记密码</span>
        </div>
        <div class="input btn" @click="loginAjax">登录</div>
        <div class="hr">第三方账号登录</div>
        <div class="threeAccount">
          <i class="iconfont icon-QQ"></i>
          <i class="iconfont icon-weixin"></i>
        </div>
      </div>
      <div class="register" v-if="!login">
        <div class="close"><i class="iconfont icon-remove" @click="close"></i></div>
        <div class="loginName">{{textTitle}}</div>
        <div class="input">
          <i class="iconfont icon-gaiicon"></i>
          <input type="text" v-model="userName" placeholder="请输入用户名">
        </div>
        <div class="input">
          <i class="iconfont icon-mima"></i>
          <input type="password" v-model="passReg" placeholder="请输入密码">
        </div>
        <div class="input">
          <i class="iconfont icon-mima"></i>
          <input type="password" v-model="rePassReg" placeholder="请再次确认密码">
        </div>
        <div class="input">
          <i class="iconfont icon-shouji"></i>
          <input type="number" v-model="phoneReg" placeholder="请输入联系手机号">
        </div>
        <!--<div class="input code clear">-->
          <!--<input type="number" placeholder="请输入验证码">-->
          <!--<button @click="sendCode" :disabled="disabled">{{text}}</button>-->
        <!--</div>-->
        <div class="input btn" @click="registerAjax">{{textTitle}}</div>
        <div class="input op">
          <span></span>
          <span @click="toReg">已有账号</span>
        </div>
      </div>
    </div>
</template>
<script>
    export default require('./loginRegCtr');
</script>
<style scoped>
  .container {
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    background-color: rgba(0,0,0,.5);
    z-index:99;
  }
  .login {
    width:361px;
    height:460px;
    background-color: white;
    border-radius: 10px;
    position:absolute;
    top:50%;
    left:50%;
    margin-top:-230px;
    margin-left:-180px;
    padding:10px;
    box-sizing: border-box;
  }
  .register {
    width:361px;
    height:460px;
    background-color: white;
    border-radius: 10px;
    position:absolute;
    top:50%;
    left:50%;
    margin-top:-230px;
    margin-left:-180px;
    padding:10px;
    box-sizing: border-box;
  }
  .close {
    text-align: right;
  }
  .close i {
    cursor: pointer;
  }
  .loginName {
    padding:30px 0;
    text-align: center;
    color:#707070;
    font-size:16px;
    font-weight: bold;
    letter-spacing: 2px;
  }
  .input {
    width:260px;
    margin:0 auto 20px;
    border:1px solid #e2e2e2;
    height:35px;
    border-radius: 35px;
    position:relative;
    color:#707070;
  }
  .input i {
    position:absolute;
    top:6px;
    left:15px;
    font-size:20px;
  }
  .input input {
    width:200px;
    margin-left:40px;
    /*background-color: red;*/
    border:none;
    height:35px;
    outline: none;
  }
  .op {
    width:240px;
    border:none;
    height:20px;
    margin-top:-15px;
    display: flex;
    justify-content: space-between;
    font-size:13px;
  }
  .op span {
    color:#8f827a;
    cursor: pointer;
  }
  .btn {
    background-color: #5a555b;
    color:white;
    letter-spacing: 2px;
    text-align: center;
    line-height:35px;
    font-size: 16px;
    cursor: pointer;
  }
  .code {
    border:none;
  }
  .code input {
    width:135px;
    height:35px;
    border-radius: 35px;
    border:1px solid #e2e2e2;
    margin-left:0;
    text-indent: 15px;
    margin-right:20px;
    float: left;
  }
  .code button{
    width:100px;
    height:35px;
    border-radius: 35px;
    border:1px solid #97857b;
    background-color: #97857b;
    color:white;
    outline: none;
    cursor: pointer;
  }
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  .hr {
    width:100%;
    text-align: center;
    color:#707070;
    margin-top:30px;
    position:relative;
  }
  .hr:after,.hr:before {
    content:"";
    display:block;
    position:absolute;
    width:110px;
    top:10px;
    border-bottom:1px solid #e2e2e2;
  }
  .hr:after {
    left:0;
  }
  .hr:before {
    right:0;
  }
  .threeAccount {
    width:150px;
    margin:30px auto;
    display: flex;
    justify-content: space-around;
  }
  .threeAccount i {
    font-size:40px;
    cursor: pointer;
  }
  .threeAccount i:nth-of-type(1) {
    color:#4eacec;
  }
  .threeAccount i:nth-of-type(2) {
    color:#1ab10b;
  }


  input:-webkit-autofill {
    -webkit-text-fill-color: #333 !important;
    background-color: white !important;
    transition: background-color 5000s ease-in-out 0s;
  }
</style>
