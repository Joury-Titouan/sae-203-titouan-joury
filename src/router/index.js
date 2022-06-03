import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GuideStyleView from '../views/Style-guideView.vue'
import ProgView from '../views/ProgView.vue'
import ArtistesView from '../views/ArtistesView.vue'
import Page404 from '../views/Page404View.vue'
import Hangar from '../views/HangarView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Style-guideView',
      name: 'Style-guideView',
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
    {
      path: '/HangarView',
      name: 'HangarView',
      component: Hangar
    },
  ]
})

export default router
