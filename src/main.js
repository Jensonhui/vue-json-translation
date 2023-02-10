import Vue from 'vue'
import App from './App.vue'
import { Row, Col, Button, Radio, Alert, Dialog, Input } from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(Row).use(Col).use(Button).use(Radio).use(Alert).use(Dialog).use(Input)

new Vue({
  render: h => h(App),
}).$mount('#app')

