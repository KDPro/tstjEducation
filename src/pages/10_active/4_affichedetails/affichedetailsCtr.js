export default{
  data() {
    return {
      id:"",
      item:{}
    }
  },
  methods:{
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
        this.item = JSON.parse(JSON.stringify(j));
      },errRes=>{

      });
    }
  },
  mounted(){
    this.id = this.$route.query.id;
    this.getDetail();
  }
}
