<template>
  <!-- <div class="passwordBox" style="display: none;">
    <p class="tip">为保障您账户的安全，请每间隔3个月更换一次新密码，若3个月后未更换密码，将无法使用旧密码登录!</p>
    <div class="pwCnt">
      <div>
        <span>旧密码：</span>
        <input type="password" id="oldPW" />
      </div>
      <div>
        <span>新密码：</span>
        <input type="password" id="newPW" />
      </div>
      <div>
        <span>确认密码:</span>
        <input type="password" id="confirmPW" />
      </div>
      <div class="btn">
        <button>确认修改</button>
      </div>
    </div>
  </div>-->

  <el-form
    :model="ruleForm"
    status-icon
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item label="新密码" prop="pass">
      <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass">
      <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { replacepwd } from "../api/api";
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        user: {}
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  created() {
    this.ruleForm.user = JSON.parse(sessionStorage.getItem("user"));
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          let data = await replacepwd(this.ruleForm);
          if (data.code === 0) {
            this.$message({
              message: data.msg,
              type: "success"
            });
            sessionStorage.clear();
            this.$router.push("/");
          }
        } else {
          this.$message({
            message: data.msg,
            type: "error"
          });
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="less" scoped>
.el-form {
  text-align: left;
  .el-button--primary {
    float: left !important;
  }
  .el-form-item {
    width: 350px;
    margin: 20px auto;
  }
}
</style>