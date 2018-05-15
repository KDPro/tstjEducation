<template>
  <div class="container">
    <div class="info">
      <div class="info_img">
        <img :src="user.head" alt="" width="100%" height="100%">
      </div>
      <div class="info_list">
        <h1>{{user.name}}</h1>
        <p>姓&emsp;&emsp;名：{{user.tutorName}}</p>
        <p>性&emsp;&emsp;别：{{user.gender==1?"男":"女"}}</p>
        <p>年&emsp;&emsp;龄：{{user.age}}岁</p>
        <p>工作经验：{{user.experience}}</p>
        <p>学&emsp;&emsp;历：{{user.edu}}</p>
        <p>毕业学校：{{user.graduateSchool}}</p>
        <p>擅长学科：{{user.doWellIn}}</p>
        <p>电&emsp;&emsp;话：{{user.mPhone}}</p>
        <p>自我介绍：{{user.selfDesc}}</p>
      </div>
    </div>
  </div>
</template>


<script>
  export {default} from './familyDetailCtr'
</script>

<style scoped>
  .container{
    width:1200px;
    background-color: white;
    margin:50px auto 100px;
    padding: 70px 40px 0;
    box-sizing: border-box;
    border: 1px solid #ddd;
    box-shadow: 2px 2px 2px 2px #ddd;
  }
  .info{
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    margin-bottom: 125px;
  }
  .info_img{
    width: 500px;
    height:600px;
    border: 1px solid #ddd;
  }
  .info_list{
    width: 520px;
    height: 500px;
  }
  .info_list p{
    padding-top: 20px;
  }
</style>
