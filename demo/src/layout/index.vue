<template>
  <div class="app-wrapper">
    <side-bar class="sidebar"></side-bar>
    <div class="main"></div>
  </div>
</template>

<script>
import SideBar from "./components/sidebar/SideBar"
export default {
    components:{
        SideBar
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
  }
  .main {
    width: calc(100% - #{$sideBarWidth});
  }
}
</style>