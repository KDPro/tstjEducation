/**
 * Created by kdkjPC on 2018/4/23.
 */
var that = this;
var currentTimeB;
export default{
  data() {
    return {
      id:"",
      currentTimeA:0,   //当前时间
      timeRanges:"0",   //缓冲条
      playAU:false,
      left: 0,
      user: {
        src: 'http://img2.imgtn.bdimg.com/it/u=862591842,2864954084&fm=27&gp=0.jpg',
        name: '某某某',
        stagename: '全球经济治理滞后',
        sex: '女',
        country: '中国',
        ethnic: '汉',
        age: '18',
        weight: '48',
        height: '170',
        school: '中国传媒大学',
        birthday: '2000-05-20',
      }
    }
  },
  methods: {
    formatTooltip(val) {
      var audio = this.$refs.audio;
      if(this.currentTimeA==0) {
        return 0+"s";
      }
      return Math.round(audio.currentTime)+"s";

    },
    playAudio(){
      this.playAU=!this.playAU;
      var audio = this.$refs.audio;
      if(this.playAU) {
        audio.play();
      }else {
        audio.pause();
        clearInterval(currentTimeB);
      }
      currentTimeB = setInterval(()=>{
        if(audio.duration <= audio.currentTime||!this.playAU) {
          this.playAU=false;
          clearInterval(currentTimeB);
        }
        this.currentTimeA =  this.transTime(audio.duration,audio.currentTime);
        this.timeRanges = this.transTime(audio.duration,audio.buffered.end(audio.buffered.length-1));
      },500);

    },
    transTime(duration,currentTime){
      return (currentTime/duration)*100;
    },
    slideTime(val){
      var audio = this.$refs.audio;
      audio.currentTime = val/100*audio.duration;
      this.currentTimeA =  this.transTime(audio.duration,audio.currentTime);
    },
    /**
     * 获取详情
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
        this.user = JSON.parse(JSON.stringify(j));
      },errRes=>{

      });
    }
  },
  watch:{
  }
  ,
  mounted(){
    this.id = this.$route.query.id;
    this.getDetail();
  }

}
