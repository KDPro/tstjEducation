/**
 * Created by kdkjPC on 2018/4/18.
 */

export default {
    name:"loginReg",
    data(){
      return {
        text:"发送手机",
        disabled:false,
        // 登录参数
        userName:"",
        passLg:"",
        // 注册参数
        passReg:"",
        rePassReg:"",
        phoneReg:"",
        //忘记密码参数
      }
    },
  props:{
    show:{
      type:Boolean,
      required:true,
      "default":true
    },
    login:{
      type:Boolean,
      required:true,
      "default":true
    },
    textTitle:{
      type:String,
      required:true,
      "default":"注册"
    },
    reg:{
      type:Boolean,
      required:true,
      "defalult":true
    }
  },
  methods:{
    /**
     * 登录
     */
    loginAjax(){
      this.$p({
        url:this.$api.login,
        params:{
          username:this.userName,
          password:this.passLg
        }
      }).then((res)=>{
        this.$message({
          message:"登录成功",
          type: 'success',
          duration: 1500
        });
        this.$emit("loginYes");
        this.$emit("close");
        this.$c.setStorage("userInfo",JSON.stringify(res.data));
      },(errRes)=>{

      })
    },
    /**
     * 注册
     */
    registerAjax(){
      if(!this.userName||!this.passReg||!this.rePassReg||!this.phoneReg) {
        this.$message({
          message:"请输入完整信息",
          type: 'warning',
          duration: 1500
        });
        return;
      }
      if(this.passReg!=this.rePassReg) {
        this.$message({
          message:"两次密码不一致",
          type: 'warning',
          duration: 1500
        });
        return;
      }
      let url,msg;
      if(this.reg) {
        url = this.$api.userAdd;
        msg = "注册成功";
      }else {
        url = this.$api.userUpdate;
        msg = "重置成功";
      }
        this.$p({
          url:url,
          params:{
            username:this.userName,
            password:this.passReg,
            phone:this.phoneReg
          }
        }).then((res)=>{
          this.$message({
            message:msg,
            type: 'success',
            duration: 1500
          });
          this.$emit("regSuc");
        },(errRes)=>{

        })
    },
    close(){
      this.$emit("close");
    },
    // 跳转注册
    toReg(item){
      this.passReg="";
      this.rePassReg="";
      this.phoneReg="";
      this.$emit("toReg",item);
    },
    // sendCode(){
    //   var time = 60;
    //   this.disabled = true;
    //   this.text = time+"s后发送";
    //   var s = setInterval(()=>{
    //     time--;
    //     this.text = time+"s后发送";
    //     if(time == 0) {
    //       clearInterval(s);
    //       this.disabled = false;
    //       this.text = "发送手机";
    //     }
    //   },1000);
    // }
  },
  mounted(){

  }
}
