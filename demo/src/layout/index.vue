<template>
  <div class="app-wrapper">
    <side-bar class="siderbar"></side-bar>
    <app-main class="main"></app-main>
  </div>
</template>

<script>
import SideBar from "./components/sidebar/SideBar"
import AppMain from './components/AppMain'
export default {
    components:{
        SideBar,AppMain
    }
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  .siderbar {
    width: $sideBarWidth;
    height: 100%;
    background: $menuBg;
  }
  .main {
    width: calc(100% - #{$sideBarWidth});
  }
}
</style>