<template>
  <div class="family">
    <div class="job_header">
      <span>查看家教信息</span>
      <span class="job_btn" @click="toPublish">发布信息</span>
    </div>
      <div class="teacher" v-for="(item,index) in list" :key="index" @click="toFamilyDetail(item)">
          <img :src="item.head" alt="加载失败">
          <div class="family_content">
             <h4>{{item.position}}</h4>
             <p>{{item.tutorName}}</p>
             <p>{{item.gender==1?"男":"女"}}</p>
             <p>{{item.age}}岁</p>
             <p>{{item.experience}}工作经验</p>
             <p class="family_des">{{item.selfDesc}}</p>
             <span>{{item.pubDate}}</span>
          </div>
      </div>
  </div>
</template>

<script>
export {default} from './familyCtr'
</script>

<style scoped="">
.family{
    width: 1078px;
    /* height: 5000px; */
    border: 1px solid #ddd;
    box-shadow: 2px 2px 2px 2px #ddd;
    margin: 0 auto 95px;
    padding: 65px 60px 0;
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: white;
}
.job_header{
  width:100%;
  position: relative;
  padding: 0 0 30px;
}
.job_btn{
  position: absolute;
  right: 0;
  top: -22px;
  display: inline-block;
  width: 150px;
  height: 50px;
  background-color: #da854f;
  line-height: 50px;
  text-align: center;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
}
.teacher{
    padding: 30px;
    width: 450px;
    height:343px;
    border: 1px solid #ddd;
    margin-bottom: 40px;
}
.teacher img{
    width: 245px;
    height: 340px;
}
.family_content{
    position: relative;
    float: right;
    width: 180px;
    color: #656565;
}
.family_content h4{
    color: #000;
}
.family_content p{
    padding-top: 15px;
}
.family_content p.family_des{
    padding-top: 35px;
    word-break: break-all;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;
}
.family_content span{
    position: absolute;
    right: 0;
    bottom: -50px;
}
</style>



