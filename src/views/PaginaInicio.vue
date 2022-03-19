<template>
  <v-container>
    <h1 class="titulo text-center mb-3 mt-5">iPáscoa</h1>
    <v-img
      class="inicio-imagem mb-4"
      src="https://st.depositphotos.com/1424573/4236/i/600/depositphotos_42362337-stock-photo-easter.jpg"
      alt="Ovos personalizados"
    >
    </v-img>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est sem,
      vestibulum ut erat quis, consequat fringilla lectus. Praesent semper
      efficitur tortor et semper. Vestibulum aliquet scelerisque vulputate.
      <br />
    </p>
    <p class="text-center text-h6">Confira nossas lojas:</p>
    <v-card class="mx-auto" max-width="400" tile>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-center text-h5"
            >Passarela Raiz dejavú</v-list-item-title
          >
          <v-list-item-subtitle>ola</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title class="text-center text-h5"
            >Posto Renoir</v-list-item-title
          >
          <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="text-center text-h5"
            >Quinta Beija-flor</v-list-item-title
          >
          <v-list-item-subtitle>
            Secondary line text Lorem ipsum dolor sit amet,
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            consectetur adipiscing elit.
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "PaginaInicio",
  // created() {
  //   this.$store.dispatch("redirectLogin");
  // },
};
</script>

<style scoped>
.titulo {
  color: #1b5e20;
}
</style>
