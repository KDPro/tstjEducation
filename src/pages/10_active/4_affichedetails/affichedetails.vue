<template>
  <div class="details">
    <img :src="item.imgUrl" alt="" width="100%" height="500">
    <h1>{{item.titile}}</h1>
    <p><span>发布人：{{item.publisher}}</span><span class="time">发布时间：{{item.pubDate}}</span></p>
    <div v-html="item.newsText"></div>
  </div>
</template>

<script>
export {default} from './affichedetailsCtr'
</script>


<style scoped>
.details{
    width:1200px;
    background-color: white;
    margin:50px auto 100px;
    padding:50px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    box-shadow: 2px 2px 2px 2px #ddd;
}
.details h1{
    text-align: center;
    padding: 10px 0 0;
}
.details p{
  text-align: center;
  padding: 15px 0 35px;
}
.details p span.time{
  padding-left: 20px;
}
</style>

