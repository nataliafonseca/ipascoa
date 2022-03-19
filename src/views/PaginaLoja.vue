<template>
  <v-container>
    <h2>{{ informacao.nome }}</h2>
    <h3 class="text-h7 text-center mb-3 mt-5">
      {{ informacao.endereco }}
    </h3>

    <h2 class="text-h5 text-center mb-3 mt-5">Nossos Ovos</h2>

    <ul>
      <li v-for="produto in produtos" :key="produto.id">
        <h2>{{ produto.nome }}</h2>
        <h4>{{ produto.sabor }}</h4>
        <h4>{{ produto.preco | formatarPreco }}</h4>
        <img :src="produto.imagem" />
      </li>
    </ul>
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
