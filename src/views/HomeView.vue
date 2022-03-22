<template>
  <div v-if="$auth.isAutenticated">
    <Header></Header>
    <movie-list></movie-list>
  </div>
  <div v-else>
    <router-link to="/login">Logueate</router-link>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import MovieList from '../components/MovieList.vue'

export default {
  components: { Header, MovieList }
}
</script>