<template>
  <div class="personal">
      <div class="personal_list" v-for="(item,index) in list" :key="index" @click="details(item)">
          <img :src="item.imgUrl" alt="">
          <p>{{item.memeName}}</p>
          <p>{{item.memeActName}}</p>
      </div>

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
export {default} from './personalCtr'
</script>


<style>
.personal{
    width: 1078px;
    border: 1px solid #ddd;
    box-shadow: 2px 2px 2px 2px #ddd;
    margin: 0 auto 95px;
    padding: 65px 60px 0;
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
}
.personal_list{
    width: 330px;
    border: 1px solid #ddd;
    text-align: center;
    margin: 0 13px 40px;
    border-radius: 5px;
    overflow: hidden;
}
.personal_list img{
    width: 330px;
    height: 260px;
    padding-bottom: 15px;
}
.personal_list p:last-child{
    padding: 15px 0 25px;
    color: #7f7f7f;
}

.page{
  width:100%;
  margin: 40px auto 80px;
}
.pagination {
  text-align: center;
}
</style>

