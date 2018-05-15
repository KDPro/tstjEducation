<template>
    <div class="container">
      <div class="amusement">
        <div class="amusement_music">
          <div class="amusement_video">
            <video id="video" :poster="amusement.video.imgUrl" controls="controls" width="830" height="495" :src="amusement.video.videoUrl"></video>
          </div>
          <div class="amusement_list" :class="{amusement_list_active: amusement.btnFlag}">
            <h3 class="amusement_title">相关视频</h3>
            <ul class="amusement_video_list">
              <li v-for="(item,index) in amusement.videoList" :key="index" @click="changeVideo(item)">
                <img :src="item.imgUrl" width="80" height="65" alt="">
                <span>{{item.titile}}</span>
              </li>
            </ul>
            <div class="amusement_btn" @click="amusementBtn">{{amusement.btn}}</div>
          </div>
        </div>
        <div class="amusementT"><p>{{amusement.video.titile}}</p><p>{{amusement.video.pubDate}}</p></div>
      </div>
      <div class="actHeader">
        <ul class="clear">
          <li :class="thisIndex==index?'liAct':''" v-for="item,index in tabBarList" :key="index" @click="toLink(index)">{{item.title}}</li>
        </ul>
      </div>

      <!--列表-->
      <div class="con">
        <div class="conB clear" v-for="(item,index) in list" :key="index" @click="details(item)">
          <img :src="item.imgUrl" alt="加载失败">
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
    export default require('./videoCtr');
</script>
<style scoped>
  .container {
    width:1200px;
    background-color: white;
    margin:50px auto 100px;
    padding:50px;
    box-sizing: border-box;
  }

  /* 娱乐 */
  .amusement_music{
    /* position: relative; */
    display: flex;
    display: -webkit-flex;
    width: 100%;
    height: 495px;
    background-color: #ddd;
    overflow: hidden;
  }
  .amusementT{
    width:100%;
    height:50px;
    padding:0 30px;
    box-sizing: border-box;
    color:#333;
    background-color: #f2f2f2;
    line-height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .amusement_list{
    /* position: absolute;
    right: 0;
    top: 0; */
    position: relative;
    height: 100%;
    width: 270px;
    background: #4b4b4b;
    transition: all .5s;
  }
  .amusement_list_active{
    width: 0px;
    transition: all .5s;
  }
  .amusement_video_list{
    height: 435px;
    width: 100%;
    margin-top: 10px;
    padding: 0 15px;
    overflow-y: scroll;
  }
  .amusement_video_list li{
    padding-bottom: 15px;
    cursor: pointer;
  }
  .amusement_video_list li img{
    vertical-align: middle;
  }
  .amusement_video_list li span{
    padding-left: 10px;
    vertical-align: middle;
    display: inline-block;
    width: 150px;
    color: #fff;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .amusement_title{
    line-height: 50px;
    padding-left: 20px;
    color: #fff;
  }
  .amusement_video{
    width: 830px;
    height: 100%;
    /* background: pink; */
    margin: 0 auto;
  }
  .amusement_video video{
    object-fit: fill;
  }
  .amusement_btn{
    position: absolute;
    z-index: 999;
    left: -18px;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    content: "<";
    width: 18px;
    height: 60px;
    background: rgba(0, 0, 0, .3);
    text-align: center;
    line-height: 60px;
    color: #fff;
    cursor: pointer;
  }
  .amusement_more{
    margin: 55px auto 90px;
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
    /*justify-content: space-between;*/
    flex-wrap: wrap;
  }
  .conB {
    width:335px;
    margin:50px 13px 0;
    cursor: pointer;
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
