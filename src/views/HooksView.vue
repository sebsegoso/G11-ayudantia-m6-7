<template>
  <div class="container">
    <h1>Soy la vista del ejemplo de los hooks</h1>
    <h2>{{ contador }}</h2>
    <button class="btn btn-primary" @click="contador++">Incrementar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contador: 0,
      miVariable: 'Soy una variable del estado'
    }
  },
  beforeCreate() {
    console.log(`before create`, this.miVariable)
  },
  created() {
    console.log(`created`, this.miVariable)
  },
  beforeMount() {
    console.log(`beforeMount`, this.miVariable)
  },
  mounted() {
    console.log(`mounted`, this.miVariable)
  },
  beforeUpdate() {
    console.log(`Soy beforeUpdate a punto de actualizar el dom`, this.contador)
  },
  updated() {
    console.log(`updated`, this.contador)
  },
  beforeUnmount() {
    console.log(`beforeUnmount`)
  },
  unmounted() {
    console.log(`unmounted, xaito me voy`)
  }
}
</script>

<style>
</style>