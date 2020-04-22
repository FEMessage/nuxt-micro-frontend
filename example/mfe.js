/* eslint-disable no-console */
export default function (render) {
  if (!window.__POWERED_BY_QIANKUN__) {
    render()
  }
}

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
  console.log(vm)
}

// qiankun update hook
export function update (vm, props) {
  console.log(props)
}

// call before qiankun call unmount
export function beforeUnmount (vm) {
  console.log(vm)
}

// qiankun unmount hook
export function unmount () {
  console.log('nuxt app unmount')
}
