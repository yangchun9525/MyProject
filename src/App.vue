<template>
  <div id="app">
    <!-- <router-link to="/chart">
      <h2>chart</h2>
    </router-link>

    <router-link to="/test">
      <h2>test</h2>
    </router-link>

    <router-link to="/DriverEntry">
      <h2>DriverEntry</h2>
    </router-link>

    <router-link to="/DriverList">
      <h2>DriverList</h2>
    </router-link>

    <router-link to="/login">
      <h2>login</h2>
    </router-link>

    <router-link to="/Hello">
      <h2>Hello</h2>
    </router-link>

    <router-link to="/picture">
      <h2>picture222</h2>
    </router-link>

    <router-link to="/video">
      <h2>video</h2>
    </router-link>

    <router-link to="/text">
      <h2>text</h2>
    </router-link>

    <router-link to="/testvideo">
      <h2>testvideo</h2>
    </router-link>

    <router-link to="/OperationalSystem">
      <h2>OperationalSystem</h2>
    </router-link> -->

    <i-button type="primary" @click="toChart">chart</i-button>
    <i-button type="primary" @click="toTest">test</i-button>
    <i-button type="primary" @click="toDriverEntry">DriverEntry</i-button>
    <i-button type="primary" @click="toDriverList">DriverList</i-button>
    <i-button type="primary" @click="toLogin">login</i-button>
    <i-button type="primary" @click="toHello">Hello</i-button>
    <i-button type="primary" @click="toPicture">picture222</i-button>
    <i-button type="primary" @click="toVideo">video</i-button>
    <i-button type="primary" @click="toText">text</i-button>
    <i-button type="primary" @click="toTestvideo">testvideo</i-button>
    <i-button type="primary" @click="toOperationalSystem">OperationalSystem</i-button>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
	name: 'app',
  methods:{
    toPicture(){
      this.$router.push('/picture')
    },
    toTest(){
      this.$router.push('/test')
    },
    toDriverEntry(){
      this.$router.push('/DriverEntry')
    },
    toDriverList(){
      this.$router.push('/DriverList')
    },
    toLogin(){
      this.$router.push('/login')
    },
    toHello(){
      this.$router.push('/Hello')
    },
    toChart(){
      this.$router.push('/chart')
    },
    toVideo(){
      this.$router.push('/video')
    },
    toText(){
      this.$router.push('/text')
    },
    toTestvideo(){
      this.$router.push('/testvideo')
    },
    toOperationalSystem(){
      this.$router.push('/OperationalSystem')
    }
  }
}
</script>
