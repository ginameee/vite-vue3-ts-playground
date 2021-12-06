import Home from "../components/pages/Home.vue";
import First from "../components/pages/First.vue";
import Second from "../components/pages/Second.vue";
import * as testApi from "../apis/test";
import { RouteRecordRaw } from "vue-router";
import app from "../main";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/first",
    component: First,
    beforeEnter: async (to, from, next) => {
      const initialData = await testApi.getInitialData("First Page");
      to.params.initialData = initialData;
      next();
    },
    props: true,
  },
  {
    path: "/second",
    component: Second,
  },
];

export default routes;
