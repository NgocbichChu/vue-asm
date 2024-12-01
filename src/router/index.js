import Home from "@/components/pages/Home.vue";
import Login from "@/components/pages/Login.vue";
import Profile from "@/components/pages/UserProfile.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/",
      name: "DefaultLayout",
      component: DefaultLayout,
      children: [
        {
          path: "/home",
          name: "home",
          component: Home,
        },
        {
          path: "/profile",
          name: "profile",
          component: Profile,
        },
      ],
    },
  ],
});

export default router;
