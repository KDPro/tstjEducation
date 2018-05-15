export default{
    data() {
        return {
            firstIndex: null,
            seconedId: '',
            threeId: '',
            pageSize: 10,
            current: 1,
            total: 0,
            content: '',
            firstContent: '',
            seconedContent: '',
            threeContent: '',
            userImg: '',
            allList: [],
            user: {}
        }
    },
    methods: {
        //判断用户是否已经登录
        isLogin(){
             if(!this.user){
                this.$message.error({
                    message: '您还没有登录，或登录已过期，请重新登录后操作',
                });
                this.content = '';
                return false;
            }else{
                return true
            }

        },
        //点击发送按钮
        send() {

            //判断用户是否登录
            if(!this.isLogin()){
                return
            }
            //判读用户是否输入内容
            if(!this.content){
                this.$message.error({
                    message: '请说出你的忧愁，让大家帮你一起解忧！',
                    center: true
                  });
                  return;
            }
            //提交操作用户留言
            this.$p({
                url: this.$api.wishingTree,
                params:{
                    type: 3,
                    userid: this.user.id,
                    content: this.content,
                }
            }).then(res=>{
                if(res.code == 0){
                    this.$message({
                        message: '恭喜你，已经留下你的秘密！',
                        type: 'success'
                      });
                      this.content = '';
                      this.current = 1;
                      this.getDisList(this.current,this.pageSize)
                }
            },err=>{

            })

        },

        firstSend(index,id) {
            //判读用户是否输入内容
            if(!this.firstContent){
                this.$message.error({
                    message: '请说出你的忧愁，让大家帮你一起解忧！',
                    center: true
                  });
                  return;
            }
            this.firstIndex = index;

            this.$p({
                url: this.$api.addMessage,
                params: {
                    content: this.firstContent,
                    leafId: id,
                    userid: this.user.id,
                    type: 1
                }
            }).then(res=>{
                if(res.code == 0){
                    this.$message({
                        message: '评论成功！',
                        type: 'success'
                      });
                      this.firstIndex = null;
                      this.firstContent = '';
                      this.getDisList(this.current,this.pageSize)
                }
            },err=>{

            })


        },

        seconedSend(index,id,id1,item) {
            if(!this.seconedContent){
                this.$message.error({
                    message: '请说出你的忧愁，让大家帮你一起解忧！',
                    center: true
                  });
                  return;
            }
            this.$p({
                url: this.$api.addMessage,
                params: {
                    content: this.seconedContent,
                    belongmessageid: id,
                    leafId: id1,
                    userid: this.user.id,
                    type: 1
                }
            }).then(res=>{
                if(res.code == 0){
                    this.$message({
                        message: '评论成功！',
                        type: 'success'
                      });
                      this.seconedId = ''
                      this.seconedContent = '';
                      this.getDisList(this.current,this.pageSize)
                }
            },err=>{

            })
        },

        threeSend(index,id1,item){

            if(!this.threeContent){
                this.$message.error({
                    message: '请说出你的忧愁，让大家帮你一起解忧！',
                    center: true
                  });
                  return;
            }
            this.$p({
                url: this.$api.addMessage,
                params: {
                    content: this.threeContent,
                    belongmessageid: item.belongmessage.id,
                    leafId: id1,
                    userid: this.user.id,
                    type: 1
                }
            }).then(res=>{
                if(res.code == 0){
                    this.$message({
                        message: '评论成功！',
                        type: 'success'
                      });
                      this.$set(item,'isShow1',false)
                      this.threeContent = '';
                      this.threeId = '';
                      this.getDisList(this.current,this.pageSize)
                }
            },err=>{

            })
        },

        handleCurrentChange(val) {
          this.current = val;
          this.getDisList(this.current,this.pageSize);
        },

       //评论楼主的问题
       firstDis(index){
        //判断用户是否登录
        if(!this.isLogin()){
            return
        }
        this.firstContent = '';
        this.firstIndex = index;
        this.seconedIndex = null;
        this.threeIndex = null;
       },

       //楼主用户交叉评论第二级
       seconedDis(index,item){
            //判断用户是否登录
        if(!this.isLogin()){
            return
        }
        this.seconedContent = '';
       this.seconedId = item.id;
       this.threeId = '';


       },

        //楼主用户交叉评论第三级，总共只有三级列表
       threeDis(index,item){
           //判断用户是否登录
        if(!this.isLogin()){
            return
        }
        this.threeContent = '';
        this.threeId = item.id;
       },

       //获取用户所有的评论列表
       getDisList(current,pageSize){
        this.$p({
            url: this.$api.getTreeHole,
            params:{
              type: 3,
              current: current,
              pageSize: pageSize
            }
        }).then(res=>{
            if(res.code == 0){
                // this.allList = res.data.list
                this.total = res.data.total;
              var arr = JSON.parse(JSON.stringify(res.data.list));
              arr.forEach((e,index)=>{
                arr[index].createtime = e.createtime.split(" ")[0];
                if(arr[index].user.profilehead) {
                  arr[index].user.profilehead = this.$baseU + e.user.profilehead;
                }else {
                  arr[index].user.profilehead = "../../../static/useImg/defaultHead.jpg";
                }
                if(e.messageList) {
                var twoArr = JSON.parse(JSON.stringify(e.messageList));
                  twoArr.forEach((el,indexl)=>{
                    twoArr[indexl].creationTime = el.creationTime.split(" ")[0];
                    if(twoArr[indexl].user.profilehead) {
                      twoArr[indexl].user.profilehead = this.$baseU + el.user.profilehead;
                    }else {
                      twoArr[indexl].user.profilehead = "../../../static/useImg/defaultHead.jpg";
                    }
                    if(el.childList) {
                      var threeArr = JSON.parse(JSON.stringify(el.childList));
                      threeArr.forEach((ell,indexll)=>{
                        threeArr[indexll].creationTime = ell.creationTime.split(" ")[0];
                        if(threeArr[indexll].user.profilehead) {
                          threeArr[indexll].user.profilehead = this.$baseU + ell.user.profilehead;
                        }else {
                          threeArr[indexll].user.profilehead = "../../../static/useImg/defaultHead.jpg";
                        }
                      });
                      twoArr[indexl].childList = JSON.parse(JSON.stringify(threeArr));
                    }
                  });
                  arr[index].messageList = JSON.parse(JSON.stringify(twoArr));
                }
              });
              this.allList = JSON.parse(JSON.stringify(arr));
            }
        },err=>{

        })
       }
    },
    mounted(){
        this.user = JSON.parse(this.$c.getStorage('userInfo'))
        this.userImg = this.user? `http://192.168.20.133:8886${this.user.profilehead}` : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523947765539&di=1f17c730cabf2559e8a07b797cbb924b&imgtype=0&src=http%3A%2F%2Fnewimg.uumnt.com%2FThumb%2F2017%2F0112%2Fb57a1230e7af1478d8396a5fa436a7e6.jpg'
        this.getDisList(this.current,this.pageSize)
    }
}
