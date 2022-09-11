<template>
  <div class="wrapper">
    <div class="head">
      <h3>国家级重点学科工程</h3>
      <ul>
        <li>首页</li>
        <li>工程介绍</li>
        <li>医学中心</li>
        <li>行走的医院</li>
        <li>重点案例</li>
        <li>
          <span>登录</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  margin: 0 auto;
  max-width: 1920px;
}
.head {
  display: flex;
  align-items: center;
  h3 {
    color: #666666;
    font-size: 30px;
  }
  ul {
    flex: 1;
    text-align: right;
    li {
      display: inline-block;
      vertical-align: middle;
      color: #666666;
      &.active {
        color: #666666;
      }
    }
  }
}
@media (max-width: 768px) {
}
@media (min-width: 768px) and (max-width: 1920px) {
}
</style>
<script>
export default {
  name: "Index",
  data() {
    return {
      rules: {
        loginName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  mounted() {},
  methods: {
    loginSubmit() {
      this.$refs["ruleForm"].validate((valid) => {
        if (!valid) return;
      });
    },
  },
};
</script>
