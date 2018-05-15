<template>
  <div class="details">
      <div class="amusement">
        <div class="amusement_music">
          <div class="amusement_video">
            <video id="video" :poster="detail.imgUrl" controls="controls" width="828" height="495" :src="detail.videoUrl"></video>
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
      </div>
      <h1>{{detail.titile}}</h1>
      <div class="content">{{detail.newsText}}</div>
  </div>
</template>


<script>
export {default} from './wonderfulfilmCtr'
</script>

<style scoped>
.details{
    width: 1098px;
    padding: 50px;
    margin:  30px auto 80px;
    background-color: #fff;
    border: 1px solid #ddd;
    box-shadow: 2px 2px 2px 2px #ddd;
}
.amusement_music{
    /* position: relative; */
    display: flex;
    display: -webkit-flex;
    width: 100%;
    height: 495px;
    background-color: #ddd;
    overflow: hidden;
  }
.amusement_list{
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
    width: 828px;
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
  }

  .details h1{
    padding: 50px 0 40px;
  }
</style>

