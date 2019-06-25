import Vue from "vue";
import Router from "vue-router";
import Patient from "@/app/modules/main/patient/patient.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/patient/:id",
      name: "Patient",
      component: Patient
    },
    {
      path: "/doctor/:id",
      name: "Dcotor",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/app/modules/main/patient/patient.vue")
    }
  ]
});
