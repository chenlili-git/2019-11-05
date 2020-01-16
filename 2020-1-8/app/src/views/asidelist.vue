<template>
  <el-menu
    :unique-opened="true"
    router
    :default-active="$route.path"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <div class="user-menu-box" v-for="menu in menus" :key="menu.id">
      <!-- <el-menu-item v-if="!menu.child" :index="menu.path">
        <i :class="iconList[menu.id]"></i>
        <span slot="title" v-text="menu.name"></span>
      </el-menu-item>-->
      <el-submenu v-if="menu.children" :index="menu.path">
        <template slot="title">
          <i :class="iconList[menu.id]"></i>
          <span slot="title" v-text="menu.name"></span>
        </template>

        <el-menu-item
          v-for="subMenu in menu.children"
          :key="subMenu.id"
          v-text="subMenu.name"
          :index="subMenu.path"
        ></el-menu-item>
      </el-submenu>
    </div>
  </el-menu>
</template>

<script>
import { asidelist } from "../api/api";
export default {
  data() {
    return {
      indexBreadcrumbs: [],
      menus: [],
      iconList: {
        "2": "el-icon-user",
        "1": "el-icon-film",
        "3": "el-icon-thumb"
      },
      path: ""
    };
  },
  watch: {
    //监听路由变化
    $route() {
      this.handChange();
    }
  },
  computed: {
    breadcrumbList() {
      let breadcrumbs = [];
      let menuList = this.menus;
      this.indexBreadcrumbs.map(item => {
        for (let i = 0; i < menuList.length; i++) {
          if (item === menuList[i].path) {
            breadcrumbs.push(menuList[i]);
            if (menuList[i].children) {
              menuList = menuList[i].children;
            }
            break;
          }
        }
      });
      return breadcrumbs;
    }
  },
  async created() {
    const data = await asidelist();
    if (data.code === 0) {
      this.menus = data.asideist;
    } else {
      this.$message.error("获取树状列表失败");
    }

    this.handChange();
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handChange() {
      console.log(this.breadcrumbList);
      this.$emit("hand-change", this.breadcrumbList);
    },
    handleSelect(index, indexPath) {
      this.indexBreadcrumbs = indexPath;
      console.log(" this.indexBreadcrumbs=", this.indexBreadcrumbs);
    }
  }
};
</script>

<style lang="less" scoped>
.el-submenu {
  text-align: left !important;
  .el-submenu__title {
    padding-left: 30px !important;
    i {
      margin-right: 10px;
    }
  }
  .el-menu-item {
    padding-left: 60px !important;
    font-size: 12px;
  }
}
</style>