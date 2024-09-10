<template>
  <div class="chat-box d-flex flex-column py-3" ref="chatBox">
    <div
      v-for="(mensaje, index) in mensajes"
      :key="index"
      :class="mensaje.lado"
      class="chat-box__message-container"
    >
      <span class="chat-box__author"
        >{{ mensaje.usuario.name.first }} {{ mensaje.usuario.name.last }}</span
      >
      <p class="chat-box__message py-1 px-2" :style="{ backgroundColor: mensaje.color }">
        {{ mensaje.texto }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['mensajes'],
  updated() {
    const refs = this.$refs.chatBox
    console.dir(refs)

    const lastChildElement = this.$refs.chatBox.lastElementChild
    lastChildElement?.scrollIntoView({
      behavior: 'smooth'
    })
  }
}
</script>

<style scoped>
.chat-box {
  background: #fff5d0;
  border: 1px solid #000;
  gap: 0.5rem;
  max-height: 70vh;
  overflow: auto;
}
.chat-box__message-container {
  display: flex;
  flex-direction: column;
}
.chat-box__author {
  font-size: 10px;
  color: #aaa;
}
.chat-box__message {
  border-radius: 12px;
  width: fit-content;
  max-width: 80%;
}
.izquierda {
  text-align: left;
  align-items: flex-start;
}
.derecha {
  text-align: right;
  align-items: flex-end;
}
</style>