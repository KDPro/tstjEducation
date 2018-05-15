<template>
    <div class="container">
      <div class="rew">
        <div class="reward">
          <div class="rewardCon">
            <img class="rewTitle" src="../../../assets/rewardTitle.png" alt="">
            <div class="rewInt">
              <div class="rewIntW">
                <p>抽奖说明</p>
                <p>活动时间：2018年3月7日上午9点—下午5点。</p>
                <p>活动说明：注册登录网站即可获得抽取幸运奖资格，
                  每个会员只可抽奖1次。</p>
                <p>兑奖时间：7日下午2点在“女生节”活动现场开始兑奖。</p>
                <p>注：本次活动最终解释权归唐山鸿弘人力资源有限公
                  司所有。</p>
              </div>
            </div>
            <div class="rewBox">
              <div class="rewList" v-for="(item,index) in rewardList" :key="index">
                <div class="pru" :class="[index==4?'org':'',index==circleId?'yes':'']" @click="rewardBtn(index)">
                  <img :src="`static/reward${index}.png`" alt="" v-if="index==4">
                  <div class="pruName" v-if="index!=4">{{item.giftname}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="rewName">
            <div class="rewNames">
              <img src="../../../assets/rewardList.png" alt="">
              <div class="rewNamesSc">
                <div class="rewNameB" ref="rewNameB">
                  <p v-for="(item,index) in rewardName" :key="index">
                    <span>{{item.phone}}</span>
                    <span>抽中</span>
                    <span>{{item.name}}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>
<script>
    export default require('./luckDrawCtr');
</script>
<style scoped>
  .container {
    padding:50px;
    margin-bottom:100px;
    background-color: white;
    box-sizing: border-box;
  }
  .rew {
    width:100%;
    height:2000px;
    background: url("../../../assets/rewardBgB.png") no-repeat;
    background-size: 100% 100%;
  }
  .reward {
    width: 780px;
    height:1850px;
    margin:0 auto;
    /*margin-bottom:20px;*/
    position: relative;
  }

  .reward img {
    width: 100%;
  }

  .rewardCon {
    width:100%;
    padding:0 6px;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
  }

  .rewardCon .rewTitle {
    margin: 50px auto;
    width: 75%;
  }
  .rewardCon .rewInt {
    width:80%;
    margin:0 auto;
    margin-top:-100px;
    padding:5px;
    border-radius: 20px;
    box-shadow: 0 0 20px 0 #d19b24;
    background-color: #f4b429;
    box-sizing: border-box;
  }
  .rewIntW {
    width:100%;
    box-sizing: border-box;
    padding:40px 20px 20px 20px;
    border:2px solid white;
    border-radius: 20px;
    color:white;
    text-align: left;
    font-size: 14px;
    letter-spacing: 1px;
  }
  .rewIntW p {
    line-height: 30px;
  }
  .rewBox {
    width:75%;
    margin:350px auto 0;
    display: flex;
    flex-wrap:wrap;
  }
  .rewList {
    flex: 1;
    margin-left:5px;
    margin-bottom:5px;
    min-width: 30%;
  }
  .pru {
    width:100%;
    padding-bottom:100%;
    background-color:#782f88;
    border-radius: 20px;
    box-shadow: 0 4px 5px 0 #5b341b inset;
    position:relative;
  }
  .pruName {
    font-family:"sans-serif";
    font-size:50px;
    font-weight: bold;
    color:white;
    text-align: center;
    position:absolute;
    width:70%;
    transform: translate(-50%,-50%);
    top:50%;
    left:50%;
    word-break: break-all;
    letter-spacing: 5px;
  }
  .yes:after {
    content: "";
    display: block;
    width:100%;
    height:100%;
    border-radius: 20px;
    position:absolute;
    top:0;
    left:0;
    z-index:10;
    background-color: rgba(0,0,0,.5);
  }
  .pru img{
    position:absolute;
    width:70%;
    transform: translate(-50%,-50%);
    top:50%;
    left:50%;
  }
  .org {
    background-color: #ff7101;
    box-shadow: 0 4px 5px 0 #ba5613 inset;
  }
  .rewName {
    width:100%;
    text-align: center;
    position:absolute;
    bottom:15px;
  }
  .rewName img {
    width:30%;
  }
  .rewNames {
    width:80%;
    margin:5px auto 0;
    height:250px;
    padding:15px;
    border-radius: 20px;
    background-color: #843894;
  }
  .rewNames .rewNamesSc {
    width:100%;
    height:150px;
    margin-top:20px;
    overflow: hidden;
  }

  .rewNames p {
    display: flex;
    color:#fff;
    font-size:15px;
    line-height:30px;
  }
  .rewNames p span:nth-of-type(1) {
    flex: 3;
    text-align: left;
  }
  .rewNames p span:nth-of-type(2) {
    flex: 1;
  }
  .rewNames p span:nth-of-type(3) {
    flex: 3;
    text-align: right;
  }
  .rewNameB {
    margin-top:0;
    transition: all 2s linear;
  }
</style>
