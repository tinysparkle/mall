<template>
  <div id="detail">
    <DetailNavBar class="nav-bar"/>
    <Scroll class="content">
      <DetailSwiper :detailImages="detailImages" />
      <DetailBaseInfo :goods="goods" />
      <DetailShopInfo :shop="shop" />
    </Scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childDetail/DetailNavBar";
import DetailSwiper from "./childDetail/DetailSwiper";
import DetailBaseInfo from "./childDetail/DetailBaseInfo";
import DetailShopInfo from "./childDetail/DetailShopInfo";
import Scroll from "components/common/scroll/Scroll";
//
import { getDetail, Goods, Shop } from "network/detail";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      // 顶部轮播图数据
      detailImages: [],
      // 轮播图下请求的复杂数据
      goods: {},
      shop: {}
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {
      this.detailImages = res.result.itemInfo.topImages;
      // console.log(res);
      const data = res.result;
      // 获取商品信息
      this.goods = new Goods(
        data.columns,
        data.itemInfo,
        data.shopInfo.services
      );
      // 获取店铺信息
      this.shop = new Shop(data.shopInfo);
    });
  }
};
</script>

<style scoped>
#detail {
  height: 100vh;
  position: relative;
  z-index: 9;
  background: #fff;
}
/* scroll 可滚动区域 */
.content {
  /* 第一种方式 */
 /* height: calc(100% - 44px); */


 /* 第二种方式 */
 position: absolute;
 top: 44px;
 left: 0;
 right: 0;
 bottom: 0;
}
.nav-bar {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>