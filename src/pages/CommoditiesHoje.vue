<template>
  <div class="row items-center justify-center" style="min-height: calc(100vh - 16px)">
    <div class="col-12 col-lg-6">
      <div class="row text-center">
        <div class="col-12 col-md-12 col-lg-12 text-h3 q-mb-lg">
          Commodities Hoje
        </div>
        <div class="col-6 col-md-4 col-lg-4" v-for="(menuItem, index) in menuList" :key="index" >
          <q-btn :to="menuItem.to" class="full-width q-pa-lg">
            <div class="full-width">
              <img :src="require('assets/' + menuItem.icon)" style="width: 40px"/>
            </div>
            <div class="full-width">
              {{ menuItem.label }}
            </div>
          </q-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CommoditiesHoje',
  data () {
    return {
      menuList: [
        { icon: 'icon_algodao.png', label: 'Algodão Hoje', to: '/algodao-hoje' },
        { icon: 'icon_boi.png', label: 'Boi Hoje', to: '/boi-hoje' },
        { icon: 'icon_cafe.png', label: 'Café Hoje', to: '/cafe-hoje' },
        { icon: 'icon_feijao.png', label: 'Feijão Hoje', to: '/feijao-hoje' },
        { icon: 'icon_frango.png', label: 'Frango Hoje', to: '/frango-hoje' },
        { icon: 'icon_milho.png', label: 'Milho Hoje', to: '/milho-hoje' },
        { icon: 'icon_soja.png', label: 'Soja Hoje', to: '/soja-hoje' },
        { icon: 'icon_trigo.png', label: 'Trigo Hoje', to: '/trigo-hoje' }
      ]
    }
  }
}
</script>
