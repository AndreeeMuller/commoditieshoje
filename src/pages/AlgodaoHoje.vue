<template>
  <commodity-hoje commodity="algodao"
                  defaultCommoditiesSelectedSlug="algodao/algodo-em-pluma-ao-produtor">
  </commodity-hoje>
</template>

<script>

import CommodityHoje from 'components/CommodityHoje.vue'

export default {
  name: 'AlgodaoHoje',
  components: {
    CommodityHoje
  }
}
</script>
