import { getCurrentInstance } from "@vue/runtime-core";

export default function useAppData() {
  const instance = getCurrentInstance();

  return {
    appData: instance?.appContext.config.globalProperties.appData,
    asistData: instance?.appContext.config.globalProperties.assistData,
  };
}
