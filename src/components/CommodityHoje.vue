/* eslint-disable no-trailing-spaces */
<template>
  <div class="row items-center" style="min-height: calc(100vh - 32px)">
    <div class="col-12">
      <div class="row justify-center q-gutter-y-lg">
        <div class="col-12 col-md-10 col-lg-10 text-center">
          <img :alt="commoditySelected.titulo" :src="commoditySelected.imagem">
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <q-select label="Commodity"
                    transition-show="jump-up"
                    transition-hide="jump-down"
                    behavior="dialog"
                    filled
                    map-options
                    emit-value
                    v-model="commoditySelected"
                    :options="commodities.map(x => { return { value: x, label: x.titulo } })">
          </q-select>
        </div>
        <div class="col-12 col-md-10 col-lg-10">
          <div class="row justify-center">
            <div class="col-12 col-md-9 col-lg-7">
              <q-table  :data="commoditySelected.valores"
                        :columns="commoditySelected.colunas"
                        :pagination.sync="pagination"
                        :filter="filter"
                        grid
                        hide-header
                        hide-bottom
                        row-key="name">
                <template slot="top-left" style="padding-top: 10px;">
                  Atualizado em {{ commoditySelected.data }}
                </template>
                <template slot="top-right">
                  <q-input dense v-model="filter" placeholder="Pesquisar">
                    <template v-slot:append>
                      <q-icon name="search" />
                    </template>
                  </q-input>
                </template>
              </q-table>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-10 col-lg-10 text-center" v-html="commoditySelected.rodape"></div>
      </div>
    </div>
  </div>
</template>

<script>

import { date } from 'quasar'

export default {
  name: 'CommodityHoje',
  props: {
    commodity: {
      type: String,
      required: true
    },
    defaultCommoditiesSelectedSlug: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      commodities: [],
      commoditySelected: {
        titulo: null,
        imagem: null,
        rodape: null,
        link: null,
        data: null,
        colunas: [],
        valores: []
      },
      pagination: {
        page: 1,
        rowsPerPage: 0
      },
      filter: ''
    }
  },
  methods: {
    getCommodities () {
      this.$q.loading.show()
      this.$axios.get('https://www.noticiasagricolas.com.br/cotacoes/' + this.commodity + '.json')
        .then((response) => {
          const newArray = []
          response.data.tabelas.forEach(tab => {
            const newObject = {
              data: date.formatDate(tab.data, 'DD/MM/YYYY HH:mm'),
              imagem: tab.imagem,
              link: tab.link,
              rodape: tab.rodape,
              secao: tab.secao,
              slug: tab.slug,
              titulo: tab.titulo,
              colunas: [],
              valores: []
            }

            // Formata o objeto colunas { 300: "Coluna 300", 450: "Coluna 450" } em array [ { name: 300, label: "Coluna 300" }, { name: 450, label: "Coluna 450" } ]
            Object.keys(tab.colunas).forEach((col, colIndex) => {
              newObject.colunas.push({
                name: col,
                label: tab.colunas[col],
                field: col,
                align: colIndex === 0 ? 'lef' : 'center'
              })
            })

            // Formata o objeto de objeto valores { 1: { 300: "Valor 1", 450: "Valor 1" }, 2: { 300: "Valor 2", 450: "Valor 2" } } em array [ { 300: "Valor 1", 450: "Valor 1" }, { 300: "Valor 2", 450: "Valor 2" } ]
            Object.keys(tab.valores).forEach(vals => {
              const newObjectVal = {}
              Object.keys(tab.valores[vals]).forEach(val => {
                newObjectVal[val] = tab.valores[vals][val]
              })
              newObject.valores.push(newObjectVal)
            })

            newArray.push(newObject)
          })
          this.commodities = newArray.sort((a, b) => {
            // Use toUpperCase() to ignore character casing
            const bandA = a.titulo.toUpperCase()
            const bandB = b.titulo.toUpperCase()
            let comparison = 0
            if (bandA > bandB) {
              comparison = 1
            } else if (bandA < bandB) {
              comparison = -1
            }
            return comparison
          })
          this.commoditySelected = this.commodities.filter(x => x.slug === this.defaultCommoditiesSelectedSlug)[0] || this.commodities[0]
        })
        .catch((error) => {
          // handle error
          console.log(error)
        })
        .then(() => {
          this.$q.loading.hide()
        })
    }
  },
  created () {
    this.getCommodities()
  }
}
</script>
