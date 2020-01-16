<template>
  <div class="home">
    <el-container>
      <el-header>
        <div class="logo">宁夏教育厅运营管理平台</div>
        <div>
          <span id="user">
            欢迎
            <strong class="strong">{{uname}}</strong>登录本系统
          </span>
          <span id="exitBtn" @click="exit">退出</span>
        </div>
      </el-header>
      <el-container>
        <el-aside>
          <asidelist v-on:hand-change="changebread"></asidelist>
        </el-aside>
        <el-main>
          <el-row class="breadBox">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item v-for="o in breadcrumbList" :key="o.id">{{o.name}}</el-breadcrumb-item>
            </el-breadcrumb>

            <!-- <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item
                v-for="bread in breadList"
                v-bind:key="bread"
              >{{ breadsName[bread] }}</el-breadcrumb-item>
              <el-breadcrumb-item>活动列表</el-breadcrumb-item>
              <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb> -->
          </el-row>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-main>
      </el-container>
      <el-footer>
        <p class="proname">宁夏学生校服互联网管理服务平台</p>
        <p class="address">地址：银川市金凤区上海西路127号 客服电话：400 689 6600</p>
        <p class="card">经营许可证：宁ICP备16000125号-1</p>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import customerlist from "./customerlist";
import asidelist from "./asidelist";
export default {
  data() {
    return {
      uname: "",
      breadsName: {},
      breadcrumbList: []
    };
  },
  name: "home",
  components: {
    customerlist,
    asidelist
  },
  created() {
    //获取用户名
    this.uname = JSON.parse(sessionStorage.getItem("user")).username;
    //this.breadcrumbList=
  },
  watch: {

  },
  methods: {
    exit() {
      this.$confirm("此操作将退出系统, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          sessionStorage.clear();
          this.$router.push("/");
          this.$message({
            type: "success",
            message: "退出成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消退出"
          });
        });
    },
    changebread(val) {
      this.breadcrumbList=val;
    }
  }
};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
}
.el-header,
.el-footer {
  height: auto !important;
  background-color: #333;
  color: white;
}
.el-header {
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  div {
    display: inline-block;
  }
  .logo {
    font-size: 18px;
    font-weight: bold;
  }
  .strong {
    margin: 0 10px;
    color: red;
  }
}

.el-footer {
  padding: 20px 0 !important;
}
.el-aside {
  width: 200px !important;
  background-color: rgb(84, 92, 100);
  color: #333;
  text-align: center;
  height: 90vh;
  overflow-x: hidden !important;
}
.el-aside li {
  width: 200px !important;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 30px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
html,
body {
  font-size: 12px;
}
ul li {
  list-style: none;
}
a {
  text-decoration: none;
  color: #333;
}
header {
  color: white;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #333;
  text-align: right;
  box-sizing: border-box;
  padding-right: 20px;
}
header span:first-child {
  margin-right: 20px;
}
header span:last-child {
  cursor: pointer;
}
footer {
  padding: 20px 0;
  background-color: #333333;
}
footer p {
  padding-top: 10px !important;
  font-size: 14px;
  color: white;
  text-align: center;
}
footer p.proname {
  padding-top: 0px !important;
}

.breadBox {
  padding-bottom: 10px;
  border-bottom: 1px solid #333;
  margin-bottom: 20px;
  text-align: left;
}
.el-breadcrumb {
  display: inline-block;
  vertical-align: middle;
}
.el-breadcrumb .el-breadcrumb__inner {
  cursor: pointer;
}
</style>
