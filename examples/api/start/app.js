"use strict";

require("./example");
require("./foo");

// 手动添加 module.hot.accept 代码逻辑，才能在开启hmr特性时使用hmr来优化开发体验！
if (module.hot) {
  // 1.接受自身更新，当当前模块(app.js)或依赖模块更新时，回调会执行，都是热更新！
  // module.hot.accept((err) => {
  //   if (err) {
  //     console.error("Cannot apply HMR update.", err);
  //   }
  // });

  // 2.接受(accept)给定依赖模块(dependencies) 的更新，这里不能把 app 作为 dependencies！
  // 2-1.example模块更新是热更新，而foo和app代码更新会导致页面重新刷新！
  // module.hot.accept('./example', (dependencies) => {
  //   console.log('模块更新的有：', dependencies);
  //   require("./example");
  // })

  // 2-2.example和foo模块更新是热更新，而app代码更新会导致页面重新刷新！
  module.hot.accept(["./example", "./foo"], (dependencies) => {
    console.log("模块更新的有：", dependencies);
    // 重新引入模块
    require("./example");
    require("./foo");
  });
}

console.log("app.js12");
