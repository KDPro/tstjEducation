/**
 * Created by kdkjPC on 2018/4/14.
 */
export default {
  data(){
    return {
      thisIndex:0,
      tabBarList:[
        {"title":"招聘"},
        {"title":"求职"},
        {"title":"家教"}
      ]
    }
  },
  methods:{
    toLink(index) {
      this.thisIndex = index;
      switch(index) {
        case 0:
          this.$router.push({
            path:"/employment/recruitment"
          });
              break;
        case 1:
          this.$router.push({
            path:"/employment/job"
          });
              break;
        case 2:
          this.$router.push({
            path:"/employment/family"
          });
              break;
      }
    }

  },
  mounted(){
    if (this.$route.path == "/employment/recruitment") {
      this.thisIndex = 0;
    }else if (this.$route.path == "/employment/job") {
      this.thisIndex = 1;
    }
    else if (this.$route.path == "/employment/family") {
      this.thisIndex = 2;
    }
  }
}
