
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/soja-hoje', component: () => import('pages/SojaHoje.vue'), meta: { title: 'Soja Hoje', image: '' } },
      { path: '/milho-hoje', component: () => import('pages/MilhoHoje.vue'), meta: { title: 'Milho Hoje', image: '' } },
      { path: '/algodao-hoje', component: () => import('pages/AlgodaoHoje.vue'), meta: { title: 'Algodão Hoje', image: '' } },
      { path: '/boi-hoje', component: () => import('pages/BoiHoje.vue'), meta: { title: 'Boi Hoje', image: '' } },
      { path: '/cafe-hoje', component: () => import('pages/CafeHoje.vue'), meta: { title: 'Café Hoje', image: '' } },
      { path: '/feijao-hoje', component: () => import('pages/FeijaoHoje.vue'), meta: { title: 'Feijão Hoje', image: '' } },
      { path: '/frango-hoje', component: () => import('pages/FrangoHoje.vue'), meta: { title: 'Frango Hoje', image: '' } },
      { path: '/trigo-hoje', component: () => import('pages/TrigoHoje.vue'), meta: { title: 'Trigo Hoje', image: '' } }
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
