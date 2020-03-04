/* eslint-disable no-console */
export default function (render) {
  if (!window.__POWERED_BY_QIANKUN__) {
    render()
  }
}

export function bootstrap () {
  console.log('nuxt app bootstraped')
}

export async function mount (render, props) {
  await render()
  console.log('props from main framework', props)
}

export function mounted (vm) {
  console.log(vm)
}

export function beforeUnmount (vm) {
  console.log(vm)
}

export function unmount () {
  console.log('nuxt app unmount')
}
