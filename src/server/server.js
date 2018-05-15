/**
 * Created by kdkjPC on 2018/4/14.
 */
import promise from 'es6-promise';
promise.polyfill();
export default {
  /**
   * 查询数据 并且赋值
   * @param  {[type]} options.url          查询的url
   * @param  {[type]} options.params       后台所需要的数据
   * @param  {[type]} options.type         后台所需要请求方式，get或者post方式
   * @param  {[type]} options.load         是否需要加载动画 不需要传入false，需要传入ture 默认为true
   * @return {[type]} options.callback     回调函数，执行成功后所需要的操作
   */

  g: function ({url, params, type, load}) {
    var loading, typeS;
    if (load || load == undefined) {
      loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.5)'
      });
    }
    if (type || type == undefined) {
      typeS = "get";
    } else {
      typeS = type
    }
    return new Promise((resolve, reject)=>{
      this.$axios({
        method: typeS,
        url: url,
        params: params
      }).then((res)=>{
        //如果动画为true，返回之后需要关闭动画
        if (load || load == undefined) {
          loading.close();
        }
        if (res.data.code == 0) {
          resolve(res.data);
        }else if(res.data.code == 401) {
          this.$message({
            message: "您还没有登录，或者登录已过期，请重新登录",
            type: 'error',
            duration: 1500
          });
          this.$store.commit("setloginIsYes",false);
          this.$c.removeStorage("userInfo");
        } else {
          this.$message({
            message: res.data.msg,
            type: 'warning',
            duration: 1500
          });
          reject(res.data);
        }
      },(errRes)=>{
        if (load || load == undefined) {
          loading.close();
        }
        this.$message({
          message: "网络可能出错了，请刷新后重试！",
          type: 'error',
          duration: 1500
        });
      });
    });
  },
  p: function ({url, params, type, load}) {
    var loading, typeS;
    if (load || load == undefined) {
      loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.5)'
      });
    }
    if (type || type == undefined) {
      typeS = "post";
    } else {
      typeS = type
    }
    return new Promise((resolve, reject)=>{
      this.$axios({
        method: typeS,
        url: url,
        data: params
      })
        .then((res)=>{
          //如果动画为true，返回之后需要关闭动画
          if (load || load == undefined) {
            loading.close();
          }
          if (res.data.code == 0) {
            resolve(res.data);
          } else if(res.data.code == 401) {
            this.$message({
              message: "您还没有登录，或者登录已过期，请重新登录",
              type: 'error',
              duration: 1500
            });
            this.$store.commit("setloginIsYes",false);
            this.$c.removeStorage("userInfo");
          }else {
            this.$message({
              message: res.data.msg,
              type: 'warning',
              duration: 1500
            });
            reject(res.data);
          }
        },(errRes)=>{
          if (load || load == undefined) {
            loading.close();
          }
          this.$message({
            message: "网络可能出错了，请刷新后重试！",
            type: 'error',
            duration: 1500
          });
        });
    });
  },
}

