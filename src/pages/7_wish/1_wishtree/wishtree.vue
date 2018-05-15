<template>
  <div class="wishtree">
      <div class="tree">
          <div class="tree_list" ref="leaf">
                  <span class="leaf" v-for="(item,index) in arrWishing" :key="index"></span>
          </div>
      </div>
      <div class="tree_btn">
            <div class="pre_tree" @click="preTree">上一棵</div>
            <div class="next_tree" @click="nextTree">下一棵</div>
        </div>
      <h5 class="tree_title">请许愿</h5>
      <div class="tree_content">
          <p>许愿内容</p>
          <textarea name="" id="" v-model="wish.content" placeholder="请输入许愿内容"></textarea>
          <p>许愿人</p>
          <div class="tree_name">
              <input type="text" v-model="wish.name" placeholder="请输入许愿人姓名">
              <div @click="send"><span class="iconfont icon-fasong"></span>发布</div>
          </div>
      </div>
  </div>
</template>


<script>
export {default} from './wishtreeCtr'
</script>

<style scoped>
.wishtree{
    margin-bottom: 95px;
}
.tree{
    position: relative;
    width: 100%;
    height: 900px;
    background-image: url('../../../assets/images/wishtree1.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-top: -40px;
}
.tree_list{
    position: relative;
    width: 60%;
    height: 640px;
    background-image: url('../../../assets/images/tree.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin: 100px auto 0;
}
.leaf{
position: absolute;
width: 30px;
height: 50px;
display: inline-block;
background-image: url('../../../assets/wishPkg.png');
background-size: cover;
}
.tree_btn{
    /* position: absolute;
    bottom: 85px;
    left: 50%;
    margin-left: -192px; */
    width: 395px;
    height: 46px;
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    margin: 0 auto 50px;
}
.tree_btn div{
    width: 153px;
    height: 100%;
    line-height: 46px;
    text-align: center;
    color: #fff;
    border-radius: 35px;
}
.tree_btn div.pre_tree{
    background-color: #97857b;
}
.tree_btn div.next_tree{
    background-color: #db844e;
}
.tree_title{
    text-align: center;
    font-size: 20px;
    padding-bottom: 70px;
}
.tree_content{
    width: 800px;
    margin: 0 auto;
}
.tree_content p{
    padding-bottom: 25px;
}
.tree_content textarea{
    width: calc(100% - 12px);
    height: 128px;
    resize: none;
    outline: none;
    border: 1px solid #ddd;
    border-radius: 6px;
    padding: 5px;
}
.tree_name{
    width: 630px;
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
}
.tree_name input{
    width: 488px;
    height: 45px;
    outline: none;
    border: 1px solid #ddd;
    padding-left: 10px;
    border-radius: 6px;
}
.tree_name div{
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #97857b;
    border-radius: 20px;
    color: #fff;
    margin-top: 3px;
}
.tree_name div span{
    font-size: 22px;
    padding-right: 8px;
    vertical-align: middle;
}
</style>

