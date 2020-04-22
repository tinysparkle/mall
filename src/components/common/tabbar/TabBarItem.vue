<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-img"></slot></div>
    <div v-else><slot name="item-img-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name:"TabBarItem",
  props:{
    path:String,
    activeColor:{
      type:String,
      default:"red"
    }
  },
  data () {
    return {
      // isActive:true
    }
  },
  computed: {
    isActive(){
      return this.$route.path === this.path
    },
    activeStyle(){
      return this.isActive?{color:this.activeColor}:{}
    }
  },
  methods: {
    itemClick(){
     this.$router.replace(this.path).catch(()=>{})
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  font-size: 14px;
}

.tab-bar-item img {
  margin-top: 3px;
  width: 24px;
  height: 24px;
  /* vertical-align 属性设置元素的垂直对齐方式。'middle'=>把此元素放置在父元素的中部。 */
  vertical-align: middle;
  margin-bottom: 2px;
}

</style>