<template>
  <div class="wrapper">
    <head-bar></head-bar>
    <div class="banner">
      <img src="../assets/image/banner.png" alt="" />
      <div class="video">
        <video controls height="694" src="../assets/about.mp4"></video>
      </div>
    </div>
    <div class="hsp-banner">
      <div class="common-title">
        <p class="first">MEDICAL CENTER</p>
        <p class="sec">医学中心</p>
      </div>
      <ul class="card-list">
        <li>
          <img src="../assets/image/card/1.png" alt="" />
        </li>
        <li>
          <img src="../assets/image/card/2.png" alt="" />
        </li>
        <li>
          <img src="../assets/image/card/3.png" alt="" />
        </li>
        <li>
          <img src="../assets/image/card/4.png" alt="" />
        </li>
      </ul>
    </div>
    <Footer />
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
  position: relative;
  img {
    width: 100%;
  }
  .video {
    height: 700px;
    position: absolute;
    left: 50%;
    top: 0;
    height: 700px;
    text-align: center;
    box-sizing: border-box;
    transform: translate(-50%, 0);
  }
}
.hsp-banner {
  text-align: center;
  background: url("../assets/image/hsp_banner.png") no-repeat;
  background-size: 100%;
  max-width: 1920px;
  .card-list {
    display: flex;
    flex-wrap: wrap;
    li {
      flex: 1;
      width: 255px;
      height: 176px;
      margin-right: 30px;
      &:nth-child(4n) {
        margin-right: 0;
      }
      img {
        width: 100%;
      }
    }
  }
}
.common-title {
  text-align: center;
  margin-top: 50px;
  .first {
    font-size: 60px;
    font-weight: bold;
    color: #333333;
    opacity: 0.3;
  }
  .sec {
    font-size: 48px;
    color: #333333;
    position: relative;
    z-index: 1;
    top: -60px;
    font-weight: bold;
  }
}
@media (max-width: 768px) {
}
@media (min-width: 768px) and (max-width: 1920px) {
}
</style>
<script>
import HeadBar from "@/components/head.vue";
import Footer from "@/components/footer.vue";
export default {
  name: "Index",
  components: { HeadBar, Footer },
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
