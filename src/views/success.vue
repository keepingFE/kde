<template>
  <div class="contain">
    <div class="top-bar">国家级重点学科工程</div>
    <div class="main">
      <div class="content">
        <div class="img-wrap">
          <img src="../assets/image/success.png" alt="" />
        </div>
        <p class="title">提交成功</p>
        <p class="sub-title">请耐心等候，我们会尽快联系您。</p>
        <el-button class="return" type="primary">返回</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Success",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    cancelSettled() {
      if (this.$store.state.user.userInfo) {
        this.$router.push("/audit");
      } else {
        sessionStorage.clear();
        this.$router.push("/login");
      }
    },
    changeNatureCode(e) {
      this.orgNatureList &&
        this.orgNatureList.forEach((item) => {
          if (item.itemCode == e) {
            this.addForm.orgNatureName = item.itemName;
          }
        });
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(valid);
        }
      });
    },
    //取地区数据
    getArea(node, area = {}) {
      switch (node.level) {
        case 1:
          area.provinceCode = node.value;
          area.provinceName = node.label;
          break;
        case 2:
          area.cityCode = node.value;
          area.cityName = node.label;
          break;
        case 3:
          area.countyCode = node.value;
          area.countyName = node.label;
      }
      if (node.parent) {
        this.getArea(node.parent, area);
      }
    },
    handleUploadPicturesSuccess(res) {
      this.addForm.imgUrls.push(res.data);
    },
    handleRemovePictures(index) {
      this.addForm.imgUrls.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.top-bar {
  background: #35227b;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  padding: 10px 150px;
}
.return {
  margin: 50px;
}
.check-wrap {
  text-align: left;
  border: 1px solid #c0c4cc;
  padding-left: 10px;
  border-radius: 5px;
}
.title {
  font-weight: bold;
  font-size: 20px;
  padding: 20px;
}
.sub-title {
  color: #00000072;
}
.w100 {
  width: 100%;
}
.w50 {
  width: 48%;
  &:first-child {
    margin-right: 10px;
  }
}
.top {
  padding: 50px;
  span {
    display: inline-block;
    vertical-align: middle;
  }
  .logo {
    display: inline-block;
    vertical-align: middle;
  }
  .title {
    color: #3849bf;
    font-size: 30px;
    margin-left: 15px;
  }
}
.main {
  margin: 0 auto;
  text-align: center;
  .content {
    text-align: center;
    width: 100%;
    padding: 100px;
    background-color: #fff;
    border-radius: 10px;
    display: inline-block;
    p {
      &:first-child {
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
}
.form-wrap {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  .handle-btn {
    width: 400px;
    margin-top: 100px;
  }
  .code-input {
    display: inline-block;
    vertical-align: middle;
    width: 73%;
  }
  .handle-btn {
    display: inline-block;
    vertical-align: middle;
    width: 400px;
  }
  .code-btn {
    margin-left: 10px;
  }
}
.step-wrap {
  padding: 50px;
}
:deep(.el-steps) {
  margin-left: 250px;
}
:deep(.el-form-item__label) {
  text-align: right;
}
.upload-wrap {
  text-align: left;
}
</style>
