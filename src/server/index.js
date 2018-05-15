/**
 * Created by kdkjPC on 2018/4/14.
 */
import Vue from 'vue'
import Axios from 'axios'

// var baseU = 'http://192.168.20.133:8886/';
var baseU = 'http://122.114.91.41:80/';
const axiosConfig = Axios.create({
    baseURL: "http://122.114.91.41:8900/",
    withCredentials: true,
    timeout: 10000
});




export default {
  axiosConfig:axiosConfig,
  baseU:baseU
}
