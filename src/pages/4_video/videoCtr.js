/**
 * Created by kdkjPC on 2018/4/17.
 */
export default {
  data(){
    return {
      thisIndex:0,
      currentPage:1,
      pageSize:9,
      total:null,
      tabBarList:[
        {"title":"精彩VIDEO"},
        {"title":"推荐影视"},
      ],
      amusement: {
        btn: '>',
        btnFlag: false,
        video: {},
        videoList: []
      },
      list:[],
      isTrans:true,
    }
  },
  methods:{
    //打开娱乐右侧相关视屏
    amusementBtn(){
      if(!this.amusement.btnFlag){
        this.amusement.btn = '<'
        this.amusement.btnFlag = !this.amusement.btnFlag
      }else{
        this.amusement.btn = '>'
        this.amusement.btnFlag = !this.amusement.btnFlag
      }
    },
    //点击右侧相关视屏的每一个
    changeVideo(item){
      let video = document.getElementById('video');
      this.amusement.video.videoUrl = item.videoUrl;
      this.amusement.video.imgUrl = item.imgUrl;
      setTimeout(()=>{
        video.play()
      },0)
    },
    toLink(index) {
      this.thisIndex = index;
      this.$router.push({
        query:{
         type:index
        }
      });
      this.getList(this.tabBarList[this.thisIndex].title);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getList(this.tabBarList[this.thisIndex].title);
    },
    //点击到详情
    details(item) {
      if(this.thisIndex == 0){
        this.$router.push({
          name: 'videoFilm',
          query:{
            id:item.id,
          }
        })
      }else if(this.thisIndex == 1){
        this.$router.push({
          name: 'videoReFilm',
          query:{
            id:item.id,
          }
        })
      }
    },
    /**
     * 获取banner播放列表
     */
    getBannerList(){
      this.$p({
        url:this.$api.newsQuery,
        params:{
          pageSize:this.pageSize,
          current:1,
          category:4,
          type:"精彩VIDEO"
        }
      }).then(res=>{
        var arrBanner = res.data.list;
          arrBanner.forEach((e,index)=>{
          arrBanner[index].pubDate = e.pubDate.split(" ")[0];
          arrBanner[index].imgUrl = this.$baseU + e.imgUrl;
          arrBanner[index].videoUrl = this.$baseU + e.videoUrl;
        });
          this.isTrans = false;
          this.amusement.videoList = JSON.parse(JSON.stringify(arrBanner));
          this.amusement.video = JSON.parse(JSON.stringify(arrBanner[0]));
      },errRes=>{

      })
    },
    /**
     * 获取列表
     */
    getList(str){
      this.$p({
        url:this.$api.newsQuery,
        params:{
          pageSize:this.pageSize,
          current:this.currentPage,
          category:4,
          type:str
        }
      }).then(res=>{
        this.activeIndex = null;
        this.total = res.data.total;
        var arr = res.data.list;
        arr.forEach((e,index)=>{
          arr[index].pubDate = e.pubDate.split(" ")[0];
          arr[index].imgUrl = this.$baseU + e.imgUrl;
          arr[index].videoUrl = this.$baseU + e.videoUrl;
        });
        this.list = JSON.parse(JSON.stringify(arr));
      },errRes=>{

      })
    }
  },
  mounted(){
    if(this.$route.query.type) {
      this.thisIndex = this.$route.query.type;
    }
    this.getBannerList();
    this.getList(this.tabBarList[this.thisIndex].title);
  }
}
