<template>
  <div class="container">
      <div class="info">
          <div class="info_img">
              <img :src="user.imgUrl" alt="" width="100%" height="100%">
          </div>
          <div class="info_list">
              <h1>{{user.memeName}}</h1>
              <p>艺名：{{user.memeActName}}</p>
              <p>性别：{{user.sex}}</p>
              <p>国籍：{{user.nationality}}</p>
              <p>民族：{{user.nation}}族</p>
              <p>年龄：{{user.age}}岁</p>
              <p>体重：{{user.weight}}kg</p>
              <p>身高：{{user.hight}}cm</p>
              <p>学校：{{user.graduateSchool}}</p>
              <p>出生日期：{{user.birthday}}</p>
          </div>
      </div>
      <!--  所有图片展示 -->
          <div class="img_list">
            <div class="img_container">
                <ul class="info_imgList" ref="imgList" style="left: 0">
                    <li v-for="(item,index) in list" :key="index" @click="changeImg(item)">
                        <img :src="item.imgUrl" alt="" width="100%" height="100%">
                    </li>
                </ul>
            </div>
            <div class="pre" @click="pre"><</div>
            <div class="next" @click="next">></div>
          </div>
        </div>
</template>


<script>
export {default} from './personaldetailsCtr'
</script>

<style scoped>
.container{
    width:1200px;
    background-color: white;
    margin:50px auto 100px;
    padding: 70px 40px 120px;
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
    height: 500px;
    border: 1px solid #ddd;
}
.info_list{
    width: 520px;
    height: 500px;
}
.info_list p{
    padding-top: 20px;
}
.img_list{
   position: relative;
   width: 1040px;
   height: 230px;
   margin: 0 auto 0;
}
.img_container{
    position: relative;
    width: 980px;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
}
.info_imgList{
    position: absolute;
    width: 10000px;
    height: 100%;
    overflow: hidden;
    margin: 0 auto;
    transition: all 1s;
}
.info_imgList li{
    float: left;
    width: 230px;
    height: 230px;
    margin: 0 7.5px;
  cursor: pointer;
}
.img_list div.pre,.img_list div.next{
    position: absolute;
    width: 60px;
    height: 60px;
    font-size: 35px;
    text-align: center;
    line-height: 60px;
    color: #bbb;
    font-weight: bold;
  cursor: pointer;
}
.img_list div.pre{
    left: -20px;
    top: 85px;
}
.img_list div.next{
    right: -20px;
    top: 85px;
}
</style>

