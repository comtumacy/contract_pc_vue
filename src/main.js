import Vue from 'vue'
import App from './App.vue'
import axIos from 'axios'
import global from './global/global'
import { Row, Col, Form, FormItem, Input, Button, Message, MessageBox, TableColumn, Table } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from '../route'
import store from './store/store'
import './http/http'

Vue.config.productionTip = false
Vue.prototype.$axios = axIos
Vue.prototype.$global = global
Vue.use(Row)
Vue.use(Col)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)
Vue.prototype.$message = Message
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
