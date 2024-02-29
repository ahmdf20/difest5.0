import SectionOurLocationVue from '@/components/SectionOurLocation.vue'
import SectionPerlombaanVue from '@/components/SectionPerlombaan.vue'
import { createRouter, createWebHistory } from 'vue-router'
const HomeView = () => import('@/views/HomeView.vue')
const PerlombaanView = () => import('@/views/PerlombaanView.vue')
const ContactView = () => import('@/views/ContactView.vue')
const SectionDetailPerlombaan = () => import('@/components/SectionDetailPerlombaan.vue')
const SectionDaftarPerlombaan = () => import('@/components/SectionDaftarPerlombaan.vue')
const SectionStepByStepForm = () => import('@/components/SectionStepByStepForm.vue')
const Login = () => import('@/views/Login.vue')
const LandingLayout = () => import('@/views/LandingLayout.vue')
const UserLayout = () => import('@/views/UserLayout.vue')
const SectionUserProfile = () => import('@/components/user/SectionProfile.vue')
const SectionPengumpulanKarya = () => import('@/components/user/SectionPengumpulanKarya.vue')
const AdminLayout = () => import('@/views/AdminLayout.vue')
const SectionDashboardAdmin = () => import('@/components/admin/SectionDashboard.vue')
const Blocked = () => import('@/views/Blocked.vue')
const SectionParticipantManage = () => import('@/components/admin/SectionParticipantManage.vue')
const SectionParticipantSubmission = () => import('@/components/admin/SectionParticipantSubmission.vue')
const SectionAddParticipant = () => import('@/components/admin/SectionAddParticipant.vue')

// import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/blocked',
      name: 'Blocked',
      meta: {
        metaName: 'blocked',
        showMenu: false,
      },
      component: Blocked,
    },
    {
      path: '/login',
      name: 'Login',
      meta: {
        metaName: 'login',
        showMenu: false,
        metaMode: 'guest',
      },
      component: Login
    },
    {
      mode: 'guest',
      path: '/',
      redirect: '/',
      component: LandingLayout,
      children: [
        {
          path: '',
          name: 'Home',
          meta: {
            metaName: 'home',
            showMenu: true,
            metaMode: 'guest',
          },
          component: HomeView,
        },
        {
          path: 'perlombaan',
          name: 'Perlombaan',
          meta: {
            metaName: 'detail-perlombaan',
            showMenu: false,
            metaMode: 'guest',
          },
          component: SectionPerlombaanVue
        },
        {
          path: 'daftar',
          name: 'Daftar Perlombaan',
          meta: {
            metaName: 'daftar-perlombaan',
            showMenu: true,
            metaMode: 'guest',
          },
          component: SectionStepByStepForm,
        },
        {
          path: 'feedback',
          name: 'Feedback',
          meta: {
            metaName: 'feedback',
            showMenu: true,
            metaMode: 'guest',
          },
          component: SectionOurLocationVue,
        }
      ]
    },
    {
      mode: 'user',
      path: '/user',
      redirect: '/user/',
      component: UserLayout,
      children: [
        {
          path: 'pengumpulan-karya',
          name: 'Pengumpulan Karya',
          meta: {
            metaName: 'pengumpulan-karya',
            showMenu: true,
            metaMode: 'participant',
            roles: ['participant'],
            authRequired: true,
          },
          component: SectionPengumpulanKarya
        },
        {
          path: 'profile',
          redirect: '/user/profile/',
          children: [
            {
              path: '',
              name: 'My Profile',
              meta: {
                showMenu: true,
                metaName: 'user-profile',
                metaMode: 'participant',
                authRequired: true
              },
              component: SectionUserProfile
            },
            {
              path: 'ubah-password',
              name: 'Ubah Password Participant',
              meta: {
                showMenu: false,
                metaName: 'ubah-password-participant',
                metaMode: 'participant',
                authRequired: true
              },
              component: () => import('../components/user/SectionUbahPassword.vue')
            }
          ],
        },
      ]
    },
    {
      mode: 'admin',
      path: '/admin',
      redirect: '/admin/',
      component: AdminLayout,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard Admin',
          meta: {
            metaName: 'dashboard-admin',
            showMenu: true,
            metaMode: 'admin',
            roles: ['admin', 'commite'],
            authRequired: true,
          },
          component: SectionDashboardAdmin
        },
        {
          path: 'participant-manage',
          redirect: '/admin/participant-manage/',
          children: [
            {
              path: '',
              name: 'Participant Manage',
              meta: {
                metaName: 'participant-manage',
                showMenu: true,
                metaMode: 'admin',
                roles: ['admin', 'commite'],
                authRequired: true,
              },
              component: SectionParticipantManage,
            },
            {
              path: 'add-participant',
              name: 'Add Participant',
              meta: {
                metaName: 'add-participant',
                showMenu: false,
                metaMode: 'admin',
                roles: ['admin'],
                authRequired: true
              },
              component: SectionAddParticipant,
            }
          ],
        },
        {
          path: 'participant-submission',
          name: 'Participant Submmission',
          meta: {
            metaName: 'participant-submission',
            showMenu: true,
            metaMode: 'admin',
            roles: ['admin', 'commite'],
            authRequired: true,
          },
          component: SectionParticipantSubmission
        }
      ]
    }
  ]
})

const chechAuth = () => {
  const dataLocal = JSON.parse(localStorage.getItem('user'))
  if (dataLocal?.token) {
    return true
  } else {
    return false
  }
}

const checkCurrentRole = () => {
  const dataLocal = JSON.parse(localStorage.getItem('user'))
  return dataLocal?.role;
}

router.beforeEach((to, from, next) => {
  const role = checkCurrentRole()
  if (chechAuth() == false && to.meta.authRequired) {
    return next({ path: '/login' })
  } 
  next()
})

export default router
