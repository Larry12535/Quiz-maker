import Vue from 'vue'

Vue.config.productionTip = false
import App from '@/App'
import router from '@/Routes'

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
