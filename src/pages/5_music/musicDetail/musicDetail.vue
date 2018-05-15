<template>
  <div class="container">
    <div class="info">
      <div class="info_img">
        <img :src="user.imgUrl" alt="加载失败" width="100%" height="100%">
        <div class="block">
          <div class="TimeRanges" :style="{width:timeRanges+'%'}"></div>
          <el-slider v-model="currentTimeA" @change="slideTime" :format-tooltip="formatTooltip"></el-slider>
        </div>
        <i class="playBtn iconfont" :class="playAU?'icon-step':'icon-play'" @click="playAudio"></i>
        <audio class="audio" :src="user.musicUrl" controls="controls" ref="audio"></audio>
      </div>
      <div class="info_list">
        <h1>{{user.musicName}}</h1>
        <p>歌&emsp;&emsp;手：{{user.singer}}</p>
        <p>点&nbsp; 歌&nbsp; 人：{{user.orderName}}</p>
        <p>主&emsp;&emsp;题：{{user.titile}}岁</p>
        <p>心&nbsp; 里&nbsp; 话：{{user.newsText}}</p>
      </div>
    </div>
  </div>
</template>


<script>
  export {default} from './musicDetailCtr'
</script>

<style scoped>
  .container{
    width:1200px;
    background-color: white;
    margin:50px auto 100px;
    padding: 70px 40px 0;
    box-sizing: border-box;
    border: 1px solid #ddd;
    box-shadow: 2px 2px 2px 2px #ddd;
  }
  .info{
    display: flex;
    display: -webkit-flex;
    /*justify-content: space-between;*/
  }
  .info_img{
    width: 400px;
    height:400px;
    margin-right:50px;
    border: 1px solid #ddd;
    position:relative;
  }
  .info_list{
    width: 520px;
    height: 500px;
  }
  .info_list p{
    padding-top: 20px;
  }
  .block {
    position:absolute;
    bottom:10px;
    left:20px;
    width:325px;
  }
  .playBtn {
    position:absolute;
    bottom:15px;
    right:20px;
    font-size:25px;
    color: #f1f1f1;
    cursor: pointer;
  }
  .TimeRanges {
    position:absolute;
    top:16px;
    /*width:100%;*/
    height:6px;
    background-color: rgba(213,131,81,.7);
    border-radius: 3px;
  }
  .audio {
    display: none;
  }

</style>
