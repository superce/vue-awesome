<template>
  <div id="app">
    <sideBar></sideBar>
    <router-view/>
  </div>
</template>

<script>
import sideBar from './components/commen/sideBar'
export default {
  name: 'App',
  components:{
    sideBar
  }
}
</script>

<style>
html,body,#app,ul {
  height: 100%;
  margin: 0;
  padding: 0;
}
#app{
  display: flex;
  background: #F5F5F5;
}
</style>
