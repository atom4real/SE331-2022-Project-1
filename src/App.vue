<template>
  <div id="flashMessage" v-if="GStore.flashMessage">
    {{ GStore.flashMessage }}
  </div>
  <NavBar />
  <router-view />
</template>
<script>
import NavBar from './components/NavBar.vue'
export default {
  inject: ['GStore'],
  components: { NavBar }
}
</script>
<style>
@keyframes Colorfade {
  from {
    background: #42b883;
  }
  to {
    background: transparent;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h4 {
  font-size: 20px;
}
#flashMessage {
  animation-name: Colorfade;
  animation-duration: 3s;
}
@import '~bootstrap/dist/css/bootstrap.css';
</style>
