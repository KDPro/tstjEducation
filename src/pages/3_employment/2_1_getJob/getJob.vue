<template>
    <div class="container">
      <div class="headerT">基本信息</div>
      <div class="conT">
        <h2>姓名:{{detail.tutorName}}</h2>
        <p>基本信息:{{detail.gender==1?"男":"女"}}|{{detail.age}}岁|现居地:{{detail.addr}}</p>
        <p>期望职位:{{detail.position}}</p>
        <p>工作经验:{{detail.experience}}</p>
        <p>学历:{{detail.edu}}</p>
        <p>期望薪资:{{detail.expSalary}}{{detail.unit}}</p>
      </div>
      <div class="headerT">自我介绍</div>
      <div class="conT">
        <p>{{detail.selfDesc}}</p>
        <!--<ol type="1">-->
          <!--<li v-for="(item,index) in list" :key="index">{{item}}</li>-->
        <!--</ol>-->
      </div>

      <div class="headerT">工作经历</div>
      <div class="conT">
        <p>{{detail.beginTime}} - {{detail.endTime}}</p>
        <p>工作岗位:{{detail.jobPosition}}</p>
        <p>职位月薪:{{detail.jobSalary}}{{detail.unit}}</p>
        <p>工作内容</p>
        <p>{{detail.jobDesc}}</p>
        <!--<ol type="1">-->
          <!--<li v-for="(item,index) in list" :key="index">{{item}}</li>-->
        <!--</ol>-->
      </div>
    </div>
</template>
<script>
    export default require('./getJobCtr');
</script>
<style scoped>
  .container {
    width:1200px;
    padding:50px;
    background-color:white;
    margin:50px auto 100px;
  }
  .headerT {
    width:100%;
    padding:10px 0 10px 20px;
    background-color: #f2f2f2;
  }
  .conT {
    margin:30px 0;
    color:#666;
  }
  .conT p {
    margin-bottom:10px;
  }
  .conT h2 {
    margin-bottom:20px;
  }
  .conT li {
    list-style: inherit;
    padding-left:10px;
    margin-left:15px;
    margin-bottom:10px;
  }
</style>
