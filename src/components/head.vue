<template>
  <div>
    <div class="head">
      <h3>国家级重点学科工程</h3>
      <ul>
        <li>首页</li>
        <li>学科建设</li>
        <li>行走的医院</li>
        <li>新闻动态</li>
        <li>下载中心</li>
        <li>帮助</li>
      </ul>
    </div>
  </div>
</template>
<style scoped lang="scss">
.head {
  display: flex;
  align-items: center;
  max-width: 1460px;
  height: 70px;
  box-sizing: border-box;
  margin: 0 auto;
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
      font-size: 16px;
      margin: 0 15px;
      cursor: pointer;
      &.active {
        color: #666666;
      }
      .login {
        display: inline-block;
        vertical-align: middle;
        width: 80px;
        height: 36px;
        text-align: center;
        line-height: 36px;
        background: #dfe0ee;
        border-radius: 0px 0px 0px 0px;
        opacity: 1;
      }
    }
  }
}
</style>
<script>
export default {
  data() {
    return {};
  },
};
</script>
