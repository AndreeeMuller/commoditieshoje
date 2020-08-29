<template>
  <!-- <q-layout view="hHh LpR fFf"> -->
  <q-layout view="hHh lpR lff">
    <q-btn flat @click="drawer = !drawer" round dense icon="menu" style="position: fixed; top: 5px; left: 5px; z-index: 999;" />
    <q-drawer v-model="drawer"
              show-if-above
              :mini="miniState"
              @mouseover="miniState = false"
              @mouseout="miniState = true"
              :width="200"
              :breakpoint="500"
              bordered
              content-class="bg-grey-3">
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item-label header>Commodities Hoje</q-item-label>
          <q-separator />
          <q-item clickable
                  v-ripple
                  v-for="(menuItem, index) in menuList"
                  :key="index"
                  :to="menuItem.to"
                  active-class="my-menu-link"
                  :active="link === menuItem.to"
                  @click="link = menuItem.to">
            <q-item-section avatar>
              <img :src="require('assets/' + menuItem.icon)" style="width: 40px"/>
            </q-item-section>
            <q-item-section>
              {{ menuItem.label }}
            </q-item-section>
          </q-item>
          <q-separator />
          <q-item-label header>Créditos</q-item-label>
          <q-item>
            <q-item-section>
              <q-btn  v-for="credito in creditos"
                      :key="credito.descricao"
                      class="btn-fixed-width"
                      type="a"
                      :href="credito.url"
                      outline
                      flat
                      size="sm"
                      target="_blank"
                      color="primary">
                {{ credito.descricao }}
              </q-btn>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <q-page class="q-pa-md">
        <router-view/>
        <my-footer/>
        <entre-em-contato/>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>

import EntreEmContato from 'components/EntreEmContato.vue'
import MyFooter from 'components/Footer.vue'

export default {
  components: {
    EntreEmContato,
    MyFooter
  },
  data () {
    return {
      drawer: true,
      miniState: true,
      link: '',
      menuList: [
        { icon: 'icon_algodao.png', label: 'Algodão Hoje', to: '/algodao-hoje' },
        { icon: 'icon_boi.png', label: 'Boi Hoje', to: '/boi-hoje' },
        { icon: 'icon_cafe.png', label: 'Café Hoje', to: '/cafe-hoje' },
        { icon: 'icon_feijao.png', label: 'Feijão Hoje', to: '/feijao-hoje' },
        { icon: 'icon_frango.png', label: 'Frango Hoje', to: '/frango-hoje' },
        { icon: 'icon_milho.png', label: 'Milho Hoje', to: '/milho-hoje' },
        { icon: 'icon_soja.png', label: 'Soja Hoje', to: '/soja-hoje' },
        { icon: 'icon_trigo.png', label: 'Trigo Hoje', to: '/trigo-hoje' }
      ],
      creditos: [
        { descricao: 'Notícias Agrícolas', url: 'http://noticiasagricolas.com.br' },
        { descricao: 'Toro Investimentos', url: 'https://blog.toroinvestimentos.com.br' },
        { descricao: 'Icons8', url: 'https://icons8.com.br' }
      ]
    }
  },
  watch: {
    // Mantém o menu sempre aberto
    'left' (val) {
      if (!val) {
        this.left = true
      }
    }
  }
}
</script>
