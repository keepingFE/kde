<template>
  <div class="login-contain">
    <div class="logo-wrap">
      <div class="logo-img">
        <img src="../../assets/image/logo.png" alt="" />
      </div>
      <p class="title">{{ $appName }}</p>
    </div>

    <div class="login-wrapper">
      <div class="login-img">
        <img src="../../assets/image/login-img.png" alt="" />
      </div>
      <!-- 登录框 -->
      <div class="login-form">
        <div class="login-form-title">登录</div>
        <div class="login-form-wrap">
          <el-form ref="ruleForm" :model="loginForm" :rules="rules">
            <el-form-item prop="loginName" class="name-wrap">
              <el-input
                type="text"
                placeholder="请输入手机号"
                v-model="loginForm.loginName"
                @change="changeLoginName"
              >
                <i slot="prefix" class="el-icon-mobile"></i>
              </el-input>
            </el-form-item>
            <el-form-item prop="password" class="pwd-wrap">
              <el-input
                :type="show ? 'text' : 'password'"
                placeholder="请输入密码"
                auto-complete="new-password"
                v-model="loginForm.password"
                @keyup.enter.native="loginSubmit"
              >
                <i slot="prefix" class="el-icon-password"></i>
              </el-input>
              <i
                class="pwd-handle"
                :class="{
                  'pwd-view': show === true,
                  'pwd-hide': show === false,
                }"
                @click="handleView"
              ></i>
            </el-form-item>
            <el-form-item>
              <div class="forget-wrap">
                <el-checkbox v-model="remain">自动登录</el-checkbox>
              </div>
            </el-form-item>
            <el-form-item>
              <el-button
                class="login"
                :loading="loading"
                type="primary"
                @click="handleLogin"
                >登录</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Base64 } from "js-base64";
import { debounce } from "lodash-es";
export default {
  name: "Login",
  data() {
    return {
      codeBtnText: "获取验证码",
      serverCode: window.config.serverCode || "HOP",
      loginForm: {
        loginName: null,
        password: null,
      },
      forgetForm: {
        email: "",
        code: "",
        newPwd: "",
        confirmNewPwd: "",
      },
      remain: null,
      show: false,
      second: null,
      timer: null,
      rules: {
        loginName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
      forgetRules: {
        email: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
        newPwd: [{ required: true, message: "请输入验证码", trigger: "blur" }],
        confirmNewPwd: [
          { required: true, message: "请输入验证码", trigger: "blur" },
        ],
      },
      loading: false,
      visible: false,
    };
  },
  mounted() {
    const userId = localStorage.getItem("userId");
    const pwd = localStorage.getItem("password");
    if (userId) {
      this.loginForm.loginName = userId;
      this.loginForm.password = Base64.decode(pwd);
      this.remain = true;
    }
  },
  methods: {
    handleForget() {
      this.visible = true;
    },
    handleClose() {
      this.visible = false;
    },
    handleSubmit() {
      this.visible = false;
    },
    handleView() {
      this.show = !this.show;
    },
    clearCookie: function () {
      this.setCookie("", "", -1);
    },
    changeLoginName() {
      if (this.loginForm.loginName) {
        this.loginForm.password = "";
      }
    },
    handleLogin: debounce(function () {
      this.loginSubmit();
    }, 1000),
    loginSubmit() {
      if (!this.loginForm.loginName) {
        this.$message.warning("用户名不能为空");
        return false;
      }
      if (!this.loginForm.password) {
        this.$message.warning("密码不能为空");
        return false;
      }
      this.$refs["ruleForm"].validate((valid) => {
        if (!valid) return;
        this.loading = true;
        if (this.remain) {
          let password = Base64.encode(this.loginForm.password);
          localStorage.setItem("userId", this.loginForm.loginName);
          localStorage.setItem("password", password);
        } else {
          localStorage.removeItem("userId");
          localStorage.removeItem("password");
        }
        this.$message.error("登陆失败！");
      });
    },
  },
};
</script>

<style lang="scss" scoped>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
.forget-wrap {
  display: flex;
  align-items: center;
  .forget-btn {
    flex: 1;
    text-align: right;
  }
}
.email-wrap {
  display: flex;
  align-items: center;
  .email-input {
    flex: 1;
  }
  .code-btn {
    width: 110px;
    margin-left: 6px;
  }
}
.forget-form {
  padding: 0 26px;
}
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 80%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .login-img {
    margin-right: 120px;
  }
}
.logo-wrap {
  position: absolute;
  left: 50px;
  top: 30px;
  display: flex;
  align-items: center;
  color: #3849bf;
  font-size: 30px;
  z-index: 100;
  .title {
    position: relative;
    margin-left: 10px;
    padding-left: 15px;
    &::before {
      position: absolute;
      left: 0;
      top: 5px;
      width: 4px;
      height: 36px;
      background: #e1e1e1;
      border-radius: 3px 3px 3px 3px;
      content: "";
    }
  }
  .logo-img,
  .logo-title {
    display: inline-block;
    vertical-align: middle;
  }
  .logo-img {
    padding-top: 10px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .logo-title {
    font-size: 30px;
    margin: 0 10px;
    font-weight: bold;
    color: #5c1a86;
  }
}

.pwd-wrap {
  margin-bottom: 10px;
}
.el-input {
  font-size: 12px;
  font-weight: 500;
  color: red !important;
}
.el-icon-mobile {
  display: inline-block;
  vertical-align: middle;
  width: 18px;
  height: 17px;
  background: url("../../assets/image/mobile-ico.png") no-repeat;
  background-size: 100%;
}
.el-icon-password {
  display: inline-block;
  vertical-align: middle;
  width: 18px;
  height: 17px;
  background: url("../../assets/image/pwd-ico.png") no-repeat;
  background-size: 100%;
}
.name-wrap,
.pwd-wrap {
  position: relative;
}
.pwd-handle {
  position: absolute;
  right: 0;
  top: 50%;
  width: 18px;
  height: 18px;
  cursor: pointer;
}
.pwd-view {
  background: url("../../assets/image/pwd-hide.png") no-repeat;
  background-size: 100%;
  transform: translateY(-50%);
}
.pwd-hide {
  background: url("../../assets/image/pwd-view.png") no-repeat;
  background-size: 100%;
  transform: translateY(-50%);
}
.forget {
  color: #cccccc;
  font-size: 12px;
}
.remember {
  display: flex;
  justify-content: flex-end;
  color: #ffffff;
}
.remember-password {
  color: #ffffff;
  padding-right: 10px;
}
.copy-right {
  width: 350px;
  height: 14px;
  bottom: 40px;
  left: 40px;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  color: #ffffff;
  position: absolute;
}
.user-icon {
  width: 24px;
  height: 24px;
}
.forget-pwd {
  z-index: 9999;
}
.login-contain {
  width: 100%;
  height: 100%;
  position: fixed;
  background: #fbfcff url(../../assets/image/login-bg.png) no-repeat center 0;
  background-position: center 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  .login-form {
    width: 440px;
    height: 480px;
    background: #ffffff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    opacity: 1;
    border-radius: 12px;
    text-align: left;
  }
  .login-form-title {
    width: 100%;
    height: 32px;
    margin: 50px 0 100px;
    font-size: 22px;
    line-height: 32px;
    font-weight: bold;
    text-align: center;
  }
  .login-form input {
    width: 80%;
  }
  .login-form-wrap {
    margin-left: 40px;
    margin-right: 40px;
  }
  .login {
    width: 100%;
    height: 50px;
    margin: 0 auto 20px;
    background: #35227b;
    border-radius: 6px;
    border: none;
    text-align: center;
    font-size: 22px;
    font-weight: 500;
  }
  .el-form-item {
    text-align: center;
  }
  .white {
    color: #ffffff;
  }
}
</style>
<style lang="scss">
.login-form-wrap {
  .el-input__inner {
    border: none !important;
    border-bottom: 1px solid #ececec !important;
  }
  .el-checkbox__label {
    color: #35227b;
  }
  .el-checkbox__input.is-focus .el-checkbox__inner {
    border-color: #35227b;
  }
  .el-checkbox__input.is-checked .el-checkbox__inner,
  .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #35227b;
    border-color: #35227b;
  }
  .el-checkbox__input.is-checked + .el-checkbox__label {
    color: #35227b;
  }
  .el-checkbox.is-bordered.is-checked {
    border-color: #35227b;
  }
}
</style>
