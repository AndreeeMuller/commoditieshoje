
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/soja-hoje', component: () => import('pages/SojaHoje.vue'), meta: { title: 'Soja Hoje', image: '' } },
      { path: '/milho-hoje', component: () => import('pages/MilhoHoje.vue'), meta: { title: 'Milho Hoje', image: '' } }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
