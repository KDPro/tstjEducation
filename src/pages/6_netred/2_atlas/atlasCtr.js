export default{
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
      total: null,
      banner: {},
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
     * 获取网红个人图集数据
     */
    getList(){
      this.$p({
        url: this.$api.memeQueryImgs,
        params: {
          pageSize: this.pageSize,
          current: this.currentPage
        }
      }).then(res=> {
        this.total = res.data.total;
        var arr = res.data.list;
        arr.forEach((e, index)=> {
          arr[index].imgUrl1 = this.$baseU + e.imgUrl1;

        });

        if (this.currentPage == 1) {
          this.banner = arr[0];
        }
        this.list = JSON.parse(JSON.stringify(arr));

      }, errRes=> {

      })
    },
    //查看详情页面
    details(item){
      this.$router.push({
        name: 'atlasdetails',
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
