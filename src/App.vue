<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>
<script>
export default {
  inject: ['GStore']
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
