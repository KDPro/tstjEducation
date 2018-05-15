export default {
  data() {
    return {
      pageSize: 6,
      carousel: [
        {
          title: '我们和刘雯聊了聊她的春夏衣橱',
          content: '你不喜欢红色可能只因为觉得他不好穿，显黑啦，找不到场合啦等等，但是说真的，没有人比我们穿红色更美，为什么？往下看',
          src: '../../../static/useImg/scroll1.png'
        }, {
          title: '我们和刘雯聊了聊她的春夏衣橱2',
          content: '你不喜欢红色可能只因为觉得他不好穿，显黑啦，找不到场合啦等等，但是说真的，没有人比我们穿红色更美，为什么？往下看',
          src: '../../../static/useImg/scroll2.png'
        }, {
          title: '我们和刘雯聊了聊她的春夏衣橱3',
          content: '你不喜欢红色可能只因为觉得他不好穿，显黑啦，找不到场合啦等等，但是说真的，没有人比我们穿红色更美，为什么？往下看',
          src: '../../../static/useImg/scroll3.png'
        }
      ],
      wish: {
        wishNav: [
          {
            title: '许愿树'
          }, {
            title: '神秘树洞'
          }, {
            title: '解忧杂货店'
          }
        ],
        wishNext: [
          {
            firstTitle: '抽奖',
            seconedTitle: 'LUCK DRAW'
          }, {
            firstTitle: '热门活动',
            seconedTitle: 'POPULAR ACTIVITY'
          }
        ]
      },
      alerts: {
        header: [
          {
            title: '资讯'
          }, {
            title: '招聘'
          }, {
            title: '求职'
          }, {
            title: '家教'
          }, {
            title: '跳蚤'
          }
        ],
        //快讯模块下的招聘列表
        notice: [],
        leftTopShow: {},
        leftBottomShow: {}
      },
      amusement: {
        header: [
          {
            title: '精彩VIDEO'
          }, {
            title: '推荐影视'
          }, {
            title: '倾听FM'
          }, {
            title: '精彩MUSIC'
          }, {
            title: '留声机'
          }, {
            title: '点歌台'
          }
        ],
        btn: '>',
        btnFlag: false,
        video: {},
        videoList: []
      },
      exploreCity: {
        header: [
          {
            title: '探吃'
          }, {
            title: '探玩'
          }, {
            title: '探逛'
          }
        ],
        leftShow: {},
        rightTopShow: {},
        rightBottomShow: {}
      },
      netRed: {
        header: [
          {
            title: '个人展示'
          }, {
            title: '最新资讯'
          }, {
            title: '个人图集'
          }
        ],
        leftShow: {},
        rightTopShow: {},
        rightBottomShow: {},
        netAll: []
      }
    }
  },
  methods: {
    //打开娱乐右侧相关视屏
    amusementBtn(){
      if (!this.amusement.btnFlag) {
        this.amusement.btn = '<'
        this.amusement.btnFlag = !this.amusement.btnFlag
      } else {
        this.amusement.btn = '>'
        this.amusement.btnFlag = !this.amusement.btnFlag
      }
    },
    //点击右侧相关视屏的每一个
    changeVedio(item){
      let video = document.getElementById('video')
      this.amusement.video = item;
      setTimeout(()=> {
        video.play()
      }, 0)
    },
    //点击许愿树右侧
    wishNext(index){
      switch (index) {
        case 0:
          this.$emit("changeIndex", 9);
          this.$router.push({
            name: 'luckDraw'
          });

          break;
        case 1:
          this.$emit("changeIndex", 9);
          this.$router.push({
            name: 'affiche'
          });
          break;
      }
    },
    //点击许愿树左侧
    wishNav(index){
      switch (index) {
        case 0:
          this.$emit("changeIndex", 6);
          this.$router.push({
            name: 'wishtree'
          });
          break;
        case 1:
          this.$emit("changeIndex", 6);
          this.$router.push({
            name: 'treeWar'
          });
          break;
        case 2:
          this.$emit("changeIndex", 6);
          this.$router.push({
            name: 'store'
          });
          break;
      }
    },
    //点击资讯模块的标题到指定页面
    goInformation(index){
      switch (index) {
        case 0:
          this.$emit("changeIndex", 1);

          this.$router.push({
            name: 'fast'
          });
          break;
        case 1:
          this.$emit("changeIndex", 2);

          this.$router.push({
            name: 'recruitment'
          });
          break;
        case 2:
          this.$emit("changeIndex", 2);
          this.$router.push({
            name: 'job'
          });
          break;
        case 3:
          this.$emit("changeIndex", 2);

          this.$router.push({
            name: 'family'
          });
          break;
        case 4:
          this.$emit("changeIndex", 7);

          this.$router.push({
            name: 'flea'
          });
          break;
      }
    },
    // 点击娱乐模块到指定页面
    goEntertainment(index){
      switch (index) {
        case 0:
          this.$emit("changeIndex", 3);

          this.$router.push({
            name: 'video',
            query: {
              type: 0
            }
          });
          break;
        case 1:
          this.$emit("changeIndex", 3);

          this.$router.push({
            name: 'video',
            query: {
              type: 1
            }
          });
          break;
        case 2:
          this.$emit("changeIndex", 4);
          this.$router.push({
            name: 'music',
            query: {
              type: 2
            }
          });
          break;
        case 3:
          this.$emit("changeIndex", 4);
          this.$router.push({
            name: 'music',
            query: {
              type: 1
            }
          });
          break;
        case 4:
          this.$emit("changeIndex", 4);
          this.$router.push({
            name: 'phonograph'
          });
          break;
        case 5:
          this.$emit("changeIndex", 4);
          this.$router.push({
            name: 'musicOrder'
          });
          break;
      }
    },
    //点击探城模块到指定页面
    goExploreCity(index){
      switch (index) {
        case 0:
          this.$emit("changeIndex", 8);
          this.$router.push({
            name: 'citySearcher',
            query: {
              type: 0
            }
          });
          break;
        case 1:
          this.$emit("changeIndex", 8);
          this.$router.push({
            name: 'citySearcher',
            query: {
              type: 1
            }
          });
          break;
        case 2:
          this.$emit("changeIndex", 8);
          this.$router.push({
            name: 'citySearcher',
            query: {
              type: 2
            }
          });
          break;
      }
    },
    //点击网红模块到指定页面
    goNetRed(index){
      switch (index) {
        case 0:
          this.$emit("changeIndex", 5);
          this.$router.push({
            name: 'personal'
          });
          break;
        case 1:
          this.$emit("changeIndex", 5);
          this.$router.push({
            name: 'information'
          });
          break;
        case 2:
          this.$emit("changeIndex", 5);
          this.$router.push({
            name: 'atlas'
          });
          break;
      }
    },
    //点击快讯展示到指定页面
    fastDetail(id) {
      this.$emit("changeIndex", 1);
      this.$router.push({
        name: 'fastdetails',
        query: {
          id: id,
        }
      });
    },
    //点击招聘到指定页面
    jobDetail(item){
      this.$emit("changeIndex", 2);
      this.$router.push({
        name: 'jobDetail',
        query: {
          id: item.id,
        }
      });

    },
    //点击快讯下面的更多
    job(){
      this.$emit("changeIndex", 2);
      this.$router.push({
        name: 'recruitment'
      });
    },
    //点击视频下面的更多
    video(){
      this.$emit("changeIndex", 3);
      this.$router.push({
        name: 'video'
      });
    },
    //探城模块详情
    cityDetail(id){
      this.$emit("changeIndex", 8);
      this.$router.push({
        name: 'cityDetail',
        query: {
          id: id
        }
      });
    },
    //探城
    city(){
      this.$emit("changeIndex", 8);
      this.$router.push({
        name: 'citySearcher'
      });
    },
    //网红详情
    netRedDetail(id, index){
      this.$emit("changeIndex", 5);
      if (index == 2) {
        this.$router.push({
          name: 'atlasdetails',
          query: {
            id: id
          }
        });
      } else if (index == 1) {
        this.$router.push({
          name: 'imforDetails',
          query: {
            id: id
          }
        });
      }
      else if (index == 0) {
        this.$router.push({
          name: 'netRedDetails',
          query: {
            id: id
          }
        });
      }

    },
    //网红更多
    netRedss(){
      this.$emit("changeIndex", 5);
      this.$router.push({
        name: 'netred'
      });
    },
    //获取快讯模块的招聘信息列表
    getInformationList(){
      this.$p({
        url: this.$api.hireQuery,
        params: {
          pageSize: this.pageSize,
        }
      }).then(res=> {
        this.alerts.notice = res.data.list
      }, err=> {

      })
    },
    //获取娱乐下面的所有视频列表
    getEntertainmentList(){
      this.$p({
        url: this.$api.newsQuery,
        params: {
          pageSize: this.pageSize + 10,
          category: 4,
          type: '精彩VIDEO'
        }
      }).then(res=> {

        var arr = JSON.parse(JSON.stringify(res.data.list));
        arr.forEach((e, index)=> {
          arr[index].imgUrl = this.$baseU + e.imgUrl;
          arr[index].videoUrl = this.$baseU + e.videoUrl;
        });
        this.amusement.videoList = JSON.parse(JSON.stringify(arr));
        this.amusement.video = arr[0];
      }, err=> {

      })
    },
    //获取快讯模块下最新的两条数据
    getInformationList1(){
      this.$p({
        url: this.$api.newsQuery,
        params: {
          pageSize: 2,
          category: 1
        }
      }).then(res=> {
        this.alerts.leftTopShow = res.data.list[0];
        this.alerts.leftBottomShow = res.data.list[1];
        this.alerts.leftTopShow.imgUrl = this.$baseU + res.data.list[0].imgUrl;
        this.alerts.leftBottomShow.imgUrl = this.$baseU + res.data.list[1].imgUrl;
      }, err=> {

      })
    },
    //获取探城模块下的数据
    getcitySearcherList(str){
      return new Promise((resolve, reject)=> {
        this.$p({
          url: this.$api.newsQuery,
          params: {
            pageSize: 1,
            category: 8,
            type: str
          }
        }).then(res=> {
          let data = res.data.list[0];
          resolve(data)
        }, err=> {

        })
      })
    },
    //获取探城下面的探吃第一条数据
    getcityEatList(type){
      this.getcitySearcherList(type).then(res=> {
        this.exploreCity.leftShow = res;
        this.exploreCity.leftShow.imgUrl = this.$baseU + res.imgUrl;
      });
    },
    //获取探城下面的探玩第一条数据
    getcityPlayList(type){
      this.getcitySearcherList(type).then(res=> {
        this.exploreCity.rightTopShow = res;
        this.exploreCity.rightTopShow.imgUrl = this.$baseU + res.imgUrl;
      });
    },
    //获取探城下面的探逛第一条数据
    getcityVisitList(type){
      this.getcitySearcherList(type).then(res=> {
        this.exploreCity.rightBottomShow = res;
        this.exploreCity.rightBottomShow.imgUrl = this.$baseU + res.imgUrl;
      });
    },
    //获取网红模块的个人展示列表
    getPersonalList(){
      this.$p({
        url: this.$api.memeQuery,
        params: {
          pageSize: 1,
        }
      }).then(res=> {
        this.netRed.leftShow = res.data.list[0];
        this.netRed.leftShow.imgUrl = this.$baseU + res.data.list[0].imgUrl;
      }, err=> {

      })
    },
    //获取网红模块的个人图集列表
    getNetredAtlasList(){
      this.$p({
        url: this.$api.memeQueryImgs,
        params: {
          pageSize: 1,
        }
      }).then(res=> {
        this.netRed.rightBottomShow = res.data.list[0];
        this.netRed.rightBottomShow.imgUrl1 = this.$baseU + res.data.list[0].imgUrl1;
      }, err=> {

      })
    },
    //获取网红模块的最新资讯列表
    getNetredInformationList(){
      this.$p({
        url: this.$api.newsQuery,
        params: {
          pageSize: 4,
          category: 7,
          type: '最新资讯'
        }
      }).then(res=> {
        this.netRed.rightTopShow = res.data.list[0];
        this.netRed.rightTopShow.imgUrl = this.$baseU + res.data.list[0].imgUrl;
        this.netRed.netAll = res.data.list
      }, err=> {

      })
    }
  },
  mounted(){
    //页面加载获取快讯模块的招聘信息列表
    this.getInformationList()
    //页面加载获取娱乐下面的视频列表
    this.getEntertainmentList()
    //获取快讯模块下最新的两条数据
    this.getInformationList1()
    //获取探城下面的探吃第一条数据
    this.getcityEatList('探吃')
    //获取探城下面的探玩第一条数据
    this.getcityPlayList('探玩')
    //获取探城下面的探逛第一条数据
    this.getcityVisitList('探逛')
    //获取网红模块的个人展示列表
    this.getPersonalList()
    //获取网红模块的个人图集列表
    this.getNetredAtlasList()
    //获取网红模块的最新资讯列表
    this.getNetredInformationList()
  }
}
