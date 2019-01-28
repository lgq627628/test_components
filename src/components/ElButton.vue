<template>
  <button
    :disabled="disabled"
    class="el-button"
    :class="[
      type ? 'el-button--' + type : '',
      size ? 'el-button--' + size : '',
      {
        'is-disabled': disabled,
        'is-loading' : loading,
        'is-plain' : plain
      }
    ]"
    @click="handleClick">
    <i v-if="loading" class="el-icon-loading"></i>
    <i v-if="icon && !loading" :class="`el-icon-${icon}`"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'ElButton',
  props: {
    type: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    }
  },
  created () {
    console.log(this.$attrs)
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>
