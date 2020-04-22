<template>
  <div class="goodsItem">
    <a :href="goodsItem.link">
      <img :src="goodsItem.show.img" alt="" @load="imageLoad">
      <div class="goodsInfo">
        <p>{{goodsItem.title}}</p>
        <span class="price">{{goodsItem.price}}</span><span class="collect">{{goodsItem.cfav}}</span>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  name:"goodsListItem",
  props:{
    goodsItem:Object
  },
  methods: {
    imageLoad(){
      this.$bus.$emit("imageLoadItem")
    }
  }
}
</script>
<style scoped>
.goodsItem {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}
.goodsItem img {
  width: 100%;
  border-radius: 5%;
}
.goodsInfo {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 5px;
  font-size: 12px;
  text-align: center;
  overflow: hidden;
}
.goodsInfo p{
  overflow: hidden;
  /* 隐藏文本... */
  text-overflow: ellipsis;
  /* 文本不进行换行 */
  white-space: nowrap;
  margin-bottom: 3px;
}
.goodsInfo .price{
  margin-right: 20px;
  color: var(--color-high-text);
}
.goodsInfo .collect {
  position:relative;
}
.goodsInfo .collect::before{
  position: absolute;
  content: "";
  top: -1px;
  left: -16px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>