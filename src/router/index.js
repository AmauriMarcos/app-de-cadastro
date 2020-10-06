import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../components/Cadastro")
  },
  {
    path: "/tabela",
    name: "tabela",
    component: () => import("../components/Tabela")
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: () => import("../components/EditarCadastro")
  },
  {
    path: "/results/:id",
    name: "results",
    component: () => import("../components/ResultadoPesquisa")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;