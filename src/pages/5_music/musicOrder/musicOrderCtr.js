/**
 * Created by kdkjPC on 2018/5/3.
 */
/**
 * Created by kdkjPC on 2018/4/17.
 */
export default {
  data(){
    return {
      thisIndex:3,
      activeIndex: null,
      currentPage:1,
      pageSize:9,
      total:null,
      showAlert:false,
      src: '../../../static/phonograph.png',
      tabBarList:[
        {"title":"精彩MUSIC"},
        {"title":"倾听FM"},
        {"title":"留声机"},
        {"title":"点播台"},
      ],
      list:[],
      musicName:"",
      musicSinger:"",
      musicTheme:"",
      musicHeart:""
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
    toMusicDetail(item){
      this.$router.push({
        name:"musicDetail",
        query:{
          id:item.id
        }
      })
    },
    /**
     * 点击确定提交点歌
     * @param val
     */
    confirmOrder(){
      if(this.musicSinger==""||this.musicName==""||this.musicTheme==""||this.musicHeart=="") {
        this.$message({
          message: "请填写完整信息",
          type: 'warning',
          duration: 1500
        });
        return;
      }
      this.$p({
        url:this.$api.newAdd,
        params:{
          category:3,
          type:"点播台",
          singer:this.musicSinger,
          musicName:this.musicName,
          titile:this.musicTheme,
          newsText:this.musicHeart
        }
      }).then(res=>{
        this.$message({
          message: "点播成功",
          type: 'success',
          duration: 1500
        });
        this.showAlert = !this.showAlert;
      },errRes=>{

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
        this.list[this.activeIndex].isPlay = !this.list[this.activeIndex].isPlay;
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
          orderName:0,
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

        /**
         * 设置轮播
         */
        var dom,t,h;
        this.$nextTick(() => {
          dom = this.$refs.scroll;
          h = parseInt(dom.offsetHeight);
          t = dom.style.marginTop==""?0:parseInt(dom.style.marginTop);
          setInterval(()=>{
            if(h >225&& t > -(h-225)){
              t = dom.style.marginTop==""?0:parseInt(dom.style.marginTop);
              dom.style.marginTop = parseInt(t)-45+"px";
              dom.style.transition = "all 2s linear";
            }else if(h >225&&t <=-(h-225)) {
              t=0;
              dom.style.marginTop = 0;
              dom.style.transition = "all 0s linear";
            }
          },2000)
        })
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
