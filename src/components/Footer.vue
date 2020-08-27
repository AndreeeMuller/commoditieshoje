<template>
  <div>
    <div class="row justify-center q-mt-md">
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
                    class="q-mr-xs q-mb-xs"
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
  </div>
</template>

<script>

export default {
  name: 'Footer',
  data () {
    return {
      creditos: [
        { descricao: 'Notícias Agrícolas', url: 'http://noticiasagricolas.com.br' },
        { descricao: 'Toro Investimentos', url: 'https://blog.toroinvestimentos.com.br' },
        { descricao: 'Icons8', url: 'https://icons8.com.br' }
      ]
    }
  }
}
</script>
