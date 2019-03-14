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
      path : '/book/:id',
      name : 'book',
      component : () => 
        import('./views/Book.vue')
    },
    {
      path: '/booking',
      name: 'booking',
      component : () => 
        import('./views/Booking.vue'),
        children : [
          {
          path : '/booking/:id',
          name : 'pickdate',
          component : () =>
            import('./components/Pickdate.vue')
          }
        ]
    },
    {
      path: '/profile',
      name: 'profile',
      component : () => 
        import('./views/Profile.vue')
    },
    {
      path : '/admin',
      name : 'admin',
      component : () => 
        import('./views/Admin.vue'),
        children : [
          {
            path : '/addcabin',
            name : 'add-cabin',
            component : () => 
              import('./components/Addcabin.vue'),
          },
          {
            path : '/bookings',
            name : 'bookings',
            component : () => 
              import('./components/Bookings.vue'),
          },
          {
            path: '/verify',
            name: 'verify',
            component: () => 
              import('./components/Verify.vue')
          },
          {
            path : '/cabins',
            name : 'cabins',
            component : () => 
              import('./components/Cabins.vue'),
              
              children : [
              {
                path : '/cabins/:id',
                name : 'cabin',
                component : () =>
                  import('./components/Cabin.vue')
              }
            ]
        }
      ]
    }
  ]
})
