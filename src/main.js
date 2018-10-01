import Vue from 'vue'

Vue.config.productionTip = false
import App from './App'
import router from './Routes'
import store from './Vuex'

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
