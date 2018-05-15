<template>
    <div class="container">
      <div class="headerT">基本信息</div>
      <div class="conB">
        <el-form label-width="90px">
          <el-form-item label="姓名 ：">
            <el-input v-model="form.tutorName" placeholder="请输入姓名"></el-input>
          </el-form-item>
          <el-form-item label="工作意向 ：">
            <el-input v-model="form.position" placeholder="请输入职位"></el-input>
          </el-form-item>
          <el-form-item label="期望薪资 ：">
            <el-input v-model="form.expSalary" placeholder="请输入期望薪资"></el-input>
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

          <el-form-item label="现居地址 ：">
            <el-input v-model="form.addr" placeholder="请输入地址"></el-input>
          </el-form-item>
          <el-form-item label="学校 ：">
            <el-input v-model="form.graduateSchool" placeholder="请输入学校"></el-input>
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
          <el-form-item label="工作年限 ：">
            <el-input v-model="form.experience" placeholder="请输入年限"></el-input>
          </el-form-item>
          <el-form-item label="自我介绍 ：">
            <el-input type="textarea" :rows="5" v-model="form.selfDesc"></el-input>
          </el-form-item>

        </el-form>
      </div>
      <div class="headerT">工作经历</div>
      <div class="conB">
        <el-form  label-width="90px">
          <el-form-item label="时间 : ">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.beginTime" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2" style="text-align: center">-</el-col>
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.endTime" style="width: 100%;"></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="工作职位 ：">
            <el-input v-model="form.jobPosition" placeholder="请输入职位"></el-input>
          </el-form-item>
          <el-form-item label="薪资待遇 ：">
            <el-input v-model="form.jobSalary" placeholder="请输入期望薪资"></el-input>
          </el-form-item>
          <el-form-item label="工作内容 ：">
            <el-input type="textarea" :rows="5" v-model="form.jobDesc"></el-input>
          </el-form-item>
        </el-form>
        </div>
        <div class="headerT">其他</div>
      <div class="conB">
        <el-form  label-width="90px">
          <el-form-item label="薪资单位 ：">
            <el-select v-model="form.unit" placeholder="请选择单位">
              <el-option label="元/小时" value="元/小时"></el-option>
              <el-option label="元/天" value="元/天"></el-option>
              <el-option label="元/月" value="元/月"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>

        <div class="submitBtn" @click="onSubmit">确定</div>
      </div>
    </div>
</template>
<script>
    export default require('./getJobFormCtr');
</script>
<style scoped>
  .container {
    width:1200px;
    padding:50px;
    box-sizing: border-box;
    margin:50px auto 100px;
    background-color: white;
  }
  .headerT {
    width:100%;
    padding:10px 0 10px 20px;
    text-align: center;
    background-color: #f2f2f2;
  }

  .conB {
    width:460px;
    margin:40px auto;
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
    background-color: #4d484f;
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
  .expSalary {
    width:50%;
  }
</style>
