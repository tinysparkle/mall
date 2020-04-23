<template>
    <div>
      <Swiper>
      <SwiperItem v-for="(item,index) in banners" :key="index" >
        <a :href="item.link">
          <img :src="item.image" alt="" @load="swiperImageLoad">
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
  },
  data () {
    return {
      imageLoad:false
    }
  },
  methods:{
    swiperImageLoad(){
      if(!this.imageLoad)
      this.$emit("swiperImageLoad")
      this.imageLoad = true
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>