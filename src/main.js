import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
Vue.use(Vuetify)

import axios from 'axios';


//axios.defaults.baseURL = 'https://back-admi.arielluqu3.com/api';
//axios.defaults.baseURL = 'http://sistema-admision-back.test/api';
axios.defaults.baseURL = 'http://back-cepre.test/api/';
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//bootstrap vue
import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);

//perfect scrollbar
import PerfectScrollbar from 'vue2-perfect-scrollbar';
Vue.use(PerfectScrollbar);

//vue-scrollactive
import VueScrollactive from 'vue-scrollactive';
Vue.use(VueScrollactive);

//vue-meta
import VueMeta from 'vue-meta';
Vue.use(VueMeta, {
    refreshOnceOnNavigation: true
});

//Sweetalert
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
const options = {
    confirmButtonColor: '#4361ee',
    cancelButtonColor: '#e7515a'
};
Vue.use(VueSweetalert2, options);

//portal vue
import PortalVue from 'portal-vue';
Vue.use(PortalVue);



//vue-i18n
import i18n from './i18n';

Vue.config.productionTip = false;

// set default settings
import appSetting from './app-setting';
Vue.prototype.$appSetting = appSetting;
appSetting.init();


new Vue({
    vuetify: new Vuetify(),
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app');
