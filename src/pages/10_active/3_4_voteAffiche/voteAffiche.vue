<template>
  <div class="details">
    <img :src="item.imgUrl" alt="" width="100%" height="500">
    <h3>{{item.title}}</h3>
    <p><span class="time">发布时间：{{item.pubDate}}</span></p>
    <div>{{item.content}}</div>
  </div>
</template>


<script>
  export {default} from './voteAfficheCtr'
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
  .details h3{
    text-align: center;
    padding-top: 50px;
  }
  .details p{
    text-align: center;
    padding: 15px 0 35px;
  }
  .details p span.time{
    padding-left: 20px;
  }
</style>
