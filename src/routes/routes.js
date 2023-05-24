const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      MainView: () => import('@/views/Home.vue')
    }
  },
  {
    path: '/:id/product',
    name: 'detailProduct',
    components: {
      MainView: () => import('@/views/Product.vue')
    }
  }
]

export default routes
