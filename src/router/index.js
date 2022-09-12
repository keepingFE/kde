import Vue from "vue";
import Router from "vue-router";
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
Vue.use(Router);
const Index = () => import("@/views/index");
const Detail = () => import("@/views/detail");
// 固定路由
export const constantRoutes = [
  { path: "*", redirect: "/" },
  {
    path: "/",
    name: "Index",
    component: Index,
    meta: { title: "首页" },
    hidden: true,
  },
  {
    path: "/detail",
    name: "Detail",
    component: Detail,
    meta: { title: "详情" },
    hidden: true,
  },
  {
    path: "/settled",
    name: "Settled",
    component: () => import("@/views/settled.vue"),
    meta: { title: "国家级重点学科工程-申报预登记" },
    hidden: true,
  },
  {
    path: "/hospital",
    name: "hospital",
    component: () => import("@/views/hospital.vue"),
    meta: { title: "大病不出县“行走的医院”项目-申报预登记" },
    hidden: true,
  },
  {
    path: "/success",
    name: "success",
    component: () => import("@/views/success.vue"),
    meta: { title: "申报预登记" },
    hidden: true,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login"),
    meta: { title: "登录" },
  },
  {
    path: "/subject/heart",
    name: "Heart",
    component: () => import("@/views/subject/heart.vue"),
    meta: { title: "国家标准化心血管病诊疗中心" },
    hidden: true,
  },
];
const createRouter = () =>
  new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });
const router = createRouter();
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher;
}

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
export default router;
