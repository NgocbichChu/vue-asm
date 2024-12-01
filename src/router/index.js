import Home from "@/components/pages/Home.vue";
import Login from "@/components/pages/Login.vue";
import Register from "@/components/pages/Register.vue";
import Profile from "@/components/pages/UserProfile.vue";
import BlankLayout from "@/layouts/BlankLayout.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "BlankLayout",
      component: BlankLayout,
      children: [
        {
          path: "/",
          name: "login",
          component: Login,
        },
        {
          path: "/register",
          name: "register",
          component: Register,
        },
      ],
    },
    {
      path: "/home",
      name: "DefaultLayout",
      component: DefaultLayout,
      meta: { requiresAuth: true },
      children: [
        {
          path: "/home",
          name: "home",
          component: Home,
          meta: { requiresAuth: true },
        },
        {
          path: "/profile",
          name: "profile",
          component: Profile,
          meta: { requiresAuth: true },
        },
      ],
    },
  ],
});
router.beforeEach((to, from, next) => {
  // const isAuthenticated = false; // Replace with actual authentication check
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !isAuthenticated
  ) {
    next({ name: "login" }); // Redirect to the login page if not authenticated
  } else {
    next(); // Proceed to the route
  }
});
export default router;
