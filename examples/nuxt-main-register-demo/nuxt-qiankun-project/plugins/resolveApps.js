
export default async ({ store }, inject) => {
  await store.dispatch('getMenus')
}
