<template>
  <div class="container">
    <div class="con">
      <div class="conB clear" v-for="item,index in list" :key="index" @click="toVoteSign(item)">
        <img :src="item.imgUrl" alt="">
        <div class="conDes">
          <p>{{item.title}}</p>
          <p><button class="btn">参与投票{{item.e}}</button><span>{{item.pubDate}}</span></p>
        </div>
      </div>
    </div>
    <el-pagination class="pagination"
                   background
                   @current-change="handleCurrentChange"
                   :current-page.sync="currentPage"
                   :page-size="pageSize"
                   :total="total"
                   layout="prev, pager, next">
    </el-pagination>
  </div>
</template>
<script>
  export default require('./voteCtr');
</script>
<style scoped>
  .container {
    width:100%;
    background-color: white;
    padding:50px;
    padding-top:0;
    box-sizing: border-box;
    margin-bottom:100px;
  }
  .con {
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .conB {
    width:525px;
    margin-top:50px;
    border-radius: 5px 5px 0 0;
  }
  .conB img{
    width:525px;
    height:325px;
    border-radius: 5px 5px 0 0;
    float: left;
  }
  .conDes {
    width:100%;
    height:120px;
    padding:20px 30px;
    border:1px solid #e3e3e3;
    box-sizing: border-box;
    border-top:none;
    float: left;
  }
  .conDes p:nth-of-type(1) {
    color:#333;
    margin-bottom:15px;
    font-size: 16px;
    font-weight: bold;
  }
  .conDes p:nth-of-type(2){
    color:#666;
    margin-bottom:15px;
  }
  .btn {
    width:100px;
    padding:8px 0;
    border-radius: 5px;
    background-color: #dd8150;
    border:none;
    color:white;
    outline:none;
    cursor: pointer;
  }
  .conDes p:nth-of-type(2) span{
    float: right;
    margin-top:10px;
  }
  .conDes p:nth-of-type(3){
    color:#999;
    text-align: right;
  }
  .pagination {
    text-align: center;
    margin-top:50px;
  }

</style>

