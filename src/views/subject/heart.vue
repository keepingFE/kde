<template>
  <div class="wrapper">
    <head-bar></head-bar>
    <div class="heart-banner">
      <div class="common-title">
        <p class="first">NATIONAL CENTER FOR STANDARDIZED</p>
        <p class="sec">国家标准化心血管病诊疗中心</p>
      </div>
      <div class="heart-content">
        <div class="sub-title">
          <p class="first">Subject brief</p>
          <p class="sec">学科简介</p>
        </div>
        <div class="content-desc">
          联合国家心血管疾病临床医学研究中心、安贞医院等权威机构，以及汇集安贞医院马长生教授及其团队等国内顶级专家支撑，通过品牌下沉、资金帮扶、培训教育、人才培养和临床支持等措施，使建设单位在高血压、胸痛、心力衰竭等心血管疾病的诊疗水平达到“全国心血管疾病管理能力评估与提升工程”各专病示范中心水平，为其他基层医院心血管疾病诊疗标准化建设发挥示范作用。
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
          <img src="@/assets/image/heart/heart-org1.png" />
          <div class="org-title">中国人民解放军总医院</div>
        </div>
        <div class="org-item">
          <img src="@/assets/image/heart/heart-org2.png" />
          <div class="org-title">安贞医院</div>
        </div>
        <div class="org-item">
          <img src="@/assets/image/heart/heart-org3.png" />
          <div class="org-title">中国心血管健康联盟</div>
        </div>
        <div class="org-item">
          <img src="@/assets/image/heart/heart-org4.png" />
          <div class="org-title">复旦大学</div>
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
          <div class=""><img src="@/assets/image/heart/member1.png" /></div>
          <div class="member-desc">
            <div class="title">马长生 教授</div>
            <div>
              马长生，主任医师、教授，博士生导师，首都医科大学附属北京安贞医院心脏内科中心主任。现任国家心血管病临床医学研究中心主任、北京市心血管病防治办公室主任、首都医科大学心脏病学系主
            </div>
          </div>
        </div>
        <div class="member-item">
          <div class=""><img src="@/assets/image/heart/member2.png" /></div>
          <div class="member-desc">
            <div class="title">霍勇 教授</div>
            <div>
              北京大学第一医院教授、主任医师、博士生导师、美国心脏学院院士(FACC)，现任北京大学第一医院心内科及心脏中心主任，擅长冠心病、高血压、冠心病介入治疗。第十三届全国政协教科
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
        <img src="@/assets/image/heart/key-case.png" />
        <div class="case-desc">
          汝阳县是河南省第一个落地的国家级重点学科专项精准扶贫工程，这代表着汝阳县向“大病不出县”医改目标迈进了一大步。同时这也是在贯彻6月2日总书记在专家学者座谈上强调的“构建起强大的公共卫生体系，为维护人民健康提供有力保障”的重要指示。
        </div>
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
  background: url("@/assets/image/heart/heart-banner1.png") no-repeat;
  background-size: 100% 100%;
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

  .org-content {
    margin-top: 80px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .org-item {
      width: 340px;
      margin-bottom: 10px;

      &:hover {
        box-shadow: -6px -6px 12px 1px rgba(0, 0, 0, 0.1);
        .org-title {
          color: #fff;
          background: #35227b;
        }
      }

      img {
        width: 100%;
        display: block;
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
  background: url("@/assets/image/heart/heart-banner2.png") no-repeat;
  background-size: 100% 100%;
  max-width: 1920px;

  .member-content {
    display: flex;
    justify-content: space-between;

    .member-item {
      display: flex;
      padding: 10px;
      background: #fff;
      max-width: 700px;

      img {
        width: 300px;
        height: 400px;
      }

      .member-desc {
        padding: 30px;
        font-size: 18px;
        line-height: 30px;

        .title {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
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

    img {
      width: 100%;
      max-width: 1150px;
      max-height: 560px;
    }

    .case-desc {
      font-size: 18px;
      line-height: 36px;
      margin-top: 30px;
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
