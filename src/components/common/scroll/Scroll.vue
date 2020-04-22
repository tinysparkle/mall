<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
  name:"scroll",
  props:{
    probeType:{
      type:Number,
      default:0
    }
  },
  data () {
    return {
      scroll:null
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
      pullUpLoad:true
    }),
    this.scroll.on("scroll",(position) => {
      // console.log(position);
      this.$emit("showPosition",position) 
    })
  },
  methods: {
    backTop(x,y,time){
      this.scroll.scrollTo(x,y,time)
    }
  }
}
</script>

<style scoped>

</style>