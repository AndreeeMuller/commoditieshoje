<template>
  <commodity-hoje commoditySlug="cafe"
                  defaultCommoditiesSelectedSlug="cafe/cafe-mercado-fisico-sindicatos-e-cooperativas">
  </commodity-hoje>
</template>

<script>

import CommodityHoje from 'components/CommodityHoje.vue'

export default {
  name: 'CafeHoje',
  components: {
    CommodityHoje
  }
}
</script>
