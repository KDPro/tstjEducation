export default{
    data() {
        return {
          showAlert: false,
          currentPage:1,
          pageSize:10,
          total:null,
          list: []
        }
    },
    methods: {
      handleCurrentChange(val) {
        this.currentPage = val;
        this.getList();
      },
      toJobDetail(item){
        this.$router.push({
          name: "getJob",
          query: {
            id: item.id
          }
        })
      },
      /**
       * 点击发布求职
       */
      publishJob(){
        if(this.$c.getStorage("userInfo")) {
          this.$router.push({
            name:"getJobForm"
          })
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
       * 获取列表
       */
      getList(){
        this.$p({
          url:this.$api.tutorQuery,
          params:{
            pageSize:this.pageSize,
            current:this.currentPage,
            type:2
          }
        }).then(res=>{
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
      }

    },
  mounted(){
    this.getList();
  }
}
