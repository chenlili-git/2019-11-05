<template>
  <el-row class="tac">
    <el-col :span="12">
      <el-menu
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
        unique-opened
        :default-openeds="['1']"
        :default-active="path"
      >
        <el-submenu :index="val.id" v-for="val in list" :key="val.id">
          <template slot="title">
            <i :class="iconList[val.id]"></i>
            <span v-text="val.name"></span>
          </template>
          <el-menu-item
            :index="cval.path"
            v-for="cval in val.children"
            v-text="cval.name"
            :key="cval.id"
          >发布信息</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import { asidelist } from "../api/api";
export default {
  data() {
    return {
      list: [],
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
      console.log(111111);
      //if (this.path !== this.$route.path) this.path = this.$route.path;
    }
  },

  async created() {
    const data = await asidelist();
    if (data.code === 0) {
      this.list = data.asideist;
    } else {
      this.$message.error("获取树状列表失败");
    }
    this.path = this.$route.path;
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="less" scoped>
.el-col-12 {
  width: 100%;
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
}
</style>