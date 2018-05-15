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
        <el-form-item label="名称 ：">
          <el-input v-model="form.memeName" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="艺名 ：">
          <el-input v-model="form.memeActName" placeholder="请输入艺名"></el-input>
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
        <el-form-item label="身高 ：">
          <el-input v-model="form.hight" placeholder="请输入身高"></el-input>
        </el-form-item>
        <el-form-item label="体重 ：">
          <el-input v-model="form.weight" placeholder="请输入体重"></el-input>
        </el-form-item>
        <el-form-item label="学校 ：">
          <el-input v-model="form.graduateSchool" placeholder="请输入学校"></el-input>
        </el-form-item>
        <el-form-item label="国籍 ：">
          <el-input v-model="form.nationality" placeholder="请输入国籍"></el-input>
        </el-form-item>
        <el-form-item label="民族 ：">
          <el-input v-model="form.nation" placeholder="请输入民族"></el-input>
        </el-form-item>
        <el-form-item label="出生日期 ：">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.birthday" style="width: 100%;"></el-date-picker>
        </el-form-item>
      </el-form>
        <div class="submitBtn" @click="onSubmit">报名</div>
      </div>
    </div>
</template>
<script>
    export default require('./voteSignFormCtr');
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
