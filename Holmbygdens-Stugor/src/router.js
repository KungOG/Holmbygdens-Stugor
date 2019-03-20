import Vue from 'vue'
import Router from 'vue-router'
import auth from './auth'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path : '/',
      name : 'home',
      component : () =>
        import('./views/Home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => 
        import('./views/Admin/Login.vue')
    },
    {
      path : '/book/:id',
      name : 'book',
      component : () =>
        import('./views/Booking/Book.vue')
    },
    {
      path: '/booking',
      name: 'booking',
      component : () =>
        import('./views/Booking/Booking.vue'),
        children : [
          {
          path : '/booking/:id',
          name : 'pickdate',
          component : () =>
            import('./components/Booking/Pickdate.vue')
          }
        ]
    },
    {
      path: '/booked',
      name: 'booked',
      component : () =>
        import('./views/Booking/Booked.vue')
    },
    {
      path: '/about',
      name: 'about',
      component : () =>
        import('./views/About.vue')
    },
    {
      path : '/admin',
      name : 'admin',
      component : () =>
        import('./views/Admin/Admin.vue'),
      meta: { 
          requiresAuth: true
      },
        children : [
          {
            path : '/addcabin',
            name : 'add-cabin',
            component : () =>
              import('./components/Admin/Addcabin.vue'),
          },
          {
            path : '/bookings',
            name : 'bookings',
            component : () =>
              import('./components/Admin/Bookings.vue'),
          },
          {
            path: '/verify',
            name: 'verify',
            component: () =>
              import('./components/Admin/Verify.vue')
          },
          {
            path : '/cabins',
            name : 'cabins',
            component : () =>
              import('./components/Admin/Cabins.vue'),

              children : [
              {
                path : '/cabins/:id',
                name : 'cabin',
                component : () =>
                  import('./components/Admin/Cabin.vue')
              }
            ]
        }
      ]
    }
  ]
});

// If Auth is required && false, go to /login
router.beforeEach((to, from, next) => {
if (to.matched.some(record => record.meta.requiresAuth) && !auth.isAuthenticated()) {
  next({ path: '/login' });
} else {
  next();
}
});

export default router;
