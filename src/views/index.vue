<template>
  <div class="wrapper">
    <head-bar></head-bar>
    <div class="banner">
      <img src="../assets/image/banner.png" alt="" />
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
.banner {
  margin: 0 auto;
  max-width: 1920px;
  img {
    width: 100%;
  }
}
@media (max-width: 768px) {
}
@media (min-width: 768px) and (max-width: 1920px) {
}
</style>
<script>
import HeadBar from "@/components/head.vue";
export default {
  name: "Index",
  components: { HeadBar },
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
