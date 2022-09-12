/**
 * 外部链接验证
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path);
}

/**
 * 用户名验证
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ["admin", "editor"];
  return valid_map.indexOf(str.trim()) >= 0;
}

/**
 * 手机号格式验证
 * @param {*} phone
 * @returns
 */
export function validatePhone(phone) {
  const exp = /^1[3456789]\d{9}$/;
  return exp.test(phone);
}

/**
 * 邮箱格式验证
 * @param {*} email
 * @returns
 */
export function validateEmail(email) {
  const reg =
    /^[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/;
  return reg.test(email);
}

/**
 * 身份证号码格式验证
 * @param {*} idcard
 * @returns
 */
export function validateIdCard(idcard) {
  const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return reg.test(idcard);
}
