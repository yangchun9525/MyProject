// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import iView from 'iview';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import chart from '@/components/chart';
import Hello from '@/components/Hello';
import axios from 'axios';
import util from './fetch/api';

Vue.use(VueRouter);

Vue.use(VueResource);
Vue.use(iView);
Vue.use(Vuex);

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    contentlist: []
  },
  actions: {
    LOAD_BUDEJIE_DATA: function({
      commit
    }) {
      axios.get(util.commonUrl, {
        params: {
          showapi_appid: util.showapi_appid,
          showapi_sign: util.showapi_sign,
          type: util.type
        }
      }).then(response1 => {
        commit('SET_BUDEJIE_DATA', {
          data: response1.data.showapi_res_body.pagebean.contentlist
        })
        console.log("LOAD_BUDEJIE_DATA_LOAD_BUDEJIE_DATA:");
        console.log(response1);
        console.log("LOAD_BUDEJIE_DATA_LOAD_BUDEJIE_DATA:");
      }).catch(function(err) {
        console.log(err);
      })
    },
    LOAD_BUDEJIE_DATA_WITH_PARAM: function({
      commit,
      state
    }, {
      item
    }) {
      axios.get(util.commonUrl, {
        params: {
          showapi_appid: item.showapi_appid,
          showapi_sign: item.showapi_sign,
          type: item.type
        }
      }).then(response1 => {
        commit('SET_BUDEJIE_DATA', {
          data: response1.data.showapi_res_body.pagebean.contentlist
        })
        console.log("LOAD_BUDEJIE_DATA_LOAD_BUDEJIE_DATA:");
        console.log(response1);
        console.log("LOAD_BUDEJIE_DATA_LOAD_BUDEJIE_DATA:");
      }).catch(function(err) {
        console.log(err);
      })
    }

  },
  mutations: {
    SET_BUDEJIE_DATA: (state, {
      data
    }) => {
      state.contentlist = data
    }
  },
  getters: {
    getData: state => {
      return state.contentlist.length
    }
  }
})

// mount
var vm = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
