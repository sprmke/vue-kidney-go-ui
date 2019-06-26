import Vue from "vue";
import Router from "vue-router";
import PatientContainer from "@/app/modules/main/patient/containers/patient-container.vue";
import DoctorContainer from "@/app/modules/main/doctor/containers/doctor-container.vue";
import HomeContainer from "@/app/modules/main/home/container/home-container.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "Home",
      component: HomeContainer
    },
    {
      path: "/patient/:id",
      name: "Patient",
      component: PatientContainer
    },
    {
      path: "/doctor/:id",
      name: "Doctor",
      component: DoctorContainer
    },
    // {
    //   path: "/doctor/:id",
    //   name: "Dcotor",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "@/app/modules/main/patient/patient.vue")
    // }
  ]
});
