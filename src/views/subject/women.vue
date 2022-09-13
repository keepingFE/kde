<template>
  <div class="wrapper">
    <head-bar></head-bar>
    <div class="heart-banner">
      <div class="common-title">
        <p class="first">GYNECOLOGICAL DISEASES</p>
        <p class="sec">国家标准化妇科疾病诊疗中心</p>
      </div>
      <div class="heart-content">
        <div class="sub-title">
          <p class="first">Subject brief</p>
          <p class="sec">学科简介</p>
        </div>
        <div class="content-desc">
          联合中国医学科学院北京协和医院妇产疾病国家临床研究中心等国内权威机构，汇集北京协和医院朱兰教授及其团队等国内顶级专家团队支撑，通过品牌下沉、资金帮扶、培训教育、人才培养和临床支持等措施，在全国县级医疗机构建设“国家标准化妇科疾病诊疗中心”，通过项目实施，提高基层医院妇科疾病的分级评估能力和系统化管理能力，推动妇科疾病基本诊疗服务均等化，建立妇科疾病不同层次相互关联的网络化分级管理体系，为基层医院妇科疾病诊疗标准化建设发挥示范作用。
        </div>
      </div>
    </div>
    <div class="org-banner">
      <div class="sub-title">
        <p class="first">CONSTITUTE AN INSTITUTION</p>
        <p class="sec">组成机构</p>
      </div>
      <div class="org-content">
        <div class="org-item">
          <img class="img-origin" src="@/assets/image/women/women-org1.png" />
          <img class="img-active" src="@/assets/image/women/women-org1-1.png" />
          <div class="org-title">北京协和医院</div>
        </div>
      </div>
    </div>
    <div class="member-banner">
      <div class="sub-title">
        <p class="first">MEMBERS</p>
        <p class="sec" style="color: #fff">专委会及成员</p>
      </div>
      <div class="member-content">
        <div class="member-item">
          <div class=""><img src="@/assets/image/women/member1.png" /></div>
          <div class="member-desc">
            <div class="title">郎景和 院士</div>
            <div>
              郎景和，妇产科专家，中国工程院院士，北京协和医院妇产科主任、教授、博士生导师。郎景和主要从事妇产科医疗、教学、科研工作。
            </div>
          </div>
        </div>
        <div class="member-item">
          <div class=""><img src="@/assets/image/women/member2.png" /></div>
          <div class="member-desc">
            <div class="title">朱兰 主任</div>
            <div>
              首都医科大学宣武医院神经内科副主任，现任中国医师协会神经内科医师分会委员、中国康复医学会脑功能检测与调控康复专委会副主任委员、北京市脑卒中质控中心副主任。研宄领城涉及卒中后抑郁、卒中后认知功能障碍、卒中相关睡眼障碍、脑小血管病等血管性，脑功能障碍的发病机制与综合干预、人工智能铺助脑血管病规范化治疗以及脑卒中后情绪障得、运动障得和认知障得的神经调控治疗。
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="case-banner">
      <div class="sub-title">
        <p class="first">KEY CASES</p>
        <p class="sec">重点案例介绍</p>
      </div>
      <div class="case-content">
        <img src="@/assets/image/women/no-data.png" />
        <div class="case-desc">暂无数据</div>
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
.sub-title {
  .first {
    font-size: 48px;
    font-weight: bold;
    color: #333333;
    opacity: 0.3;
  }
  .sec {
    font-size: 36px;
    color: #333333;
    position: relative;
    z-index: 1;
    top: -26px;
    font-weight: bold;
  }
}
.heart-banner {
  background-image: url("@/assets/image/women/women-banner1.png"),
    url("@/assets/image/women/women-banner1-1.png");
  background-repeat: no-repeat, no-repeat;
  background-size: 100% 100%, 100% 100%;
  padding-top: 20px;
  padding-bottom: 250px;
  max-width: 1920px;

  .common-title {
    margin-top: 70px;
  }

  .heart-content {
    margin-top: 160px;
    margin-left: 240px;
  }

  .content-desc {
    font-size: 18px;
    line-height: 36px;
    width: 60%;
    max-width: 900px;
    color: #666666;
  }
}
.org-banner {
  padding: 60px 240px 100px 240px;
  background: #fff;
  background: url("@/assets/image/women/women-banner3.png") no-repeat;
  background-position: 700px bottom;
  background-size: 1011px 342px;

  .org-content {
    margin-top: 80px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .org-item {
      width: 340px;
      margin-bottom: 10px;
      cursor: pointer;

      &:hover {
        box-shadow: -6px -6px 12px 1px rgba(0, 0, 0, 0.1);
        .org-title {
          color: #fff;
          background: #35227b;
        }

        .img-origin {
          display: none;
        }

        .img-active {
          display: block;
        }
      }

      img {
        width: 100%;
        max-width: 338px;
        max-height: 245px;
        display: block;
      }

      .img-origin {
        display: block;
      }

      .img-active {
        display: none;
      }

      .org-title {
        text-align: center;
        height: 60px;
        line-height: 60px;
        background: #e7e7e7;
        font-size: 24px;
      }
    }
  }
}
.member-banner {
  padding: 60px 240px 100px 240px;
  background: url("@/assets/image/women/women-banner2.png") no-repeat;
  background-size: 100% 100%;
  max-width: 1920px;

  .member-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: self-start;

    .member-item {
      display: flex;
      padding: 10px;
      background: #fff;
      margin-bottom: 10px;
      max-width: 690px;

      &:first-child {
        margin-top: 20px;
      }

      img {
        width: 300px;
        height: 400px;
      }

      .member-desc {
        padding: 20px 30px;
        font-size: 18px;
        line-height: 30px;

        .title {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 10px;
        }
      }
    }
  }
}
.case-banner {
  padding: 60px 240px 100px 240px;
  background: #fff;

  .case-content {
    margin-top: 60px;
    padding: 0 140px;
    text-align: center;

    img {
      width: 100%;
      max-width: 622px;
      max-height: 504px;
    }

    .case-desc {
      font-size: 30px;
      line-height: 36px;
      margin-top: 90px;
      color: #999999;
    }
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
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
