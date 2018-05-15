export default{
  data() {
    return {
      left: 0,
      top: 0,
      user: {},
      list: [],
      otherList: []
    }

  },
  methods: {
    //点击图片切换上面的图片
    changeImg(item, index){
      if (index == 0) {
        this.user.imgUrl1 = item;
      } else if (index == 1) {
        this.user = JSON.parse(JSON.stringify(item));
        this.list = [];
        this.top = 0;
        this.$refs.imgList1.style.top = this.top + 'px';
        for (var i = 1; i < 9; i++) {
          var _m = "imgUrl" + i;
          if (this.user[_m]) {
            if(i!=1) {
              this.user[_m] =this.$baseU + this.user[_m];
            }
            this.list.push(this.user[_m]);
          } else {
            break;
          }
        };
      }
    },
    //点击左侧箭头,上
    next(index){
      if (index == 0) {
        this.top -= 175;
        let top = (this.list.length - 4) * 175;
        if (parseInt(this.$refs.imgList1.style.top) == -top) {
          this.top = -top;
          this.$refs.imgList1.style.top = this.top + 'px';
        }
        this.$refs.imgList1.style.top = this.top + 'px';
      } else if (index == 1) {
        this.left -= 245;
        let left = (this.otherList.length - 4) * 245;
        if (parseInt(this.$refs.imgList.style.left) == -left) {
          this.left = -left;
          this.$refs.imgList.style.left = this.left + 'px';
        }
        this.$refs.imgList.style.left = this.left + 'px';
      }
    },
    //点击右侧箭头，下
    pre(index){
      if (index == 0) {
        this.top += 175;
        if (parseInt(this.$refs.imgList1.style.top) == 0) {
          this.top = 0;
          this.$refs.imgList1.style.top = this.top + 'px';
        }
        this.$refs.imgList1.style.top = this.top + 'px';
      } else if (index == 1) {
        this.left += 245;
        if (parseInt(this.$refs.imgList.style.left) == 0) {
          this.left = 0;
          this.$refs.imgList.style.left = this.left + 'px';
        }
        this.$refs.imgList.style.left = this.left + 'px';
      }
    },
    getDetail(){
      this.$g({
        url: this.$api.findImgsById,
        params: {
          id: this.id
        }
      }).then(res=> {
        this.user = JSON.parse(JSON.stringify(res.data));
        for (var i = 1; i < 9; i++) {
          var _m = "imgUrl" + i;
          if (this.user[_m]) {
            this.user[_m] = this.$baseU + this.user[_m];
            this.list.push(this.user[_m]);
          } else {
            break;
          }
        };
        this.getList();
      }, errRes=> {

      })
    },
    /**
     * 获取其他网红列表
     */
    getList(){
      this.$p({
        url: this.$api.memeQueryImgs,
        params: {
          pageSize:5,
          current:1
        }
      }).then(res=> {
        var arr = res.data.list;
        arr.forEach((e, index)=> {
          arr[index].imgUrl1 = this.$baseU + e.imgUrl1;
        });
        this.otherList = JSON.parse(JSON.stringify(arr));

      }, errRes=> {

      })
    },
  },
  mounted(){
    this.id = this.$route.query.id;
    this.getDetail();
  }
}
