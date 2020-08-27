<template>
  <commodity-hoje commodity="soja"
                  defaultCommoditiesSelectedSlug="soja/soja-mercado-fisico-sindicatos-e-cooperativas">
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
