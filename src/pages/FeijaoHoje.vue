<template>
  <commodity-hoje commoditySlug="feijao"
                  commodityNoticiaSlug="feijao-e-graos-especiais"
                  defaultCommoditiesSelectedSlug="">
  </commodity-hoje>
</template>

<script>

import CommodityHoje from 'components/CommodityHoje.vue'

export default {
  name: 'FeijaoHoje',
  components: {
    CommodityHoje
  }
}
</script>
