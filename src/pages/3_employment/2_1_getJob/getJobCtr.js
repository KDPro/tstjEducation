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
    /**
     * 查询详情
     */
    getDetail(){
      this.$g({
        url:this.$api.tutorfindOneById,
        params:{
          id:this.id,
        }
      }).then(res=>{
        var j = JSON.parse(JSON.stringify(res.data));
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
