<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"

import {getHomeGoods} from "network/home"
export default {
  name:"scroll",
  props:{
    probeType:{
      type:Number,
      default:0,  
    },
   pullUpLoad:false
  },
  data () {
    return {
      scroll:null,      
      currentPage:1,
      goods:[]
    }
  },
  components: {
    BScroll
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper,{
      // 开启原生点击
      click:true,
      // 侦听类型
      probeType:this.probeType,
      // 开启上拉加载
      pullUpLoad:this.pullUpLoad
    }),
    this.scroll.on("scroll",(position) => {
      // console.log(position);
      this.$emit("showPosition",position) 
    }),
    // 监听上拉事件
    this.scroll.on("pullingUp",() => {
      this.$emit("pullingUp")
      })
  },
  methods: {
    backTop(x,y,time){
      this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    }
  }
}
</script>

<style scoped>

</style>