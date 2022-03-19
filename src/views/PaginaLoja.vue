<template>
  <v-container>
    <h1 class="titulo text-center mb-1 mt-5">{{ informacao.nome }}</h1>
    <h3 class="text-h7 text-center mb-3">
      {{ informacao.endereco }}
    </h3>

    <h2 class="text-h5 text-center mb-3 mt-5">Nossos Ovos</h2>

    <div v-for="produto in produtos" :key="produto.id">
      <v-card max-width="375" class="mx-auto mb-6">
        <v-img :src="produto.imagem" height="300px" dark>
          <v-row class="fill-height">
            <v-card-title>
              <v-btn dark icon>
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn dark icon class="mr-4">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>

              <v-btn dark icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-card-title>

            <v-spacer></v-spacer>

            <v-card-title class="white--text pl-12 pt-12"> </v-card-title>
          </v-row>
        </v-img>

        <v-list two-line>
          <v-list-item>
            <h4 class="text-h4 pl-12 pt-12">{{ produto.nome }}</h4>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-divider inset></v-divider>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>{{ produto.sabor }}</v-list-item-title>

              <v-list-item-subtitle
                >Preço:
                {{ produto.preco | formatarPreco }}</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "PaginaLoja",
  props: ["id"],
  data() {
    return {
      produtos: [],
      informacao: null,
    };
  },
  filters: {
    formatarPreco(valor) {
      return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
  },
  created() {
    fetch("https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json")
      .then((response) => response.json())
      .then((json) => {
        json.forEach((item) => {
          if (Number(item.local.id) === Number(this.id)) {
            this.produtos.push(item);
            if (!this.informacao) {
              this.informacao = item.local;
            }
          }
        });
      });
  },
};
</script>
