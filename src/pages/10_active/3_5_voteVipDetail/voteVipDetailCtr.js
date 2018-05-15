export default{
  data() {
    return {
      id: "",
      user: {},
    }
  },
  methods: {
    /**
     * 获取网红详情
     */
    getDetail(){
      this.$g({
        url: this.$api.memefindOneById,
        params: {
          id: this.id
        }
      }).then(res=>{
        this.user = JSON.parse(JSON.stringify(res.data));
        this.user.imgUrl = this.$baseU + this.user.imgUrl;
        this.getList();
      },errRes=>{

      })
    },
  },
  mounted(){
    this.id = this.$route.query.id;
    this.getDetail();
  }
}
