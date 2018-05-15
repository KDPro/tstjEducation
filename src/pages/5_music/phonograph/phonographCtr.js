export default{
  data(){
    return {
      src: '../../../static/phonograph.png',
      activeIndex: null,
      thisIndex: 2,
      currentPage:1,
      pageSize:10,
      total:null,
      showSendAlert:false,
      tabBarList: [
        {"title": "精彩MUSIC"},
        {"title": "倾听FM"},
        {"title": "留声机"},
        {"title": "点播台"},
      ],
      list: [],
      voiceInput:"",
      voiceFile:""
    }
  },
  methods: {
    /**
     * 分页 当前第几页
     */
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getList("留声机");
    },
    toLink(index) {
      this.thisIndex = index;
      switch (index) {
        case 0:
          this.$router.push({
            name: 'music',
            query:{
              type:1,
            }
          });
          break;
        case 1:
          this.$router.push({
            name: 'music',
            query:{
              type:2,
            }
          });
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
          // this.showAlert = !this.showAlert;
          break;
      }
    },
    //播放音乐
    playMusic(index){
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
    showSendF(){
      this.showSendAlert = !this.showSendAlert;
    },
    /**
     * 上传声音
     */
    upFileVoice(e){
      var reg = /(\.mp3|\.wma|\.WAV|\.m4a)$/gi;
      if(!reg.test(e.target.files[0].name)) {
          this.$message({
          message: "请上传 mp3,wma,wav,m4a 格式",
          type: 'warning',
          duration: 1500
        });
        return;
      }
      var myform = new FormData();
      myform.append("musicFile",e.target.files[0]);
      return new Promise((resolve,reject)=>{
        this.$p({
          url:this.$api.uploadFile,
          params:myform
        }).then((res)=>{
          this.voiceFile = res.data.path;
          resolve(res);
        },(errRes)=>{

        });
      });
    },
    /**
     * 发布留声
     */
    sendMyVoice(){
      if(!this.$c.getStorage("userInfo")) {
        this.$message({
          message: "您还没有登录，或登录已过期，请重新登录后操作",
          type: 'warning',
          duration: 1500
        });
        return;
      }
      if(this.voiceFile==""||this.voiceInput=="") {
        this.$message({
          message: "请输入完整信息",
          type: 'warning',
          duration: 1500
        });
        return;
      }
      this.$p({
        url:this.$api.newAdd,
        params:{
          category:3,
          type:"留声机",
          titile:this.voiceInput,
          musicUrl:this.voiceFile
        }
      }).then(res=>{
        this.$message({
          message: "上传成功",
          type: 'success',
          duration: 1500
        });
        this.showSendAlert = false;
        this.getList("留声机");
      },errRes=>{

      })
    },
    toMusicDetail(){
      this.$router.push({
        name: "musicDetail"
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
          category:3,
          type:str
        }
      }).then(res=>{
        this.total = res.data.total;
        var arr = res.data.list;
        arr.forEach((e,index)=>{
          arr[index].pubDate = e.pubDate.split(" ")[0];
          arr[index].imgUrl = this.$baseU + e.imgUrl;
          if(arr[index].head) {
            arr[index].head = this.$baseU + e.head;
          }else {
            arr[index].head = "../../../static/useImg/defaultHead.jpg";
          }
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
    this.getList("留声机");
  }
}
