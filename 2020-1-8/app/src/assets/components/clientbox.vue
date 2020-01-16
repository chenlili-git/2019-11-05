<template>
  <div class="newClient">
    <el-button type="primary" @click="dialogVisible = true">添加客户</el-button>

    <el-dialog title="新建客户" :visible="dialogVisible" width="50%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="客户名称:">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="域名:">
          <el-input v-model="form.number"></el-input>
        </el-form-item>
        <el-form-item label="系统模板:" :label-width="formLabelWidth">
          <el-select v-model="form.system" placeholder="请选择系统模板">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="主题:" :label-width="formLabelWidth">
          <el-select v-model="form.theme" placeholder="请选择主题">
            <el-option label="区域三" value="shanghai"></el-option>
            <el-option label="区域四" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="上传Logo:" :label-width="formLabelWidth">
          支持png、jpg、jpeg格式
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog  v-show="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>

        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      form: {
        name: "",
        number: "",
        system: "",
        theme: ""
      },
      dialogImageUrl: "",
      dialogVisible: false,
      formLabelWidth: "80px"
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      console.log(file)
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>
<style scope>
.el-dialog__header {
  border-bottom: 1px solid #e8e8e8;
}
.el-form-item__content {
  font-size: 12px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px !important;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>