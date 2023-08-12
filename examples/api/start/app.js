"use strict";

require("./example");

// 手动添加 module.hot.accept 代码逻辑，才能在开启hmr特性时使用hmr来优化开发体验！
if (module.hot) {
  module.hot.accept((err) => {
    if (err) {
      console.error("Cannot apply HMR update.", err);
    }
  });
}

// console.log('hahha1234')
