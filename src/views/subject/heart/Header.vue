<template>
  <div class="header">
    <div class="header-content">
      <div class="left">
        <div class="logo-content">
          <img class="logo" src="@/assets/image/heart/logo.png" />
          <div class="title">国家标准化心血管病诊疗中心</div>
        </div>
        <el-divider direction="vertical"></el-divider>
        <div class="subject-cloud">
          <img class="cloud" src="@/assets/image/heart/cloud.png" />
          <div class="cloud-text">学科云</div>
        </div>
      </div>
      <div class="right">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">科学介绍</el-menu-item>
          <el-menu-item index="3">学科专委会</el-menu-item>
          <el-menu-item index="4">新闻动态</el-menu-item>
        </el-menu>
        <el-button type="primary" size="small">去申报</el-button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.header {
  min-width: 1366px;
  height: 7.4vh;

  .header-content {
    width: 1366px;
    padding: 15px 0;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .left {
    display: flex;
    align-items: center;

    .el-divider--vertical {
      width: 2px;
      height: 50px;
      margin: 0 20px;
      background-color: #35227b;
    }

    .logo-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      .logo {
        width: 180px;
      }
      .title {
        font-size: 20px;
        font-weight: bold;
        margin-top: 4px;
        line-height: 20px;
      }
    }

    .subject-cloud {
      width: 130px;
      height: 44px;
      cursor: pointer;
      background: #35227b;
      border-radius: 32px 32px 32px 32px;
      display: flex;
      align-items: center;
      padding: 0 10px;
      color: #fff;

      .cloud-text {
        font-size: 20px;
        line-height: 20px;
      }

      .cloud {
        width: 37px;
        margin-right: 10px;
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    .el-menu--horizontal {
      border-bottom: 0;
      .el-menu-item {
        height: 50px;
        line-height: 50px;
        border-bottom: 4px solid transparent;
      }

      .el-menu-item.is-active {
        border-bottom: 4px solid #35227b;
      }
    }

    .el-button {
      border-radius: 0;
      margin-left: 40px;
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect() {},
  },
};
</script>
