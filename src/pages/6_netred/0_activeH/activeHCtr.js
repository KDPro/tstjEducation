/**
 * Created by kdkjPC on 2018/4/14.
 */
export default {
  data(){
    return {
      thisIndex:0,
      tabBarList:[
        {"title":"个人展示"},
        {"title":"个人图集"},
        {"title":"最新资讯"}
      ]
    }
  },
  methods:{
    toLink(index) {
      this.thisIndex = index;
      switch(index) {
        case 0:
          this.$router.push({
            path:"/netred/personal",
          });
              break;
        case 1:
          this.$router.push({
            path: '/netred/atlas',
          });
              break;
        case 2:
          this.$router.push({
            path:"/netred/information",
          });
              break;
      }
    }

  },
  mounted(){
    if (this.$route.path == "/netred/personal") {
      this.thisIndex = 0;
    }else if (this.$route.path == "/netred/atlas") {
      this.thisIndex = 1;
    }
    else if (this.$route.path == "/netred/information") {
      this.thisIndex = 2;
    }
  }
}
