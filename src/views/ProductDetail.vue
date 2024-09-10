<template>
  <div class="container">
    <p v-if="loading || !product">Cargando producto...</p>
    <div v-else>
      <RouterLink :to="{ name: 'products' }"><button>Volver a productos</button></RouterLink>
      <ProductItem :product="product" />
    </div>
  </div>
</template>

<script>
import { ProductsService } from '@/services/ProductsService'
import ProductItem from '@/components/products/ProductItem.vue'
export default {
  components: { ProductItem },
  data() {
    return {
      loading: true,
      product: null
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      const id = this.$route.params.id
      const service = new ProductsService()
      const product = await service.fetchProductById(id)
      if (!product) {
        this.$router.push({ name: 'error' })
      }
      this.product = product
      this.loading = false
    }
  }
}
</script>

<style></style>
