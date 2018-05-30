
<template>
<div>
  When $a \ne 0$, there are two solutions to \(ax^2 + bx + c = 0\) and they are
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$
  <mt-loadmore :top-method="refresh" :bottom-method="loadMore" :bottom-all-loaded="false" ref="loadmore">
    <ul v-for="item in contentlist">
      <li  @click="toDetail(item.weixin_url)">
        <div>
          <div class="title">
            <span style="height:35px">
            <img class="head-img" :src="item.profile_image"></img>
          </span>

            <div style="height:35px">
              <h2>{{ item.name }}</h2>
            </div>

            <div style="margin-left:45px;margin-top:15px;">
              <h2>{{ item.text }}</h2>
            </div>

            <!-- <div>
              <img class="content-img" :src="item.cdn_img"></img>
            </div> -->
          </div>
        </div>
      </li>
    </ul>
  </mt-loadmore>
</div>
<!-- </div> -->
</template>
<script>
import axios from 'axios';
import util from '../fetch/api';

export default {
  data() {
    return {
      refreshing: false,
      trigger: null,
      loading: false,
      scroller: null,
      response: '1111',
      contentlist: [],
      allPages: ''
    }
  },
  methods: {
    toDetail(url){
      // alert(url);
      // window.location.href = url;
      // window.open();
      window.open(url, '_self');
    },
    refresh() {
      this.refreshing = true;
      this.loadMore();
      this.refreshing = false;
      this.$refs.loadmore.onTopLoaded();
    },
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
        this.$refs.loadmore.onBottomLoaded();
        console.log("11111111111111111111111:");
        console.log(response);
        console.log("11111111111111111111111:");
      }).catch(function(response) {
        console.log(response);
      })

    }
  },
  mounted() {
    this.trigger = this.$el;
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
  width: 100%;
  /*height: 300px;*/
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  border: 1px solid #d9d9d9;
  position: relative;
  user-select: none;
}

.title {
  margin: 0 0 17px;
  clear: both;
}

.title a,
.title span {
  float: left;
  font-size: 14px;
  font-weight: 700;
  /*line-height: 35px;*/
}

.head-img {
  width: 35px;
  height: 35px;
  border-radius: 55px;
  padding: 0;
  margin-right: 10px;
}

.content-img{
  width: 90%;
  /*height: 50px;*/
  padding: 0;
  margin-top: 20px;
  margin-right: 45px;
  margin-left:45px;
}

.view-tabs {
  background-color: #000000;
  /*color: rgba(0,0,0,.87);*/
}
</style>
