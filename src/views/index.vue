<template>
  <div class="wrapper">
    <head-bar></head-bar>
    <div class="banner">
      <img src="../assets/image/home/banner.png" alt="" />
      <div class="video">
        <video controls height="694" src="../assets/about.mp4"></video>
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
  background: url("../assets/image/home/hsp_banner.png") no-repeat;
  background-size: 100%;
  max-width: 1920px;
  .card-list {
    max-width: 1446px;
    margin: 0 auto;
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
    li {
      flex: 1;
      width: 255px;
      height: 176px;
      margin-right: 30px;
      margin-bottom: 30px;
      &:nth-child(5n) {
        margin-right: 0;
      }
      img {
        width: 255px;
        height: 176px;
      }
      &:hover {
        img {
          transform: scale(1.2);
        }
      }
    }
    .more-card {
      position: relative;
      p {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #666666;
        font-size: 20px;
      }
    }
  }
  .item-cont {
    text-align: center;
    color: #333333;
    font-size: 18px;
  }
  .btn-wrap {
    margin: 15px auto;
    .btn {
      display: inline-block;
      vertical-align: middle;
      text-align: center;
      width: 140px;
      height: 42px;
      line-height: 42px;
      border: 1px solid #35227b;
      margin-right: 20px;
      color: #35227b;
      font-size: 16px;
      &:first-child {
        .ico {
          display: inline-block;
          vertical-align: middle;
          width: 18px;
          height: 18px;
          background: url("../assets/image/card-right.png") no-repeat;
          background-size: 100%;
        }
      }
      &:last-child {
        .ico {
          display: inline-block;
          vertical-align: middle;
          width: 18px;
          height: 18px;
          background: url("../assets/image/card-right-white.png") no-repeat;
          background-size: 100%;
        }
      }
    }
    .deep {
      background: #35227b;
      color: #fff;
    }
  }
}
.join-wrap {
  margin: 0 auto;
  max-width: 1440px;
  .img-wrap {
    float: left;
    width: 176px;
    height: 154px;
    img {
      width: 100%;
      &:last-child {
        display: none;
      }
    }
    &:hover {
      img {
        &:first-child {
          display: none;
        }
        &:last-child {
          display: block;
        }
      }
    }
  }
  .first {
    overflow: hidden;
    position: relative;
    top: 70px;
    .img-wrap {
      float: left;
      margin-left: 138px;
      &:first-child {
        margin-left: 158px;
      }
    }
  }
  .second {
    overflow: hidden;
    .img-wrap {
      margin-left: 138px;
      &:first-child {
        margin-left: 0;
      }
    }
  }
  .third {
    overflow: hidden;
    position: relative;
    top: -50px;
    .img-wrap {
      margin-left: 138px;
      &:first-child {
        margin-left: 156px;
      }
    }
  }
  .info {
    text-align: center;
    p {
      color: #333333;
      font-size: 18px;
      padding-bottom: 20px;
    }
    .btn-wrap {
      display: inline-block;
      vertical-align: middle;
      border: 1px solid #35227b;
      width: 140px;
      height: 42px;
      line-height: 42px;
      border-radius: 0px 0px 0px 0px;
      margin-bottom: 60px;
      opacity: 1;
      color: #35227b;
      cursor: pointer;
    }
    .ico {
      display: inline-block;
      vertical-align: middle;
      width: 18px;
      height: 18px;
      background: url("../assets/image/card-right.png") no-repeat;
      background-size: 100%;
    }
  }
}
.header-wrap {
  background: url("../assets/image/header-person.png") no-repeat;
  margin: 0 auto;
  max-width: 1920px;
  height: 880px;
  .inner {
    display: flex;
    padding-top: 96px;
    .left {
      flex: 1;
      .title-wrap {
        p {
          &:first-child {
            font-size: 48px;
            color: #fff;
            opacity: 0.3;
          }
          &:last-child {
            position: relative;
            font-size: 36px;
            color: #fff;
            top: -28px;
          }
        }
      }
      .profile {
        padding-top: 60px;
        .title {
          font-size: 30px;
          color: #fff;
          margin-bottom: 20px;
        }
        .detail {
          font-size: 30px;
          color: #fff;
          font-size: 16px;
          line-height: 1.5;
        }
      }
      .img-list-wrap {
        position: relative;
        margin-top: 200px;
        height: 250px;
        .left-swd {
          position: absolute;
          top: 50%;
          left: -50px;
          width: 21px;
          height: 38px;
          transform: translateY(-50%);
          background: url("../assets/image/index-left-swd.png") no-repeat;
          background-size: 100%;
          z-index: 1;
        }
        .right-swd {
          position: absolute;
          top: 50%;
          right: -40px;
          width: 21px;
          height: 38px;
          transform: translateY(-50%) rotate(-180deg);
          background: url("../assets/image/index-left-swd.png") no-repeat;
          background-size: 100%;
          z-index: 1;
        }
        ul {
          li {
            float: left;
            width: 173px;
            height: 224px;
            margin-right: 20px;
            box-sizing: border-box;
            &:last-child {
              margin-right: 0;
            }
            &.active {
              border: 2px solid #fff;
              transform: scale(1.1);
            }
            img {
              width: 100%;
            }
          }
        }
      }
    }
    .right {
      width: 670px;
      position: relative;
      left: -25px;
    }
  }
}
.hospital-banner {
  background: #fff;
  max-width: 1920px;
  padding: 40px 290px 120px 240px;

  .hospital-content {
    margin-top: 48px;
    display: flex;
    justify-content: space-between;
  }

  .left {
    img {
      width: 100%;
      max-width: 720px;
      max-height: 480px;
    }
  }

  .right {
    max-width: 625px;
    font-size: 18px;
    line-height: 36px;
  }
}
.case-banner {
  background: #fafafa;
  max-width: 1920px;
  padding: 10px 260px 83px 260px;

  .case-content {
    margin-top: 48px;
    display: flex;
    display: flex;
    justify-content: space-between;
  }

  .case-img {
    width: 100%;
    max-width: 580px;
    max-height: 350px;
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
    max-width: 640px;
  }

  .right {
    max-width: 620px;

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
.w1440 {
  margin: 0 auto;
  max-width: 1440px;
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
  &.left {
    text-align: left;
    .sec {
      font-size: 48px;
      color: #333333;
      position: relative;
      z-index: 1;
      top: 20px;
      font-weight: bold;
    }
  }
  &.head {
    text-align: left !important;
    margin-top: 50px;
    .first {
      font-size: 60px;
      font-weight: bold;
      color: #fff;
      opacity: 0.3;
    }
    p.sec {
      font-size: 48px;
      color: #fff;
      position: relative;
      z-index: 1;
      top: 45px;
      left: -710px;
      font-weight: bold;
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
      list: [
        {
          image: require("../assets/image/card/1.png"),
          content: "111",
          href: "",
          enter: "",
        },
        {
          image: require("../assets/image/card/2.png"),
          content: "222",
          href: "",
          enter: "",
        },
        {
          image: require("../assets/image/card/3.png"),
          content: "222",
          href: "",
          enter: "",
        },
        {
          image: require("../assets/image/card/4.png"),
          content: "333",
          href: "",
          enter: "",
        },
        {
          image: require("../assets/image/card/5.png"),
          content: "444",
          href: "",
          enter: "",
        },
        {
          image: require("../assets/image/card/10.png"),
          content: "555",
          href: "",
          enter: "",
        },
        {
          image: require("../assets/image/card/9.png"),
          content: "666",
          href: "",
          enter: "",
        },
        {
          image: require("../assets/image/card/8.png"),
          content: "444",
          href: "",
          enter: "",
        },
        {
          image: require("../assets/image/card/6.png"),
          content: "44",
          href: "",
          enter: "",
        },
        {
          image: require("../assets/image/card/7.png"),
          content: "333",
          href: "",
          enter: "",
        },
        {
          image: require("../assets/image/card/15.png"),
          content: "333",
          href: "",
          enter: "",
        },
        {
          image: require("../assets/image/card/14.png"),
          content: "333",
          href: "",
          enter: "",
        },
        {
          image: require("../assets/image/card/13.png"),
          content: "333",
          href: "",
          enter: "",
        },
        {
          image: require("../assets/image/card/15.png"),
          content: "33",
          href: "",
          enter: "",
        },
      ],
      org: {
        first: [
          {
            image: require("../assets/image/org/2.png"),
            active: require("../assets/image/org/2a.png"),
            content: "111",
            id: 2,
          },
          {
            image: require("../assets/image/org/5.png"),
            active: require("../assets/image/org/5a.png"),
            content: "111",
            id: 5,
          },
          {
            image: require("../assets/image/org/8.png"),
            active: require("../assets/image/org/8a.png"),
            content: "111",
            id: 8,
          },
          {
            image: require("../assets/image/org/12.png"),
            active: require("../assets/image/org/12a.png"),
            content: "111",
            id: 12,
          },
        ],
        second: [
          {
            image: require("../assets/image/org/1.png"),
            active: require("../assets/image/org/1a.png"),
            content: "111",
            id: 1,
          },
          {
            image: require("../assets/image/org/4.png"),
            active: require("../assets/image/org/4a.png"),
            content: "111",
            id: 4,
          },
          {
            image: require("../assets/image/org/7.png"),
            active: require("../assets/image/org/7a.png"),
            content: "111",
            id: 5,
          },
          {
            image: require("../assets/image/org/10.png"),
            active: require("../assets/image/org/10a.png"),
            content: "111",
            id: 10,
          },
          {
            image: require("../assets/image/org/13.png"),
            active: require("../assets/image/org/13a.png"),
            content: "111",
            id: 13,
          },
        ],
        third: [
          {
            image: require("../assets/image/org/3.png"),
            active: require("../assets/image/org/3a.png"),
            content: "111",
            id: 1,
          },
          {
            image: require("../assets/image/org/6.png"),
            active: require("../assets/image/org/6a.png"),
            content: "111",
            id: 4,
          },
          {
            image: require("../assets/image/org/9.png"),
            active: require("../assets/image/org/9a.png"),
            content: "111",
            id: 5,
          },
          {
            image: require("../assets/image/org/11.png"),
            active: require("../assets/image/org/11a.png"),
            content: "111",
            id: 10,
          },
        ],
      },
      personList: [
        {
          name: "111",
          title: "111",
          content: "111",
          small: require("../assets/image/person/1.png"),
          image: require("../assets/image/person/1big.png"),
        },
        {
          name: "222",
          title: "222",
          content: "222",
          small: require("../assets/image/person/2.png"),
          image: require("../assets/image/person/1big.png"),
        },
        {
          name: "333",
          title: "333",
          content: "333",
          small: require("../assets/image/person/3.png"),
          image: require("../assets/image/person/1big.png"),
        },
        {
          name: "444",
          title: "444",
          content: "444",
          small: require("../assets/image/person/4.png"),
          image: require("../assets/image/person/1big.png"),
        },
      ],
      current: null,
      curCard: null,
      curOrg: null,
      curIndex: 0,
      curPerson: {},
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
    this.curPerson = this.personList[0];
    this.setCaseList();
  },
  methods: {
    getCur(item, index) {
      this.current = index;
      this.curCard = item;
    },
    handleDetail(item) {
      console.log(item);
    },
    handleEnter(item) {
      console.log(item);
    },
    getOrg(item) {
      this.curOrg = item;
    },
    getCurPerson(item, index) {
      this.curPerson = item;
      this.curIndex = index;
    },
    setCaseList() {
      this.caseList = [
        {
          title: "首个县级国家标准化心血管病诊疗中心落地汝阳",
          content: `2020年6月13日上午11时，“中国梦·农工情”“大病不出县”国家级重点学科专项精准扶贫工程国家标准化心血管病诊疗中心启动暨揭牌仪式，在河南省汝阳县人民医院举行。<br>全国政协常委、河南省政协副主席、农工党河南省委会主委高体健，国家心血管病临床医学研究中心主任、首都医科大学附属北京安贞医院心脏内科中心主任马长生，农工党中央专委会委员、中国国际投资促进会副会长、中国初级卫生保健基金会中西部扶贫工作办公室主任狄森，洛阳市政协主席杨炳旭，农工党河南省委副主委、洛阳市人大常委会副主任、农工党洛阳市委主委雷雪芹，汝阳县委副书记、人民政府县长赵振峰等领导和专家出席了启动仪式。<br>汝阳县委常委、副县长杨会军主持仪式。国家标准化心血管病诊疗中心落地汝阳后，北京安贞医院心脏内科的专家将在汝阳县人民医院进行为期1-3年每年累计40周的对口帮扶，通过临床技术指导及理论培训，并结合本院医生到北京三甲医院进修、网上教学等举措，手把手打造一支带不走的国家级标准化心血管病诊疗团队，扎根汝阳，为当地人民提供长期的医疗服务。`,
          imgUrl: require("@/assets/image/home/key-case1.png"),
        },
        {
          title: "“行走的医院”帮扶工程落地湖南涟源",
          content: `2018年6月29日，“行走的医院”助力湖南省涟源市健康扶贫与乡村振兴行动启动仪式在京举行。启动仪式上，狄森和梁小兵签署了《医疗帮扶协议》，根据协议中国初级卫生保健基金会中西部扶贫工作办公室在三年内为涟源市配备价值18万元的全科医生助诊包504个。并且提供完善的设备使用培训，实现基层老百姓不用出村就可享受超声、验血、验尿、血压、血糖等全面医疗检查服务。同时依托“大病不出县—远程专家门诊乡镇全覆盖”工程，结合县人民医院、乡镇卫生院远程门诊基层站点，联合各大医疗机构，依托国内优质医疗专家团队资源，计划每天由百名来自大医院的专家，提供上万个专家号源下沉到基层，提升村医在基层诊疗中的权重，打通分级诊疗“最后一公里”。提高农村老百姓对重大疾病的“预防为主，防治结合”意识，减少重大疾病及慢性疾病发病率，解决农村老百姓看病困难，因病返贫问题。`,
          imgUrl: require("@/assets/image/home/key-case2.png"),
        },
        {
          title: "“行走的医院”助力望江县医疗扶贫项目",
          content: `2018年7月9号，“行走的医院”助力望江县医疗扶贫项目在北京成功签约。<br>根据双方签订的合作协议，中国初级卫生保健基金会中西部扶贫工作办公室，支持望江县县级公立医疗机构的创新升级和重点学科建设，开展全方位扶持，帮助其学科能力水平的提升；为望江县远程医疗乡镇卫生院和社区卫生服务中心全覆盖给予支持，帮助建立远程诊疗系统做成“检查在基层、诊断在县级医院”的分级诊疗体系，实现优质医疗资源下沉；对县级医院开展大病不出县项目支持，解决望江县人民群众看病难、看病贵的问题；对望江县教育信息化“三通两平台全覆盖”项目、安全饮水项目等开展合作支持，促进望江县民生社会事业发展。`,
          imgUrl: require("@/assets/image/home/key-case3.png"),
        },
        {
          title: "“行走的医院”助力大同市云州区健康扶贫",
          content: `全省首家，“行走的医院”助力云州区健康扶贫，打通诊疗最后一公里！<br>2018年8月23日，大病不出县“行走的医院”助力大同市云州区健康扶贫项目暨基层医生优才计划培训启动仪式在同举行。<br>该项目将为云州区配备价值18万元的全科医生助诊包155个。并且提供完善的设备使用培训，实现基层老百姓不用出村就可享受超声、验血、验尿、血压、血糖等全面医疗检查服务。同时依托“大病不出县—远程专家门诊乡镇全覆盖”工程，结合县人民医院、乡镇卫生院远程门诊基层站点，联合各大医疗机构，依托国内优质医疗专家团队资源，计划每天由百名来自大医院的专家，提供上万个专家号源下沉到基层，打通诊疗“最后一公里”。提高农村老百姓对重大疾病的“预防为主，防治结合”意识，减少重大疾病及慢性疾病发病率，解决农村老百姓看病困难，因病返贫问题。`,
          imgUrl: require("@/assets/image/home/key-case4.png"),
        },
      ];
    },
  },
};
</script>
