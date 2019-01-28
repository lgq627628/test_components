<template>
  <input
    class="el-input">
</template>

<script>
export default {
  name: 'ElInput',
  props: {
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>
