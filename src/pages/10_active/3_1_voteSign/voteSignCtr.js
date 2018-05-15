/**
 * Created by kdkjPC on 2018/4/19.
 */
export default {
  data(){
    return {
      id:"",
      item:{},
      listPerson: [],
      currentPerson: 1,
      sizePerson:6,
      totalPerson:null,
      list: [],
      currentComment: 1,
      sizeComment:10,
      totalComment:null,
      commentText:"",
      searchText:"",
    }
  },
  methods: {
    toRanking(){
      this.$router.push({
        name:"voteRanking",
        query:{
          id:this.id
        }
      })
    },
    toIntroduce(){
      this.$router.push({
        name:"voteAffiche",
        query:{
          id:this.id
        }
      })
    },
    toVipDetail(item){
      this.$router.push({
        name:"voteVipDetail",
        query:{
          id:item.id
        }
      })
    },
    signBtn(){
      if(!this.$c.getStorage("userInfo")) {
        this.$message({
          message: "您还没有登录，或登录已过期，请重新登录后操作",
          type: 'warning',
          duration: 1500
        });
        return;
      }
        if(this.item.status !=1) {
          this.$message({
            message: "现在不能报名",
            type: 'warning',
            duration: 1500
          });
          return ;
        }
        this.$router.push({
          name:"voteSignForm",
          query:{
            id:this.id
          }
        })
    },
    /**
     * 投票按钮
     */
    voteBtn(item,index){
      // if(!this.$c.getStorage("userInfo")) {
      //   this.$message({
      //     message: "您还没有登录，或登录已过期，请重新登录后操作",
      //     type: 'warning',
      //     duration: 1500
      //   });
      //   return;
      // }
        if(this.item.status !=2) {
          this.$message({
            message: "现在不能投票",
            type: 'warning',
            duration: 1500
          });
          return ;
        }
        this.$p({
          url:this.$api.addVote,
          params:{
            actId:this.id,
            memeId:item.id
          }
        }).then(res=>{
          this.$message({
            message: "投票成功",
            type: 'success',
            duration: 1500
          });
          this.listPerson[index].voteTotal = parseInt(this.listPerson[index].voteTotal) + 1;
        },errRes=>{

        })
    },
    /**
     * 搜索
     */
    search(){
      this.currentPerson = 1;
      if(this.searchText=="" ){
        this.$message({
          message: "请输入要搜索的内容",
          type: 'warning',
          duration: 1500
        });
        return;
      }
      var json = {
        pageSize: this.sizePerson,
        current: this.currentPerson,
        actId:this.id
      };
      if(isNaN(Number(this.searchText))){
        json.memeName = this.searchText;
      }else {
        json.id = Number(this.searchText);
      }
      this.getPersonList(json);
    },
    getDetail(){
      this.$g({
        url:this.$api.activeFindOneById,
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
    },
    /**
     * 报名人分页当前第几页
     */
    handleCurrentPerson(val) {
      this.currentPerson = val;
      this.getPersonList();
    },
    /**
     * 评论 分页当前第几页
     */
    handleCurrentComment(val) {
      this.currentComment = val;
      this.getCommentList();
    },
    getPersonList(json){
      this.$p({
        url: this.$api.memeQuery,
        params:json?json:{
          pageSize: this.sizePerson,
          current: this.currentPerson,
          actId:this.id
        },
        load:false
      }).then(res=> {
        this.totalPerson = res.data.total;
        var arr = res.data.list;
        arr.forEach((e, index)=> {
          arr[index].pubDate = e.pubDate.split(" ")[0];
          arr[index].imgUrl = this.$baseU + e.imgUrl;
        });
        this.listPerson = JSON.parse(JSON.stringify(arr));

      }, errRes=> {

      })
    },
    getCommentList(){
      this.$p({
        url: this.$api.queryCommentsByActId,
        params: {
          pageSize: this.sizeComment,
          current: this.currentComment,
          actId:this.id
        },
        load:false
      }).then(res=> {
        this.totalComment = res.data.total;
        var arr = res.data.list;
        arr.forEach((e, index)=> {
          if(arr[index].creationTime ) {
            arr[index].creationTime = e.creationTime.split(" ")[0];
          }
          if(arr[index].user) {
            if(arr[index].user.profilehead) {
              arr[index].user.profilehead = this.$baseU + e.user.profilehead;
            }else {
              arr[index].user.profilehead = "../../../static/useImg/defaultHead.jpg";
            }
          }
        });
        this.list = JSON.parse(JSON.stringify(arr));

      }, errRes=> {

      })
    },
    comment(){
      if(!this.$c.getStorage("userInfo")) {
        this.$message({
          message: "您还没有登录，或登录已过期，请重新登录后操作",
          type: 'warning',
          duration: 1500
        });
        return;
      }
      if(this.commentText=="") {
        this.$message({
          message: "请填写想说的话",
          type: 'warning',
          duration: 1500
        });
        return;
      }
      this.$p({
        url:this.$api.addComment,
        params:{
          actId:this.id,
          type:2,
          content:this.commentText,
          userid:JSON.parse(this.$c.getStorage("userInfo")).id
        }
      }).then(res=>{
        this.$message({
          message: "发布成功",
          type: 'success',
          duration: 1500
        });
        this.commentText = "";
        this.getCommentList();
      },errRes=>{

      })
    }
  },
  mounted(){
    this.id = this.$route.query.id;
    this.getDetail();
    this.getPersonList();
    this.getCommentList();
  }
}
