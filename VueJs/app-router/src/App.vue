<template>
  <nav>
    <router-link to="/" @click="mostrarRouter">Home</router-link> |
    <router-link to="/about" @click="mostrarRouter">About</router-link>
  </nav>
  <router-view/>
</template>

<script>
export default {
  methods: {
    mostrarRouter() {
      console.log(this.$route)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
