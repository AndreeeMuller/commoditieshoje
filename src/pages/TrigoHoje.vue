<template>
  <commodity-hoje commoditySlug="trigo"
                  defaultCommoditiesSelectedSlug="trigo/trigo-mercado-fisico">
  </commodity-hoje>
</template>

<script>

import CommodityHoje from 'components/CommodityHoje.vue'

export default {
  name: 'TrigoHoje',
  components: {
    CommodityHoje
  }
}
</script>
