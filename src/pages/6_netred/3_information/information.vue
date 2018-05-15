<template>
    <div class="information">
        <div class="information_list" v-for="(item,index) in list" :key="index" @click="details(item)">
            <img :src="item.imgUrl" alt="">
            <div class="information_list_des">
                <h6>{{item.titile}}</h6>
                <p class="information_content">{{item.newsText}}</p>
                <p class="information_time">{{item.pubDate}}</p>
            </div>
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
export {default} from './informationCtr'
</script>


<style scoped>
.information{
    width: 1078px;
    border: 1px solid #ddd;
    box-shadow: 2px 2px 2px 2px #ddd;
    margin: 0 auto 95px;
    padding: 65px 60px 0;
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.information_list{
    width: 510px;
    border: 1px solid #ddd;
    overflow: hidden;
    border-radius: 5px;
    margin-bottom: 40px;
}
.information_list img{
    width: 100%;
    height: 345px;
}
.information_list_des{
    padding: 25px 45px 25px 35px;
}
.information_list_des h6{
    padding-bottom: 20px;
}
.information_content{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
}
.information_time{
    text-align: right;
    padding-top: 20px;
}

.page{
  width:100%;
  margin: 40px auto 80px;
}
.pagination {
  text-align: center;
}
</style>

