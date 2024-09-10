import axios from 'axios'

export class ProductsService {
  async fetchAllProducts() {
    try {
      const url = 'https://fakestoreapi.com/products'
      const response = await axios.get(url)

      return response.data
    } catch (error) {
      console.error(error)
      return null
    }
  }
  async fetchProductById(productId) {
    try {
      const url = `https://fakestoreapi.com/products/${productId}`
      const response = await axios.get(url)

      return response.data
    } catch (error) {
      console.error(error)
      return null
    }
  }
}
