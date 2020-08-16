import { sleep } from "@/utils";
export async function getMenus() {
  // 模拟请求，延时一秒
  await sleep(1000);

  return {
    code: 0,
    payload: [
      {
        name: "vue-app",
        activeRule: "/vue",
        entry: "http://localhost:7101/"
      },
      {
        name: "nuxt-app",
        activeRule: "/nuxt",
        entry: "http://127.0.0.1:7102/"
      }
    ],
    message: "success"
  };
}
