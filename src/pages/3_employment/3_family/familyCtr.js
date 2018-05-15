export default{
    data() {
        return {
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
      toFamilyDetail(item){
        this.$router.push({
          name:"familyDetail",
          query:{
            id:item.id
          }
        })
      },
      /**
       * 发布家教信息
       */
      toPublish(){
        if(this.$c.getStorage("userInfo")) {
          this.$router.push({
            name:"familyForm"
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
            type:1
          }
        }).then(res=>{
          this.total = res.data.total;
          var arr = res.data.list;
          arr.forEach((e,index)=>{
            arr[index].pubDate = e.pubDate.split(" ")[0];
            arr[index].head = this.$baseU + e.head;
          });
          this.list = JSON.parse(JSON.stringify(arr));
        },errRes=>{

        })
      },
    },
  mounted(){
    this.getList();
  }
}
