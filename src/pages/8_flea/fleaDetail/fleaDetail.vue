<template>
  <div class="details">
    <div class="detailsPerson">
      <img :src="detail.head" alt="">
      <span>发布人:{{detail.publisher}}</span>
      <span>联系人:{{detail.conName}}</span>
      <span>联系方式:{{detail.conPhone}}</span>
    </div>
    <h3><span>【{{detail.type}}】</span>{{detail.titile}}</h3>
    <p><span class="time">发布时间：{{detail.pubDate}}</span></p>
    <div>{{detail.newsText}}</div>
  </div>
</template>


<script>
  export {default} from './fleaDetailCtr'
</script>


<style scoped>
  .detailsPerson {
    width:100%;
  }
  .detailsPerson img {
    width:65px;
    height:65px;
    border-radius: 100%;
    vertical-align: middle;
  }
  .detailsPerson span {
    margin-left:100px;
  }
  .details{
    width: 1098px;
    padding: 50px;
    margin:  30px auto 80px;
    background-color: #fff;
    border: 1px solid #ddd;
    box-shadow: 2px 2px 2px 2px #ddd;
  }
  .details h3{
    text-align: center;
    padding-top: 50px;
    font-size: 26px;
    font-weight: bold;
  }
  .details h3 span {
    color:#db804b;
  }
  .details p{
    text-align: center;
    padding: 15px 0 35px;
  }
  .details p span.time{
    padding-left: 20px;
  }
</style>

