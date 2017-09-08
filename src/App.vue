<template>
  <div id="app">
    <router-link to="/chart">
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
    </router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
	name: 'app'
}
</script>
