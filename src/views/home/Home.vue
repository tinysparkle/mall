<template>
  <div class="home">
    <NavBar class="home-nav">
      <h3 slot="center">购物街</h3>
    </NavBar>
    <Scroll
      class="content"
      ref="scroll"
      :probeType="3"
      :pullUpLoad="true"
      @showPosition="showPosition"
      @pullingUp="loadMore"
    >
      <HomeSwiper :banners="banners" />
      <Recommend :recommends="recommends" />
      <Feature />
      <TabControl :titles="['流行','新款','精选']" @tabClick="tabClick" class="tab-control" />
      <GoodsList :goods="showGoods" />
    </Scroll>

    <BackTop @click.native="backClick" v-show="isShow" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
//
import HomeSwiper from "./childCpns/HomeSwiper";
import Recommend from "./childCpns/Recommend";
import Feature from "./childCpns/FeatureView";
//
import { getMultiData, getHomeGoods } from "network/home";
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentGoods: "pop",
      isShow: false
    };
  },
  components: {
    GoodsList,
    NavBar,
    TabControl,
    HomeSwiper,
    Recommend,
    Feature,
    Scroll,
    BackTop
  },
  created() {
    // 请求banner图和推荐图数据
    this.getMultiData();
    // 请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {    
    const refresh = this.debounce(this.$refs.scroll.refresh,200)
    this.$bus.$on("imageLoadItem", () => {
      refresh()
    });
  },
  methods: {
    // tabbar点击切换
    tabClick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currentGoods = "pop";
          break;
        case 1:
          this.currentGoods = "new";
          break;
        case 2:
          this.currentGoods = "sell";
          break;
      }
    },
    // 回到顶部
    backClick() {
      this.$refs.scroll.backTop(0, 0, 500);
    },
    // 指定位置回到顶部
    showPosition(position) {
      this.isShow = -position.y > 1000;
    },
    // 加载更多goods数据
    loadMore() {
      this.getHomeGoods(this.currentGoods);
      this.$refs.scroll.finishPullUp();
    },
    // 防抖函数
    debounce(func,delay) {
      let timer = null
      return (...args) => {
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
          func.apply(this,args)
        },delay)
      }
    },
    /**
     * 网络请求有关的方法
     */
    // 获取banners和recommend图
    getMultiData() {
      getMultiData().then(res => {
        //  console.log(res)
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    // 获取商品图片
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentGoods].list;
    }
  }
};
</script>

<style scoped>
.home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
}

.home-nav {
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
  z-index: 9;
  background-color: var(--color-tint);
  color: #fff;
}
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
/* scroll区域 */
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
  overflow: hidden;
}
</style>