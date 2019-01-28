<template>
  <section>
    <div>1111111</div>
    <div>
      <span>22222</span>
    </div>
    <div>
      <h6 @click="changeColor">33333333</h6>
      <div>444444
        <span>555555</span>
        <span>666666</span>
      </div>
    </div>
  </section>
</template>

<script>
const colors = ['blue', 'green', 'yellow', 'red', 'pink', 'black']
export default {
  data () {
    return {
      input: '',
      radio: '1',
      index: 0
    }
  },
  created () {
    // let color = document.body.style.getPropertyValue('--foo')
    // console.log(111, document.body.style, color)
    // document.body.style.setProperty('--foo', 'yellow')
  },
  methods: {
    doSth (e) {
      console.log('asfhdgfh', e)
    },
    changeColor () {
      document.body.style.setProperty('--foo', colors[++this.index])
    }
  }
}
</script>

<style>
body {
  --main: red;
}
div {
  color: var(--foo);
}
</style>
