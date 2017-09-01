<template>
<div class="item">
  <div class="player">
    <!-- <video-player class="vjs-custom-skin video" ref="videoPlayer" :options="playerOptions" :playsinline="true" @play="onPlayerPlay($event)" @pause="onPlayerPause($event)" @ended="onPlayerEnded($event)" @loadeddata="onPlayerLoadeddata($event)" @waiting="onPlayerWaiting($event)"
      @playing="onPlayerPlaying($event)" @timeupdate="onPlayerTimeupdate($event)" @canplay="onPlayerCanplay($event)" @canplaythrough="onPlayerCanplaythrough($event)" @ready="playerReadied" @statechanged="playerStateChanged($event)">
    </video-player> -->

    <d-player :video="video" :autoplay="autoplay" :contextmenu="contextmenu" screenshot="true" @play="play" ref="player">
    </d-player>
  </div>
</div>
</template>

<script>
// import VueDPlayer from '../src/VueDPlayer.vue'
// import GitHubBadge from 'vue-github-badge'

export default {
  data() {
    return {
      // videojs options
      // playerOptions: {
      //   muted: true,
      //   language: 'en',
      //   playbackRates: [0.7, 1.0, 1.5, 2.0],
      //   sources: [{
      //     type: "video/mp4",
      //     src: "http://mvideo.spriteapp.cn/video/2017/0825/89c70a02894911e7bb33842b2b4c75abcut_wpc.mp4"
      //   }],
      //   poster: "/static/images/author.jpg",
      // },
      video: {
        url: 'http://static.smartisanos.cn/common/video/t1-ui.mp4',
        pic: 'http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg'
      },
      videoUrl: 'http://static.smartisanos.cn/common/video/video-jgpro.mp4',
      autoplay: false,
      player: null,
      contextmenu: [{
        text: 'GitHub',
        link: 'https://github.com/MoePlayer/vue-dplayer'
      }]
    }
  },
  mounted() {
    this.player = this.$refs.player.dp;
    // console.log('this is current player instance object', this.player)
    // setTimeout(() => {
    //   // console.log('dynamic change options', this.player)
    //   this.player.muted(false)
    // }, 2000)
  },
  // computed: {
  //   player() {
  //     return this.$refs.videoPlayer.player
  //   }
  // },
  methods: {
    play() {
      console.log('play callback')
    },
    switchHandle() {
      this.player.switchVideo({
        url: 'http://static.smartisanos.cn/common/video/video-jgpro.mp4'
      })
    },
    // listen event
    onPlayerPlay(player) {
      // console.log('player play!', player)
    },
    onPlayerPause(player) {
      // console.log('player pause!', player)
    },
    onPlayerEnded(player) {
      // console.log('player ended!', player)
    },
    onPlayerLoadeddata(player) {
      // console.log('player Loadeddata!', player)
    },
    onPlayerWaiting(player) {
      // console.log('player Waiting!', player)
    },
    onPlayerPlaying(player) {
      // console.log('player Playing!', player)
    },
    onPlayerTimeupdate(player) {
      // console.log('player Timeupdate!', player.currentTime())
    },
    onPlayerCanplay(player) {
      // console.log('player Canplay!', player)
    },
    onPlayerCanplaythrough(player) {
      // console.log('player Canplaythrough!', player)
    },
    // or listen state event
    playerStateChanged(playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },
    // player is ready
    playerReadied(player) {
      // seek to 10s
      player.currentTime(10)
      // console.log('example 01: the player is readied', player)
    }
  }
}
</script>
<style lang="css">
.video {
  margin: 0 17px 17px 17px;
  clear: both;
}
</style>
