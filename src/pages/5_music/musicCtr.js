/**
 * Created by kdkjPC on 2018/4/17.
 */
export default {
  data(){
    return {
      thisIndex:0,
      activeIndex: null,
      currentPage:1,
      pageSize:9,
      total:null,
      src: '../../../static/phonograph.png',
      tabBarList:[
        {"title":"精彩MUSIC"},
        {"title":"倾听FM"},
        {"title":"留声机"},
        {"title":"点播台"},
      ],
      list:[]
    }
  },
  methods:{
    toLink(item,index) {
      this.thisIndex = index;
      switch(index){
        case 0:
          this.$router.push({
            name: 'music',
            query:{
              type:1,
            }
          });
          this.currentPage = 1;
          this.getList(item.title);
          break;
        case 1:
          this.$router.push({
            name: 'music',
            query:{
              type:2,
            }
          });
          this.currentPage = 1;
          this.getList(item.title);
          break;
        case 2:
        this.$router.push({
          name: 'phonograph'
        });
        break;
        case 3:
          this.$router.push({
            name: 'musicOrder'
          });
          break;
      }
    },
    toMusicDetail(){
      this.$router.push({
        name:"musicDetail"
      })
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getList(this.tabBarList[this.thisIndex].title);
    },
    /**
     * 播放音乐 函数
     */
    play(index){
      this.list[index].isPlay = !this.list[index].isPlay;
      var _m='audio'+index;
      var audio = this.$refs[_m][0];
      audio.play();
      if(index != this.activeIndex&&this.activeIndex!=null) {
        this.list[this.activeIndex].isPlay = false;
        var _mBefore = 'audio'+this.activeIndex;
        var audioBefore = this.$refs[_mBefore][0];
        audioBefore.pause();
        audioBefore.currentTime = 0;
      }else if(index == this.activeIndex&&this.list[index].isPlay==false) {
        var _mBefore = 'audio' + index;
        var audioBefore = this.$refs[_mBefore][0];
        audioBefore.pause();
      }
      this.activeIndex = index;
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
          category:3,
          type:str
        }
      }).then(res=>{
        this.activeIndex = null;
        this.total = res.data.total;
        var arr = res.data.list;
        arr.forEach((e,index)=>{
          arr[index].pubDate = e.pubDate.split(" ")[0];
          arr[index].imgUrl = this.$baseU + e.imgUrl;
          arr[index].musicUrl = this.$baseU + e.musicUrl;
          arr[index].isPlay = false;
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
    if(this.$route.query.type==2) {
      this.thisIndex = 1;
    }
    this.getList(this.tabBarList[this.thisIndex].title);
  }
}
