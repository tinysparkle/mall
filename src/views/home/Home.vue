<template>
  <div class="home">
    <NavBar class="home-nav">
      <h3 slot="center">购物街</h3>
    </NavBar>
     <TabControl
        :titles="['流行','新款','精选']"
        @tabClick="tabClick"
        :class="{tabControl:showNavBar}"
        ref="tabControl1"
        v-show="showNavBar"
      />
    <Scroll
      class="content"
      ref="scroll"
      :probeType="3"
      :pullUpLoad="true"
      @showPosition="showPosition"
      @pullingUp="loadMore"
    >
      <HomeSwiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <Recommend :recommends="recommends" />
      <Feature />
      <TabControl
        :titles="['流行','新款','精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      />
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
import { debounce } from "common/utils";
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
      isShow: false,
      tabOffsetTop: 0,
      showNavBar:false
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
    // 监听图片的刷新
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    this.$bus.$on("imageLoadItem", () => {
      refresh();
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
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    // 回到顶部
    backClick() {
      this.$refs.scroll.backTop(0, 0, 500);
    },
    // 指定位置回到顶部
    showPosition(position) {
      this.isShow = -(position.y) > 1000;
      this.showNavBar = -(position.y)>540
    },
    // 加载更多goods数据
    loadMore() {
      this.getHomeGoods(this.currentGoods);
      this.$refs.scroll.finishPullUp();
    },
    // 监听轮播图片加载
    swiperImageLoad(){
    // 获取tabcontroll的offsetTop
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
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
.tabControl {
  position: relative;
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