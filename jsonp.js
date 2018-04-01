/*下载安装jsonp cnpm install jsonp*/
/*自己建一个js文件*/

import originJsonp from 'jsonp'

export default function((url, data, option){
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

    /*使用promise*/
    return new Promise((resolve,rejects)=>{
       originJsonp(url, option, (err, data) => {
          if (!err) {
            resolve(data)
          } else {
            reject(err)
          }
        })
    })
}
/*拼接*/
export function param(data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  return url ? url.substring(1) : ''
}
/*这是api.js*/
import jsonp from '../common/js/jsonp'
import {commonParams, options} from './config'

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  /*跟接口的数据保持一样*/
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })
  return jsonp(url, data, options)
}
/*配置返回的ERR_OK值 config.js文件*/
export const commonParams = {
    g_tk: 1928093487,
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: 0,
    format: 'jsonp'
  }

  export const options = {
    param: 'jsonpCallback'
  }

  export const ERR_OK = 0

  /*引入组件*/
  import { getRecommend } from '../../api/recommend'
  import { ERR_OK } from '../../api/config'

  export default{
    created(){
        this._getMsg();
    },
    methods: {
        _getMsg(){
            /*调用方法 封装的promise方法*/
            getRecommend().then((res)=>{
                if(res.code == ERR_OK){
                    console.log(res.data);
                }
            })
        }
    }
  }