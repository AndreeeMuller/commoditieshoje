<template>
  <commodity-hoje commoditySlug="frango"
                  commodityNoticiaSlug="granjeiros"
                  defaultCommoditiesSelectedSlug="">
  </commodity-hoje>
</template>

<script>

import CommodityHoje from 'components/CommodityHoje.vue'

export default {
  name: 'FrangoHoje',
  components: {
    CommodityHoje
  }
}
</script>
