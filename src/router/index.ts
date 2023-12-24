import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/shared/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/snaps'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/snaps'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'snaps',
        component: () => import('@/views/SnapPage.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
