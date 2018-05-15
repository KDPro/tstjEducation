<template>
  <div class="container">
    <div class="ad">
      <img :src="src" alt="">
    </div>
    <div class="actHeader">
      <ul class="clear">
        <li :class="thisIndex==index?'liAct':''" v-for="(item,index) in tabBarList" :key="index" @click="toLink(item,index)">{{item.title}}</li>
      </ul>
    </div>

    <div class="scroll clear">
      <div class="orderAlert" @click="alertOpen">
        <img src="../../../assets/images/orderAlert.png" alt="">
      </div>
      <div class="scrollBox">
        <ul ref="scroll">
          <li v-for="(item,index) in list">{{item.orderName}}用户点歌&emsp;&emsp;————&emsp;&emsp;{{item.musicName}}</li>
          <li v-for="(item,index) in list">{{item.orderName}}用户点歌&emsp;&emsp;————&emsp;&emsp;{{item.musicName}}</li>
          <li v-for="(item,index) in list">{{item.orderName}}用户点歌&emsp;&emsp;————&emsp;&emsp;{{item.musicName}}</li>
        </ul>
      </div>
    </div>

    <!--列表-->
    <div class="con">
      <div class="conB clear" v-for="(item,index) in list" :key="index" @click="toMusicDetail(item)">
        <div class="img">
          <img :src="item.imgUrl" alt="加载失败...">
          <!--<div class="playBox">-->
            <!--<i class="iconfont icon-play" :class="[item.isPlay?'icon-step':'icon-play']" @click="play(index)"></i>-->
            <!--<audio :ref="['audio'+index]" :src="item.musicUrl" controls></audio>-->
          <!--</div>-->
        </div>
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
    <div class="alert" v-if="showAlert">
      <div class="alertBox">
        <i class="iconfont icon-remove" @click="alertOpen"></i>
        <p>点歌台</p>
        <el-input v-model="musicName" placeholder="请输入歌名"></el-input>
        <el-input v-model="musicSinger" placeholder="请输入歌手"></el-input>
        <el-input v-model="musicTheme" placeholder="请输入主题"></el-input>
        <el-input type="textarea" :rows="3" v-model="musicHeart" placeholder="心里话"></el-input>
        <div class="alertBtn" @click="confirmOrder">确定</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default require('./musicOrderCtr');
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
    width:424px;
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
    flex-wrap: wrap;
  }
  .conB {
    width:335px;
    margin:50px 13px 0;
    cursor: pointer;
  }
  .conB .img {
    width:100%;
    height:231px;
    position:relative;
  }
  .conB .playBox {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color: rgba(0,0,0,.5);
    text-align: center;
    line-height: 231px;
  }
  .conB .playBox i {
    font-size:70px;
    color:rgba(255,255,255,.8);
    cursor: pointer;
  }
  .conB .playBox audio {
    position:absolute;
    top:0;
    left:0;
    display: none;
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
  .alert {
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background-color: rgba(0,0,0,.5);
  }
  .alertBox {
    width:400px;
    height:450px;
    background-color: white;
    border-radius: 10px;
    position:absolute;
    top:50%;
    left:50%;
    margin-top:-300px;
    margin-left:-250px;
    padding:30px 50px;
    box-sizing: border-box;
  }
  .alertBox i {
    position:absolute;
    top:10px;
    right:10px;
    font-size:20px;
  }
  .alertBox p{
    text-align: center;
    margin-bottom:20px;
  }
  .alertBox .el-input {
    margin-bottom:20px;
  }
  .alertBtn {
    width:100%;
    height:40px;
    line-height: 40px;
    text-align: center;
    color:white;
    font-size:16px;
    background-color: #5b565d;
    margin-top:20px;
    cursor: pointer;
  }
  .scroll {
    margin:50px 13px 0;
  }
  .orderAlert {
    width:315px;
    height:225px;
    float: left;
  }
  .orderAlert img {
    width:100%;
    height:100%;
    cursor: pointer;
  }
  .scrollBox {
    float: left;
    width:757px;
    height:225px;
    border:1px solid #e2e2e2;
    box-sizing:border-box;
    overflow: hidden;
  }
  .scrollBox li{
    height:45px;
    line-height: 45px;
    text-indent: 50px;
    width:100%;
    box-sizing: border-box;
    border:1px solid #e2e2e2;
  }
</style>

