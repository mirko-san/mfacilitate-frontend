// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: 'meetings',
        name: 'Meetings',
        component: () => import(/* webpackChunkName: "meetings" */ '@/views/Meetings.vue'),
      },
      {
        path: 'themes',
        name: 'Themes',
        component: () => import(/* webpackChunkName: "themes" */ '@/views/Themes.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
