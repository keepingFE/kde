import { Base64 } from "js-base64";

export function downLoad(res, name) {
  var blob = new Blob([res], { type: "application/x-xls" });
  var downloadElement = document.createElement("a");
  var href = window.URL.createObjectURL(blob); // 创建下载的链接
  downloadElement.href = href;
  downloadElement.download = name; // 下载后文件名
  document.body.appendChild(downloadElement);
  downloadElement.click(); // 点击下载
  document.body.removeChild(downloadElement); // 下载完成移除元素
  window.URL.revokeObjectURL(href); // 释放掉blob对象
}

export function filterUrl(url) {
  const urlRequest = {};
  if (url.indexOf("?") > -1) {
    const str = url.split("?")[1];
    const strs = str.split("&");
    for (let i = 0; i < strs.length; i++) {
      urlRequest[strs[i].split("=")[0]] = strs[i].split("=")[1];
    }
  }
  return urlRequest.accessToken || "";
}

// 将第三方token解析后存到session中
export function setExternalToken(accessInfo) {
  const strAcc = Base64.decode(accessInfo.split(".")[1]);
  const accInfo = JSON.parse(strAcc);
  const loginSession = {
    accessToken: accessInfo,
    orgCode: accInfo.orgCode,
    orgName: accInfo.orgName,
    personalId: accInfo.personalId,
    userInfo: {
      userName: accInfo.userName,
    },
  };
  sessionStorage.setItem("LOGIN_INFO", JSON.stringify(loginSession));
}

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

function downloadFile(url, name = "图片") {
  var a = document.createElement("a");
  a.setAttribute("href", url);
  a.setAttribute("download", name);
  a.setAttribute("target", "_blank");
  const clickEvent = document.createEvent("MouseEvents");
  clickEvent.initEvent("click", true, true);
  a.dispatchEvent(clickEvent);
}

/**
 * base64 转图片并下载
 * @param base64
 * @param name
 */
export function downloadFileByBase64(base64, name) {
  const base64FullUrl = `data:image/jpg;base64,${base64}`;
  const nameFull = `${name}.png`;
  const myBlob = dataURLtoBlob(base64FullUrl);
  const myUrl = URL.createObjectURL(myBlob);
  downloadFile(myUrl, nameFull);
}

export function randomHash(hashLength) {
  if (!hashLength || typeof Number(hashLength) != "number") {
    return;
  }
  var ar = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var hs = [];
  var hl = Number(hashLength);
  var al = ar.length;
  for (var i = 0; i < hl; i++) {
    hs.push(ar[Math.floor(Math.random() * al)]);
  }
  return hs.join("");
}

export function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
export const formatMoney = (money, format) => {
  if (typeof money === "number") {
    money = money.toString();
  }
  if (money === "-" || !money) return money;
  if (!format) format = "11-2";
  const intNum = Number(format.split("-")[0]);
  const decimalNum = Number(format.split("-")[1]);
  const moneyArr = money.split(".");
  moneyArr[0] =
    moneyArr[0].length > intNum ? moneyArr[0].substr(0, intNum) : moneyArr[0];
  if (moneyArr[1]) {
    moneyArr[1] =
      moneyArr[1].length > decimalNum
        ? moneyArr[1].substr(0, decimalNum)
        : moneyArr[1];
  }
  money = moneyArr.join(".");
  const isNegativeNum = money.startsWith("-");
  const pointPosition = money.indexOf(".");
  const decimal = pointPosition !== -1 ? money.substr(pointPosition) : "";
  const integer = Math.abs(parseInt(money).toString()).toString();
  const integerArrReverse = integer.split("").reverse().join("");
  const moneyStringify = `${isNegativeNum ? "-" : ""}${integerArrReverse
    .replace(/(\d{3})(?=\d)/g, "$1,")
    .split("")
    .reverse()
    .join("")}${decimal}`;
  return moneyStringify;
};

// 添加千分位
export function comdify(n) {
  n = n.toString().replace(/[^0-9.]/g, "");
  if (!n) return n;
  let o = n.toString().split(".");
  let k = "";
  let p = "";
  if (o.length > 2) {
    k = o[0] + "." + o[1];
  } else {
    if (o[1]) {
      p = o[1].slice(0, 2);
      k = o[0] + "." + p;
    } else {
      k = n;
    }
  }
  let str = k.toString().split(".");
  let re = /\d{1,3}(?=(\d{3})+$)/g;
  let n1 = str[0].replace(re, "$&,");
  if (str[1]) {
    return n1 + "." + str[1];
  } else {
    return k.replace(re, "$&,");
  }
}

// 去除千分位中的','
export function delcommafy(num) {
  if (!num) return num;
  num = num.toString();
  num = num.replace(/,/gi, "");
  return num;
}

// 获取输入框的值，并加上千分位
export function getInputValue(val) {
  let n = Number(val) < 0 ? "-" : "";
  if (Number(val) === 0) {
    return val;
  }
  let inputVal = val || "";
  return n + comdify(delcommafy(inputVal));
}
