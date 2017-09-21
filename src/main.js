// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import iView from 'iview';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import axios from 'axios';
import util from './fetch/api';
import VueVideoPlayer from 'vue-video-player';
import VueDPlayer from 'vue-dplayer';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(MintUI);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(iView);
Vue.use(Vuex);
Vue.use(VueVideoPlayer);
Vue.use(VueDPlayer);

Vue.config.productionTip = false

require('video.js/dist/video-js.css');
require('vue-video-player/src/custom-theme.css');

const store = new Vuex.Store({
  state: {
    contentlist: [],
    text:''
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
    },
    SET_TEXT: function({
      commit
    }){
      commit('SET_TEXT_DATA', {
        text: 'testtest'
      })
    }
  },
  mutations: {
    SET_BUDEJIE_DATA: (state, {
      data
    }) => {
      state.contentlist = data
    },
    SET_TEXT_DATA: (state, {
      text
    }) => {
      state.text = text
    }
  },
  getters: {
    getData: state => {
      return state.contentlist.length
    }
  }
})

window.callByAndroid = function(){
  alert("Js收到消息11");
  store.dispatch('SET_TEXT');
  // this.text = 'Js收到消息-->无参方法callByAndroid被调用';
}
// mount
var vm = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
