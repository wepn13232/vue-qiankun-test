import "./public-path";

import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Element from 'element-ui'

Vue.config.productionTip = false

Vue.use(Element)

let instance = null;

function render(props = {}) {
    const { container } = props;

    instance = new Vue({
        router,
        store,
        render: (h) => h(App),
    }).$mount(container ? container.querySelector("#app") : "#app");

}

if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

export async function bootstrap() {
    console.log("[vue] vue app bootstraped");
}

export async function mount(props) {
    console.log("[vue] props from main framework", props);
    Vue.prototype.$qiankun=props
    render(props);
}

export async function unmount() {
    instance.$destroy();
    instance.$el.innerHTML = "";
    instance = null;
}

