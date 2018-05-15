<template>
    <div class="container">
      <h2>招聘{{detail.position}}</h2>
      <p>发布时间 : {{detail.pubDate}}</p>
      <p class="scalar"><span>{{detail.minSalary}} - {{detail.maxSalary}}</span>{{detail.unit}}</p>
      <ul class="tags clear">
        <li  v-for="(item,index) in detail.bonusList" :key="index">{{item.bonus}}</li>
      </ul>
      <p><span>招聘人数 : {{detail.hireAmount}}人</span><span>学历 : {{detail.minEdu}}</span></p>

      <div class="jobRequire">
        <p>招聘简章 : </p>
        <p>{{detail.hireDescription}}</p>
        <!--<ol type="1">-->
          <!--<li v-for="(item,index) in list" :key="index"></li>-->
        <!--</ol>-->
      </div>

      <div class="seePhone">
        <p @click="seePhone">查看电话</p>
        <span v-if="showPhone">{{detail.telePhone}}</span>
      </div>
    </div>
</template>
<script>
    export default require('./jobDetailCtr');
</script>
<style scoped>
  .container {
    width:1200px;
    padding:50px;
    box-sizing: border-box;
    background-color: white;
    margin:50px auto 100px;
  }
  .container p {
    margin-top:10px;
    color:#666;
  }
  .container p span{
    margin-right:50px;
  }
  .container .scalar {
    margin:20px 0;
  }
  .scalar span {
    font-size:20px;
    font-weight: bold;
    color:#db844e;
    letter-spacing: 2px;
  }
  .tags {
    width:100%;
    margin-bottom:20px;
  }
  .tags li{
    float: left;
    padding:0 20px;
    height:30px;
    line-height: 30px;
    text-align: center;
    border:1px solid #8d8986;
    color:#8d8986;
    border-radius: 7px;
    margin-right:20px;
  }
  .jobRequire {
    margin-top:50px;
  }
  .jobRequire p {
    font-size:18px;
  }
  .jobRequire ol li {
    list-style:inherit;
  }
  .jobRequire ol li {
    margin-top:15px;
    margin-left:15px;
    padding-left:5px;
    color:#666;
  }
  .seePhone p{
    display: inline-block;
    width:200px;
    height:50px;
    line-height: 50px;
    text-align: center;
    color:white;
    font-size:16px;
    letter-spacing: 2px;
    background-color: #db844e;
    border-radius: 5px;
    margin-top:50px;
    margin-right:20px;
    cursor: pointer;
  }
  .seePhone span {
    font-size:16px;
  }
</style>
