<template>
  <section class="box">
    <div class="cnt">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="70px"
        class="demo-ruleForm"
        status-icon
      >
        <el-form-item label="用户名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button type="primary" @click="registerForm('ruleForm')">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </section>
</template>

<script>
import { login, register } from "../api/api";
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      }
      callback();
    };

    return {
      ruleForm: {
        name: "chenli",
        pass: "12345"
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 20, message: "长度在 3 到 20 个字符", trigger: "blur" }
        ],
        pass: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          const data = await login(this.ruleForm);
          if (data.code === 0) {
            this.$router.push("/Home");
          } else {
            this.$message.error(data.msg);
          }
        } else {
          this.$message.error("请按规定填写");
          return false;
        }
      });
    },
    registerForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          const data = await register(this.ruleForm);
          if (data.code === 0) {
            this.$router.push("/Home");
          } else {
            this.$message.error(data.msg);
          }
        } else {
          this.$message.error("请按规定填写");
          return false;
        }
      });
    }
  }
};
</script>

<style lang='less' scoped>
.box {
  width: 400px;
  height: 300px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: white;
  border: 1px solid grey;
  border-radius: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.cnt {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div,
  h3 {
    line-height: 30px;
    height: 50px;
  }
  input {
    height: 30px;
    width: 200px;
  }
  button {
    width: 100px;
    background-color: blue;
    height: 30px;
    border: none;
    outline: none;
    color: white;
    cursor: pointer;
    border-radius: 5px;
  }
}
</style>