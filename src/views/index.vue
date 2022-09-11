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
    <div class="hospital-banner">
      <div class="common-title">
        <p class="first">Walking in the hospital</p>
        <p class="sec">行走的医院</p>
      </div>
      <div class="hospital-content">
        <div class="left">
          <img src="@/assets/image/hospital.png" />
        </div>
        <div class="right">
          “行走的医院”是由中国农工民主党主导发起的医疗健康精准扶贫项目。项目通过一整套智能化科技装备（全科医生助诊包、全科医生工作站及配套的综合检测设备等）及业务一体化系统平台（“互联网+医疗”平台、多个信息化业务管理系统），为基层医生及基层医疗卫生机构提供医疗服务能力支撑，提升基层百姓对优质力医疗资源的可及性。<br />
          “行走的医院”通过为基层医生配备智能化全科医生助诊包（可实现24项血液化验、11项尿液检验、心电图检查、超声检查……村医背起这个包可送医上门、入户筛查 [31]  ）并提供完善的设备使用培训，赋能基层医生把优质医疗资源和服务背进百姓家里。同时，“行走的医院”配备“互联网+医疗”平台，整合专家资源及各级医疗机构建立医疗联合体，推动形成分级诊疗就医新秩序，助力实现“大病不出县、小病不出村”，解决百姓看病难、看病贵问题。
        </div>
      </div>
    </div>
    <div class="case-banner">
      <div class="common-title">
        <p class="first">Key cases</p>
        <p class="sec">重点案例</p>
      </div>
      <div class="case-content">
        <div class="left">
          <img class="case-img" :src="currentCase.imgUrl" />
          <div class="case-desc">
            <div class="title">{{ currentCase.title }}</div>
            <div class="desc-content" v-html="currentCase.content"></div>
          </div>
        </div>
        <div class="right">
          <div
            class="right-item"
            v-for="(item, index) in caseList"
            :class="{ active: activeCaseIndex === index }"
            @click="activeCaseIndex = index"
            :key="index"
          >
            <div class="title">{{ item.title }}</div>
            <div class="desc" v-html="item.content"></div>
          </div>
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
.hospital-banner {
  background: #fff;
  max-width: 1920px;
  padding: 90px 290px 120px 240px;

  .hospital-content {
    margin-top: 48px;
    display: flex;
    justify-content: space-between;
  }

  .left {
    img {
      width: 720px;
      height: 480px;
    }
  }

  .right {
    width: 625px;
    font-size: 18px;
    line-height: 36px;
  }
}
.case-banner {
  background: #fafafa;
  max-width: 1920px;
  padding: 60px 260px 83px 260px;

  .case-content {
    margin-top: 48px;
    display: flex;
    display: flex;
    justify-content: space-between;
  }

  .case-img {
    width: 580px;
    height: 350px;
  }

  .case-desc {
    margin-top: 30px;

    .desc-content {
      overflow: hidden;
      text-overflow: ellipsis; /* 超出部分省略号 */
      word-break: break-all; /* break-all(允许在单词内换行。) */
      display: -webkit-box; /* 对象作为伸缩盒子模型显示 */
      -webkit-box-orient: vertical; /* 设置或检索伸缩盒对象的子元素的排列方式 */
      -webkit-line-clamp: 5; /* 显示的行数 */
      max-height: 152px;
      font-size: 18px;
      line-height: 30px;
    }
  }

  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .left {
    padding: 30px;
    background: #fff;
    width: 640px;
  }

  .right {
    width: 620px;

    .right-item {
      width: 100%;
      padding: 20px 14px;
      border-bottom: 2px solid #e9e9e9;
      cursor: pointer;

      & + .right-item {
        margin-top: 30px;
      }

      &.active {
        background: #ffffff;
        box-shadow: -6px -6px 12px 1px rgba(0, 0, 0, 0.1);
        border-bottom: 2px solid transparent;
      }

      .desc {
        padding: 0 6px;
        overflow: hidden;
        text-overflow: ellipsis; /* 超出部分省略号 */
        word-break: break-all; /* break-all(允许在单词内换行。) */
        display: -webkit-box; /* 对象作为伸缩盒子模型显示 */
        -webkit-box-orient: vertical; /* 设置或检索伸缩盒对象的子元素的排列方式 */
        -webkit-line-clamp: 2; /* 显示的行数 */
        max-height: 148px;
        font-size: 18px;
        line-height: 30px;
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
      caseList: [],
      activeCaseIndex: 0,
    };
  },
  computed: {
    currentCase() {
      if (this.caseList.length) {
        return this.caseList[this.activeCaseIndex];
      }
      return {};
    },
  },
  mounted() {
    this.setCaseList();
  },
  methods: {
    loginSubmit() {
      this.$refs["ruleForm"].validate((valid) => {
        if (!valid) return;
      });
    },
    setCaseList() {
      this.caseList = [
        {
          title: "首个县级国家标准化心血管病诊疗中心落地汝阳",
          content: `2020年6月13日上午11时，“中国梦·农工情”“大病不出县”国家级重点学科专项精准扶贫工程国家标准化心血管病诊疗中心启动暨揭牌仪式，在河南省汝阳县人民医院举行。<br>全国政协常委、河南省政协副主席、农工党河南省委会主委高体健，国家心血管病临床医学研究中心主任、首都医科大学附属北京安贞医院心脏内科中心主任马长生，农工党中央专委会委员、中国国际投资促进会副会长、中国初级卫生保健基金会中西部扶贫工作办公室主任狄森，洛阳市政协主席杨炳旭，农工党河南省委副主委、洛阳市人大常委会副主任、农工党洛阳市委主委雷雪芹，汝阳县委副书记、人民政府县长赵振峰等领导和专家出席了启动仪式。<br>汝阳县委常委、副县长杨会军主持仪式。国家标准化心血管病诊疗中心落地汝阳后，北京安贞医院心脏内科的专家将在汝阳县人民医院进行为期1-3年每年累计40周的对口帮扶，通过临床技术指导及理论培训，并结合本院医生到北京三甲医院进修、网上教学等举措，手把手打造一支带不走的国家级标准化心血管病诊疗团队，扎根汝阳，为当地人民提供长期的医疗服务。`,
          imgUrl: require("@/assets/image/key-case1.png"),
        },
        {
          title: "“行走的医院”帮扶工程落地湖南涟源",
          content: `2018年6月29日，“行走的医院”助力湖南省涟源市健康扶贫与乡村振兴行动启动仪式在京举行。启动仪式上，狄森和梁小兵签署了《医疗帮扶协议》，根据协议中国初级卫生保健基金会中西部扶贫工作办公室在三年内为涟源市配备价值18万元的全科医生助诊包504个。并且提供完善的设备使用培训，实现基层老百姓不用出村就可享受超声、验血、验尿、血压、血糖等全面医疗检查服务。同时依托“大病不出县—远程专家门诊乡镇全覆盖”工程，结合县人民医院、乡镇卫生院远程门诊基层站点，联合各大医疗机构，依托国内优质医疗专家团队资源，计划每天由百名来自大医院的专家，提供上万个专家号源下沉到基层，提升村医在基层诊疗中的权重，打通分级诊疗“最后一公里”。提高农村老百姓对重大疾病的“预防为主，防治结合”意识，减少重大疾病及慢性疾病发病率，解决农村老百姓看病困难，因病返贫问题。`,
          imgUrl: require("@/assets/image/key-case2.png"),
        },
        {
          title: "“行走的医院”助力望江县医疗扶贫项目",
          content: `2018年7月9号，“行走的医院”助力望江县医疗扶贫项目在北京成功签约。<br>根据双方签订的合作协议，中国初级卫生保健基金会中西部扶贫工作办公室，支持望江县县级公立医疗机构的创新升级和重点学科建设，开展全方位扶持，帮助其学科能力水平的提升；为望江县远程医疗乡镇卫生院和社区卫生服务中心全覆盖给予支持，帮助建立远程诊疗系统做成“检查在基层、诊断在县级医院”的分级诊疗体系，实现优质医疗资源下沉；对县级医院开展大病不出县项目支持，解决望江县人民群众看病难、看病贵的问题；对望江县教育信息化“三通两平台全覆盖”项目、安全饮水项目等开展合作支持，促进望江县民生社会事业发展。`,
          imgUrl: require("@/assets/image/key-case3.png"),
        },
        {
          title: "“行走的医院”助力大同市云州区健康扶贫",
          content: `全省首家，“行走的医院”助力云州区健康扶贫，打通诊疗最后一公里！<br>2018年8月23日，大病不出县“行走的医院”助力大同市云州区健康扶贫项目暨基层医生优才计划培训启动仪式在同举行。<br>该项目将为云州区配备价值18万元的全科医生助诊包155个。并且提供完善的设备使用培训，实现基层老百姓不用出村就可享受超声、验血、验尿、血压、血糖等全面医疗检查服务。同时依托“大病不出县—远程专家门诊乡镇全覆盖”工程，结合县人民医院、乡镇卫生院远程门诊基层站点，联合各大医疗机构，依托国内优质医疗专家团队资源，计划每天由百名来自大医院的专家，提供上万个专家号源下沉到基层，打通诊疗“最后一公里”。提高农村老百姓对重大疾病的“预防为主，防治结合”意识，减少重大疾病及慢性疾病发病率，解决农村老百姓看病困难，因病返贫问题。`,
          imgUrl: require("@/assets/image/key-case4.png"),
        },
      ];
    },
  },
};
</script>
