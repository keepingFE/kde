<template>
  <div class="wrapper">
    <head-bar></head-bar>
    <div class="heart-content">
      <div class="notice"></div>
      <div class="carousel-content">
        <el-carousel
          trigger="click"
          style="height: 100%; width: 100%"
          height="100%"
          arrow="never"
        >
          <el-carousel-item name="1">
            <div class="carousel-item-content">
              <div class="text-content">
                <div class="common-title">
                  <p class="first">NATIONAL CENTER FOR STANDARDIZED</p>
                  <p class="sec">国家标准化心血管病诊疗中心</p>
                </div>
                <div class="sub-title">
                  <p class="first">Subject brief</p>
                  <p class="sec">学科简介</p>
                </div>
                <div class="desc">
                  依托中国人民解放军总医院、首都医科大学附属北京天坛医院、首都医科大学附属宣武医院等权威机构，以及汇集北京天坛医院孟凡刚教授及其团队等国内顶级专家支撑，通过推广“脑重大疾病标准化诊疗中心”的标准化建设，通过资金帮扶、培训教育、人才培养、适宜技术引进以及临床支持等措施，建立预警体系，规范化临床诊治路径，加强专业人才培养，为脑重大疾病的预防、诊断、急救、治疗提供技术支撑。通过建立脑重大疾病标准化诊疗中心的协同网络，实现远程会诊、移动查房.....
                </div>
              </div>
              <img
                class="carousel-img"
                src="@/assets/image/heart/carousel1.png"
              />
            </div>
          </el-carousel-item>
          <el-carousel-item name="1">
            <div class="carousel-item-content">
              <div class="text-content">
                <div class="common-title">
                  <p class="first">NATIONAL CENTER FOR STANDARDIZED</p>
                  <p class="sec">国家标准化心血管病诊疗中心</p>
                </div>
                <div class="sub-title">
                  <p class="first">Subject brief</p>
                  <p class="sec">学科简介</p>
                </div>
                <div class="desc">
                  依托中国人民解放军总医院、首都医科大学附属北京天坛医院、首都医科大学附属宣武医院等权威机构，以及汇集北京天坛医院孟凡刚教授及其团队等国内顶级专家支撑，通过推广“脑重大疾病标准化诊疗中心”的标准化建设，通过资金帮扶、培训教育、人才培养、适宜技术引进以及临床支持等措施，建立预警体系，规范化临床诊治路径，加强专业人才培养，为脑重大疾病的预防、诊断、急救、治疗提供技术支撑。通过建立脑重大疾病标准化诊疗中心的协同网络，实现远程会诊、移动查房.....
                </div>
              </div>
              <img
                class="carousel-img"
                src="@/assets/image/heart/carousel1.png"
              />
            </div>
          </el-carousel-item>
          <el-carousel-item name="1">
            <div class="carousel-item-content">
              <div class="text-content">
                <div class="common-title">
                  <p class="first">NATIONAL CENTER FOR STANDARDIZED</p>
                  <p class="sec">国家标准化心血管病诊疗中心</p>
                </div>
                <div class="sub-title">
                  <p class="first">Subject brief</p>
                  <p class="sec">学科简介</p>
                </div>
                <div class="desc">
                  依托中国人民解放军总医院、首都医科大学附属北京天坛医院、首都医科大学附属宣武医院等权威机构，以及汇集北京天坛医院孟凡刚教授及其团队等国内顶级专家支撑，通过推广“脑重大疾病标准化诊疗中心”的标准化建设，通过资金帮扶、培训教育、人才培养、适宜技术引进以及临床支持等措施，建立预警体系，规范化临床诊治路径，加强专业人才培养，为脑重大疾病的预防、诊断、急救、治疗提供技术支撑。通过建立脑重大疾病标准化诊疗中心的协同网络，实现远程会诊、移动查房.....
                </div>
              </div>
              <img
                class="carousel-img"
                src="@/assets/image/heart/carousel1.png"
              />
            </div>
          </el-carousel-item>
        </el-carousel>
        <div class="login-form">
          <div class="login-form-title">基层医院登录</div>
          <div class="login-form-wrap">
            <el-form ref="ruleForm" :model="loginForm" :rules="rules">
              <el-form-item prop="loginName" class="name-wrap">
                <el-input
                  type="text"
                  placeholder="请输入管理员账号"
                  v-model="loginForm.loginName"
                  @change="changeLoginName"
                >
                  <i slot="prefix" class="el-icon-user"></i>
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
                  <div class="forget-btn">忘记密码</div>
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
      <div class="bottom-content">
        <div class="card-content">
          <div class="card">
            <img src="@/assets/image/heart/card1.png" />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  margin: 0 auto;
  max-width: 1920px;
  min-width: 1366px;
  min-height: 768px;
}
.heart-content {
  height: 80.75vh;

  .carousel-content {
    height: 63vh;
    position: relative;

    .carousel-item-content {
      width: 100%;
      height: 100%;
      position: relative;

      .text-content {
        position: absolute;
        width: 1366px;
        left: 50%;
        transform: translateX(-50%);
        top: 10vh;
      }

      .common-title {
        position: relative;
        .first {
          font-size: 48px;
          line-height: 48px;
          font-weight: bold;
          color: #fff;
          opacity: 0.3;
        }
        .sec {
          font-size: 48px;
          line-height: 48px;
          color: #fff;
          position: relative;
          z-index: 1;
          top: -26px;
          font-weight: bold;
        }
      }

      .sub-title {
        margin-top: 4.63vh;
        .first {
          font-size: 30px;
          line-height: 30px;
          font-weight: bold;
          color: #fff;
          opacity: 0.3;
        }
        .sec {
          font-size: 30px;
          line-height: 30px;
          color: #fff;
          position: relative;
          z-index: 1;
          top: -10px;
          font-weight: bold;
        }
      }

      .desc {
        width: 63vh;
        margin-top: 1.4vh;
        font-size: 1.48vh;
        color: #fff;
        line-height: 3.33vh;
      }
    }
  }

  .bottom-content {
    height: 17.75vh;

    .card-content {
      width: 1366px;
      margin: 3.33vh auto;
      display: flex;
      justify-content: space-around;

      .card {
        width: 15.74vh;
        height: 11.11vh;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .carousel-img {
    width: 100%;
    height: 100%;
  }
}
.login-form {
  width: 31.5vh;
  height: 33.33vh;
  background: #ffffff;
  box-shadow: 0px 0px 0.92vh rgba(0, 0, 0, 0.1);
  border-radius: 1.11vh;
  opacity: 1;
  border-radius: 1.11vh;
  text-align: left;
  position: absolute;
  top: 15vh;
  right: 25vh;
  z-index: 999;
}
.login-form-title {
  width: 100%;
  height: 2.96vh;
  margin: 2.77vh 0 3.7vh;
  font-size: 2.7vh;
  line-height: 2.59vh;
  font-weight: bold;
  text-align: center;
}
.el-icon-user {
  display: inline-block;
  vertical-align: middle;
  width: 1.67vh;
  height: 1.57vh;
  background: url("@/assets/image/username.png") no-repeat;
  background-size: 100%;
}
.el-icon-password {
  display: inline-block;
  vertical-align: middle;
  width: 1.67vh;
  height: 1.57vh;
  background: url("@/assets/image/password.png") no-repeat;
  background-size: 100%;
}
.login-form input {
  width: 80%;
}
.login-form-wrap {
  margin-left: 3.7vh;
  margin-right: 3.7vh;
}
.login {
  width: 100%;
  height: 3.7vh;
  margin: 0 auto 1.8vh;
  background: $theme;
  border-radius: 0.55vh;
  border: none;
  text-align: center;
  font-size: 1.48vh;
  padding: 1.11vh 1.85vh;
  font-weight: 500;
}
.el-form-item {
  text-align: center;
  margin-bottom: 1.85vh;
}
.forget-wrap {
  display: flex;
  align-items: center;

  :deep(.el-checkbox__label) {
    font-size: 12px;
  }
  .forget-btn {
    flex: 1;
    text-align: right;
    color: #cccccc;
    font-size: 12px;
  }
}
:deep(.login-form-wrap) {
  .el-input {
    font-size: 1.3vh;
    height: 3.7vh;
    line-height: 3.7vh;
  }
  .el-input__inner {
    border: none !important;
    border-bottom: 1px solid #ececec !important;
    height: 3.7vh;
    line-height: 3.7vh;
    font-size: 1.3vh;
  }
  .el-form-item__content {
    line-height: 3.7vh;
  }
  .el-checkbox__label {
    color: $theme !important;
  }
  .el-checkbox__input.is-focus .el-checkbox__inner {
    border-color: $theme !important;
  }
  .el-checkbox__input.is-checked .el-checkbox__inner,
  .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: $theme !important;
    border-color: $theme !important;
  }
  .el-checkbox__input.is-checked + .el-checkbox__label {
    color: $theme !important;
  }
  .el-checkbox.is-bordered.is-checked {
    border-color: $theme !important;
  }
}
.pwd-handle {
  position: absolute;
  right: 0;
  top: 50%;
  width: 1.66vh;
  height: 1.66vh;
  cursor: pointer;
}
.pwd-view {
  background: url("@/assets/image/pwd-hide.png") no-repeat;
  background-size: 100%;
  transform: translateY(-50%);
}
.pwd-hide {
  background: url("@/assets/image/pwd-view.png") no-repeat;
  background-size: 100%;
  transform: translateY(-50%);
}
@media (max-width: 1366px) {
  .text-content {
    padding-left: 20px;
    padding-right: 20px;
  }
}
@media (min-width: 768px) and (max-width: 1920px) {
}
</style>
<script>
import HeadBar from "./Header.vue";
import Footer from "./Footer.vue";
export default {
  name: "Index",
  components: { HeadBar, Footer },
  data() {
    return {
      loginForm: {
        loginName: null,
        password: null,
      },
      rules: {
        loginName: [
          { required: true, message: "请输入管理员账号", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
      show: false,
      remain: null,
      loading: false,
    };
  },
  mounted() {},
  methods: {
    handleLogin() {
      this.loginSubmit();
    },
    loginSubmit() {
      this.$refs["ruleForm"].validate((valid) => {
        if (!valid) return;
        this.$message.error("账号密码错误！");
      });
    },
    handleView() {
      this.show = !this.show;
    },
    changeLoginName() {
      if (this.loginForm.loginName) {
        this.loginForm.password = "";
      }
    },
  },
};
</script>
