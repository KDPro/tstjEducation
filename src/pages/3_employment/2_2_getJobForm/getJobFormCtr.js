/**
 * Created by kdkjPC on 2018/4/21.
 */
export default {
  data() {
    return {
      src:"",
      form: {
        type:2,
        tutorName: '',
        position: '',
        expSalary:'',
        gender: '',
        age: "",
        addr: "",
        graduateSchool: '',
        edu: '',
        experience: '',
        selfDesc:'',
        beginTime:'',
        endTime:'',
        jobPosition:'',
        jobSalary:'',
        jobDesc:'',
        unit:'',
      }
    }
  },
  methods: {
    onSubmit() {
      for(var key in this.form) {
        if(this.form[key]=="") {
          this.$message({
            message: "请将信息填写完整",
            type: 'warning',
            duration: 1500
          });
          return;
        }
      }
      var reg=/^[0-9]*$/;
      if(!reg.test(this.form["expSalary"])||!reg.test(this.form["age"])||!reg.test(this.form["experience"])||!reg.test(this.form["jobSalary"])){
        this.$message({
          message: "薪资,年龄，工作经验等请输入数字",
          type: 'warning',
          duration: 1500
        });
        return;
      }

      this.$p({
        url:this.$api.tutorAdd,
        params:this.form
      }).then(res=>{
        this.$message({
          message: "提交成功",
          type: 'success',
          duration: 1500
        });
        this.$router.go(-1);
      },errRes=>{

      });
    },
    /**
     * 上传图片
     */
    upPic(e){
      // var myFrom = new FormData();
      // myFrom.append("id", this.id);
      // myFrom.append("file", e.target.files[0]);
      this.previewPicture(e.target.files[0]);
      // this.$p({
      //   url: "carousel/uploadPic",
      //   params:myFrom
      // }).then(res=>{
      //   this.$message({
      //     message:"上传图片成功",
      //     type: 'success',
      //     duration: 2000
      //   });
      // });
    },
    /**
     * 图片预览
     * @param file
     * @returns {boolean}
     */
    previewPicture(file){
      // 检查是否为图像类型
      var simpleFile = file;
      if (!/image\/\w+/.test(simpleFile.type)) {
        this.$message({
          message:"请确保文件为图像类型",
          type: 'warning',
          duration: 2000
        });
        return false;
      }
      var reader = new FileReader();
      reader.readAsDataURL(simpleFile);
      reader.onload = (e)=>{
        this.src = e.target.result;
      }
    },
  }
}
