export default{
  data() {
    return {
      id: "",
      left: 0,
      user: {},
      list:[]
    }
  },
  methods: {
    //点击图片切换上面的图片
    changeImg(item){
      this.user = item;
    },
    //点击左侧箭头
    next(){
      this.left -= 245;
      let left = (this.list.length - 4) * 245;
      if (parseInt(this.$refs.imgList.style.left) == -left) {
        this.left = -left;
        this.$refs.imgList.style.left = this.left + 'px';
      }
      this.$refs.imgList.style.left = this.left + 'px';
    },
    //点击右侧箭头
    pre(){
      this.left += 245;
      if (parseInt(this.$refs.imgList.style.left) == 0) {
        this.left = 0;
        this.$refs.imgList.style.left = this.left + 'px';
      }
      this.$refs.imgList.style.left = this.left + 'px';
    },
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
    /**
     * 获取网红个人展示列表
     */
    getList(){
      this.$p({
        url: this.$api.memeQuery,
        params: {
          pageSize:5,
          current: 1,
        }
      }).then(res=> {
        var arr = res.data.list;
        arr.forEach((e, index)=> {
          arr[index].imgUrl = this.$baseU + e.imgUrl;
        });
        this.list = JSON.parse(JSON.stringify(arr));

      }, errRes=> {

      })
    },
  },
  mounted(){
    this.id = this.$route.query.id;
    this.getDetail();
  }
}
