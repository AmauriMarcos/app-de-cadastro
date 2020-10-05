import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../components/CreateComponent")
  },
  {
    path: "/tabela",
    name: "tabela",
    component: () => import("../components/ListComponent")
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: () => import("../components/EditComponent")
  },
  {
    path: "/results/:id",
    name: "results",
    component: () => import("../components/Results")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;