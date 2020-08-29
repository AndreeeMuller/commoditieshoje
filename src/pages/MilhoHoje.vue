<template>
  <commodity-hoje commoditySlug="milho"
                  defaultCommoditiesSelectedSlug="milho/milho-mercado-fisico-sindicatos-e-cooperativas">
  </commodity-hoje>
</template>

<script>

import CommodityHoje from 'components/CommodityHoje.vue'

export default {
  name: 'MilhoHoje',
  components: {
    CommodityHoje
  }
}
</script>
