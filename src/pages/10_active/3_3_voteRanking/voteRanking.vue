<template>
    <div class="container">
      <div class="signPeople">
        <div class="con">
          <div class="conB clear" v-for="(item,index) in listPerson" :key="index" @click="toVipDetail(item)">
            <img :src="item.imgUrl" alt="">
            <div class="conDes">
              <p class="num">{{index+1}}</p>
              <p class="name">{{item.memeName}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
    export default require('./voteRankingCtr');
</script>
<style scoped>
  .container {
    width:1200px;
    margin:50px auto 100px;
    color:#333;
  }
  .signPeople {
    margin-top:30px;
    width:100%;
    padding:0 50px 50px;
    box-sizing: border-box;
    background-color: white;
  }
  .con {
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .conB {
    width:330px;
    margin:50px 18px 0;
    border-radius: 5px 5px 0 0;
  }
  .conB img{
    width:330px;
    height:260px;
    border-radius: 5px 5px 0 0;
    float: left;
  }
  .conDes {
    width:100%;
    height:100px;
    padding:10px 30px 30px 30px;
    border:1px solid #e3e3e3;
    box-sizing: border-box;
    border-top:none;
    float: left;
  }
  .conDes p {
    text-align: center;
    margin-bottom:10px;
  }
  .conDes .num {
    font-size:25px;
    font-weight: bold;
    color:#dd8150;
  }
  .pagination {
    text-align: center;
    margin-top:50px;
  }
</style>
