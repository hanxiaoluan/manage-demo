<template>
  <div>
    <el-scrollbar native="true" wrap-class="scrollbar-wrapper">
      <el-menu>
        <sidebar-item v-for="(item, index) in permission_routes" :key="index"></sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
import SidebarItem from "./SidebarItem.vue";
export default {
  components: {
    SidebarItem
  },
  computed: {
    permission_routes() {
      return this.$store.getters.permission_routes;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>