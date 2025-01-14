import { createWebHistory, createRouter } from "vue-router";

import Index from "./components/pages/Index.vue";
import Projects from "./components/pages/Projects.vue";
import Experiences from "./components/pages/Experiences.vue";
import Formation from "./components/pages/Formation.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: Index },
    { path: "/projects", name: "projects", component: Projects },
    { path: "/experiences", name: "experiences", component: Experiences },
    { path: "/formation", name: "formation", component: Formation },
  ],
});
