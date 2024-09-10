<template>
  <!-- loading -->
  <div v-if="loading">
    <div class="spinner-border text-info" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <!-- no loading y existen ambos usuarios -->
  <div v-else-if="usuarios.izquierda && usuarios.derecha" class="container-fluid">
    <div class="row">
      <UserChat class="col-3" :usuario="usuarios.izquierda" @mensaje-envia2="agregarMensaje" />
      <ChatBox class="col-6" :mensajes="mensajes" />
      <UserChat class="col-3" :usuario="usuarios.derecha" @mensaje-envia2="agregarMensaje" />
    </div>
  </div>
  <!-- no loading y no existen usuarios -->
  <div v-else>{{ error }}</div>
</template>

<script>
import UserChat from './UserChat.vue'
import ChatBox from './ChatBox.vue'
import axios from 'axios'

export default {
  components: { UserChat, ChatBox },
  data() {
    return {
      loading: true,
      usuarios: {
        izquierda: null,
        derecha: null
      },
      mensajes: [],
      error: ''
    }
  },
  created() {
    this.fetchUsers()
  },
  methods: {
    async fetchUsers() {
      this.reset()

      try {
        const response = await axios.get('https://randomuser.me/api/?results=2')
        const usuarios = response.data.results

        this.usuarios = {
          izquierda: { ...usuarios[0], lado: 'izquierda' },
          derecha: { ...usuarios[1], lado: 'derecha' }
        }
      } catch (error) {
        this.error = `Error al obtener usuarios: ${error}`
      } finally {
        this.loading = false
      }
    },
    agregarMensaje(mensaje) {
      this.mensajes.push(mensaje)
    },
    reset() {
      this.usuarios = {
        izquierda: null,
        derecha: null
      }
      this.mensajes = []
      this.error = ''
    }
  }
}
</script>