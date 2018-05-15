/**
 * Created by kdkjPC on 2018/4/17.
 */
export default {
  data(){
    return {
      thisIndex:0,
      currentPage:1,
      pageSize:10,
      total:null,
      // banner:{},
      list:[],
      tabBarList:[
        {"title":"探吃"},
        {"title":"探玩"},
        {"title":"探逛"},
      ]
    }
  },
  methods:{
    toLink(item,index) {
      this.thisIndex = index;
      this.$router.push({
        query:{
          type:index
        }
      });
      this.currentPage = 1;
      this.getList(item.title);
    },
    /**
     * 分页 当前第几页
     */
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getList(this.tabBarList[this.thisIndex].title);
    },
    toCityDetail(item){
      this.$router.push({
        name:'cityDetail',
        query:{
          id:item.id
        }
      })
    },
    getList(str){
      this.$p({
        url:this.$api.newsQuery,
        params:{
          pageSize:this.pageSize,
          current:this.currentPage,
          category:8,
          type:str
        }
      }).then(res=>{
        this.total = res.data.total;
        var arr = res.data.list;
        arr.forEach((e,index)=>{
          arr[index].pubDate = e.pubDate.split(" ")[0];
          arr[index].imgUrl = this.$baseU + e.imgUrl;
        });

        // if(this.currentPage==1) {
        //   this.banner = arr[0];
        // }
        this.list = JSON.parse(JSON.stringify(arr));
      },errRes=>{

      })
    }
  },
  mounted(){
    if(this.$route.query.type) {
      this.thisIndex = this.$route.query.type;
    }else {
      this.thisIndex = 0;
    }

    this.getList(this.tabBarList[this.thisIndex].title);
  }
}
