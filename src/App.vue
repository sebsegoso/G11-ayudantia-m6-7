<script >
import { RouterLink, RouterView } from 'vue-router'
export default {
  components: {
    RouterLink,
    RouterView
  }
}
</script>

<template>
  <nav class="py-3 px-1 container d-flex gap-4">
    <RouterLink :to="{ name: 'hooks' }">Ejemplo hooks</RouterLink>
    <RouterLink :to="{ name: 'products' }">Ejemplo tienda</RouterLink>
    <RouterLink :to="{ name: 'chat' }">Ejemplo chat</RouterLink>
  </nav>

  <RouterView />
</template>

<style scoped>
nav a {
  color: #aaa;
}
.router-link-exact-active,
.router-link-active {
  color: #111;
  font-weight: 700;
}
</style>
