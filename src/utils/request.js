import axios from "axios";
import { Message } from "element-ui";
import router from "../router/index";

export default async function request({
  url,
  data = {},
  method = "get",
  showErrorMessage = true,
  ...others
}) {
  const defaultSysServer = window.location.origin + "/hop-gateway/";
  const config = {
    baseURL: window.config.sysServer || defaultSysServer,
    needToken: true,
    url,
    method,
    ...others,
  };
  const token = sessionStorage.getItem("ecoToken");
  if (token) {
    axios.defaults.headers.common["X-AccessToken"] = token;
  }
  axios.defaults.headers["ServerCode"] = window.config.serverCode || "HOP-ECOM";
  if (method === "get") {
    config.params = data;
  } else {
    config.data = data;
  }

  return new Promise((resolve, reject) => {
    return axios
      .request(config)
      .then((res) => {
        const result = res.data;
        if (result && result.success) {
          if (result.code === "S0000") {
            resolve(result);
          } else {
            if (result.code === "T0000") {
              sessionStorage.removeItem("ecoToken");
              if (self != top) {
                //iframe中操作
                window.parent.postMessage(
                  {
                    messageType: "TOKEN_OVERDUE",
                  },
                  "*"
                );
              } else {
                router.push("/login");
              }
            } else {
              reject(result);
            }
          }
        } else {
          let msg = result.msg || "数据获取失败，请重试！";
          if (result.code === "T0000") {
            sessionStorage.removeItem("ecoToken");
            if (self != top) {
              //iframe中操作
              window.parent.postMessage(
                {
                  messageType: "TOKEN_OVERDUE",
                },
                "*"
              );
            } else {
              router.push("/login");
            }
          }
          if (showErrorMessage) {
            Message({
              message: msg,
              type: "error",
              duration: 5 * 1000,
            });
          }
          reject(result);
        }
      })
      .catch((err) => {
        let msg = err.errorDesc || "请求失败，请重试";
        if (showErrorMessage) {
          Message({
            message: msg,
            type: "error",
            duration: 5 * 1000,
          });
        }
        reject(msg);
      });
  });
}
