<template>
  <div id="app">
   <MainTabBar></MainTabBar>
   <keep-alive>
     <router-view></router-view>
   </keep-alive>
  </div>
</template>

<script>
import MainTabBar from "./components/content/mainTabBar/MainTabBar"

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
@import "assets/css/base.css"
</style>
