import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path : '/',
      name : 'home',
      component : () => 
        import('./views/Home.vue')
    },
    {
      path : '/admin',
      name : 'admin',
      component : () => 
        import('./views/Admin.vue'),
      
    },
    {
      path: '/booking',
      name: 'booking',
      component: () => 
        import('./views/Booking.vue')
    },
    {
      path: '/verify',
      name: 'verify',
      component: () => 
        import('./views/Verify.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => 
        import('./views/Profile.vue')
    }
  ]
})
