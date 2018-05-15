export default{
  data() {
    return {
      currentPage: 1,
      pageSize: 9,
      total: null,
      list: []
    }
  },
  methods: {
    /**
     * 分页 当前第几页
     */
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getList();
    },
    /**
     * 获取网红个人展示列表
     */
    getList(){
      this.$p({
        url: this.$api.memeQuery,
        params: {
          pageSize: this.pageSize,
          current: this.currentPage,
        }
      }).then(res=> {
        this.total = res.data.total;
        var arr = res.data.list;
        arr.forEach((e, index)=> {
          arr[index].pubDate = e.pubDate.split(" ")[0];
          arr[index].imgUrl = this.$baseU + e.imgUrl;
        });
        this.list = JSON.parse(JSON.stringify(arr));

      }, errRes=> {

      })
    },
    //点击到详情页面
    details(item){
      this.$router.push({
        name: 'netRedDetails',
        query:{
          id:item.id
        }
      })
    },
  },
  mounted(){
    this.getList();
  }
}
