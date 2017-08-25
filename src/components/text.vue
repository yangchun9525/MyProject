
<template>
<div class="demo-infinite-container">
  <!-- <mu-tabs :value="activeTab" @change="handleTabChange" class="view-tabs">
    <mu-tab value="rage" title="图片" />
    <mu-tab value="songList" title="视频" />
    <mu-tab value="leaderBoard" title="段子" />
  </mu-tabs> -->
  <mu-list>
    <template v-for="item in contentlist">
        <mu-list-item>
          <!-- <mu-avatar :src="item.profile_image" slot="leftAvatar"/> -->
          <!-- :title="item.name"
          <img class="list-img img-response" :src="item.profile_image" lazy="loading">
          <div class="list-name">{{item.text}}</div> -->
          <div>
            <div class="title">
              <span style="height:35px">
                <img class="head-img" :src="item.profile_image"></img>
              </span>

              <div style="height:35px">
                <h2>{{ item.name }} dsss</h2>
              </div>

              <div style="margin-left:45px;margin-top:15px;">
                <h2>{{ item.text }} 11</h2>
              </div>

            </div>
          </div>
        </mu-list-item>
        <mu-divider/>
      </template>
  </mu-list>
  <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore" />
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
          type: util.text_type
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
  mounted() {
    this.scroller = this.$el;
    this.$http({
      url: util.commonUrl,
      method: 'GET',
      params: {
        showapi_appid: util.showapi_appid,
        showapi_sign: util.showapi_sign,
        type: util.text_type
      }
    }).then(response => {
      console.log("2222222222222222222:");
      console.log(response);
      console.log("222222222222222222:");
      this.response = response;
      this.allPages = response.body.showapi_res_body.pagebean.allPages;
      this.contentlist = response.body.showapi_res_body.pagebean.contentlist;
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

.content-video{
  width: 90%;
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
