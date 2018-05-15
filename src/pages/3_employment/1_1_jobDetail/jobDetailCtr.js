/**
 * Created by kdkjPC on 2018/4/21.
 */
export default {
  data(){
    return {
      showPhone:false,
      detail:{}
    }
  },
  methods:{
    seePhone(){
      if(this.$c.getStorage("userInfo")) {
        this.showPhone = true;
      }else {
        this.$message({
          message: "您还没有登录，或登录已过期，请重新登录后操作",
          type: 'warning',
          duration: 1500
        });
        return;
      }

    },
    /**
     * 查询详情
     */
    getDetail(){
      this.$p({
        url:this.$api.hireQuery,
        params:{
          id:this.id,
        }
      }).then(res=>{
        var j = JSON.parse(JSON.stringify(res.data.list[0]));
        j.pubDate = j.pubDate.split(" ")[0];
        j.head = this.$baseU + j.head;
        this.detail = JSON.parse(JSON.stringify(j));
      },errRes=>{

      });
    }
  },
  mounted(){
    this.id = this.$route.query.id;
    this.getDetail();
  }
}
