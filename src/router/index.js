import Vue from "vue";
import VueRouter from "vue-router";
import Firebase from "firebase"

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/Login",
      name: "Login",
      component: () => import('../views/Login.vue')
    },
    {
      path: "/Logrado",
      name: "Logrado",
      component: () => import('../views/Logrado.vue'),
      meta: {
        login: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  let email = Firebase.auth().currentUser;
  let authRequired = to.matched.some((route) => route.meta.login);
  if (!email && authRequired) {
    next("Login");
  } else if (email && !authRequired) {
    next("Logrado");
  } else {
    next();
  }
});

export default router;
