<template>
    <div>
      <Swiper>
      <SwiperItem v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </SwiperItem>
    </Swiper>
    </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name:"SwiperHome",
  components: {
    Swiper,
    SwiperItem
  },
  props:{
    banners:Array
  }
}
</script>

<style lang="stylus" scoped>

</style>