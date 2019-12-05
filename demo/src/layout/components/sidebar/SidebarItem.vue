<template>
  <div v-if="!item.hidden">
    <template v-if="!hasOneShowingChild(item)">
      <router-link :to="item.path">
        <el-menu-item :index="item.path">{{item.name}}</el-menu-item>
      </router-link>
    </template>
    <template v-else>
      <el-submenu :index="item.path">
        <template slot="title">{{item.meta.title}}</template>
        <router-link
          :to="basePath+'/'+child.path"
          v-for="(child, index) in item.children"
          :key="index"
          :index="child.path"
        >
          <el-menu-item :index="basePath+'/'+child.path">
            {{child.meta.title}}
           <!--  <sidebar-item :item="child"></sidebar-item> -->
          </el-menu-item>
        </router-link>
      </el-submenu>
    </template>
  </div>
</template>

<script>
export default {
  name: "SidebarItem",
  props: {
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      required: true
    }
  },
  created() {
    //this.hasOneShowingChild(this.item);
    console.log(this.hasOneShowingChild(this.item));
  },
  data() {
    this.onlyOneChild = null;
    return {};
  },
  methods: {
    hasOneShowingChild(item) {
      //const showingChildren = item.filter(item=>{
      if ("hidden" in item) return false;
      if (item.children.length === 1) return false;
      if (item.children.length === 0) return false;
      return true;
      //})
    },
    resolvePath() {}
  }
};
</script>