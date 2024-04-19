import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Games from "../views/Games.vue";
import About from "../views/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/games",
    name: "Games",
    component: Games,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
