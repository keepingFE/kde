export function getTokenByKey(key) {
  return localStorage.getItem(key);
}

export function removeTokenByKey(key) {
  return localStorage.removeItem(key);
}

export function setTokenByKey(key, token) {
  return localStorage.setItem(key, token);
}

export function clearToken() {
  return localStorage.clear();
}

export const tokenEnum = {
  accessToken: "accessToken",
  visitedViews: "VISITED_HOP_NETM",
};
