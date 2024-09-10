<template>
  <div class="card shadow-sm">
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="product.image" class="w-100 rounded-start h-100" :alt="product.title" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ product.title }}</h5>
          <p class="card-text"><strong>Categoría:</strong> {{ product.category }}</p>
          <p class="card-text" v-if="!hideDescription">{{ product.description }}</p>
          <p class="card-text"><strong>Precio:</strong> ${{ product.price }}</p>
          <p class="card-text">
            <strong>Calificación:</strong> {{ product.rating.rate }}
            <span class="text-muted">({{ product.rating.count }} reseñas)</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    },
    hideDescription: {
      type: Boolean,
      default: false
    }
  }
}
</script>
  
<style scoped>
.card {
  border-radius: 10px;
}
img {
  object-fit: cover;
}
</style>
  