import { createRouter, createWebHistory } from 'vue-router'
const HomeView = () => import('@/views/HomeView.vue')
const PerlombaanView = () => import('@/views/PerlombaanView.vue')
const ContactView = () => import('@/views/ContactView.vue')
const SectionDetailPerlombaan = () => import('@/components/SectionDetailPerlombaan.vue')
// import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        metaName: 'home',
        showMenu: true
      },
      component: HomeView
    },
    {
      path: '/perlombaan',
      redirect: '/perlombaan/',
      children: [
        {
          path: '',
          name: 'Perlombaan',
          meta: {
            metaName: 'perlombaan',
            showMenu: true
          },
          component: PerlombaanView
        },
        {
          path: 'detail/:slug',
          name: 'Detail Perlombaan',
          meta: {
            metaName: 'perlombaan',
            showMenu: false
          },
          component: SectionDetailPerlombaan
        }
      ]
    },
    {
      path: '/contact',
      name: 'Contact',
      meta: {
        metaName: 'contact',
        showMenu: true
      },
      component: ContactView
    }
  ]
})

export default router
