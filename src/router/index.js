import LoginPage from "@/vies/LoginPage.vue";
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
  ],
});
export default router;
