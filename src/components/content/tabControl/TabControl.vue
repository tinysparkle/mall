<template>
  <div class="tab-control">
    <div
      v-for="(item,index) in titles"
      :key="index"
      class="tab-control-item"
      :class="{active:index===currentIndex}"
      @click="itemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabControl",
  data() {
    return {
      currentIndex: 0
    };
  },
  props: {
    titles: Array
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick',index)
    }
  }
};
</script>

<style scoped>
.tab-control {
  display: flex;
  background-color: #fff;
  text-align: center;
  height: 40px;
  line-height: 40px;
  
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span {
  padding: 5px;
}

.active span {
  border-bottom: 2px solid var(--color-high-text);
  color: var(--color-high-text);
}
</style>