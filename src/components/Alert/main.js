import Alert from './Alert.js'

let messageInstance

function getMessageInstance () {
  messageInstance = messageInstance || Alert.newInstance()
  return messageInstance
}

function notice ({ duration = 1.5, content = '' }) {
  let instance = getMessageInstance()

  instance.add({
    content: content,
    duration: duration
  })
}

export default {
  info (options) {
    return notice(options)
  }
}
