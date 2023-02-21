import Vue from 'vue';
import Vuex from 'vuex';
import i18n from '../i18n';
import axios from 'axios';

import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        layout: 'app',
        is_show_sidebar: true,
        is_show_search: false,
        is_dark_mode: false,
        dark_mode: 'light',
        locale: null,
        menu_style: 'vertical',
        layout_style: 'full',

        email:"",
        user:null,
        aut:false,
    },
    mutations: {
        setUser(state, value){
            state.user = value;
            localStorage.setItem("activeUser", JSON.stringify(state.user));
            router.push("/Postulante");
        },

        setAut(state, value){
            state.aut = value;
        },
        
        login(state, email){
            state.email = email;
            localStorage.setItem('email',email);
            alert('Login');
        },
        logout(state){
            state.email="";
            localStorage.removeItem("email");
            alert('logout');
        },

        initializeStore(state){
            if(localStorage.getItem('email')){
                state.email = localStorage.getItem('email');
            }
        },

        setLayout(state, payload) {
            state.layout = payload;
        },
        toggleSideBar(state, value) {
            state.is_show_sidebar = value;
        },
        toggleSearch(state, value) {
            state.is_show_search = value;
        },
        toggleLocale(state, value) {
            value = value || 'en';
            i18n.locale = value;
            localStorage.setItem('i18n_locale', value);
            state.locale = value;
        },

        toggleDarkMode(state, value) {
            //light|dark|system
            value = value || 'light';
            localStorage.setItem('dark_mode', value);
            state.dark_mode = value;
            if (value == 'light') {
                state.is_dark_mode = false;
            } else if (value == 'dark') {
                state.is_dark_mode = true;
            } else if (value == 'system') {
                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    state.is_dark_mode = true;
                } else {
                    state.is_dark_mode = false;
                }
            }

            if (state.is_dark_mode) {
                document.querySelector('body').classList.add('dark');
            } else {
                document.querySelector('body').classList.remove('dark');
            }
        },

        toggleMenuStyle(state, value) {
            //horizontal|vertical|collapsible-vertical
            value = value || '';
            localStorage.setItem('menu_style', value);
            state.menu_style = value;
            if (!value || value === 'vertical') {
                state.is_show_sidebar = true;
            } else if (value === 'collapsible-vertical') {
                state.is_show_sidebar = false;
            }
        },

        toggleLayoutStyle(state, value) {
            //boxed-layout|large-boxed-layout|full
            value = value || '';
            localStorage.setItem('layout_style', value);
            state.layout_style = value;
        }
    },
    getters: {
        layout(state) {
            return state.layout;
        }
    },

    actions: {
        async login ({dispatch}, credenciales) {        
            await axios.post(
              "http://back-cepre.test/api/auth/login",
              credenciales
            )  
            .then(function (response) {
              if (response.status === 200){
                console.log(response.data);
                localStorage.setItem("activeUser", JSON.stringify(response.data.datos));
    //             toast.success("Ingresando al Sistema", {
    //               timeout: 1500,
    //             });
                console.log("Ingresando al Sistema");
              }
            })
            .catch(function (error) {
            //   toast.error("Contraseña o usuario incorrectos", { 
            //       timeout: 1500,
            //   });
                console.log("Contraseña invalida: ", error);
            });
            return dispatch('getUser');
          },
      
          async getUser({ commit}) {
            const config = {
              headers: { Authorization: `Bearer ${'33|UcmAiiNooJisYyEnXvLioZYHOQMoDuctjR5qXjag'}` }
            }
            await axios.get("/auth/user",config)
            .then(res=>{
              commit('setUser',res.data);
              commit('setAut',true);
            })
            .catch(()=>{
              commit('setUser',null);
            })
          },

          async logout(){
            router.push("/Login");
            // const config = {
            //     headers: { Authorization: `Bearer ${'10|jxryGo8pjkrNZHbNFAkrdOl9VGOEPdvuNbZfhu4H'}` }
            // }
            // await axios.get(
            //     "http://back-cepre.test/api/auth/logout",
            //     config
            //   )  
            //   .then(function (response) {
            //     if (response.status === 200){
            //       console.log(response.data);
            //       localStorage.removeItem("activeUser");
            //       console.log("Saliendo del Sistema");
            //     }
            //   })
            //   .catch(function (error) {
            //       console.log("Contraseña invalida: ", error);
            //   });            
          }

    },
    modules: {}
});
