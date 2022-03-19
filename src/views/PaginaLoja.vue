<template>
  <v-container>
    <h2>Posto Renoir</h2>
    <h3 class="text-h7 text-center mb-3 mt-5">
      Rua Taighum LLL, 566 - Paisagem Loud - Manaus - AM
    </h3>

    <h2 class="text-h5 text-center mb-3 mt-5">Nossos Ovos</h2>

    <ul>
      <li>
        <h2>Ovo delícias</h2>
        <h4>simples com chocolate ao leite</h4>
        <h4>16,80</h4>
        <img
          src="https://todateen.com.br/wp-content/uploads/posts-astrallove/papobff/ovo-de-pascoa-ao-leite.jpg"
        />
      </li>
    </ul>
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
