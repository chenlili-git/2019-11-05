<template>
  <div>
    <el-row class="searchBox">
      <span>客户名：</span>
      <el-input v-model="input" placeholder="请输入内容" class="clientName"></el-input>
      <span>所属类型：</span>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value "
        ></el-option>
      </el-select>
      <el-button type="primary">查询</el-button>
      <Box></Box>
    </el-row>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="序号" width="50" type="index"></el-table-column>
      <el-table-column label="客户名" width="150">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="域名" width="100">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="所属类型" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column label="添加时间" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="主题" width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="系统模板" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Box from "../assets/components/clientbox";
export default {
  data() {
    return {
      input: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      // console.log(index, row);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  },
  components: {
    Box
  }
};
</script>
<style>
.searchBox {
  text-align: left !important;
  margin-bottom: 20px;
}
.el-input {
  width: 200px !important;
}
.clientName {
  margin-right: 20px;
}
.searchBox .el-button--primary {
  float: initial;
  margin-left: 20px;
}
.el-table td,
.el-table th {
  text-align: center !important;
}

.el-button--primary {
  float: right;
}
/* 弹框样式 */
.el-message-box__wrapper .box div {
  height: 50px;
}
.el-message-box__wrapper .box span {
  width: 100px;
  text-align: right;
  display: inline-block;
  margin-right: 5px;
}

.el-message-box__wrapper .box i {
  color: red;
  vertical-align: middle;
  margin-right: 5px;
}

.el-message-box__wrapper .box input {
  height: 30px;
  line-height: 30px;
}
.el-message-box__wrapper .clientName {
  cursor: pointer;
}
.newClient{
  display: inline-block;
}
</style>