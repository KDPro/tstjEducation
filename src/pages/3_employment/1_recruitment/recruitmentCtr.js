export default{
  data() {
    return {
      showAlert: false,
      currentPage:1,
      pageSize:10,
      total:null,
      list: [],
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getList();
    },
    toJobDetail(item){
      this.$router.push({
        name: "jobDetail",
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
        url:this.$api.hireQuery,
        params:{
          pageSize:this.pageSize,
          current:this.currentPage,
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
