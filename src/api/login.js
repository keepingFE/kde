import request from "@/utils/request";

/**
 * 用户登录
 * @param data
 */
export function login(data) {
  return request({
    url: `/basic/auth/login`,
    method: "post",
    data,
  });
}

/**
 * 获取用户详细信息
 * @param data
 */
export function getUserInfo(data) {
  return request({
    url: `/basic/basicUser/getUserInfo`,
    method: "post",
    data,
  });
}

/**
 * 修改密码
 */
export function updatepwd(data) {
  return request({
    url: `/basic/auth/updatePassword`,
    method: "post",
    data,
  });
}

/**
 * 退出登录
 */
export function loginOut(data) {
  return request({
    url: `/basic/auth/loginOut`,
    method: "post",
    data,
  });
}
