<template>
  <section>
    <el-alert title="成功提示的文案" type="success" class="mb-20"></el-alert>

    <el-button hh="bb" @click="doSth">普通的按钮</el-button>
    <el-button gv="jhv" type="primary" @click="showDlg">普通的按钮</el-button>
    <el-button type="text">普通的按钮</el-button>
    <el-button size="small">普通的按钮</el-button>
    <el-button :disabled="true">普通的按钮</el-button>
    <el-button :loading="true">普通的按钮</el-button>
    <el-button icon="edit" @click="doSth">普通的按钮</el-button>

    <el-input v-model="input"></el-input>

    <el-radio v-model="radio" :disabled="true" name="男" label="1">男</el-radio>
    <el-radio v-model="radio" name="女" label="2">女</el-radio>

  </section>
</template>

<script>
import ElButton from '../components/ElButton'
import ElInput from '../components/ElInput'
import ElRadio from '../components/ElRadio'
import ElAlert from '../components/ElAlert'
import ElBadge from '../components/ElBadge'

export default {
  components: {
    ElButton,
    ElInput,
    ElRadio,
    ElAlert,
    ElBadge
  },
  data () {
    return {
      input: '',
      radio: '1'
    }
  },
  methods: {
    doSth (e) {
      console.log('asfhdgfh', e)
    },
    showDlg () {
      this.$Alert.info({
        content: '我是提示信息 1'
      })
    }
  }
}
</script>

<style>
.mb-20 {
  margin-bottom: 20px;
}
</style>
