<template>
  <div>
    <div class="container">
      <div class="ad">
        <img src="../../../assets/images/treeWar.png" alt="">
        <div class="des">
          寄存内心秘密的地方，那些现实中不曾发出的声音请把他留在这里
          <div class="hr"></div>
        </div>
      </div>
      <div class="list">
        <div class="listB clear" v-for="(item,index) in list" :key="index">
          <div class="headImg">
            <img src="../../../assets/images/treeWarHead.png" width="70" height="70" alt="加载失败">
            <p>神秘树洞</p>
          </div>
          <div class="listC">
            <p>{{item.content}}</p>
            <p><span>{{item.createtime}}</span><i class="iconfont icon-icon_share"></i></p>
          </div>
        </div>
      </div>
      <el-pagination class="pagination"
                     background
                     @current-change="handleCurrentChange"
                     :current-page.sync="current"
                     :page-size="pageSize"
                     :total="total"
                     layout="prev, pager, next">
      </el-pagination>

    </div>
    <div class="send clear">
      <div>
        <div class="sendImg">
          <img src="../../../assets/images/treeWarHead.png" alt="">
        </div>
        <div class="text">
          <textarea v-model="content" placeholder="想说什么就说什么吧"></textarea>
        </div>
      </div>
      <button class="sendSecret" @click="send"><i class="iconfont icon-fasong"></i>发送</button>
    </div>
  </div>

</template>
<script>
    export default require('./treeWarCtr');
</script>
<style scoped>
  .pagination {
    text-align: center;
    margin-top:50px;
  }
  .container {
    width:1200px;
    padding:50px;
    box-sizing: border-box;
    background-color: white;
    margin:0 auto;
  }

  .ad {
    position:relative;
    width:100%;
    height:500px;
  }
  .ad img {
    width:100%;
    height:100%;
  }
  .des {
    position:absolute;
    width:100%;
    text-align: center;
    font-size:18px;
    color:white;
    bottom:100px;
  }
  .hr {
    width:250px;
    margin:30px auto;
    border-bottom:1px solid #fff;
  }
  .list {
    margin-top:50px;
    border:1px solid #e2e2e2;
  }
  .listB {
    padding:15px;
    border-bottom:1px solid #e2e2e2;
  }
  .listB:last-child{
    border-bottom:none;
  }
  .headImg {
    width:200px;
    text-align: center;
    float: left;
  }
  .headImg img {
    width:70px;
    height:70px;
    border-radius: 100%;
  }
  .headImg p {
    margin-top:10px;
  }
  .listC {
    width:860px;
    float: left;
  }
  .listC p:nth-of-type(1) {
    width:100%;
    /*height:80px;*/
    /*overflow: auto;*/
  }
  .listC p:nth-of-type(2) {
    margin-top:70px;
    color:#999;
  }
  .listC p i{
    float: right;
    cursor: pointer;
  }

  .send {
    width:1200px;
    background-color: white;
    margin:50px auto 100px;
    box-sizing: border-box;
    padding:30px;
  }
  .sendImg {
    width:70px;
    margin-right:15px;
  }
  .sendImg img {
    width:70px;
    height:70px;
    border-radius: 100%;
  }
  .send>div {
    width:100%;
    display: flex;
    flex-direction: row;
  }
  .send .text {
    flex: 1;
  }
  .send textarea {
    width:100%;
    border:1px solid #e2e2e2;
    resize:none;
    border-radius: 10px;
    height:100px;
    padding:15px 30px;
    box-sizing: border-box;
    outline: none;
  }
  .sendSecret {
    width:100px;
    height:40px;
    background-color: #97857b;
    border:none;
    outline: none;
    border-radius: 40px;
    float: right;
    margin-top:15px;
    color:white;
    cursor: pointer;
  }
  .sendSecret i {
    margin-right:10px;
  }
</style>
