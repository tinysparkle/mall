<template>
  <div>
    <Swiper class="swiperMain">
      <SwiperItem v-for="(item,index) in detailImages" :key="index">
        <img :src="item" alt="">
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from "components/common/swiper"
export default {
  name:"DetailSwiper",
  props: {
    detailImages:Array
  },
  components:{
    Swiper,
    SwiperItem
  }
}
</script>
<style scoped>
.swiperMain {
  height: 300px;
  overflow: hidden;
}
</style>