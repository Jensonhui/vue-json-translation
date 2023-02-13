import Vue from 'vue'
import App from './App.vue'
import { Row, Col, Button, Radio, Alert, Dialog, Input, Form, FormItem, Message, Card } from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css';
const computList = [Row, Col, Button, Radio, Alert, Dialog, Input, Form, FormItem, Message, Card]
computList.forEach(item => {
  Vue.component(item.name, item);
})

Vue.prototype.$message = Message;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

