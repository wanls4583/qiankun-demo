import Vue from 'vue'
import App from './App.vue'
import router from './router';
import { registerMicroApps, start } from 'qiankun';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

registerMicroApps([
  {
    name: 'app1', // app name registered
    entry: '//localhost:8081',
    container: '#container1',
    activeRule: '/app1',
  },
  {
    name: 'app2',
    entry: '//localhost:8082',
    container: '#container2',
    activeRule: '/app2',
  },
]);

// 也可以放弃registerMicroApps注册，自己手动挂载，手动挂载的应用将不会被qiankun销魂
// loadMicroApp({
// 	name: 'app1',
// 	entry: '//localhost:8081',
// 	container: '#container1'
// });
// loadMicroApp({
// 	name: 'app2',
// 	entry: '//localhost:8082',
// 	container: '#container2'
// });

start({
  sandbox: {
    // experimentalStyleIsolation: true, //一般隔离模式，通过顶层添加属性隔离样式
    strictStyleIsolation: true, //严格模式，通过shadowdom隔离样式
  }
});
