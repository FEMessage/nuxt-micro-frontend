import { registerMicroApps, start } from "qiankun";
import TYPES from "@/store/types";
import createSdk from "@/utils/createSdk";

export default async ({ store, router, app }) => {
  const { apps, menus } = await store.dispatch(TYPES.INIT_APPS);

  const iMenus = menus.map(item => ({
    ...item,
    path: `${item.path}(.*)`,
  }));

  router.addRoutes(iMenus);

  const sdk = createSdk({ store, router, app });

  registerMicroApps(
    apps.map(item => ({
      ...item,
      props: {
        sdk,
      },
    }))
  );

  start();
};
