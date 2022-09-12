<template>
  <div class="contain">
    <div class="top-bar">国家级重点学科工程</div>
    <div class="main">
      <div class="content">
        <p class="sub-title">大病不出县“行走的医院”项目-申报预登记</p>
        <div class="form-wrap">
          <el-form
            ref="addForm"
            label-width="140px"
            :model="addForm"
            status-icon
            :rules="rules"
            :label-position="labelPosition"
          >
            <el-form-item label="申报单位：" prop="orgName">
              <el-input
                maxlength="100"
                placeholder="请输入申报单位名称"
                v-model="addForm.orgName"
              ></el-input>
            </el-form-item>
            <el-form-item label="所在省市区：" prop="district">
              <el-cascader
                class="w100"
                v-model="addForm.district"
                ref="area"
                :options="options"
                placeholder="请选择所在省市区"
              ></el-cascader>
            </el-form-item>
            <el-form-item label="详细地址：" prop="address">
              <el-input
                v-model="addForm.address"
                maxlength="100"
                placeholder="请输入详细地址"
              ></el-input>
            </el-form-item>
            <el-form-item label="联系人：" prop="contacts">
              <el-input
                v-model="addForm.contacts"
                placeholder="请输入联系人姓名"
                maxlength="20"
              ></el-input>
            </el-form-item>
            <el-form-item label="联系人电话：" prop="contactsPhone">
              <el-input
                v-model="addForm.contactsPhone"
                placeholder="请输入联系人电话"
                maxlength="11"
              ></el-input>
            </el-form-item>
            <el-form-item label="备注：" prop="remark">
              <el-input
                v-model="addForm.remark"
                placeholder="请输入备注"
                maxlength="20"
              ></el-input>
            </el-form-item>
            <el-form-item label="附件：" prop="imgUrls">
              <base-upload
                :limit="3"
                :tip="tip"
                acceptString=".jpg,.jpeg,.JPG,.JPEG"
                :acceptList="['image/jpg', 'image/jpeg']"
                @handleUploadSuccess="handleUploadPicturesSuccess"
                @handleRemoveFile="handleRemovePictures"
                ref="picturesUpload"
                :size="2048"
                :multiple="false"
              ></base-upload>
            </el-form-item>
            <el-form-item>
              <el-button @click="cancelSettled">取消</el-button>
              <el-button
                type="primary"
                :loading="loading"
                @click="submitForm('addForm')"
                >提交</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { validatePhone } from "@/utils/validate";
import BaseUpload from "@/components/BaseUpload";
export default {
  name: "Settled",
  data() {
    const validateMobile = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号"));
      } else {
        if (!validatePhone(value)) {
          callback(new Error("请输入正确的手机号"));
        } else {
          callback();
        }
      }
    };
    return {
      codeBtnText: "获取验证码",
      serverCode: window.config.serverCode || "HOP-ECOM",
      tip: "支持扩展名：pdf、doc、docx，最大支持10M。",
      labelPosition: "right",
      orgNatureList: [
        {
          label: "国家标准化心血管病诊疗中心",
          value: 1,
        },
        {
          label: "首都医科大学脑重大疾病标准化诊疗中心",
          value: 2,
        },
        {
          label: "国家智能骨科疾病诊疗示范中心",
          value: 3,
        },
        {
          label: "脊柱微创暨疼痛康复技术示范中心",
          value: 4,
        },
        {
          label: "国家标准化泌尿外科诊疗中心",
          value: 5,
        },
        {
          label: "国家标准化血液病诊疗中心",
          value: 6,
        },
        {
          label: "国家标准化风湿免疫诊疗中心",
          value: 7,
        },
        {
          label: "国家标准化过敏性疾病诊疗中心",
          value: 8,
        },
        {
          label: "首都医科大学标准化癌症诊疗中心",
          value: 9,
        },
        {
          label: "国家标准化胸部微创诊疗中心",
          value: 10,
        },
        {
          label: "儿童重大疾病标准化诊疗中心",
          value: 11,
        },
        {
          label: "国家级智能康复脑中风恢复中心 ",
          value: 12,
        },
        {
          label: "基层心肺评估与康复诊疗中心",
          value: 13,
        },
        {
          label: "国家标准化妇科疾病诊疗中心",
          value: 14,
        },
        {
          label: "国家标准化血管外科诊疗中心",
          value: 15,
        },
        {
          label: "国家标准化罕见病诊疗中心",
          value: 16,
        },
      ],
      options: [
        {
          value: "31",
          label: "江苏省",
          children: [
            {
              value: "3101",
              label: "南京市",
              children: [
                {
                  value: "310101",
                  label: "建邺区",
                },
                {
                  value: "310101",
                  label: "玄武区",
                },
                {
                  value: "310101",
                  label: "秦淮区",
                },
              ],
            },
          ],
        },
      ],
      addForm: {
        orgName: "",
        subject: [],
        address: "",
        contacts: "",
        contactsPhone: "",
        imgUrls: [],
        district: [],
        remark: "",
      },
      rules: {
        orgName: [
          { required: true, message: "请输入申报单位名称", trigger: "blur" },
        ],
        district: [
          {
            required: true,
            message: "请选择所在省市区",
            trigger: "change",
          },
        ],
        contacts: [
          {
            required: true,
            message: "请输入联系人姓名",
            trigger: "blur",
          },
        ],
        address: [
          {
            required: true,
            message: "请输入详细地址",
            trigger: "blur",
          },
        ],
        contactsPhone: [
          {
            required: true,
            message: "请输入联系人电话",
            trigger: "blur",
          },
          {
            validator: validateMobile,
            trigger: "blur",
          },
        ],
      },
      loading: false,
    };
  },
  components: { BaseUpload },
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
          this.$router.push("/success");
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
.sub-title {
  text-align: center;
  font-size: 18px;
  color: #35227b;
  font-weight: bold;
  padding: 30px;
}
.check-wrap {
  text-align: left;
  border: 1px solid #c0c4cc;
  padding-left: 10px;
  border-radius: 5px;
}
:deep(.el-checkbox) {
  display: block;
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
    text-align: left;
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
    display: inline-block;
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
