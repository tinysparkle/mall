<template>
<!-- 判断goods不为空，为空时不显示 -->
  <div id="DetailBaseInfo" v-if="Object.keys(goods).length !== 0">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="new-price">{{goods.newPrice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[0].name}}</span>
    </div>
    <div class="info-services">
      <span class="info-services-item" v-for="index in goods.services.length-1" :key="index"> 
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name:"DetailBaseInfo",
  props:{
    goods:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
#DetailBaseInfo{
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}
.info-title {
  color: #222;
}
.info-price {
  margin-top: 10px;
}
.new-price {
  font-size: 25px;
  color: var(--color-high-text);
}
.old-price {
  font-size: 13px;
  margin-left: 5px;
  text-decoration: line-through;
}
.discount {
  color: #fff;
  font-size: 12px;
  padding: 2px 5px;
  background: var(--color-high-text);
  border-radius: 8px;
  margin-left: 5px;
  position: relative;
  top: -8px;
}
.info-other {
  margin-top: 13px;
  height: 30px;
  line-height: 30px;
  display: flex;
  font-size: 13px;
  border-bottom: 1px solid rgba(100, 100, 100, .1);
  justify-content: space-between;
}
.info-services {
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  line-height: 60px;
}
.info-services-item img{
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px;
}
.info-services-item span {
  font-size: 11px;
  color: #333;
}
</style>