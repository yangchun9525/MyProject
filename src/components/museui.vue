
<template>
  <div class="demo-infinite-container">
    <mu-list>
      <template v-for="item in contentlist">
        <mu-list-item >
          <img class="list-img img-response" :src="item.profile_image" lazy="loading">
          {{ item.text }}
        </mu-list-item>
        <mu-divider/>
      </template>
    </mu-list>
    <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
  </div>
</template>
<script>
import axios from 'axios';
import util from '../fetch/api';

export default {
  data() {
    return {
      loading: false,
      scroller: null,
      response: '1111',
      contentlist: [],
      allPages: ''
    }
  },
  methods: {
    loadMore() {
      this.loading = true;
      this.$http({
        url: util.commonUrl,
        method: 'GET',
        params: {
          showapi_appid: util.showapi_appid,
          showapi_sign: util.showapi_sign,
          type: util.img_type
        }
      }).then(response => {
        this.response = response;
        this.allPages = response.body.showapi_res_body.pagebean.allPages;
        var list = response.body.showapi_res_body.pagebean.contentlist;
        for (let i = 0; i < list.length; i++) {
          this.contentlist.push(list[i])
        }
        // this.contentlist.push(response.body.showapi_res_body.pagebean.contentlist);
        this.loading = false;
        console.log("11111111111111111111111:");
        console.log(response);
        console.log("11111111111111111111111:");
      }).catch(function(response) {
        console.log(response);
      })

    }
  },
  mounted () {
    this.scroller = this.$el;
    this.$http({
      url: util.commonUrl,
      method: 'GET',
      params: {
        showapi_appid: util.showapi_appid,
        showapi_sign: util.showapi_sign,
        type: util.img_type
      }
    }).then(response => {
      this.response = response;
      this.allPages = response.body.showapi_res_body.pagebean.allPages;
      this.contentlist = response.body.showapi_res_body.pagebean.contentlist;
      console.log("2222222222222222222:");
      console.log(response);
      console.log("222222222222222222:");
    }).catch(function(response) {
      console.log(response);
    })
  }
}
</script>
<style lang="css">
.demo-infinite-container{
  /*width: 256px;*/
  /*height: 300px;*/
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  border: 1px solid #d9d9d9;
}
</style>
