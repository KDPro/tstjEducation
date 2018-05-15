export default{
    data() {
        return {
            wish: {
                content: '',
                name: ''
            },
            arrWishing: [],
            current: 1,
            oldCurrent: null,
            pageSize: 100
        }
    },
    methods: {
        //点击许愿按钮
        send() {

            var user = JSON.parse(this.$c.getStorage('userInfo'))
            //判断用户是否登录
            if(!user){
                this.$message.warning({
                    message: '您还没有登录，或登录已过期，请重新登录后操作',
                  });
                  this.wish.content = '';
                  this.wish.name = '';
                return;
            }

            if(!this.wish.content || !this.wish.name){
                this.$message.error({
                    message: '错了哦，输入内容不全',
                  });
                return;
            }



            this.$p({
                url: this.$api.wishingTree,
                params: {
                    type: 1,
                    userid: user.id,
                    content: this.wish.content,
                    realname: this.wish.name
                }
            }).then(res=>{
                if(res.code == 0){
                    this.$message({
                        message: '恭喜你，许愿成功',
                        type: 'success'
                      });
                      this.current = 1;
                      this.getWishList(this.current)
                      this.wish.content = '';
                      this.wish.name = '';
                }
            },err=>{
                this.$message.error('服务器异常');
            })
        },
        //点击上一棵
        preTree(){
            if(this.current == 1){
                this.$message({
                    message: '没有上一棵树了！',
                    type: 'warning'
                  });
                return;
            }

            this.wish.content = '';
            this.wish.name = '';
            this.current--;
            this.getWishList(this.current)
        },
        //点击下一棵
        nextTree(){
            this.wish.content = '';
            this.wish.name = '';
            this.oldCurrent = this.current;
            this.current++;
            this.getWishList(this.current)
        },
        //获取所有的许愿内容
        getWishList(current){
            this.$p({
                url: this.$api.getLeaves,
                params: {
                    type: 1,
                    pageSize: this.pageSize,
                    current: current,
                    orderBy: 'createtime',
                }
            }).then(res=>{
                if(res.msg == 502){
                    this.$message({
                        message: '没有下一棵树了！',
                        type: 'warning'
                      });
                      this.current = this.oldCurrent;
                      return;
                }
                if(res.code == 0){
                    this.arrWishing = res.data.list;
                    this.$nextTick(()=>{
                       this.random()
                    })
                 }
            },err=>{

            })
        },

        //随机生成许愿树叶子的位置
        random(){
            let leaf = this.$refs.leaf.getElementsByClassName('leaf');
            let width = this.$refs.leaf.offsetWidth;
            let height = this.$refs.leaf.offsetHeight;
            for(let i=0; i<leaf.length; i++){
                let left = this.getRandom(100,width-200) + 60;
                let top = this.getRandom(50,height-200) + 60;
                leaf[i].style.top = top + 'px'
                leaf[i].style.left = left + 'px'
           }
        },
        //生成指定范围内的不重复随机数
      getRandom(start, end) {
        let length = end - start;
        let num = Math.random() * (length) + start;
        return num;
      },
    },
    mounted(){
        this.getWishList(this.current)
    }
}
