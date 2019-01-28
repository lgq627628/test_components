// 它只是对 alert.vue 添加了一个方法 newInstance。
// 虽然 alert.vue 包含了 template、script、style 三个标签，并不是一个 JS 对象，
// 那怎么能够给它扩展一个方法 newInstance 呢？
// 事实上，alert.vue 会被 Webpack 的 vue-loader 编译，把 template 编译为 Render 函数，
// 最终就会成为一个 JS 对象，自然可以对它进行扩展

import Alert from './Alert.vue'
import Vue from 'vue'

Alert.newInstance = (properties) => {
  let props = properties || {}

  // const AlertComponent = Vue.extend({
  //   template: '<div>{{ message }}</div>',
  //   data () {
  //     return {
  //       message: 'Hello, Aresn'
  //     }
  //   }
  // })
  const Instance = new Vue({
    data: props,
    render (h) {
      return h(Alert, {
        props: props
      })
    }
  })
  const component = Instance.$mount()
  document.body.appendChild(component.$el)

  const alert = Instance.$children[0] // 这里的 alert 就是 Render 的 Alert 组件实例

  return { // 在 newInstance 里，使用闭包暴露了两个方法 add 和 remove。这里的 add 和 remove 可不是 alert.vue 里的 add 和 remove，它们只是名字一样。
    add (noticeProps) {
      alert.add(noticeProps)
    },
    remove (name) {
      alert.remove(name)
    }
  }
}

export default Alert
