<template>
  <label class="el-radio">
    <input
      type="radio"
      :disabled="disabled"
      :name="name"
      :value="value"
      :class="{ 'is-disabled': disabled }"/>
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'ElRadio',
  props: {
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: { // 重点：这是vue的特性，这个值是来自父组件的v-model特性
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>
