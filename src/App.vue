<template>
  <div id="app" v-cloak>
    <div class="headerBox">
      <header class="header">
      <div class="header_btn">
        <div class="login" @click="loginBox(1)" v-if="!this.$store.state.loginIsYes">登录</div>
        <div class="register" @click="loginBox(0)" v-if="!this.$store.state.loginIsYes">注册</div>
        <div class="personCenter" @click="toPerson" v-if="this.$store.state.loginIsYes">个人中心</div>
        <div class="personCenter" @click="logout" v-if="this.$store.state.loginIsYes">退出登录</div>
      </div>
      <div class="logo">
        <img src="@/assets/logo.png" alt="">
      </div>
    </header>
    </div>
    <nav class="nav">
      <ul class="nav_bar">
        <li class="nav_bar_title" :class="index==thisIndex?'nav_bar_titleA':''" v-for="(item,index) in navList" :key="index" @click="toLink(index)">
          <a href="javascript:void(0)">{{item.title}}</a>
          <!--<div v-else>-->
            <!--<div><a href="javascript:void(0)">{{item.title}}</a></div>-->
            <!--<ul class="secondNav">-->
              <!--<li class="secondNav_bar" v-for="(item,index) in item.secondNav" :key="index">-->
                <!--<a href="javascript:void(0)">{{item.title}}</a>-->
              <!--</li>-->
            <!--</ul>-->
          <!--</div>-->
        </li>
      </ul>
    </nav>
    <div class="toTop">
      <ul>
        <li v-for="(item,index) in codeImg" @click="toTipTop(index)">
          <span v-if="item.text">{{item.text}}</span>
          <i class="iconfont" :class="item.icon" v-if="item.icon"></i>
          <div class="code" v-if="item.src"><img :src="item.src" alt=""></div>
        </li>
      </ul>
    </div>
    <router-view @changeIndex="changeIndex"/>
    <footer class="footer">冀ICP备17008089号</footer>
    <loginReg
      :show="show"
      :login="login"
      :textTitle="textTitle"
      :reg="reg"
      @toReg="toReg"
      @loginYes="loginYes"
      @regSuc="regSuc"
      @close="loginBox(-1)"></loginReg>
  </div>
</template>

<script>
  import loginReg from '@/components/loginReg/loginReg'
  export default {
    name: 'App',
    components:{
      loginReg
    },
    data(){
      return {
        show:false,
        login:true,
        textTitle:"注册",
        reg:true,
        thisIndex:0,
        navList: [
          {
            title: '首页',
          },{
            title: '快讯'
          },{
            title: '就业'
          },{
            title: '视频'
          },{
            title: '音乐'
          },{
            title: '网红'
          },{
            title: '许愿',
            secondNav: [
              {
                title: '许愿树'
              },{
                title: '神秘树洞'
              },{
                title: '解忧杂货铺'
              }
            ]
          },{
            title: '跳蚤'
          },{
            title: '探城'
          },{
            title: '活动',
            href:''
          }
        ],
        codeImg:[
          {
            icon:'icon-weixin1',
            src:'../static/useImg/weixinCode.jpg'
          },
          {
            icon:'icon-qq',
            src:'../static/useImg/defaultHead.jpg'
          },
          {
            text:"APP",
            src:'../static/useImg/defaultHead.jpg'
          },
          {
            icon:'icon-zuojiantou2-copy',
          }

        ]
      }
    },
    methods:{
      toTipTop(index){
        if(index != 3) {
          return ;
        }
        var scrollTop = setInterval(()=>{
          var m = window.scrollY;
          m-=20;
          document.body.scrollTop = m;
          document.documentElement.scrollTop = m;
          if(m<=0) {
            clearInterval(scrollTop);
          }
        },20);

      },
      toLink(index){
        this.thisIndex = index;
        switch (index) {
          case 0:
            this.$router.push({
              path: "/"
            });
            break;
          case 1:
            this.$router.push({
              path: "/fast"
            });
            break;
          case 2:
            this.$router.push({
              path: "/employment"
            });
            break;
          case 3:
            this.$router.push({
              path: "/video"
            });
            break;
          case 4:
            this.$router.push({
              path: "/music"
            });
            break;
          break;
          case 5:
          this.$router.push({
            path: "/netred"
          });
            break;
          case 6:
          this.$router.push({
            path: "/wish"
          });
            break;
          case 7:
            this.$router.push({
              path: "/flea"
            });
            break;
          case 8:
            this.$router.push({
              path: "/citySearcher"
            });
            break;
          case 9:
            this.$router.push({
              path: "/active"
            });
            break;
        }
      },
      loginBox(item){
        this.show = !this.show;
        switch(item) {
          case -1:
            this.login = true;
            break;
          case 0:
            this.login = false;
            break;
          case 1:
            this.login = true;
            break;
        }
      },
      /**
       * 跳转注册 注册有两种  重置和注册
       */
      toReg(item){
        if(item == 0) {
          this.textTitle = "重置";
          this.reg = false;
        }else if (item == 1) {
          this.textTitle = "注册";
          this.reg = true;
        }else {
          this.textTitle = "注册";
          this.reg = true;
        }
        this.login = !this.login;
      },
      toPerson(){
        this.$router.push({
          name:"personalcenter"
        })
      },
      /**
       * 退出登录
       */
      logout(){
        this.$g({
          url:this.$api.logout,
          params:{}
        }).then(res=>{
          this.$store.commit("setloginIsYes",false);
          this.$c.removeStorage("userInfo");
          this.$message({
            message:"退出成功",
            type: 'success',
            duration: 1500
          });
        });
      },
      /**
       * 是否登录
       */
      loginYes(){
        this.$store.commit("setloginIsYes",true);
      },
      /**
       * 注册成功
       */
      regSuc(){
        this.login = true;
      },
      changeIndex(val){
        this.thisIndex = val;
      },

    },
    mounted(){
      if (this.$route.path.indexOf("/fast")>=0) {
        this.thisIndex = 1;
      }else if (this.$route.path.indexOf("/employment")>=0) {
        this.thisIndex = 2;
      }else if (this.$route.path.indexOf("/video")>=0) {
        this.thisIndex = 3;
      }else if (this.$route.path.indexOf("/music")>=0||this.$route.path.indexOf("/phonograph")>=0) {
        this.thisIndex = 4;
      }else if (this.$route.path.indexOf("/netred")>=0||this.$route.path.indexOf("/netRed")>=0||this.$route.path.indexOf("/imforDetails")>=0) {
        this.thisIndex = 5;
      }else if (this.$route.path.indexOf("/wish")>=0) {
        this.thisIndex = 6;
      }else if (this.$route.path.indexOf("/flea")>=0) {
        this.thisIndex = 7;
      }else if (this.$route.path.indexOf("/citySearcher")>=0) {
        this.thisIndex = 8;
      }else if (this.$route.path.indexOf("/active")>=0||this.$route.path.indexOf("/vote")>=0) {
        this.thisIndex = 9;
      }
      if(this.$c.getStorage("userInfo")) {
        this.$store.commit("setloginIsYes",true);
      }
    }
  }
</script>
<!--清除样式-->
<style>
  [v-cloak] {
    display: none!important;
  }
  html {
    height:100%;
    overflow: auto;
  }
  html,body{
    width:100%;
    position:relative;
    padding:0;
    margin:0;
    min-width:1200px;
    background-color: #f2f2f2;
  }
  body {
    min-height:calc(100% + 60px);
    padding-bottom:1px;
  }
  * {
    padding:0;
    margin:0;
  }
  #app {
    width:100%;
    font-size:14px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
  ul {
    padding:0;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  img {
    border:none;
  }
  .clear:after {
    content:"";
    display: block;
    clear: both;
  }
  .el-icon-loading {
    font-size:50px;
  }
  .el-loading-spinner .el-loading-text {
    font-size:20px;
  }
  .el-table .cell {
    white-space: nowrap;
  }
  .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li {
    width:35px;
    height:35px;
    background-color: white;
    border:3px solid #e2e2e2;
    line-height: 30px;
    font-size:12px;
    color:#999;
  }
  .el-pagination.is-background .btn-next:hover, .el-pagination.is-background .btn-prev:hover, .el-pagination.is-background .el-pager li:hover {
    background-color: #97857b;
    border-color:#97857b;
    color:white;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #97857b !important;
    border-color:#97857b;
    color:white;
  }
  .el-pagination.is-background .el-pager li:not(.disabled):hover {
    color:white;
  }
  .el-slider__button {
    width:8px;
    height:20px;
    border-radius: 8px;
    background-color: #d58351;
    border:none;
  }
  .el-slider__bar {
    background-color: #d58351;
  }
  .el-slider__runway {
    background-color: rgba(255,255,255,.4);
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type="number"]{
    -moz-appearance: textfield;
  }
  .width12 {
    width:1200px;
    margin:0 auto;
    overflow: auto;
  }




/*公用头部样式*/
.headerBox {
  width:100%;
  background-color: #fff;
}
  .header{
    width: 1200px;
    height: 130px;
    margin: 0 auto;
  }
  .header_btn{
    display: flex;
    display: -webkit-flex;
    width: 180px;
    height: 25px;
    line-height: 25px;
    float: right;
    margin-top: 15px;
  }
  .header_btn div{
    text-align: center;
    width: 55px;
    border: 1px solid #9a9a9a;
    border-radius: 15px;
    cursor: pointer;
  }
  .header_btn div.login{
    /* width: 65px; */
    cursor: pointer;
    margin-right:20px;
  }
  .nav{
    width: 100%;
    min-width: 1200px;
    height: 60px;
    background-color: #4d484f;
  }
  .logo{
    text-align: center;
    margin:  0px auto 35px;
    padding-top: 60px;
  }
  .logo img{
    height:60px;
  }
  .nav>ul.nav_bar{
    width: 900px;
    margin: 0 auto;
    display: flex;
    display: -webkit-flex;
  }
  .nav>ul.nav_bar li{
    position: relative;
    flex: 1;
    line-height: 60px;
    text-align: center;
  }
  .nav>ul.nav_bar li a{
    color: #fff;
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  .nav>ul.nav_bar li.nav_bar_title:hover{
    background-color: #5b565d;
  }
  .nav>ul.nav_bar li.nav_bar_titleA {
    background-color: #5b565d;
  }
  .nav>ul.nav_bar li:nth-child(7):hover ul.secondNav{
    display: block;
  }
  ul.secondNav{
    display: none;
    position: absolute;
    z-index: 99;
    left: -5px;
    background-color: #fff;
    width: 100px;
  }
  ul.secondNav li.secondNav_bar{
    line-height: 40px;
    height: 40px;
    border-bottom: 1px solid #ddd;
  }
  ul.secondNav li.secondNav_bar:last-child{
    border-bottom: none;
  }
  ul.secondNav li.secondNav_bar a{
    color: #000;
  }
  ul.secondNav li.secondNav_bar:hover{
    background-color: #97857b;
  }
  ul.secondNav li.secondNav_barA {
    background-color:#97857b ;
  }
  .header_btn .personCenter {
    width:80px;
    margin-right:20px;
}


  .footer{
    position:absolute;
    bottom:0;
    width: 100%;
    min-width: 1200px;
    height: 60px;
    background-color: #4d484f;
    text-align: center;
    line-height: 60px;
    color:white;
  }


  .toTop {
    position:fixed;
    right:20px;
    bottom:200px;
    width:60px;
    z-index:999;
  }
  .toTop li ,.toTop a{
    display:block;
    width:60px;
    height:60px;
    background-color:rgb(150,133,123);
    cursor: pointer;
    font-size:16px;
    line-height: 60px;
    text-align: center;
    color:white;
    position:relative;
  }
  .toTop li i,.toTop a i {
    font-size:30px;
  }
  .toTop li:nth-of-type(3) i {
    font-size:16px;
  }
  .toTop li:hover,.toTop a:hover {
    background-color: rgb(77,72,79);
  }
  .toTop li:hover .code {
    display: block;
  }
  .code {
    position:absolute;
    top:0;
    right:70px;
    width:200px;
    height:200px;
    background-color: rgba(0, 0, 0,.1);
    z-index:999;
    text-align: center;
    display: none;
  }
  .code img {
    width:150px;
    height:150px;
    margin-top:25px;
  }

</style>
