/**
 * Created by kdkjPC on 2018/4/14.
 */
export default {
  data(){
    return {
      circle: 2,
      circleId: null,
      rewardId: null,
      giftname: "",
      rewardList:[],
      rewardName: [],
      btnFalse:true
    }
  },
  methods:{
    /**
     * 奖品按钮 circle 为旋转次数 btnFalse为是否可以重复点击
     */
    rewardBtn(index){
      if(this.$c.getStorage("userInfo")) {

      }else {
        this.$message({
          message: "您还没有登录，或登录已过期，请重新登录后操作",
          type: 'warning',
          duration: 1500
        });
        return;
      }
      this.circle = 2;
      if(index !=4) {
        return false;
      }
      //判断用户是否已经登录
      // if(!this.$common.getStorage('token')){
      //   this.$mint.Toast({
      //     message: '您还没有登录，请登录！',
      //     position: 'center',
      //     duration: 1500
      //   });
      //   setTimeout(()=>{
      //     this.$router.push({
      //       path:'/index',
      //     })
      //   },2000)
      //   return;
      // }
      if(this.btnFalse) {
        this.btnFalse = false;
        this.getRandomNum();

      }

    },
    /**
     * axios获取随机数奖品，rewardId  奖品id，giftname 礼物名称
     */
    getRandomNum(){
      this.$g({
        url:"Gift/getRandomNum",
        params:{
          userid:JSON.parse(this.$c.getStorage("userInfo")).id
        }
      }).then(res=>{
          if(res.data.id) {
            this.rewardId = res.data.id;
            this.giftname = res.data.giftname;
          }else {
            this.rewardId = null;
            this.giftname = ''
          }
        this.circleFun(this.rewardId,this.giftname);
      })
    },
    /**
     * 通过giftname 来获取index
     */
    giftName(name){
      var arr = this.rewardList;
      var thisIndex;
      arr.forEach((e,index)=>{
        if(e.giftname == name) {
          if(index<3){
            thisIndex = index;
          }else if(index>=3) {
            switch (index) {
              case 3:
                thisIndex =  7;
                break;
              case 5:
                thisIndex =  3;
                break;
              case 6:
                thisIndex =  6;
                break;
              case 7:
                thisIndex =  5;
                break;
              case 8:
                thisIndex =  4;
                break;
            }
          }
          return ;
        }
      });
      return thisIndex;

    },
    /**
     * 旋转次数，以及停止的位置操作
     * @param rewardId
     * @param giftname
     */
    circleFun(rewardId,giftname){
      var stopIndex = this.giftName(giftname)+1;
      this.circleId = 0;
      var circleInt;
      setTimeout(()=>{
        circleInt = setInterval(()=>{
          if(this.circle == 0) {
            stopIndex--;
            if(stopIndex <=0) {
              clearInterval(circleInt);
              this.btnFalse = true;
              this.remberReward(rewardId,giftname);
              return false;
            }
          }
          var d = this.circleId;
          var c = this.circle;
          if(d < 2) {
            d++;
          }else if(d ==2|| d==5){
            d+=3;
          }else if(d >6) {
            d-=1;
          }else if(d==6) {
            d-=3;
          }else if(d==3) {
            c--;
            this.circle=c;
            d=0;
          }
          this.circleId = d;
        },250)
      },250)
    },
    /**
     * 告诉后台抽中了某一个奖项
     */
    remberReward(rewardId,giftname){
      if(giftname=="谢谢参与") {
        this.$message({
          message: '很遗憾，您没有中奖！',
          type: 'warning',
          duration: 1500
        });
        return false;
      }
      this.$p({
        url: 'Prizes/insertWinner',
        params: {
          userid:JSON.parse(this.$c.getStorage("userInfo")).id,
          prize:rewardId
        }
      }).then(res=>{
        this.$message({
          message: '恭喜你中奖了！',
          type: 'success',
          duration: 1500
        });
        this.giftUser();
      })
    },
    toWait(){
      // this.$mint.Toast({
      //   message: '功能正在开发，敬请期待！',
      //   position: 'center',
      //   duration: 1500
      // });
    },
    toRouter(){
      this.$router.push({
        path:'/wishing'
      });
    },
    /**
     * 初始化获奖名单
     */
    giftUser(){
      this.$g({
        url:"Prizes/selectPrizesUsers",
        params:{}
      }).then(res=>{
          var array = [];
          for (var i in res.data) {
            var name = res.data[i]
            var i = i.substring(0,7);
            i+="****";
            array.push({phone:i,name:name})
          }
          this.rewardName = array;
          var arr = Object.keys(res.data);
          var dom,t,h;
        this.$nextTick(() => {
          dom = this.$refs.rewNameB;
          h = parseInt(dom.offsetHeight);
          t = dom.style.marginTop==""?0:parseInt(dom.style.marginTop);
          setInterval(()=>{
            if(h >150&& t > -(h-150)){
              t = dom.style.marginTop==""?0:parseInt(dom.style.marginTop);
              dom.style.marginTop = parseInt(t)-75+"px";
              dom.style.transition = "all 2s linear";
            }else if(h >150&&t <=-(h-150)) {
              t=0;
              dom.style.marginTop = 0;
              dom.style.transition = "all 0s linear";
            }
          },2000)
        })
      })
    },
    /**
     * 初始化礼品
     */
    getGift(){
      this.$g({
        url:"Gift/selectGift",
        params:{}
      }).then(res=>{
        var arr = JSON.parse(JSON.stringify(res.data.list));
        var arrNew = [];
        arr.forEach(function(e,index) {
          // switch (e.giftname) {
          //   case "靠背套装":
          //     arrNew.splice(0,0,e);
          //     break;
          //   case "绕线器":
          //     arrNew.splice(1,0,e);
          //     break;
          //   case "零钱包":
          //     arrNew.splice(2,0,e);
          //     break;
          //   case "洗衣液":
          //     arrNew.splice(3,0,e);
          //     break;
          //   case "手机支架":
          //     arrNew.splice(4,0,e);
          //     break;
          //   case "毛巾":
          //     arrNew.splice(5,0,e);
          //     break;
          //   case "餐具套盒":
          //     arrNew.splice(6,0,e);
          //     break;
          // }
          arrNew.splice(index,0,e);
        });
        var btn = {msg:"我是按钮"};
        // var thank = {id:null,msg:"我是谢谢参与"};
        arrNew.splice(4,0,btn);
        // arrNew.splice(7,0,thank);
        this.rewardList = JSON.parse(JSON.stringify(arrNew));

      })
    }
  },
  mounted(){
    this.getGift();
    this.giftUser();
  }
}
