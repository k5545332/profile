import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [{
  path: '/',
  name: 'home',
  component: Home,
},
{
  path: '/about',
  name: 'about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
},
{
  path: '/example',
  name: 'example',
  // beforeEnter(to, from, next) {
  //   if (window.confirm('enter test')) {
  //     next();
  //   } else {
  //     next('/');
  //   }
  // },
  component: () => import(/* webpackChunkName: "example" */ '../views/Example.vue'),
},
{
  path: '*',
  redirect: '/',
},
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  // console.log(`${from.name} -> ${to.name}`);
  next();
});

export default router;
