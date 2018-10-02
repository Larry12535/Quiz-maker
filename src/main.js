import Vue from 'vue'

Vue.config.productionTip = false
import App from './App'
import router from './Routes'
import store from './Store'

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
