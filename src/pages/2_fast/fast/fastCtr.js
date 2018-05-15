/**
 * Created by kdkjPC on 2018/4/17.
 */
/**
 * Created by kdkjPC on 2018/4/14.
 */
export default {
  data(){
    return {
      currentPage:1,
      pageSize:10,
      total:null,
      // banner:{},
      list:[]
    }
  },
  methods:{
    /**
     * 分页 当前第几页
     */
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getList();
    },
    //点击到详情页面
    details(item){
      this.$router.push({
        name: 'fastdetails',
        query:{
          id:item.id
        }
      })
    },
    /**
     * 获取快讯数据
     */
    getList(){
      this.$p({
        url:this.$api.newsQuery,
        params:{
          pageSize:this.pageSize,
          current:this.currentPage,
          category:1
        }
      }).then(res=>{
        this.total = res.data.total;
        var arr = res.data.list;
        arr.forEach((e,index)=>{
          arr[index].pubDate = e.pubDate.split(" ")[0];
          arr[index].imgUrl = this.$baseU + e.imgUrl;
        });

        if(this.currentPage==1) {
          this.banner = arr[0];
        }
        this.list = JSON.parse(JSON.stringify(arr));

      },errRes=>{

      })
    }
  },
  mounted(){
    this.getList();
  }
}
