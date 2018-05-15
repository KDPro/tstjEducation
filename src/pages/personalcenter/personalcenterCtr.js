export default{
  data(){
    return {
      profilehead: '',
      user: {
        nickname: '',
        username: '',
      },
      password: '',
      rePassword: '',
      imgData: {
        accept: 'image/gif, image/jpeg, image/png, image/jpg',
      },
      tempPath:""
    }
  },
  methods: {
    //选择图片
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      if (this.imgData.accept.indexOf(files[0].type) == -1) {
        this.$message.error({
          message: '请选择我们支持的图片',
          center: true
        });
        return false;
      }
      if(files[0].size > 200*1024) {
        this.$message.error({
          message: '请上传200kb以内的图片',
        });
        return false;
      }

      //调用创建图片
      this.createImage(files[0]);
    },
    //创建图片
    createImage(file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e)=>{
        this.getImgSrc(file).then((res)=>{
          this.tempPath = res.data.path;
          this.profilehead = e.target.result;
        });

      };
    },
    // 换取imgSrc
    getImgSrc(file){
      var myform = new FormData();
      myform.append("imgFile",file);
      return new Promise((resolve,reject)=>{
        this.$p({
          url:this.$api.uploadFile,
          params:myform
        }).then((res)=>{
          resolve(res);
        },(errRes)=>{

        });
      });

    },
    /**
     * 修改个人信息
     */
    save(){
      var json = {};
      json.id = JSON.parse(this.$c.getStorage("userInfo")).id;
      if(this.tempPath!="") {
        json.profilehead = this.tempPath;
      }
      if(this.user.nickname!="") {
        json.nickname = this.user.nickname;
      }
      if(this.password!=""||this.rePassword!="") {
        if(this.password!=this.rePassword) {
          this.$message({
            message:"两次密码不一致",
            type: 'warning',
            duration: 1500
          });
          return ;
        }else {
          json.password = this.password;
        }
      }
      this.$p({
        url:this.$api.userUpdate,
        params:json
      }).then((res)=>{
        this.$message({
          message:"保存成功,请重新登录",
          type: 'success',
          duration: 1500
        });
        // if(this.password) {
          this.$c.removeStorage("userInfo");
          this.logoutAjax();
        setTimeout(()=>{
          this.$router.push({
            path:"/"
          });
          this.$store.commit("setloginIsYes",false);
        },1500);


        // }
      },(errRes)=>{

      })
    },
    /**
     * 退出登录
     */
    logoutAjax(){
      this.$g({
        url:this.$api.logout,
        params:{}
      }).then(res=>{
        this.$c.removeStorage("userInfo");
      });
    },
    /**
     * 获取用户信息
     */
    getUserInfo(){
      this.$g({
        url: this.$api.userInformation,
        params: {
          id: JSON.parse(this.$c.getStorage("userInfo")).id
        }
      }).then((res)=> {
        this.user = res.data[0];
        this.profilehead = this.$baseU + res.data[0].profilehead;
        if(this.profilehead==undefined) {
          this.profilehead = "../../../static/useImg/defaultHead.jpg";
        }
      }, (errRes)=> {

      });
    }
  },

  mounted(){
    this.getUserInfo();
  }
}
