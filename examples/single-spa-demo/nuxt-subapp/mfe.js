import Vue from 'vue'

export default function(render) {
  if (!window.__POWERED_BY_QIANKUN__) {
    render()
  }
}

export function bootstrap() {}

export async function mount(render, props) {
  await render()
}

export async function update() {}

export function mounted(instance, props) {
  // inject your custom props
  if (props.sdk) {
    Vue.prototype.$sdk = props.sdk
  }
}

export function beforeUnmount(instance) {}
export function unmount() {}
