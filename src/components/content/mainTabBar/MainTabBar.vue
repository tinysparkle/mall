<template>
   <TabBar class="mainTabBar">
      <!-- activeColor => 自定义激活的文字颜色 -->
      <TabBarItem path="/home" activeColor="red">
        <img slot="item-img" src="~assets/img/tabbar/home.png" alt />
        <img slot="item-img-active" src="~assets/img/tabbar/home_active.png" alt />
        <div slot="item-text">主页</div>
      </TabBarItem>
      <TabBarItem path="/category">
        <img slot="item-img" src="~assets/img/tabbar/category.png" alt />
        <img slot="item-img-active" src="~assets/img/tabbar/category_active.png" alt />

        <div slot="item-text">分类</div>
      </TabBarItem>
      <TabBarItem path="/cart">
        <img slot="item-img" src="~assets/img/tabbar/cart.png" alt />
        <img slot="item-img-active" src="~assets/img/tabbar/cart_active.png" alt />

        <div slot="item-text">购物车</div>
      </TabBarItem>
      <TabBarItem path="/profile">
        <img slot="item-img" src="~assets/img/tabbar/profile.png" alt />
        <img slot="item-img-active" src="~assets/img/tabbar/profile_active.png" alt />

        <div slot="item-text">我的</div>
      </TabBarItem>
    </TabBar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name:"MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
/* .mainTabBar {
  z-index: 9;
} */
</style>