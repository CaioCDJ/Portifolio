import { createWebHistory, createRouter } from "vue-router";

import Index from "./components/pages/Index.vue";
import Projects from "./components/pages/Projects.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: Index },
    { path: "/projects", name: "projects", component: Projects },
  ],
});
