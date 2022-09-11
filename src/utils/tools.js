export function downLoad(res, name) {
  const blob = new Blob([res], { type: "application/x-xls" });
  const downloadElement = document.createElement("a");
  const href = window.URL.createObjectURL(blob);
  downloadElement.href = href;
  downloadElement.download = name;
  document.body.appendChild(downloadElement);
  downloadElement.click();
  document.body.removeChild(downloadElement);
  window.URL.revokeObjectURL(href);
}

// 多维数组转为一维数组
export function treeToList(data) {
  let res = [];
  const dfs = (tree) => {
    tree &&
      tree.forEach((item) => {
        if (item.children) {
          dfs(item.children);
          delete item.children;
        }
        res.push(item);
      });
  };
  dfs(data);
  return res;
}

// 转为 blob 对象
function dataURLtoBlob(dataurl) {
  var arr = dataurl.split(",");
  var mime = arr[0].match(/:(.*?);/)[1];
  var bstr = atob(arr[1]);
  var n = bstr.length;
  var u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}

//  base64 转图片并下载
export function downloadFileByBase64(base64, name) {
  const base64FullUrl = `data:image/jpg;base64,${base64}`;
  const nameFull = `${name}.png`;
  const myBlob = dataURLtoBlob(base64FullUrl);
  const myUrl = URL.createObjectURL(myBlob);
  downLoad(myUrl, nameFull);
}

//递归查找数组中某一个满足条件的对象
export function deepFindObject(array, fn) {
  let obj;
  array.some(function iter(item) {
    const flag = fn(item);
    if (flag) {
      obj = item;
      return true;
    }
    return Array.isArray(item.children) && item.children.some(iter);
  });
  return obj;
}

//递归查找数组中某一个满足条件的对象的所有负节点
export function deepFindParent(array, fn) {
  let parentList = [];
  array.some(function iter(item) {
    const flag = fn(item);
    if (flag) {
      parentList.push(item);
      return true;
    }
    const isFind = Array.isArray(item.children) && item.children.some(iter);
    if (isFind) {
      parentList.push(item);
    }
    return isFind;
  });
  return parentList.reverse();
}
