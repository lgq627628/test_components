<template>
  <!-- role：属性作用是告诉Accessibility类应用（比如屏幕朗读程序，为盲人提供的访问网络的便利程序），这个元素所扮演的角色，主要是供残疾人使用。使用role可以增强文本的可读性和语义化。 -->
  <div
    class="el-alert"
    :class="[typeClass, center ? 'is-center' : '']"
    v-show="visible"
    role="alert">
    <i class="el-alert__icon" :class="[ iconClass, isBigIcon ]" v-if="showIcon"></i>
    <div class="el-alert__content">
      <span class="el-alert__title" :class="[ isBoldTitle ]" v-if="title">{{title}}</span>
      <slot>
        <p class="el-alert__description" v-if="description">{{ description }}</p>
      </slot>
      <i class="el-alert__closebtn" :class="{ 'is-customed': closeText !== '', 'el-icon-close': closeText === '' }" v-show="closable" @click="close()">{{closeText}}</i>
    </div>
  </div>
</template>

<script>
const TYPE_CLASSES_MAP = {
  'success': 'el-icon-success',
  'warning': 'el-icon-warning',
  'error': 'el-icon-error'
}
export default {
  name: 'ElAlert',
  props: {
    title: {
      type: String,
      default: '',
      required: true
    },
    type: {
      type: String,
      default: 'info'
    },
    showIcon: {
      type: Boolean,
      default: true
    },
    closable: {
      type: Boolean,
      default: true
    },
    description: {
      type: String,
      default: ''
    },
    closeText: {
      type: String,
      default: ''
    },
    center: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      visible: true
    }
  },
  computed: {
    typeClass () {
      return `el-alert--${this.type}`
    },
    iconClass () {
      return TYPE_CLASSES_MAP[this.type] || 'el-icon-info'
    },
    isBigIcon () {
      return this.description || this.$slots.default ? 'is-big' : ''
    },
    isBoldTitle () {
      return this.description || this.$slots.default ? 'is-bold' : ''
    }
  },
  methods: {
    close () {
      this.visible = false
      this.$emit('close')
    }
  }
}
</script>
