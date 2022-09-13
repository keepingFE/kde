<template>
  <div class="header">
    <div class="header-content">
      <div class="left">
        <div class="logo-content">
          <img class="logo" src="@/assets/image/logo.png" />
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
    padding: 1.39vh 0;
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
      height: 4.63vh;
      margin: 0 20px;
      background-color: #35227b;
    }

    .logo-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      .logo {
        width: 16.67vh;
      }
      .title {
        font-size: 1.85vh;
        font-weight: bold;
        margin-top: 0.37vh;
        line-height: 1.85vh;
      }
    }

    .subject-cloud {
      width: 12.5vh;
      height: 4.07vh;
      cursor: pointer;
      background: #35227b;
      border-radius: 2.96vh;
      display: flex;
      align-items: center;
      padding: 0 0.92vh;
      color: #fff;

      .cloud-text {
        font-size: 1.85vh;
        line-height: 1.85vh;
      }

      .cloud {
        width: 3.42vh;
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
        height: 4.62vh;
        line-height: 4.62vh;
        border-bottom: 0.37vh solid transparent;
      }

      .el-menu-item.is-active {
        border-bottom: 0.37vh solid #35227b;
      }
    }

    .el-button {
      border-radius: 0;
      margin-left: 40px;
    }
  }
}
@media (max-width: 1366px) {
  .header {
    .header-content {
      padding-left: 20px;
      padding-right: 20px;
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
