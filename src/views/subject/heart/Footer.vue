<template>
  <div class="footer">
    <div class="footer-content">
      <div class="content-left">
        <div class="info-content">
          <div class="info-content-item">
            <img src="@/assets/image/heart/phone.png" class="info" />
            <span class="label">项目办电话</span>
            <span class="desc">010-65284838</span>
          </div>
          <div class="info-content-item">
            <img src="@/assets/image/heart/location.png" class="info" />
            <span class="label">地址</span>
            <span class="desc">北京市东城区灯市口大街5</span>
          </div>
        </div>
        <div class="info-content">
          <div class="info-content-item">
            <span class="label">指导单位</span>
            <span class="desc">中国农工民主党中央联络委</span>
            <span class="desc">国家级医学中心专项精准帮扶工程发起方</span>
            <span class="desc">中国初级卫生保健基金会</span>
          </div>
        </div>
        <div class="info-content">
          <div class="info-content-item">
            <span class="desc">国家级医学中心专项精准帮扶工程承办方</span>
            <span class="desc"
              >中国初级卫生保健基金会中西部振兴与发展办公室联合中国心血管健康联盟、国家心血管疾病临床医学研究中心等国内顶级医疗、卫生、科研机构共同承办。</span
            >
          </div>
        </div>
      </div>
      <div class="qr-code">
        <img src="@/assets/image/qr-code.jpg" class="qr-code-img" />
        <div class="qr-desc">创新帮扶协作平台</div>
      </div>
    </div>
    <div class="footer-bottom">
      <a class="desc"
        >苏ICP备10216010号-1 Copyright ©2021 Garea Microsystem 版权所有</a
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
.footer {
  background: #f7f7f7;
  color: #666666;
  height: 11.85vh;

  .qr-code {
    text-align: center;
  }
  .qr-code-img {
    width: 5.55vh;
    height: 5.55vh;
    margin-bottom: 3px;
  }
  .qr-desc {
    color: #666666;
    font-size: 12px;
  }

  .footer-content {
    padding: 1.48vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1366px;
    margin: auto;

    .content-left {
    }

    .info-content {
      display: flex;
      align-items: center;
      line-height: 23px;

      .info-content-item {
        display: flex;
        align-items: center;

        & + .info-content-item {
          margin-left: 30px;
        }
      }

      .info {
        width: 1.85vh;
        height: 1.85vh;

        & + .label {
          margin-left: 6px;
        }
      }
      .label {
        font-size: 12px;
        & + .desc {
          margin-left: 10px;
        }
      }
      .desc {
        font-size: 12px;
      }
    }
  }

  .footer-bottom {
    background: #e6e6e6;
    height: 2.59vh;
    text-align: center;

    .desc {
      font-size: 12px;
      transform: scale(0.8);
    }
  }
}
</style>
<script>
export default {};
</script>
