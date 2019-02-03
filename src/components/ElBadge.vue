<template>
  <div class="el-badge">
    <slot></slot>
    <sup
      v-show="!hidden && ( content || isDot )"
      v-text="content"
      class="el-badge__content"
      :class="{ 'is-fixed': $slots.default, 'is-dot': isDot }">
    </sup>
  </div>
</template>

<script>
export default {
  name: 'ElBadge',

  props: {
    value: 0,
    max: Number,
    isDot: Boolean,
    hidden: Boolean
  },

  computed: {
    content () {
      if (this.isDot) return

      const value = this.value
      const max = this.max

      if (typeof value === 'number' && typeof max === 'number') {
        return max < value ? `${max}+` : value
      }

      return value
    }
  }
}
</script>
