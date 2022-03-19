<template>
  <v-container>
    <h1 class="titulo text-center mb-1 mt-5">
      {{ informacao.nome }}
    </h1>
    <h4 class="text-h7 text-center mb-3 endereco-h4">
      {{ informacao.endereco }} - CEP {{ informacao.cep | formataCep }}
      <v-icon color="green darken-1"> mdi-map-marker </v-icon>
    </h4>
    <h2 class="text-h5 text-center mb-3 mt-5">Nossos Ovos</h2>

    <div v-for="produto in produtos" :key="produto.id">
      <v-card max-width="375" class="mx-auto mb-6">
        <v-img class="produto-imagem" :src="produto.imagem" height="300px" dark>
          <v-row class="fill-height">
            <v-spacer></v-spacer>

            <v-card-title class="white--text pl-12 pt-12"> </v-card-title>
          </v-row>
        </v-img>

        <v-list two-line>
          <v-list-item>
            <h4 class="text-h4 pl-12 pt-12 produto-h4">{{ produto.nome }}</h4>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-divider inset></v-divider>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="sabor-produto">{{
                produto.sabor
              }}</v-list-item-title>

              <v-list-item-subtitle class="preco-produto"
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
    formataCep(valor) {
      var str = valor.slice(0, 5) + "-" + valor.slice(5);
      return str;
    },
  },
  created() {
    // this.$store.dispatch("redirectLogin");
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

<style scoped>
.endereco-h4 {
  font-weight: normal;
  border-radius: 10px;
}

.produto-h4 {
  font-weight: light;
  text-align: center;
}

.preco-produto {
  font-weight: bolder;
  font-size: 14px;
}

.sabor-produto {
  font-weight: bolder;
  font-size: 18px;
}
</style>
