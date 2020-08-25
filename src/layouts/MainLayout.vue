<template>
  <q-layout view="hHh LpR fFf">
    <q-drawer v-model="left" side="left" overlay :width="100">
      <div class="row items-center" style="height: 100vh">
        <div class="col-12">
          <div class="row justify-center q-gutter-y-lg">
            <q-list padding>
              <q-item clickable v-ripple v-for="(menuItem, index) in menuList" :key="index" :to="menuItem.to">
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>
      </div>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  data () {
    return {
      left: true,
      menuList: [
        { icon: '', label: 'Soja Hoje', to: '/soja-hoje' },
        { icon: '', label: 'Milho Hoje', to: '/milho-hoje' }
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
