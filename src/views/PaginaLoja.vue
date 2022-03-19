<template>
  <v-container>
    <h2
      tr
      v-for="nome of lojaLista"
      :key="nome.nome"
      class="text-h5 text-center mb-3 mt-5"
    >
      {{ nome }}
    </h2>
  </v-container>
</template>

<script>
export default {
  name: "PaginaLoja",

  created() {
    fetch("https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json")
      .then((response) => response.json())
      .then((json) => {
        this.lojaLista = json;
      });
  },
};
</script>
