<template>
  <div id="app" class="appStyle">
      <router-view></router-view>
    <vue-canvas-nest :config="{color:'1,2,3', count: 300 ,opacity: 0.3}"></vue-canvas-nest>
  </div>
</template>

<script>
  import vueCanvasNest from 'vue-canvas-nest'
export default {
  components: {vueCanvasNest},
  name: 'App'
}
</script>

<style>
.appStyle{
  width: 100%;
  height: 100%;
}
</style>
