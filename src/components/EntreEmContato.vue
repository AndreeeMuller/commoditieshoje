<template>
  <q-page-sticky position="bottom-right" :offset="[18, 18]">
    <q-btn  v-morph:btnOpen:mygroup:300.resize="morphGroupModel"
            class="absolute-bottom-right"
            fab
            color="primary"
            size="lg"
            icon="message"
            @click="nextMorph">
    </q-btn>
    <q-card v-morph:formulario:mygroup:500.resize="morphGroupModel"
            class="absolute-bottom-right q-ma-md bg-primary text-white"
            style="width: 300px; border-bottom-right-radius: 2em">
      <q-card-section class="text-h6">
        Entre em Contato
      </q-card-section>
      <q-form @submit="submit"
              class="q-gutter-md">
        <q-card-section style="padding-top: 0; padding-bottom: 0;">
          <q-input  color="primary"
                    outlined
                    filled
                    dense
                    bg-color="white"
                    v-model="form.nome"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Campo obrigatório.']"
                    maxlength="40"
                    label="Nome">
            <template v-slot:prepend>
              <q-icon name="people" />
            </template>
          </q-input>
          <q-input  color="primary"
                    outlined
                    maxlength="255"
                    dense
                    filled
                    bg-color="white"
                    v-model="form.email"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Campo obrigatório.']"
                    label="E-mail">
            <template v-slot:prepend>
              <q-icon name="mail" />
            </template>
          </q-input>
          <q-input  color="primary"
                    mask="(##) #####-####"
                    outlined
                    dense
                    filled
                    bg-color="white"
                    v-model="form.telefone"
                    label="Telefone">
            <template v-slot:prepend>
              <q-icon name="phone" />
            </template>
          </q-input>
          <q-select label="Assunto"
                    transition-show="jump-up"
                    transition-hide="jump-down"
                    filled
                    dense
                    bg-color="white"
                    map-options
                    emit-value
                    v-model="form.assunto"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Campo obrigatório.']"
                    :options="assuntos">
            <template v-slot:prepend>
              <q-icon name="comment" />
            </template>
          </q-select>
          <q-input  type="textarea"
                    color="primary"
                    outlined
                    filled
                    dense
                    bg-color="white"
                    v-model="form.mensagem"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Campo obrigatório.']"
                    maxlength="2048"
                    label="Mensagem">
            <template v-slot:prepend>
              <q-icon name="text_format" />
            </template>
          </q-input>
        </q-card-section>
        <q-card-actions align="right" style="margin-top: 0">
          <q-btn flat round icon="send" type="submit" />
        </q-card-actions>
      </q-form>
    </q-card>
    <q-card v-morph:mensagem:mygroup:500.tween="morphGroupModel"
            class="absolute-bottom-right q-ma-md bg-primary text-white"
            style="width: 300px; border-bottom-right-radius: 2em">
      <q-card-section class="text-h6">
        Mensagem Enviada
      </q-card-section>
      <q-card-section class="q-py-md text-center">
        <p class="text-body1">
          Obrigado pelo contato.
        </p>
        <p class="text-body1">
          Retornaremos o mais breve possível.
        </p>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat round icon="close" @click="nextMorph" />
      </q-card-actions>
    </q-card>
  </q-page-sticky>
</template>

<script>

const nextMorphStep = {
  btnOpen: 'formulario',
  formulario: 'mensagem',
  mensagem: 'btnOpen'
}

const defaultForm = {
  nome: null,
  email: null,
  telefone: null,
  assunto: null,
  mensagem: null
}

export default {
  name: 'EntreEmContato',
  data () {
    return {
      form: Object.assign({}, defaultForm),
      morphGroupModel: 'btnOpen',
      assuntos: [
        'Elogio',
        'Informação',
        'Reclamação',
        'Solicitação',
        'Sugestão',
        'Outros'
      ]
    }
  },
  methods: {
    reset () {
      this.form = Object.assign({}, this.defaultForm)
    },
    submit () {
      this.nextMorph()
      const a = 1
      const b = 2
      if (a === b) {
        const payload = Object.assign({}, this.form)

        this.$q.loading.show()
        this.$service.createOrUpdateContato(payload)
          .then((response) => {
            this.$q.loading.hide()
            this.$q.notify({
              message: response.data.message,
              type: response.data.type
            })
            this.nextMorph()
            this.reset()
          })
      }
    },
    nextMorph () {
      this.morphGroupModel = nextMorphStep[this.morphGroupModel]
    }
  }
}
</script>
