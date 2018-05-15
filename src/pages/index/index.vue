<template>
  <div class="index">
    <!-- 首页的轮播图 -->
    <el-carousel :interval="5000" arrow="always" height="500px" class="carousel">
      <el-carousel-item v-for="(item,index) in carousel" :key="index">
        <div class="sweiper">
          <h1 class="sweiper_title">{{item.title}}</h1>
          <p class="sweiper_content">{{item.content}}</p>
        </div>
        <img :src="item.src" alt="">
      </el-carousel-item>
    </el-carousel>
    <!-- 主体部分内容 -->
    <div class="main">
      <!-- 许愿树 -->
      <div class="wish">
        <div class="wish_title">
          <div class="wish_title_first">许愿</div>
          <div class="wish_title_seconed">WISH</div>
          <div class="wishTree">
            <div class="wishNav">
              <div class="wishNav_bar" v-for="(item,index) in wish.wishNav" :key="index" @click="wishNav(index)">
                {{item.title}}
              </div>
            </div>
            <div class="wishNext">
              <div class="wishNext_top" v-for="(item,index) in wish.wishNext" :key="index" @click="wishNext(index)">
                <span>{{item.firstTitle}}</span>
                <span>{{item.seconedTitle}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 快讯 -->
      <div class="alerts">
        <div class="main_top">
          <div class="main_title">
            <span>快讯</span>
            <span>NEWS FLASH</span>
          </div>
        </div>
        <div class="main_header">
          <ul>
            <li v-for="(item,index) in alerts.header" :key="index" @click="goInformation(index)">
              <a href="javascript:void(0)">{{item.title}}</a>
            </li>
          </ul>
        </div>
        <div class="alerts_main">
          <div class="alerts_left">
            <div class="alerts_left_top" @click="fastDetail(alerts.leftTopShow.id)">
              <img :src="alerts.leftTopShow.imgUrl" width="100%" height="100%" alt="加载失败">
              <span class="title">{{alerts.leftTopShow.titile}}</span>
              <span class="time">{{alerts.leftTopShow.pubDate}}</span>
            </div>
            <div class="alerts_left_bottom" @click="fastDetail(alerts.leftBottomShow.id)">
              <img :src="alerts.leftBottomShow.imgUrl" width="100%" height="100%" alt="加载失败">
              <span class="title">{{alerts.leftBottomShow.titile}}</span>
              <span class="time">{{alerts.leftTopShow.pubDate}}</span>
            </div>
          </div>
          <div class="alerts_right">
            <div class="topBar"></div>
            <ul>
              <li v-for="(item,index) in alerts.notice" :key="index" @click="jobDetail(item)">
                <a>
                  <span class="type">【{{item.position}}】</span>
                  {{item.title}}
                  <span class="time">{{item.pubDate}}</span>
                </a>
              </li>
            </ul>
            <a class="more alerts_more" @click="job">
              <span>更多</span>
            </a>
          </div>
        </div>
      </div>
      <!-- 娱乐 -->
      <div class="amusement">
        <div class="main_top">
          <div class="main_title">
            <span>娱乐</span>
            <span>ENTERTAINMENT</span>
          </div>
        </div>
        <div class="main_header">
          <ul>
            <li v-for="(item,index) in amusement.header" :key="index" @click="goEntertainment(index)">
              <a href="javascript:void(0)">{{item.title}}</a>
            </li>
          </ul>
        </div>
        <div class="amusement_music">
          <div class="amusement_video">
            <video id="video" :poster="amusement.video.imgUrl" controls="controls" width="930" height="495"
                   :src="amusement.video.videoUrl"></video>
          </div>
          <div class="amusement_list" :class="{amusement_list_active: amusement.btnFlag}">
            <h3 class="amusement_title">相关视屏</h3>
            <ul class="amusement_video_list">
              <li v-for="(item,index) in amusement.videoList" :key="index" @click="changeVedio(item)">
                <img :src="item.imgUrl" width="80" height="65" alt="">
                <span>{{item.newsText}}</span>
              </li>
            </ul>
            <div class="amusement_btn" @click="amusementBtn">{{amusement.btn}}</div>
          </div>
        </div>
        <a class="more amusement_more" @click="video">
          <span>更多</span>
        </a>
      </div>
      <!-- 探城 -->
      <div class="exploreCity">
        <div class="main_top">
          <div class="main_title">
            <span>探城</span>
            <span>EXPLORE THE CITY</span>
          </div>
        </div>
        <div class="main_header">
          <ul>
            <li v-for="(item,index) in exploreCity.header" :key="index" @click="goExploreCity(index)">
              <a href="javascript:void(0)">{{item.title}}</a>
            </li>
          </ul>
        </div>
        <div class="alerts_main">
          <div class="exploreCity_left">

            <div class="topBar"></div>
            <div class="exploreCity_content" @click="cityDetail(exploreCity.leftShow.id)">
              <img :src="exploreCity.leftShow.imgUrl" width="100%" height="100%" alt="">
              <span class="title">{{exploreCity.leftShow.titile}}</span>
              <span class="time">{{exploreCity.leftShow.pubDate}}</span>
              <div class="vip">探吃</div>
            </div>
            <a class="more exploreCity_more" @click="city">
              <span>更多</span>
            </a>
          </div>
          <div class="exploreCity_right">
            <div class="alerts_left_top" @click="cityDetail(exploreCity.rightTopShow.id)">
              <img :src="exploreCity.rightTopShow.imgUrl" width="100%" height="100%" alt="">
              <span class="title">{{exploreCity.rightTopShow.titile}}</span>
              <span class="time">{{exploreCity.rightTopShow.pubDate}}</span>
              <div class="vip">探玩</div>
            </div>
            <div class="alerts_left_bottom" @click="cityDetail(exploreCity.rightBottomShow.id)">
              <img :src="exploreCity.rightBottomShow.imgUrl" width="100%" height="100%" alt="">
              <span class="title">{{exploreCity.rightBottomShow.titile}}</span>
              <span class="time">{{exploreCity.rightBottomShow.pubDate}}</span>
              <div class="vip">探逛</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 网红 -->
      <div class="netRed">
        <div class="main_top">
          <div class="main_title">
            <span>网红</span>
            <span>INTERNET CELEBRITY</span>
          </div>
        </div>
        <div class="main_header">
          <ul>
            <li v-for="(item,index) in netRed.header" :key="index" @click="goNetRed(index)">
              <a href="javascript:void(0)">{{item.title}}</a>
            </li>
          </ul>
        </div>
        <div class="alerts_main">
          <div class="exploreCity_left">

            <div class="topBar"></div>
            <div class="exploreCity_content" @click="netRedDetail(netRed.leftShow.id,0)">
              <img :src="netRed.leftShow.imgUrl" width="100%" height="100%" alt="">
              <div class="netred_title">
                <h2>{{netRed.leftShow.memeActName}}网红</h2>
                <p>网红基本信息</p>
                <p>{{netRed.leftShow.memeName}}</p>
              </div>
              <ul class="netRed_list">
                <li v-for="(item,index) in netRed.netAll" :key="index" @click.stop="netRedDetail(item.id,1)">
                  <p>{{item.titile}}</p>
                  <p>{{item.newsText}}</p>
                  <!-- <span>{{item.pubDate}}</span> -->
                </li>
              </ul>
            </div>
            <a class="more exploreCity_more" @click="netRedss">
              <span>更多</span>
            </a>
          </div>
          <div class="exploreCity_right">
            <div class="alerts_left_top" @click="netRedDetail(netRed.rightTopShow.id,1)">
              <img :src="netRed.rightTopShow.imgUrl" width="100%" height="100%" alt="">
              <span class="title">{{netRed.rightTopShow.titile}}</span>
              <span class="time">{{netRed.rightTopShow.pubDate}}</span>
            </div>
            <div class="alerts_left_bottom" @click="netRedDetail(netRed.rightBottomShow.id,2)">
              <img :src="netRed.rightBottomShow.imgUrl1" width="100%" height="100%" alt="">
              <span class="title">{{netRed.rightBottomShow.imgName}}</span>
              <span class="time">{{netRed.rightBottomShow.pubDate}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export {default} from './indexCtr'
</script>


<style scoped>
  .carousel img {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .sweiper {
    position: absolute;
    z-index: 999;
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%);
    width: 880px;
    height: 260px;
    color: #fff;
    background-image: url('./../../assets/images/bannerBg.png');
    background-color: rgba(0, 0, 0, .3);
    background-repeat: no-repeat;
    background-position: center;
  }

  .sweiper_title {
    text-align: center;
    padding-top: 15px;
    font-weight: 100;
    letter-spacing: 3px;
  }

  .sweiper_content {
    width: 70%;
    margin: 50px auto;
    text-align: center;
    line-height: 35px;
    font-size: 14px;
    font-weight: 100;
  }

  /* 公用的头部标题和头部导航 */
  .main_top {
    /* text-align: center;
    font-size: 30px;
    border-bottom: 1px solid #000; */
    position: relative;
    width: 320px;
    height: 20px;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    margin: 130px auto 35px;;
  }

  .main_title {
    position: absolute;
    left: 62px;
    top: -40px;
    width: 195px;
    height: 70px;
    background-color: #f2f2f2;
    text-align: center;
  }

  .main_title span {
    display: inline-block;
    width: 100%;
  }

  .main_title span:first-child {
    font-size: 40px;
  }

  .main_title span:last-child {
    font-size: 16px;
  }

  .main_header {
    border-top: 1px solid #000;
  }

  .main_header ul {
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    margin: 15px 0 50px;
  }

  .main_header ul li {
    width: 90px;
    text-align: center;
  }

  .main_header ul li a {
    color: #000;
  }

  .main_header ul li a:hover {
    color: #f3ab95;
  }

  .topBar {
    width: 100%;
    height: 5px;
    background-color: #fcfcfc;
  }

  .more {
    display: block;
    width: 165px;
    height: 20px;
    border: 1px solid #000;
    padding: 10px;
    cursor: pointer;
  }

  .more span {
    position: relative;
    display: inline-block;
    width: 115px;
    text-align: center;
    border-right: 1px solid #000;
    color: #000;
  }

  .more span::after {
    position: absolute;
    right: -40px;
    top: -8px;
    display: block;
    content: '\2192';
    font-size: 25px;
  }

  .more:hover {
    border-color: #d38a55;
  }

  .more:hover span {
    color: #d38a55;
    border-color: #d38a55;
  }

  /* 主体部分 */
  .main {
    width: 1200px;
    margin: 0 auto 95px;
  }

  /* 许愿 */
  .wishTree {
    position: relative;
    width: 100%;
    height: 520px;
    /* background-color: pink; */
    background: url('./../../assets/images/wishingtree.png');
    background-repeat: no-repeat;
    background-position: 65%;
    margin-top: 35px;
  }

  .wishNav {
    position: absolute;
    left: 150px;
    top: 140px;
    width: 85px;
    height: 345px;
  }

  .wishNav_bar {
    width: 85px;
    height: 85px;
    border-radius: 50%;
    margin-bottom: 30px;
    text-align: center;
    line-height: 85px;
    background-color: #db844e;
    color: #fff;
  }

  .wishNext {
    position: absolute;
    right: 0;
    top: 40px;
    width: 250px;
    height: 200px;
  }

  .wishNext div {
    width: 100%;
    height: 70px;
    color: #fff;
    text-align: center;
  }

  .wishNext div span {
    display: inline-block;
    width: 100%;
  }

  .wishNext div span:first-child {
    padding: 12px 0 8px;;
  }

  .wishNext div:first-child {
    background: url('./../../assets/images/treeBg.png') no-repeat;
  }

  .wishNext div:last-child {
    background: url('./../../assets/images/treeBg1.png') no-repeat;
    margin-top: 110px;
  }

  /* .wishNext_top{
       background: url('./../../assets/images/treeBg.png') no-repeat;
  }
  .wishNext_bottom{
       background: url('./../../assets/images/treeBg1.png') no-repeat;
       margin-top: 110px;
  } */
  .wish_title {
    color: #3e3c3f;
    padding-top: 100px;
  }

  .wish_title_first {
    font-size: 30px;
    /* padding-bottom: 5px; */
  }

  .wish_title_seconed {
    letter-spacing: 12px;
  }

  /* 快讯模块 */
  .alerts_main {
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
  }

  .alerts_left {
    width: 505px;
  }

  .alerts_left_top {
    position: relative;
    height: 445px;
    cursor: pointer;
  }

  .alerts_left_top span.title {
    position: absolute;
    bottom: 10px;
    left: 20px;
    color: #fff;
  }

  .alerts_left_top span.time {
    position: absolute;
    bottom: 10px;
    right: 20px;
    color: #fff;
  }

  .alerts_left_bottom {
    position: relative;
    height: 355px;
    margin-top: 35px;
    cursor: pointer;
  }

  .alerts_left_bottom span.title {
    position: absolute;
    bottom: 10px;
    left: 20px;
    color: #fff;
  }

  .alerts_left_bottom span.time {
    position: absolute;
    bottom: 10px;
    right: 20px;
    color: #fff;
  }

  .alerts_right {
    position: relative;
    width: 655px;
  }

  .alerts_right ul {
    padding: 25px 15px;
    background-color: #ededed;
    margin-top: 70px;
  }

  .alerts_right ul li {
    height: 90px;
    line-height: 90px;
    border: 1px solid #ddd;
    border-bottom: none;
    background-color: #fff;
    cursor: pointer;
  }

  .alerts_right ul li a {
    color: #777777;
  }

  .alerts_right ul li a .type {
    padding: 0px 10px 0 35px;
    color: #d38a55;
  }

  .alerts_right ul li a .time {
    float: right;
    padding-right: 20px;
    color: #6c6c6c;
  }

  .alerts_right ul li:last-child {
    border-bottom: none;
  }

  .alerts_more {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  /* 娱乐 */
  .amusement_music {
    /* position: relative; */
    display: flex;
    display: -webkit-flex;
    width: 100%;
    height: 495px;
    background-color: #ddd;
    overflow: hidden;
  }

  .amusement_list {
    /* position: absolute;
    right: 0;
    top: 0; */
    position: relative;
    height: 100%;
    width: 270px;
    background: #4b4b4b;
    transition: all .5s;
  }

  .amusement_list_active {
    width: 0px;
    transition: all .5s;
  }

  .amusement_video_list {
    height: 435px;
    width: 100%;
    margin-top: 10px;
    padding: 0 15px;
    overflow-y: scroll;
  }

  .amusement_video_list li {
    padding-bottom: 15px;
  }

  .amusement_video_list li img {
    vertical-align: middle;
  }

  .amusement_video_list li span {
    padding-left: 10px;
    vertical-align: middle;
    display: inline-block;
    width: 140px;
    color: #fff;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .amusement_title {
    line-height: 50px;
    padding-left: 20px;
    color: #fff;
  }

  .amusement_video {
    width: 930px;
    height: 100%;
    /* background: pink; */
    margin: 0 auto;
  }

  .amusement_video video {
    object-fit: fill;
  }

  .amusement_btn {
    position: absolute;
    z-index: 999;
    left: -18px;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    content: "<";
    width: 18px;
    height: 60px;
    background: rgba(0, 0, 0, .6);
    text-align: center;
    line-height: 60px;
    color: #fff;
  }

  .amusement_more {
    margin: 55px auto 90px;
  }

  .exploreCity_content {
    position: relative;
    width: 650px;
    height: 670px;
    margin-top: 70px;
    cursor: pointer;
  }

  .exploreCity_content span.title {
    position: absolute;
    bottom: 10px;
    left: 20px;
    color: #fff;
  }

  .exploreCity_content span.time {
    position: absolute;
    bottom: 10px;
    right: 20px;
    color: #fff;
  }

  .exploreCity_right {
    width: 505px;
  }

  .exploreCity_left {
    position: relative;
  }

  .exploreCity_more {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .vip {
    position: absolute;
    top: 20px;
    right: 25px;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: rgb(203,102,39);
    text-align: center;
    line-height: 70px;
    color:white;
    font-size:16px;
    /*background: url('../../assets/images/vip.png') no-repeat;*/
  }

  .netred_title {
    position: absolute;
    top: 70px;
    right: 30px;
    height: 100px;
    color: #fff;
  }

  .netred_title h2 {
    letter-spacing: 5px;
    font-weight: 100;
    font-size: 32px;
  }

  .netred_title h2::after {
    display: block;
    content: '';
    width: 75%;
    height: 6px;
    background: #fff;
    margin: 30px 0 17px;
  }

  .netred_title p {
    font-weight: 400;
    padding-bottom: 5px;
  }

  .netRed_list {
    position: absolute;
    bottom: 22px;
    left: 50%;
    transform: translateX(-50%);
    width: 625px;
  }

  .netRed_list li {
    position: relative;
    height: 90px;
    background: #fff;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
    padding: 20px;
    cursor: pointer;
  }

  .netRed_list li p:first-child {
    font-weight: bold;
  }

  .netRed_list li p {
    padding-bottom: 13px;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .netRed_list li span {
    position: absolute;
    top: 20px;
    right: 20px;
  }
</style>
