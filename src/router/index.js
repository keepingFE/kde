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
    meta: { title: "国家级重点学科工程" },
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
    path: "/subject/heart",
    name: "Heart",
    component: () => import("@/views/subject/heart/index.vue"),
    meta: { title: "国家标准化心血管病诊疗中心" },
    hidden: true,
  },
  {
    path: "/subject/women",
    name: "Women",
    component: () => import("@/views/subject/women.vue"),
    meta: { title: "国家标准化妇科疾病诊疗中心" },
    hidden: true,
  },
  {
    path: "/subject/brain",
    name: "Brain",
    component: () => import("@/views/subject/brain.vue"),
    meta: { title: "脑重大疾病标准化防治中心" },
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
