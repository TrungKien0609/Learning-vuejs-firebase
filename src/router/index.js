import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Blogs from "../views/Blogs.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ForgotPassWord from "../views/ForgotPassWord.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home"
    }
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: Blogs,
    meta: {
      title: "Blogs"
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "Login"
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      title: "Register"
    }
  },
  {
    path: "/forgot-pasword",
    name: "ForgotPassWord",
    component: ForgotPassWord,
    meta: {
      title: "ForgotPassWord"
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(//// navigation guard . khi navigation change thì sẽ tự động chạy bất đồng bộ event. and navigation is considered pending before all hooks have been resolved
  (to, from, next) => {
    // from : từ trang nào chuyển đến
    // to:  trang hiện tại
     document.title = `${to.meta.title} | FireBlog`;
     next()
  }
)
export default router;
