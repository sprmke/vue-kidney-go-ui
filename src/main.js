// core
import Vue from "vue";
import App from "./app/app.vue";;
import router from "./router";
import store from "@/app/stores/store";
import "@/registerServiceWorker";

// axios
import axios from 'axios';

// filters
import Filters from '@/app/filters/filters';
import Vue2Filters from 'vue2-filters';

// directives
import Directives from '@/app/directives/directives';

// bootstrap vue
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue';

// vue google maps
import * as VueGoogleMaps from 'vue2-google-maps';

// styles
import '@/app/styles/main.scss';

// use
Vue.use(axios);
Vue.use(Filters);
Vue.use(Vue2Filters);
Vue.use(Directives);
Vue.use(BootstrapVue);
Vue.use(VueGoogleMaps, {
	load: {
		key: process.env.MMGR_AWS_ACCESS_KEY || null,
		libraries: 'places'
	}
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
