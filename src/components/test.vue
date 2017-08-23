<template>
<div>
  <!-- <ul id="test">
    <h2>111111111111111</h2>
    <li v-for="item in items">
      {{ item.message }}
    </li>
  </ul> -->
  <mu-icon value="home"/>
    <mu-icon value="flight_takeoff" color="red"/>
    <mu-icon value="cloud_download" color="orange"/>
    <mu-icon value="videogame_asset" color="blue"/>
  <ul>
    <h2>{{getData}} dadas</h2>
    <li v-for="item in contentlist">
      {{ item.text }} dasdas
    </li>
  </ul>

</div>
</template>
<script>
import {
  mapState,
  mapGetters
} from 'vuex'

export default {
  name: 'test',
  computed: {
    ...mapGetters([
      'getData'
    ]),
    ...mapState([
      'contentlist'
    ])
  },
  data() {
    return {

    }
  }
}
</script>
