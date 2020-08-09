/* eslint-disable no-console */
// qiankun bootstrap hook
export function bootstrap () {
  console.log('nuxt app bootstraped')
}

// qiankun mount hook
export async function mount (render, props) {
  await render()
  console.log('props from main framework', props)
}

// call after nuxt rendered
export function mounted (vm) {
  console.log('mounted', vm)
}

// qiankun update hook
export function update (vm, props) {
  console.log(props)
}

// call before qiankun call unmount
export function beforeUnmount (vm, props) {
  console.log(vm)
}

// qiankun unmount hook
export function unmount () {
  console.log('nuxt app unmount')
}
