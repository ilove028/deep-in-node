/**
 * http://nodejs.cn/latest-api/async_hooks.html
 * https://www.jianshu.com/p/4a568dac41ed
 */

const fs = require('fs')
const asyncHooks = require('async_hooks')

// const hook = asyncHooks.createHook({
//   init() {
//     fs.writeSync(1, `init exception: ${JSON.stringify(arguments)}\n`);
//   },
//   before() {
//     fs.writeSync(1, `before exception: ${JSON.stringify(arguments)}\n`);
//   },
//   after() {
//     fs.writeSync(1, `after exception: ${JSON.stringify(arguments)}\n`);
//   },
//   destroy() {
//     fs.writeSync(1, `destroy exception: ${JSON.stringify(arguments)}\n`);
//   },
//   promiseResolve() {
//     fs.writeSync(1, `promiseResolve exception: ${JSON.stringify(arguments)}\n`);
//   }
// })

// hook.enable()

console.log(
  `Default async id ${asyncHooks.executionAsyncId()}
  Default trigger id ${asyncHooks.triggerAsyncId()}`
)

process.nextTick(() => {
  console.log(
    `Next tick async id ${asyncHooks.executionAsyncId()}
    Next trigger async id ${asyncHooks.triggerAsyncId()}`
  )
  ;(function () {
    console.log(
      `Test function async id ${asyncHooks.executionAsyncId()}
      Test function trigger id ${asyncHooks.triggerAsyncId()}`
    )
  })()
})