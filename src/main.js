import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import * as fb from 'firebase'
import Lightbox from 'vue-easy-lightbox'

Vue.use(BootstrapVue)
Vue.use(Lightbox)
Vue.component('v-icon', Icon)
Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App),
	created () {
		var firebaseConfig = {
			apiKey: "AIzaSyDyDaLG24-SZiEENPLdxBXSgTvghbggq8Y",
			authDomain: "flokiowl.firebaseapp.com",
			databaseURL: "https://flokiowl.firebaseio.com",
			projectId: "flokiowl",
			storageBucket: "flokiowl.appspot.com",
			messagingSenderId: "953172102972",
			appId: "1:953172102972:web:e3617c9dec77205f391839",
			measurementId: "G-RE0D7WKX60"
		};
		fb.initializeApp(firebaseConfig);
		  fb.analytics();
		  
		fb.auth().onAuthStateChanged(user => {
			if (user) {
				this.$store.dispatch('autoLoginUser', user)
			}
		})

		this.$store.dispatch('fetchWorks')
	}
}).$mount('#app')
