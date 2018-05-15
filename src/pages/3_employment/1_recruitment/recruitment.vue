<template>
  <div class="job">
      <ul>
        <li class="job_list" v-for="(item,index) in list" :key="index">
          <div class="job_left">
            <img :src="item.head" alt="">
            <p>发布人：{{item.publisher}}</p>
          </div>
          <div class="job_right">
            <p class="job_right_top"><span>【{{item.position}}】</span><span @click="toJobDetail(item)">{{item.title}}</span><span class="job_right_price"><span>{{item.minSalary}} - {{item.maxSalary}}</span>/{{item.unit}}</span></p>
            <p class="job_right_time">{{item.pubDate}}</p>
          </div>
        </li>
      </ul>
      <div class="page">
        <el-pagination class="pagination"
                     background
                     @current-change="handleCurrentChange"
                     :current-page.sync="currentPage"
                     :page-size="pageSize"
                     :total="total"
                     layout="prev, pager, next">
      </el-pagination>
      </div>
  </div>
</template>

<script>
export {default} from './recruitmentCtr'
</script>


<style scoped="">
.job{
  width: 1128px;
  border: 1px solid #ddd;
  box-shadow: 2px 2px 2px 2px #ddd;
  margin: 0 auto 95px;
  padding: 50px 35px 0;
  background-color: white;
}

.job ul{
  border: 1px solid #ddd;
}
.job ul .job_list:last-child{
  border-bottom: none;
}
.job_list{
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
}
.job_list .job_left{
  width: 265px;
  text-align: center;
  background-color: #fafafa;
}
.job_left img{
  /* display: block; */
  width: 65px;
  height: 65px;
  border-radius: 50%;
  margin-top: 10px;
}
.job_left p{
  padding: 20px 0;
}
.job_list .job_right{
  width: 865px;
  padding: 35px 85px 35px 70px;
}
.job_right_price{
  float: right;
}
.job_right_top{
  font-size: 16px;
}
.job_right_top span:nth-of-type(2) {
  cursor: pointer;
  text-decoration: underline;
  display: inline-block;
  width:500px;
  height:20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: middle;
}
.job_right_price{
  font-size: 14px;
}
.job_right_price span{
  color: #da854f;
  font-size: 16px;
}
.job_right_time{
  padding-top: 20px;
}

.page{
  margin: 80px auto;
}
.pagination {
  text-align: center;
  margin-top:50px;
}
</style>



