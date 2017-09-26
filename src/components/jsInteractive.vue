
<template>
<div id="div_box" style="width: 100%;height: 100%;position: absolute;background: #0ff;margin-top: -50px;overflow: hidden;margin: 0px">
  {{text}}
</div>
</template>
<script>
import Vue from 'vue';
import axios from 'axios';
// import $jsonp from 'vue-jsonp';
import {
  mapState,
  mapGetters
} from 'vuex'
Vue.prototype.$ajax = axios;
// window.callByAndroid() {
//   console.log("callByAndroid");
//   alert("Js收到消息");
//   this.text = 'Js收到消息-->无参方法callByAndroid被调用';
//   // showElement("Js收到消息-->无参方法callByAndroid被调用");
// }
export default {
  computed: {
    ...mapState([
      'text'
    ])
  },
  data() {
    return {
      // text: '111'
    }
  },
  // mounted: function() {
  //   this.$store.dispatch('SET_TEXT');
  // },
  methods: {
    // window.callByAndroid() {
    //   console.log("callByAndroid");
    //   alert("Js收到消息");
    //   this.text = 'Js收到消息-->无参方法callByAndroid被调用';
    //   // showElement("Js收到消息-->无参方法callByAndroid被调用");
    // }
  },
  created() {
    axios.get('/douban/book/1220562').then(response1 => {
      console.log("555555555555555555333333333:");
      console.log(response1);
      console.log("5555555555555555553333333333:");
    }).catch(function(err) {
      console.log(err);
    });
    this.$http({
      url: '/douban/book/1220562',
      method: 'GET'
    }).then(response => {
      console.log("11111111111111111111111:");
      console.log(response);
      console.log("11111111111111111111111:");
    }).catch(function(response) {
      console.log(response);
    })
  }
}
</script>
