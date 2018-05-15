export default{
  data() {
    return {
      showAlert: false,
      currentPage:1,
      pageSize:10,
      total:null,
      list: [],
      fleaTitle:"",
      fleaType:"",
      fleaName:"",
      fleaPhone:"",
      fleaContent:"",
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getList();
    },
    toFleaDetail(item){
      this.$router.push({
        name: "fleaDetail",
        query:{
          id:item.id
        }
      })
    },
    /**
     * 获取列表
     */
    getList(){
      this.$p({
        url:this.$api.newsQuery,
        params:{
          pageSize:this.pageSize,
          current:this.currentPage,
          category:6
        }
      }).then(res=>{
        this.activeIndex = null;
        this.total = res.data.total;
        var arr = res.data.list;
        arr.forEach((e,index)=>{
          arr[index].pubDate = e.pubDate.split(" ")[0];
          if(arr[index].head) {
            arr[index].head = this.$baseU + e.head;
          }else {
            arr[index].head = "../../../static/useImg/defaultHead.jpg";
          }
        });
        this.list = JSON.parse(JSON.stringify(arr));
      },errRes=>{

      })
    },
    alertOpen(){
      if(this.$c.getStorage("userInfo")) {
        this.showAlert = !this.showAlert;
      }else {
        this.$message({
          message: "您还没有登录，或登录已过期，请重新登录后操作",
          type: 'warning',
          duration: 1500
        });
        return;
      }
    },
    /**
     * 发布跳蚤
     */
    sendFlea(){
      if(this.fleaTitle==""||this.fleaType==""||this.fleaName==""||this.fleaPhone==""||this.fleaContent=="") {
        this.$message({
          message: "请填写完整信息",
          type: 'warning',
          duration: 1500
        });
        return;
      }
      var reg=/^[0-9]*$/;
      if(!reg.test(this.form["fleaPhone"])){
        this.$message({
          message: "请输入正确的电话",
          type: 'warning',
          duration: 1500
        });
        return;
      }
      this.$p({
        url:this.$api.newAdd,
        params:{
          category:6,
          conName:this.fleaName,
          conPhone:this.fleaPhone,
          titile:this.fleaTitle,
          newsText:this.fleaContent,
          type:this.fleaType
        }
      }).then(res=>{
        this.$message({
          message: "发布成功",
          type: 'success',
          duration: 1500
        });
        this.showAlert = !this.showAlert;
        this.getList();
      },errRes=>{

      })
    }
  },
  mounted(){
    this.getList();
  }
}
