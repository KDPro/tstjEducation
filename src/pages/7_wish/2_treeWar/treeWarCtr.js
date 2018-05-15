/**
 * Created by kdkjPC on 2018/4/17.
 */
export default {
  data(){
    return {
      pageSize: 10,
      total: 0,
      content: '',
      current: 1,
      list:[],
      userSrc: '',
      user: {}
    }
  },
  methods:{
    handleCurrentChange(val) {
      this.current = val;
      console.log(this.current);
      this.getTreeHoleList(this.pageSize,val)
    },


    //点击发送按钮
    send(){
      var user = JSON.parse(this.$c.getStorage('userInfo'))
      //判断用户是否登录
      if(!user){
        this.$message.error({
            message: '您还没有登录，或登录已过期，请重新登录后操作',
          });
          this.content = '';
          this.name = '';
        return;
    }
      //判断用户是否输入内容
      if(!this.content){
        this.$message.error({
            message: '错了哦，输入内容不全',
          });
        return;
    }

    this.$p({
      url: this.$api.wishingTree,
      params: {
                type: 2,
                userid: user.id,
                content: this.content,
            }
        }).then(res=>{
            if(res.code == 0){
                this.$message({
                    message: '恭喜你，已经留下你的秘密！',
                    type: 'success'
                  });
                  this.current = 1;
                  this.getTreeHoleList(this.pageSize,this.current)
                  this.content = '';

            }
        },err=>{
            this.$message.error('服务器异常');
        })
    },
    //获取神秘树洞的所有列表
      getTreeHoleList(pageSize,current){
        this.$p({
          url: this.$api.getTreeHole,
          params: {
                    type: 2,
                    pageSize: pageSize,
                    current: current
                }
            }).then(res=>{
                if(res.code == 0){

                  this.total = res.data.total;
                  var arr = res.data.list;
                  arr.forEach((e,index)=>{
                    arr[index].createtime = e.createtime.split(" ")[0];
                    if(arr[index].user.profilehead) {
                      arr[index].user.profilehead = this.$baseU + e.user.profilehead;
                    }else {
                      arr[index].user.profilehead = "../../../static/useImg/defaultHead.jpg";
                    }
                  });
                  this.list = JSON.parse(JSON.stringify(arr));
                }
            },err=>{
                this.$message.error('服务器异常');
            })
      },
      //判断用户是否登录，如果登录拿到用户头像，否则默认头像
      getUserSrc(){
       this.user = JSON.parse(this.$c.getStorage('userInfo'));
       this.userSrc = this.user? this.$baseU + this.user.profilehead : '../../../../static/userImg/defaultHead.jpg'
      }
  },
  mounted(){
      //调用函数，获取神秘树洞的列表
      this.getTreeHoleList(this.pageSize,this.current);

      this.getUserSrc();

  }
}
