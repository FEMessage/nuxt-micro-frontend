export default function({ store, router, app }) {
  const sdk = {
    getUserInfo: () => {
      return store.state.userInfo;
    },
    go2404: () => {
      router.push("/404");
    },
    toast: (...args) => {
      app.$message(...args);
    },
  };

  return sdk;
}
