<template>
  <div class="container">
      <img :src="item.imgUrl" alt="" width="100%" height="500">
      <h4>{{item.titile}}<a :href="item.linkUrl">相关视频</a></h4>
      <p>{{item.pubTime}}</p>
      <div v-html="item.newsText"></div>
  </div>
</template>


<script>
export {default} from './imformationdetailsCtr'
</script>

<style scoped>
.container{
    width: 1200px;
    padding: 50px;
    box-sizing: border-box;
    background-color: #fff;
    border: 1px solid #ddd;
    box-shadow: 2px 2px 2px 2px #ddd;
    margin: 50px auto 80px;
}
.container h4{
    text-align: center;
    padding: 20px 0;
}
.container h4 a{
    float: right;
    color: darkgoldenrod;
    text-decoration: underline;
}
.container p{
    text-align: right;
    padding-bottom: 10px;
}
</style>


