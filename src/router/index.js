import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GuideStyleView from '../views/GuideStyleView.vue'
import ProgView from '../views/ProgView.vue'
import ArtistesView from '../views/ArtistesView.vue'
import Page404 from '../views/Page404View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/GuideView',
      name: 'GuideStyleView',
      component: GuideStyleView
    },
    {
      path: '/ProgView',
      name: 'ProgView',
      component: ProgView
    },
    {
      path: '/ArtistesView',
      name: 'ArtistesView',
      component: ArtistesView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'page404',
      component: Page404
    },
  ]
})

export default router
