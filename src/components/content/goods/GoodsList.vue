<template>
  <div class="goodsList">
    <GoodsListItem v-for="(item,index) of goods" :key="index" :goodsItem="item"/>
  </div>
</template>
<script>
import GoodsListItem from "./GoodsListItem"

export default {
  name:"goodsList",
  components: {
    GoodsListItem
  },
  props: {
    goods:Array
  }
}
</script>
<style scoped>
.goodsList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>