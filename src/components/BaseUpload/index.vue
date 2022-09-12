<template>
  <div class="upload-wrap">
    <el-upload
      :action="action"
      :limit="limit"
      :multiple="multiple"
      list-type="picture-card"
      :file-list="fileList"
      :show-file-list="true"
      :auto-upload="autoUpload"
      :headers="headers"
      :on-change="handleUploadChange"
      :before-upload="handleBeforeUpload"
      :on-success="handleUploadSuccess"
      :accept="acceptString ? acceptString : ''"
      :class="{
        'hide-upload': hideUpload,
      }"
      ref="baseUpload"
    >
      <i slot="default" class="el-icon-plus"></i>
      <i class="title" v-if="showTitle">上传</i>
      <div slot="file" slot-scope="{ file }">
        <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
        <span class="el-upload-list__item-actions">
          <span
            class="el-upload-list__item-preview"
            @click="handlePicturePreview(file)"
          >
            <i class="el-icon-zoom-in"></i>
          </span>
          <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleRemove(file)"
          >
            <i class="el-icon-delete"></i>
          </span>
        </span>
      </div>
      <div slot="tip" class="el-upload__tip">
        {{ tip }}
      </div>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
      hideUpload: false,
      fileList: [],
      headers: { "X-AccessToken": sessionStorage.getItem("ecoToken") },
    };
  },
  props: {
    action: {
      type: String,
      default: () => {
        const defaultSysServer = window.location.origin + "/hop-gateway/";
        return `${
          window.config.sysServer || defaultSysServer
        }/file/common/uploadFile`;
      },
    },
    limit: {
      type: Number,
      default: 100,
    },
    autoUpload: {
      type: Boolean,
      default: true,
    },
    showTitle: {
      type: Boolean,
      default: false,
    },
    multiple: {
      type: Boolean,
      default: true,
    },
    tip: {
      type: String,
      default: "",
    },
    size: {
      //图片限制大小 kb
      type: Number,
      default: 0,
    },
    acceptList: {
      //图片格式数组， 用来上传前校验
      type: Array,
      default: () => [],
    },
    acceptString: {
      //图片格式 用来选择时校验
      type: String,
      default: "",
    },
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    handleRemove(file) {
      this.$refs.baseUpload.uploadFiles.forEach((item, index) => {
        if (file.name === item.name && file.url === item.url) {
          this.$refs.baseUpload.uploadFiles.splice(index, 1);
          this.$emit("handleRemoveFile", index);
        }
      });
      this.hideUpload =
        this.limit && this.$refs.baseUpload.uploadFiles.length >= this.limit;
    },
    handlePicturePreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    //onChange 对应的处理函数（添加文件、上传成功和上传失败时都会被调用的那个）：
    handleUploadChange(file, fileList) {
      // 超过限定值不展示添加按钮
      this.hideUpload = this.limit && fileList.length >= this.limit;
    },
    /** 上传前 */
    handleBeforeUpload(file) {
      let isAccept = true;
      let isOverSzie = false;
      if (this.acceptList && this.acceptList.length) {
        isAccept = this.acceptList.includes(file.type);
      }

      if (this.size) {
        //size默认kb
        isOverSzie = file.size / 1024 > this.size;
      }

      //限制文件上传类型
      if (!isAccept) {
        this.$message.error(
          `上传图片只能是 ${this.acceptList.join(",")} 格式!`
        );
        this.$refs.baseUpload.uploadFiles.pop();
        this.hideUpload =
          this.limit && this.$refs.baseUpload.uploadFiles.length >= this.limit;
        return false;
      }

      //限制文件上传大小
      if (isOverSzie) {
        this.$message.error(`上传图片大小不能超过 ${this.size}KB!`);
        this.$refs.baseUpload.uploadFiles.pop();
        this.hideUpload =
          this.limit && this.$refs.baseUpload.uploadFiles.length >= this.limit;
        return false;
      }

      return true;
    },
    handleUploadSuccess(res) {
      this.$emit("handleUploadSuccess", res);
    },
    setFileList(list) {
      this.fileList = list;
      this.hideUpload = this.limit && this.fileList.length >= this.limit;
    },
  },
};
</script>
<style lang="scss" scoped>
:deep(.el-upload--picture-card) {
  position: relative;
}
.el-upload__tip {
  color: #0000006d;
}
.title {
  position: absolute;
  bottom: -50px;
  left: 40%;
  font-size: 14px;
}
.hide-upload {
  :deep(.el-upload--picture-card) {
    display: none;
  }
}
</style>
