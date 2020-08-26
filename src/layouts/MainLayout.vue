<template>
  <!-- <q-layout view="hHh LpR fFf"> -->
  <q-layout view="hHh lpR lff">
    <q-drawer v-model="drawer"
              show-if-above
              :mini="miniState"
              @mouseover="miniState = false"
              @mouseout="miniState = true"
              :width="200"
              :breakpoint="500"
              bordered
              content-class="bg-grey-3">
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item-label header>Commodities Hoje</q-item-label>
          <q-separator />
          <q-item clickable
                  v-ripple
                  v-for="(menuItem, index) in menuList"
                  :key="index"
                  :to="menuItem.to"
                  active-class="my-menu-link"
                  :active="link === menuItem.to"
                  @click="link = menuItem.to">
            <q-item-section avatar>
              <img :src="require('assets/' + menuItem.icon)" style="width: 40px"/>
            </q-item-section>
            <q-item-section>
              {{ menuItem.label }}
            </q-item-section>
          </q-item>
          <q-separator />
          <q-item-label header>Créditos</q-item-label>
          <q-item>
            <q-item-section>
              <q-btn  v-for="credito in creditos"
                      :key="credito.descricao"
                      class="btn-fixed-width"
                      type="a"
                      :href="credito.url"
                      outline
                      flat
                      size="sm"
                      target="_blank"
                      color="primary">
                {{ credito.descricao }}
              </q-btn>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="bg-white text-black q-pa-md">
      <div class="row justify-center">
        <div class="col-12 col-md-6">
          <q-card>
            <q-card-section>
              <p class="text-h6">
                O que são commodities
              </p>
              <p class="text-body1">
                Commodities são produtos que funcionam como matéria-prima. Eles, geralmente, são produzidos em larga escala e podem ser estocados sem perder a qualidade. Dessa forma, o mercado de commodities tem seus preços definidos pela oferta e procura desses materiais primários.
              </p>
              <p class="text-body1">
                A palavra commodity significa mercadoria, em tradução livre do inglês. Originalmente, o termo commodities era usado para quaisquer tipos de mercadorias. Ao longo do tempo, essa designação passou por algumas mudanças.
              </p>
              <p class="text-body1">
                Veja, logo abaixo, outras características das commodities:
              </p>
              <p class="text-body1">
                <ul>
                  <li>
                    Grande importância mundial
                  </li>
                  <li>
                    Produtos de origem primária
                  </li>
                  <li>
                    Alto nível de comercialização
                  </li>
                  <li>
                    Pouca industrialização
                  </li>
                  <li>
                    Qualidade e traços uniformes de produção
                  </li>
                  <li>
                    Não há diferenciação de marca
                  </li>
                </ul>
              </p>
              <p class="text-h6">
                As principais commodities brasileiras
              </p>
              <p class="text-body1">
                <ul>
                  <li>
                    Petróleo
                  </li>
                  <li>
                    Café
                  </li>
                  <li>
                    Boi Gordo
                  </li>
                  <li>
                    Suco de Laranja
                  </li>
                  <li>
                    Minério de Ferro
                  </li>
                  <li>
                    Soja
                  </li>
                  <li>
                    Alumínio
                  </li>
                </ul>
              </p>
              <p class="text-body1">
                As commodities agrícolas realmente ocupam um lugar de destaque na produção nacional. Isso acontece por conta da abundância de recursos naturais que há no nosso país. Outro ponto que ajuda a explicar esse fator é a extensão do território brasileiro, que nos permite produzir uma boa variedade.
              </p>
              <p class="text-body1">
                Se somos destaque na exportação dos bens listados acima, entre outros produtos, você já deve imaginar que a nossa economia sofre forte influência do mercado de commodities. Por exemplo: em 2014, havia uma estimativa de que essas essas mercadorias representavam cerca de 65% do valor total das exportações do país. Em 2015, essas exportações corresponderam algo em torno de US$191 bilhões — uma quantia muito expressiva, não acha?
              </p>
              <p class="text-body1">
                Existe um lado negativo nessas negociações. O Brasil comercializa itens muito consumidos mundialmente — café, milho, etc. —, que em geral se associam a uma alta procura. Porém, ficamos expostos à decisão externa dos preços.
              </p>
              <p class="text-subtitle2">
                Fonte: <q-btn type="a" href="https://blog.toroinvestimentos.com.br/commodities-o-que-sao" target="_blank" color="primary">Toro Investimentos (Commodities - o que são commodities?)</q-btn>
              </p>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="row justify-center q-mt-md">
        <div class="col-12 col-md-6">
          <q-card>
            <q-card-section>
              <p class="text-h6">
                Créditos:
              </p>
              <q-btn  v-for="credito in creditos"
                      :key="credito.descricao"
                      class="q-mr-xs"
                      type="a"
                      :href="credito.url"
                      target="_blank"
                      color="primary">
                {{ credito.descricao }}
              </q-btn>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>

export default {
  data () {
    return {
      drawer: true,
      miniState: true,
      link: '',
      menuList: [
        { icon: 'icon_algodao.png', label: 'Algodão Hoje', to: '/algodao-hoje' },
        { icon: 'icon_boi.png', label: 'Boi Hoje', to: '/boi-hoje' },
        { icon: 'icon_cafe.png', label: 'Café Hoje', to: '/cafe-hoje' },
        { icon: 'icon_feijao.png', label: 'Feijão Hoje', to: '/feijao-hoje' },
        { icon: 'icon_frango.png', label: 'Frango Hoje', to: '/frango-hoje' },
        { icon: 'icon_milho.png', label: 'Milho Hoje', to: '/milho-hoje' },
        { icon: 'icon_soja.png', label: 'Soja Hoje', to: '/soja-hoje' },
        { icon: 'icon_trigo.png', label: 'Trigo Hoje', to: '/trigo-hoje' }
      ],
      creditos: [
        { descricao: 'Notícias Agrícolas', url: 'http://noticiasagricolas.com.br' },
        { descricao: 'Toro Investimentos', url: 'https://blog.toroinvestimentos.com.br' },
        { descricao: 'Icons8', url: 'https://icons8.com.br' }
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
