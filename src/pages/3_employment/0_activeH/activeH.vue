<template>
    <div class="width12">
      <div class="actHeader">
        <ul class="clear">
          <li :class="thisIndex==index?'liAct':''" v-for="(item,index) in tabBarList" :key="index" @click="toLink(index)">{{item.title}}</li>
        </ul>
      </div>
      <router-view></router-view>
    </div>
</template>
<script>
    export default require('./activeHCtr');
</script>
<style scoped>
  .actHeader{
    padding:40px 0;
    text-align: center;
  }
  .actHeader ul {
    width:318px;
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
</style>
