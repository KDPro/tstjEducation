/**
 * Created by kdkjPC on 2018/4/14.
 */
export default {
  data(){
    return {
      thisIndex:0,
      tabBarList:[
        {"title":"许愿树"},
        {"title":"神秘树洞"},
        {"title":"解忧杂货铺"}
      ]
    }
  },
  methods:{
    toLink(index) {
      this.thisIndex = index;
      switch(index) {
        case 0:
          this.$router.push({
            path:"/wish/wishtree"
          });
              break;
        case 1:
          this.$router.push({
            path:"/wish/treeWar"
          });
              break;
        case 2:
          this.$router.push({
            path:"/wish/store"
          });
              break;
      }
    }

  },
  mounted(){
    if (this.$route.path == "/wish/wishtree") {
      this.thisIndex = 0;
    }else if (this.$route.path == "/wish/treeWar") {
      this.thisIndex = 1;
    }
    else if (this.$route.path == "/wish/store") {
      this.thisIndex = 2;
    }
  }
}
