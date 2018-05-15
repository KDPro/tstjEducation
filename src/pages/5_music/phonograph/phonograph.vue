<template>
  <div class="container">
      <img :src="src" alt="" width="100%" height="500">
      <!-- 小标题 -->
      <div class="actHeader">
        <ul class="clear">
          <li :class="thisIndex==index?'liAct':''" v-for="(item,index) in tabBarList" :key="index" @click="toLink(index)">{{item.title}}</li>
        </ul>
      </div>
      <!-- 发布留音 -->
      <div class="send_btn" @click="showSendF">发布留声</div>

      <ul class="phonograph_list">
        <li class="job_list" v-for="(item,index) in list" :key="index">
          <div class="job_left">
            <img :src="item.head" alt="">
            <p>{{item.publisher}}</p>
            <p>{{item.pubDate}}</p>
          </div>
          <div class="job_right">
            <p class="job_right_top">{{item.titile}}</p>
            <p class="job_right_time"></p>
            <span class="iconfont icon-play" :class="[item.isPlay?'icon-step':'icon-play']" @click="playMusic(index)"></span>
             <audio :ref="['audio'+index]" controls :src="item.musicUrl">
             </audio>
          </div>
        </li>
      </ul>
    <div class="alert" v-if="showSendAlert">
      <div class="alertBox alertBoxS">
        <i class="iconfont icon-remove" @click="showSendF"></i>
        <p>发布留声</p>
        <el-input v-model="voiceInput" placeholder="请输入主题"></el-input>
        <input class="el-input__inner" type="file"  @change="upFileVoice($event)">
        <div class="alertBtn" @click="sendMyVoice">确定</div>
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
export {default} from './phonographCtr'
</script>



<style scoped>
.container{
    width: 1200px;
    padding: 50px;
    margin: 50px auto 80px;
    background-color: #fff;
    box-sizing: border-box;
    border: 1px solid #ddd;
    box-shadow: 2px 2px 2px 2px #ddd;
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


.send_btn{
    width: 150px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background-color: #da854f;
    border-radius: 5px;
    color: #fff;
    float: right;
    margin-top: 30px;
    cursor: pointer;
}



.container ul.phonograph_list{
  margin-top: 100px;
}
.container ul.phonograph_list li{
    margin-bottom: 10px;
    border: 1px solid #ddd;
}
/*.container ul .job_list:last-child{*/
  /*border-bottom: none;*/
/*}*/
.job_list{
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
}
.job_list .job_left{
  width: 265px;
  text-align: center;
  background-color: #fafafa;
}
.job_left img{
  /* display: block; */
  width: 65px;
  height: 65px;
  border-radius: 50%;
  margin-top: 10px;
}
.job_left p{
  padding: 0px 0 5px;
}
.job_list .job_right{
  position: relative;
  width: 865px;
  /* padding: 35px 85px 35px 70px; */
  padding: 15px;
}
.job_list .job_right span.iconfont{
    position: absolute;
    right: 12px;
    font-size: 50px;
    top: 60px;
}
.job_right_top{
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
}
.job_right_top span:nth-of-type(2) {
  cursor: pointer;
  text-decoration: underline;
}

.job_right_time{
  height: 60px;
  width: 92%;
  background-image: url('../../../assets/images/band.png');
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 10px;
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
.alertBoxS{
  height:300px;
  margin-top:-150px;
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
audio {
  display: none;
}
.pagination {
  text-align: center;
  margin-top:50px;
}

</style>
