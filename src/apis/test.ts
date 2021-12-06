/**
 * 앱 로드시 처음 한번만 가져오는 데이터
 * @returns Promise<any>z
 */
export function getAppData(): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("success to get the app data");
      resolve({
        isApp: true,
        version: "5.51.0",
      });
    }, 3000);
  });
}

/**
 * 페이지 이동시마다 갱신되어야 하는 데이터
 * @returns Promise<any>
 */
export function getAssistData(): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("success to get the assist data");
      resolve({
        isLogin: true,
        year: new Date().getFullYear,
        month: new Date().getMonth() + 1,
        date: new Date().getDate(),
      });
    }, 3000);
  });
}

/**
 * 페이지 초기 구성을 위한 데이터
 * @returns Promise<any>
 */
export function getInitialData(pageName: string): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("success to get the initial page data");
      resolve({
        name: pageName,
        title: "페이지 타이틀",
      });
    }, 3000);
  });
}
