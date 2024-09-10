<template>
  <div class="container">
    <p v-if="loading">Cargando...</p>
    <p v-else-if="!products">Error al cargar productos</p>
    <div v-else>
      <div class="row">
        <RouterLink
          class="col-12 col-lg-6 my-2"
          v-for="product in products"
          :key="product.id"
          :to="{ name: 'productDetail', params: { id: product.id } }"
        >
          <ProductItem class="" :product="product" hideDescription />
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import { ProductsService } from '@/services/ProductsService.js'
import ProductItem from '@/components/products/ProductItem.vue'
import { RouterLink } from 'vue-router'

export default {
  components: { RouterLink, ProductItem },
  data() {
    return {
      loading: true,
      products: null
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      const service = new ProductsService()
      const products = await service.fetchAllProducts()
      if (products) {
        this.products = products
      }
      this.loading = false
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>