<template>
  <div>
    <NavBar>
      <div slot="left" class="left" @click="backClik">
        <img src="~assets/img/common/back.svg" alt />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item,index) in titles"
          :key="index"
          class="title-item"
          :class="{active:index === currentIndex}"
          @click="titleClick(index)"
        >{{item}}</div>
      </div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "ChildDatil",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  components: {
    NavBar
  },
  methods: {
    // navbar点击高亮
    titleClick(index) {
      this.currentIndex = index;
    },
    // 返回上一层
    backClik() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.title {
  display: flex;
  font-size: 12px;
}
.title-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.left img {
  margin-top: 12px;
}
</style>