function ajax (url) {
  fetch(url)
    .then(data => data.json)
    .then(data => {
      confirm.log(data)
    })
}

export { ajax }

// 生成器函数，带星号的标识，它不执行，是为了生成一个迭代器Iterator（它会一步一步执行，可以停下来）
function *steps (url) {
  // 碰到 yield 就会停下来
  yield ajax(url)
  yield ajax('1')
  yield ajax('2')
  yield ajax('3')
  yield ajax('4')
}

const dataGen = steps()

dataGen.next()
