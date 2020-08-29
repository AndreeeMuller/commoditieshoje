/* eslint-disable no-trailing-spaces */
<template>
  <div class="row">
    <div class="col-12">
      <div class="row items-center" style="min-height: calc(100vh - 16px)">
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
                <template v-slot:after>
                  <q-btn outline round :color="commoditySelected.slug === storage.commoditySlug ? 'red' : 'black'" icon="favorite" @click="setLocalStorage('commodity.slug.' + commoditySlug, commoditySelected.slug, 'commoditySlug')">
                    <q-tooltip>
                      <div class="text-body2">
                        Clique para favoritar a commodity "{{ commoditySelected.titulo }}", quando você acessar novamente a página ela vai buscar por padrão.
                      </div>
                    </q-tooltip>
                  </q-btn>
                </template>
              </q-select>
            </div>
            <div class="col-12 col-md-10 col-lg-10">
              <div class="row justify-center">
                <div class="col-12 col-md-9 col-lg-7">
                  <q-table  :data="commoditySelected.valores"
                            :columns="commoditySelected.colunas"
                            :pagination.sync="commoditySelected.pagination"
                            :filter="commoditySelected.filter"
                            grid
                            hide-header
                            hide-bottom
                            row-key="name">
                    <template slot="top-left" style="padding-top: 10px;">
                      Atualizado em {{ commoditySelected.data }}
                    </template>
                    <template slot="top-right">
                      <q-input dense v-model="commoditySelected.filter" placeholder="Pesquisar">
                        <template v-slot:append>
                          <q-icon name="search" />
                        </template>
                      </q-input>
                    </template>
                    <template v-slot:item="props">
                      <div class="q-pa-xs col-xs-6 col-sm-6 col-md-4">
                        <div class="q-table__grid-item-card q-table__card">
                          <div class="q-table__grid-item-row" v-for="col in props.cols" :key="col.field">
                            <div class="q-table__grid-item-title">
                              {{ col.label }}
                            </div>
                            <div class="q-table__grid-item-value">
                              {{ col.value }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </template>
                  </q-table>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-10 col-lg-10 text-center" v-html="commoditySelected.rodape"></div>
          </div>
        </div>
      </div>
      <div class="row items-center q-mt-lg">
        <div class="col-12">
          <div class="row justify-center q-gutter-y-lg">
            <div class="col-12 col-md-10 col-lg-10 text-center text-h3">
              Últimas {{ commodityNoticia.titulo }}
            </div>
            <div class="col-12 col-md-10 col-lg-10">
              <div class="row justify-center">
                <div class="col-12 col-md-9 col-lg-7">
                  <q-table  :data="commodityNoticia.noticias"
                            :columns="commodityNoticia.colunas"
                            :pagination.sync="commodityNoticia.pagination"
                            :filter="commodityNoticia.filter"
                            grid
                            hide-header
                            hide-bottom
                            row-key="name">
                    <template v-slot:item="props">
                      <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4">
                        <q-card>
                          <q-card-section class="flex flex-center text-h6" :class="{ 'text-bold': myIsCurrentDate(props.row.data) }">
                            {{ myFormatDate(props.row.data, 'DD/MM/YYYY HH:mm') }}
                            <q-badge v-if="myIsCurrentDate(props.row.data)" color="negative" outline floating>Hoje</q-badge>
                          </q-card-section>
                          <q-separator />
                          <q-card-section class="text-center text-body1">
                            {{ props.row.assunto }}
                          </q-card-section>
                          <q-separator />
                          <q-card-section class="text-center text-subtitle2">
                            {{ props.row.fonte }}
                          </q-card-section>
                          <q-separator />
                          <q-card-section class="text-center text-subtitle2">
                            <q-btn label="Ver matéria completa" flat color="primary" @click="dialog.url = 'https' +  props.row.link.substring(4); dialog.visible = true;" />
                          </q-card-section>
                        </q-card>
                      </div>
                    </template>
                    <template slot="top-right">
                      <q-input dense v-model="commodityNoticia.filter" placeholder="Pesquisar">
                        <template v-slot:append>
                          <q-icon name="search" />
                        </template>
                      </q-input>
                    </template>
                  </q-table>
                  <q-dialog v-model="dialog.visible"
                            full-height
                            full-width
                            transition-show="slide-up"
                            transition-hide="slide-down">
                    <q-card class="bg-primary text-white">
                      <q-bar>
                        <q-space />
                        <q-btn dense flat icon="close" v-close-popup>
                          <q-tooltip content-class="bg-white text-primary">Fechar</q-tooltip>
                        </q-btn>
                      </q-bar>
                      <q-card-section class="q-pt-none">
                        <iframe :src="dialog.url" frameborder="0" style="width: 100%; height: calc(100vh - 114px); background: white; margin-top: 12px;"></iframe>
                      </q-card-section>
                    </q-card>
                  </q-dialog>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { date } from 'quasar'

export default {
  name: 'CommodityHoje',
  props: {
    commoditySlug: {
      type: String,
      required: true
    },
    commodityNoticiaSlug: {
      type: String,
      required: false
    },
    defaultCommoditiesSelectedSlug: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      commodities: [],
      commodityNoticia: {
        titulo: null,
        noticias: [],
        colunas: [],
        pagination: {
          page: 1,
          rowsPerPage: 0
        },
        filter: ''
      },
      commoditySelected: {
        titulo: null,
        imagem: null,
        rodape: null,
        link: null,
        data: null,
        colunas: [],
        valores: [],
        pagination: {
          page: 1,
          rowsPerPage: 0
        },
        filter: ''
      },
      dialog: {
        visible: false,
        url: null
      },
      storage: {
        commoditySlug: null
      }
    }
  },
  methods: {
    getCommodities () {
      this.$q.loading.show()
      this.$axios.get('https://cors-anywhere.herokuapp.com/https://www.noticiasagricolas.com.br/cotacoes/' + this.commoditySlug + '.json')
        .then((response) => {
          const newArray = []
          response.data.tabelas.forEach(tab => {
            const newObject = {
              data: this.myFormatDate(tab.data, 'DD/MM/YYYY HH:mm'),
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
    },
    getCommodityNoticia () {
      this.$q.loading.show()
      this.$axios.get('https://cors-anywhere.herokuapp.com/https://www.noticiasagricolas.com.br/noticias/' + (this.commodityNoticiaSlug ? this.commodityNoticiaSlug : this.commoditySlug) + '.json')
        .then((response) => {
          this.commodityNoticia = response.data
        })
        .catch((error) => {
          // handle error
          console.log(error)
        })
        .then(() => {
          this.$q.loading.hide()
        })
    },
    myFormatDate (value, format) {
      return date.formatDate(value, format)
    },
    myIsCurrentDate (value) {
      return this.myFormatDate(value, 'DD/MM/YYYY') === this.myFormatDate(Date.now(), 'DD/MM/YYYY')
    },
    setLocalStorage (key, value, storageKey) {
      this.$q.localStorage.set(key, value)
      this.storage[storageKey] = value
    },
    getLocalStorage (key) {
      return this.$q.localStorage.getItem(key)
    }
  },
  created () {
    this.getCommodities()
    this.getCommodityNoticia()
    this.storage.commoditySlug = this.getLocalStorage('commodity.slug.' + this.commoditySlug) || null
    this.defaultCommoditiesSelectedSlug = this.storage.commoditySlug || this.defaultCommoditiesSelectedSlug
  }
}
</script>
