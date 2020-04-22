import {request} from "./request"
// 主页banner图 和 商品推荐
export function getMultiData(){
  return request({
    url:'/home/multidata'
  })
}
// 主页goods数据
export function getHomeGoods(type,page){
  return request({
    url:"/home/data",
    params:{
      type,
      page
    }
  })
}