<template>
    <transition name="el-alert-fade">
    <!--
      typeClass：根据传入的type控制样式
      center: 根据传入的center控制内容是否居中
      role：属性作用是告诉Accessibility类应用（比如屏幕朗读程序，为盲人提供的访问网络的便利程序），这个元素所扮演的角色，主要是供残疾人使用。使用role可以增强文本的可读性和语义化。
     -->
    <div
      class="el-alert"
      :class="[typeClass, center ? 'is-center' : '']"
      v-show="visible"
      role="alert"
    >
      <!--
        showIcon: 控制是否显示icon
        iconClass: 根据传入的type动态控制icon的样式
        isBigIcon： 如果传入了description（辅助性文字）或者 插槽内传入了内容 则显示大icon
       -->
      <i class="el-alert__icon" :class="[ iconClass, isBigIcon ]" v-if="showIcon"></i>
      <div class="el-alert__content">
        <!-- 如果传入了description（辅助性文字）或者 传入了匿名插槽 则显示加粗title -->
        <span class="el-alert__title" :class="[ isBoldTitle ]" v-if="title">{{ title }}</span>
        <!-- 传入插槽内容则显示插槽内容 未传入默认显示slot内的内容description -->
        <slot>
          <p class="el-alert__description" v-if="description">{{ description }}</p>
        </slot>
        <!--
          closable: 是否显示关闭按钮，默认显示
          closeText： 关闭按钮自定义文字，无显示X有显示文字
         -->
        <i class="el-alert__closebtn" :class="{ 'is-customed': closeText !== '', 'el-icon-close': closeText === '' }" v-show="closable" @click="close()">{{closeText}}</i>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ElInput',
  props: {
    // 接收标题
    title: {
      type: String,
      default: '',
      required: true
    },
    // 辅助性文字
    description: {
      type: String,
      default: ''
    },
    // 接收主题 computed里会根据不同type返回对应的样式
    type: {
      type: String,
      default: 'info'
    },
    // 关闭按钮显示
    closable: {
      type: Boolean,
      default: true
    },
    // 关闭按钮自定义文字
    closeText: {
      type: String,
      default: ''
    },
    // 是否显示icom
    showIcon: Boolean,
    // 内容是否居中
    center: Boolean
  },
  data () {
    return {
      // 组件显示隐藏
      visible: true
    }
  },
  computed: {
    // alert的样式
    typeClass () {
      return `el-alert--${this.type}`
    },
    // alert里icon的样式
    iconClass () {
      // return TYPE_CLASSES_MAP[this.type] || 'el-icon-info'
      return 'el-icon-info'
    },
    // 如果传入了description（辅助性文字）或者 传入了匿名插槽 则显示大icon
    isBigIcon () {
      return this.description || this.$slots.default ? 'is-big' : ''
    },
    // 如果传入了description（辅助性文字）或者 传入了匿名插槽 则显示加粗title
    isBoldTitle () {
      return this.description || this.$slots.default ? 'is-bold' : ''
    }
  },
  methods: {
    // 关闭alert方法
    close () {
      // v-show隐藏alert
      this.visible = false
      // 向父组件暴露close方法
      this.$emit('close')
    }
  }

}
</script>
