/**
 * Created by kdkjPC on 2018/4/14.
 */
export default {
  data(){
    return {
      thisIndex:0,
      tabBarList:[
        {"title":"活动公告"},
        {"title":"抽奖活动"},
        {"title":"投票活动"}
      ]
    }
  },
  methods:{
    toLink(index) {
      this.thisIndex = index;
      switch(index) {
        case 0:
          this.$router.push({
            path:"/active"
          });
              break;
        case 1:
          this.$router.push({
            path:"/active/luckDraw"
          });
              break;
        case 2:
          this.$router.push({
            path:"/active/vote"
          });
              break;
      }
    }

  },
  mounted(){
    if (this.$route.path == "/active") {
      this.thisIndex = 0;
    }else if (this.$route.path == "/active/luckDraw") {
      this.thisIndex = 1;
    }
    else if (this.$route.path == "/active/vote") {
      this.thisIndex = 2;
    }
  }
}
