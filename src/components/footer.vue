<template>
  <div class="footer">
    <div class="footer-top">
      <div>
        <img src="@/assets/image/share-wechat.png" class="share" />
        <img src="@/assets/image/share-qq.png" class="share" />
      </div>
      <div class="info-content">
        <div class="info-content-item">
          <img src="@/assets/image/phone.png" class="info" />
          <span class="label">项目办电话</span>
          <span class="desc">010-65284838</span>
        </div>
        <div class="info-content-item">
          <img src="@/assets/image/location.png" class="info" />
          <span class="label">地址</span>
          <span class="desc">北京市东城区灯市口大街5</span>
        </div>
      </div>
    </div>
    <div class="footer-content">
      <div class="flex-center">
        <div class="text-content">
          <div>指导单位</div>
          <div>国家级医学中心专项精准帮扶工程发起方</div>
          <div>国家级医学中心专项精准帮扶工程承办方</div>
        </div>
        <div class="text-content">
          <div>中国农工民主党中央联络委</div>
          <div>中国初级卫生保健基金会</div>
          <div>
            中国初级卫生保健基金会中西部振兴与发展办公室联合中国心血管健康联盟、<br />
            国家心血管疾病临床医学研究中心等国内顶级医疗、卫生、科研机构共同承办。
          </div>
        </div>
      </div>
      <div class="qr-code">
        <img src="@/assets/image/qr-code.jpg" class="qr-code-img" />
        <div>扫码关注医疗资源</div>
      </div>
    </div>
    <div class="footer-bottom">
      <a>苏ICP备10216010号-1 Copyright ©2021 Garea Microsystem 版权所有</a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.footer {
  background: #222222;
  color: #fff;
  .footer-top {
    padding: 14px 240px 14px 260px;
    border-bottom: 1px solid #606060;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      line-height: 0;
    }

    .share {
      width: 32.78px;
      height: 32.78px;

      & + .share {
        margin-left: 20px;
      }
    }
    .info-content {
      display: flex;
      align-items: center;
      line-height: 0;

      .info-content-item {
        display: flex;
        align-items: center;

        & + .info-content-item {
          margin-left: 30px;
        }
      }
    }
    .info {
      width: 28px;
      height: 28px;
    }
    .label {
      margin-left: 6px;
    }
    .desc {
      margin-left: 10px;
    }
  }

  .qr-code {
    text-align: center;
  }
  .qr-code-img {
    width: 118px;
    height: 118px;
    margin-bottom: 12px;
  }

  .footer-content {
    padding: 32px 240px 32px 260px;
    border-bottom: 1px solid #606060;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .text-content {
      line-height: 24px;

      & + .text-content {
        margin-left: 20px;
      }

      > div {
        margin-bottom: 10px;
      }
    }
  }

  .footer-bottom {
    background: #333333;
    padding: 14px;
    text-align: center;
  }
}
</style>
<script>
export default {};
</script>
