import Home from "../components/pages/Home.vue";
import First from "../components/pages/First.vue";
import Second from "../components/pages/Second.vue";
import * as testApi from "../apis/test";
import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Home,
    beforeEnter: async (to, from, next) => {
      const initialData = await testApi.getInitialData("Home Page");
      to.params.initialData = initialData;
      next();
    },
    props: true,
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
    beforeEnter: async (to, from, next) => {
      const initialData = await testApi.getInitialData("Second Page");
      to.params.initialData = initialData;
      next();
    },
    props: true,
  },
];

export default routes;
