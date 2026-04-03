import LoginPage from "@/vies/LoginPage.vue";
import MainPage from "@/vies/MainPage.vue";
import SignUpPage from "@/vies/SignUpPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: LoginPage,
    },
    {
      path: "/login",
      component: LoginPage,
    },
    {
      path: "/signup",
      component: SignUpPage,
    },
    {
      path: "/main",
      component: MainPage,
    },
  ],
});
export default router;
