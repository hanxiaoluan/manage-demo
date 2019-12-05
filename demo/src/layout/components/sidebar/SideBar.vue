<template>
  <div class="container">
    <el-scrollbar :native="true" wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :unique-opened="false"
        mode="vertical"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :active-text-color="variables.menuActiveText"
      >
        <sidebar-item v-for="(route, index) in permission_routes" :key="index" :item="route" :base-path="route.path"></sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
import SidebarItem from "./SidebarItem.vue";

import variables from "@/styles/variables.scss";

export default {
  components: {
    SidebarItem
  },
  computed: {
    permission_routes() {
      return this.$store.getters.permission_routes;
    },
    activeMenu(){
      return this.$route.path;
    }
  },
  data() {
    return {
      variables: variables
    };
  },
  created() {
    console.log(this.activeMenu.meta);
    console.log(this.activeMenu.path);
  }
};
</script>

<style lang="scss" scoped>
  .el-scrollbar{
    height: 100%;
  }

</style>