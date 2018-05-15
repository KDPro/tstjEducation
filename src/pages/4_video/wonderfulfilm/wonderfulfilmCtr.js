export default{
    data() {
        return {
          id:"",
          detail:{},
          amusement: {
            btn: '>',
            btnFlag: false,
            video: {},
            videoList: []
          }
        }
    },
    methods: {
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
        this.detail.videoUrl = item.videoUrl;
        this.detail.imgUrl = item.imgUrl;
        setTimeout(()=>{
          video.play()
        },0)
      },
      /**
       * 获取列表
       */
      getList(str){
        this.$p({
          url:this.$api.newsQuery,
          params:{
            pageSize:9,
            current:1,
            category:4,
            type:str
          }
        }).then(res=>{
          var arr = res.data.list;
          arr.forEach((e,index)=>{
            arr[index].pubDate = e.pubDate.split(" ")[0];
            arr[index].imgUrl = this.$baseU + e.imgUrl;
            arr[index].videoUrl = this.$baseU + e.videoUrl;
          });
          this.amusement.videoList = JSON.parse(JSON.stringify(arr));
        },errRes=>{

        })
      },
      /**
       * 查询视频详情
       */
      getDetail(){
        this.$g({
          url:this.$api.findOneById,
          params:{
            id:this.id,
          }
        }).then(res=>{
          var j = JSON.parse(JSON.stringify(res.data));
          j.pubDate = j.pubDate.split(" ")[0];
          j.imgUrl = this.$baseU + j.imgUrl;
          j.musicUrl = this.$baseU + j.musicUrl;
          j.videoUrl = this.$baseU + j.videoUrl;
          this.detail = JSON.parse(JSON.stringify(j));
        },errRes=>{

        });
      }
    },
  mounted(){
      this.id = this.$route.query.id;
    this.getList("精彩VIDEO");
    this.getDetail();
  }
}
