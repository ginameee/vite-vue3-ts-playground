import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";
import * as testApi from "../apis/test";
import app from "../main";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const appData = await testApi.getAppData();
  const assistData = await testApi.getAssistData();

  // app.config.globalProperties.appData = Object.freeze(appData);
  // app.config.globalProperties.assistData = Object.freeze(asistData);

  app.config.globalProperties = Object.freeze({
    ...app.config.globalProperties,
    appData,
    assistData,
  });

  next();
});

export default router;
