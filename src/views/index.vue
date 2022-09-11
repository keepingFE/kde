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
        <li
          v-for="(item, index) of list"
          :key="index"
          @click="getCur(item, index)"
        >
          <img :src="item.image" alt="" />
        </li>
        <li class="more-card">
          <p>更多学科<br />正在建设中....</p>
        </li>
      </ul>

      <div v-if="current !== null">
        <p class="item-cont">
          {{ list[current].content }}
        </p>
        <div class="btn-wrap">
          <span class="btn" @click="handleDetail(curCard)">
            <span>查看详情</span>
            <span class="ico"></span>
          </span>
          <span class="btn deep" @click="handleEnter(curCard)">
            <span>申报入口</span>
            <span class="ico"></span>
          </span>
        </div>
      </div>
    </div>
    <div class="join-wrap">
      <div class="common-title left">
        <p class="first">MEDICAL INSTITUTIONS</p>
        <p class="sec">参与医疗机构</p>
      </div>
      <div class="org-wrap w1440">
        <ul>
          <li class="first">
            <div
              class="img-wrap"
              v-for="(first, idx1) of org.first"
              :key="idx1"
              @click="getOrg(first)"
            >
              <img :src="first.image" alt="" />
              <img :src="first.active" alt="" />
            </div>
          </li>
          <li class="second">
            <div
              class="img-wrap"
              v-for="(sec, idx2) of org.second"
              :key="idx2"
              @click="getOrg(sec)"
            >
              <img :src="sec.image" alt="" />
              <img :src="sec.active" alt="" />
            </div>
          </li>
          <li class="third">
            <div
              class="img-wrap"
              v-for="(thr, idx3) of org.third"
              :key="idx3"
              @click="getOrg(thr)"
            >
              <img :src="thr.image" alt="" />
              <img :src="thr.active" alt="" />
            </div>
          </li>
        </ul>
        <div class="info" v-if="curOrg">
          <p>{{ curOrg.content }}</p>
          <div class="btn-wrap">
            <span>
              <span>查看详情</span>
              <i class="ico"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="header-wrap">
      <div class="w1440 inner">
        <div class="left">
          <div class="title-wrap">
            <p class="first">DISCIPLINE LEADERS</p>
            <p>部分学科带头人</p>
          </div>
          <div class="profile">
            <p class="title">{{ curPerson.name }} {{ curPerson.title }}</p>
            <p class="detail">{{ curPerson.content }}</p>
          </div>
          <div class="img-list-wrap">
            <i class="left-swd"></i>
            <ul>
              <li
                v-for="(imgItem, index) of personList"
                :key="index"
                @click="getCurPerson(imgItem, index)"
                :class="{ active: index === curIndex }"
              >
                <img :src="imgItem.small" />
              </li>
            </ul>
            <i class="right-swd"></i>
          </div>
        </div>
        <div class="right">
          <div class="img-wp">
            <img :src="curPerson.image" />
          </div>
        </div>
      </div>
    </div>
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
    max-width: 1446px;
    margin: 0 auto;
    overflow: hidden;
    li {
      float: left;
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
          right: -30px;
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
export default {
  name: "Index",
  components: { HeadBar },
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
    };
  },
  mounted() {
    this.curPerson = this.personList[0];
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
  },
};
</script>
