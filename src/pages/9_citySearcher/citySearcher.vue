<template>
    <div class="container">
      <div class="ad">
        <img src="../../assets/images/city.png" alt="">
      </div>
      <div class="actHeader">
        <ul class="clear">
          <li :class="thisIndex==index?'liAct':''" v-for="item,index in tabBarList" :key="index" @click="toLink(item,index)">{{item.title}}</li>
        </ul>
      </div>

      <!--列表-->
      <div class="con">
        <div class="conB clear" v-for="item,index in list" :key="index" @click="toCityDetail(item)">
          <img :src="item.imgUrl" alt="">
          <div class="conDes">
            <p>{{item.titile}}</p>
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
    export default require('./citySearcherCtr');
</script>
<style scoped>
  .container {
    width:1200px;
    background-color: white;
    margin:50px auto 100px;
    padding:50px;
    box-sizing: border-box;
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

  /*小标题*/
  .actHeader{
    padding:40px 0 0 0;
    text-align: center;
  }
  .actHeader ul {
    width:318px;
    margin:0 auto;
  }
  .actHeader ul li {
    width:100px;
    padding:7px 0;
    border:3px solid #e2e2e2;
    float: left;
    cursor: pointer;
  }
  .actHeader ul li.liAct {
    border:3px solid #97857b;
    background-color: #97857b;
    color:white;
  }

  /*列表*/
  .con {
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .conB {
    width:335px;
    margin-top:50px;
  }
  .conB img{
    width:100%;
    height:231px;
    float: left;
  }
  .conDes {
    width:100%;
    height:60px;
    padding:20px 30px;
    border:1px solid #e3e3e3;
    box-sizing: border-box;
    border-top:none;
    float: left;
  }
  .conDes p:nth-of-type(1) {
    color:#333;
    margin-bottom:15px;
    font-size: 15px;
  }
  .conDes p:nth-of-type(2){
    color:#666;
    margin-bottom:15px;
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
