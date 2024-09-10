<template>
  <form @submit.prevent="enviarMensaje" class="user-chat py-3">
    <div class="d-flex align-items-center gap-2">
      <img :src="usuario.picture.thumbnail" :alt="usuario.name.first" />
      <p class="m-0">{{ usuario.name.first }} {{ usuario.name.last }}</p>
    </div>
    <div v-if="color" class="mb-3">
      <label :for="`color-${usuario.login.uuid}`">Color</label>
      <input
        :id="`color-${usuario.login.uuid}`"
        class="form-control"
        type="color"
        v-model="color"
      />
    </div>
    <div class="mb-3">
      <label :for="`mensaje-${usuario.login.uuid}`">Mensaje</label>
      <textarea
        :id="`mensaje-${usuario.login.uuid}`"
        class="form-control"
        v-model="mensaje"
        placeholder="Escribe un mensaje"
      />
    </div>
    <button class="w-100" type="submit">Enviar</button>
  </form>
</template>

  <script>
import axios from 'axios'
export default {
  props: ['usuario'],
  data() {
    return {
      mensaje: '',
      color: ''
    }
  },
  methods: {
    enviarMensaje() {
      if (!this.mensaje?.trim()) return
      this.$emit('mensaje-envia2', {
        texto: this.mensaje.trim(),
        lado: this.usuario.lado,
        color: this.color,
        usuario: this.usuario
      })
      this.mensaje = '' // Limpiar el input después de enviar
    },
    async fetchRandomColor() {
      try {
        const url = 'https://x-colors.yurace.pro/api/random'
        const { data } = await axios.get(url)

        this.color = data?.hex || '#FFFFFF'
      } catch (error) {
        console.error(error)
        this.color = '#FFFFFF'
      }
    }
  },
  created() {
    this.fetchRandomColor()
  }
}
</script>

<style scoped>
.user-chat {
  border: 1px solid #000;
}
</style>