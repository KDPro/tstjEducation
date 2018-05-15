<template>
  <div class="container">
      <h1>{{user.name}}</h1>
      <div class="imgShow">
          <div class="img">
              <img :src="user.imgUrl1" alt="加载失败..." width="100%" height="100%">
          </div>
          <div class="img_list1">
              <div class="img_list1_container">
                  <ul ref="imgList1" style="top: 0">
                      <li v-for="(item,index) in list" :key="index" @click="changeImg(item,0)">
                        <img :src="item" alt="加载失败..." width="100%" height="100%">
                    </li>
                  </ul>
              </div>
              <div class="img_list1_container_pre" @click="pre(0)"><</div>
             <div class="img_list1_container_next" @click="next(0)">></div>
          </div>
      </div>

    <!--  所有图片展示 -->
          <div class="img_list">
            <div class="img_container">
                <ul class="info_imgList" ref="imgList" style="left: 0">
                    <li v-for="(item,index) in otherList" :key="index" @click="changeImg(item,1)">
                        <img :src="item.imgUrl1" alt="加载失败..." width="100%" height="100%">
                    </li>
                </ul>
            </div>
            <div class="pre" @click="pre(1)"><</div>
            <div class="next" @click="next(1)">></div>
          </div>
        </div>

  </div>
</template>


<script>
export {default} from './atlasdetailsCtr'
</script>


<style scoped>
.container{
    width: 1200px;
    background-color: #fff;
    border: 1px solid #ddd;
    box-shadow: 2px 2px 2px 2px #ddd;
    box-sizing: border-box;
    margin: 50px auto 90px;
    padding: 50px;
}
.container h1{
    text-align: center;
    padding-bottom: 50px;
}
.imgShow{
    width: 1080px;
    height: 800px;
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    margin-bottom: 50px;
}
.img{
    width: 800px;
    height: 100%;
}
.img_list1{
    position: relative;
    width: 280px;
    height: 100%;
    background-color: #f2f2f2;
}
.img_list1_container{
    position: absolute;
    top: 60px;
    left: 62px;
    width: 155px;
    height: 680px;
    overflow: hidden;

}
.img_list1_container ul{
    position: absolute;
    top: 0;
    width: 155px;
    height: 680px;
    transition: all 1s;
}
.img_list1_container ul li{
    padding: 10px 0;
    width: 155px;
    height: 155px;
}
.img_list1_container_pre{
    position: absolute;
    top: 15px;
    left: 46%;
    font-size: 30px;
    transform: rotate(90deg);
    color: #bbb;
    font-weight: bold;
    cursor: pointer;
}
.img_list1_container_next{
    position: absolute;
    bottom: 15px;
    left: 46%;
    font-size: 30px;
    transform: rotate(90deg);
    color: #bbb;
    font-weight: bold;
    cursor: pointer;
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

