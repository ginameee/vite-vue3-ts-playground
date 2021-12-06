import Home from "../components/pages/Home.vue";
import First from "../components/pages/First.vue";
import Second from "../components/pages/Second.vue";
import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/first",
    component: First,
  },
  {
    path: "/second",
    component: Second,
  },
];

export default routes;
