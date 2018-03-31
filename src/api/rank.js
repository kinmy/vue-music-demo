import { commonParams, options } from './config.js'
import jsonp from 'common/js/jsonp'

// import { commonParams } from './config.js'
// import axios from 'axios'

export function getTopList() {
  // const url = '/api/getTopList'
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg'
  const data = Object.assign({}, commonParams, {
    uin: 0,
    // format: 'json',
    platform: 'h5',
    needNewCode: 1
    // _: 1522291384681
  })

  return jsonp(url, data, options)

  // return axios.get(url, {
  //   params: data
  // }).then((res) => {
  //   return Promise.resolve(res.data)
  // })
}

export function getMusicList(id) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg'

  const data = Object.assign({}, commonParams, {
    uin: 0,
    // format:json
    platform: 'h5',
    needNewCode: 1,
    tpl: 3,
    page: 'detail',
    type: 'top',
    topid: id
    // _: 1522299455188
  })

  return jsonp(url, data, options)
}