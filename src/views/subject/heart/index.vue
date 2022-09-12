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
        <div class="login-content"></div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  margin: 0 auto;
  max-width: 1920px;
}
.heart-content {
  height: 83.35vh;

  .carousel-content {
    height: 63vh;

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
        font-size: 16px;
        color: #fff;
        line-height: 36px;
      }
    }
  }

  .carousel-img {
    width: 100%;
    height: 100%;
  }
}
@media (max-width: 768px) {
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
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
