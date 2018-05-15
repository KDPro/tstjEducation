<template>
  <div class="container">
    <div class="conB">
      <el-form ref="form" :model="form" label-width="90px">
        <el-form-item label="个人照片 ：">
          <div class="el-upload el-upload--picture-card input">
            <i class="el-icon-plus"></i>
            <img :src="src" alt="">
            <input type="file" class="inputI"  @change="upPic($event)">
          </div>
        </el-form-item>
        <el-form-item label="姓名 ：">
          <el-input v-model="form.tutorName" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="家教专业 ：">
          <el-input v-model="form.major" placeholder="请输入家教专业"></el-input>
        </el-form-item>
        <el-form-item label="性别 ：">
          <el-select v-model="form.gender" placeholder="请选择性别">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="年龄 ：">
          <el-input v-model="form.age" placeholder="请输入年龄"></el-input>
        </el-form-item>
        <el-form-item label="学历 ：">
          <el-select v-model="form.edu" placeholder="请选择学历">
            <el-option label="博士" value="博士"></el-option>
            <el-option label="研究生" value="研究生"></el-option>
            <el-option label="本科" value="本科"></el-option>
            <el-option label="专科" value="专科"></el-option>
            <el-option label="高中" value="高中"></el-option>
            <el-option label="初中" value="初中"></el-option>
            <el-option label="小学" value="小学"></el-option>
            <el-option label="无" value="无"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="毕业学校 ：">
          <el-input v-model="form.graduateSchool" placeholder="请输入毕业学校"></el-input>
        </el-form-item>
        <el-form-item label="工作经验 ：">
          <el-input v-model="form.experience" placeholder="请输入工作经验"></el-input>
        </el-form-item>
        <el-form-item label="联系手机 ：">
          <el-input v-model="form.mPhone" placeholder="请输入手机"></el-input>
        </el-form-item>
        <el-form-item label="擅长学科 ：">
          <el-input v-model="form.doWellIn" placeholder="请输入擅长学科"></el-input>
        </el-form-item>
        <el-form-item label="自我介绍 ：">
          <el-input type="textarea" :rows="5" v-model="form.selfDesc"></el-input>
        </el-form-item>
      </el-form>
      <div class="submitBtn" @click="onSubmit">报名</div>
    </div>
  </div>
</template>
<script>
  export default require('./familyFormCtr');
</script>
<style scoped>
  .container {
    width:1200px;
    padding:50px;
    background-color: white;
    box-sizing: border-box;
    margin:50px auto 100px;
  }
  .conB {
    width:460px;
    margin:0 auto;
  }
  .el-select {
    width:100%;
  }
  .submitBtn {
    width:160px;
    height:40px;
    text-align: center;
    line-height: 40px;
    color:white;
    font-size:16px;
    letter-spacing: 2px;
    background-color: #da854c;
    margin:50px auto;
    cursor: pointer;
  }
  .input {
    position:relative;
  }
  .input img {
    height:100%;
    position:absolute;
    top:0;
    left:0;
    z-index:1;
  }
  .inputI {
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    opacity: 0;
    z-index:10;
  }
  .el-upload--picture-card{
    width:150px;
    height:150px;
  }

</style>
