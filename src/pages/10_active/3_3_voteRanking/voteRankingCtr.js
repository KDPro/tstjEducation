/**
 * Created by kdkjPC on 2018/4/19.
 */
export default {
  data(){
    return {
      id:"",
      listPerson: []
    }
  },
  methods: {
    toVipDetail(item){
      this.$router.push({
        name:"voteVipDetail",
        query:{
          id:item.id
        }
      })
    },
    getPersonList(){
      this.$p({
        url: this.$api.memeQuery,
        params:{
          pageSize:20,
          current:1,
          actId:this.id
        },
        load:false
      }).then(res=> {
        this.totalPerson = res.data.total;
        var arr = res.data.list;
        arr.forEach((e, index)=> {
          arr[index].pubDate = e.pubDate.split(" ")[0];
          arr[index].imgUrl = this.$baseU + e.imgUrl;
        });
        this.listPerson = JSON.parse(JSON.stringify(arr));

      }, errRes=> {

      })
    },
  },
  mounted(){
    this.id = this.$route.query.id;
    this.getPersonList();
  }
}
