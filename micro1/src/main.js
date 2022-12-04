import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Hello from './components/Hello.vue'
import Word from './components/Word.vue'

const routes = [
    {
        path: '/hello1',
        component: Hello
    },
    {
        path: '/word1',
        component: Word
    },
]

Vue.config.productionTip = false

let instance = null;
let cacheInstance = null;
let router = getRouter();

router.beforeEach((to, from, next)=>{
  console.log(to.fullPath);
  next();
})

function getRouter() {
  Vue.use(Router);
  return new Router({
      mode: 'hash',
      base: '/app1',
      routes
  })
}

export async function bootstrap() {
  instance = new Vue({
    router: router,
    render: h => h(App),
  });
  console.log('app1 bootstraped');
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  if (cacheInstance) {
    instance = new Vue({
      router: router,
      render: h => h(App),
      // render: () => cacheInstance._vnode,//能缓存实例状态，但是路由将失效
    });
  }
  instance.$mount(props.container ? props.container.querySelector('#app') : '#app');
  console.log('mount', props);
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props) {
  // keepalive设置为必须 防止进入时再次created，同keep-alive实现
  instance._vnode.data.keepAlive = true
  cacheInstance = { _vnode: instance._vnode};
  instance.$destroy()
  instance = null;
  console.log('unmount', props);
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
  console.log('update props', props);
}