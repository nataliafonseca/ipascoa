<template>
  <v-container>
    <h1 class="titulo text-center mb-3 mt-5">iPáscoa</h1>
    <!-- <v-img
      class="inicio-imagem mb-4"
      src="https://st.depositphotos.com/1424573/4236/i/600/depositphotos_42362337-stock-photo-easter.jpg"
      alt="Ovos personalizados"
    >
    </v-img> -->
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est sem,
      vestibulum ut erat quis, consequat fringilla lectus. Praesent semper
      efficitur tortor et semper. Vestibulum aliquet scelerisque vulputate.
      <br />
    </p>
    <p class="text-center text-h6">Confira nossas lojas:</p>

    <v-card max-width="375" class="mx-auto">
      <v-img
        src="https://www.pngitem.com/pimgs/m/300-3000637_easter-bunny-easter-egg-easter-eggs-in-a.png"
        height="300px"
        dark
      >
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
          <h4 class="text-h4 pl-12 pt-12>Posto Renoir">Posto Renoir</h4>
        </v-list-item>

        <v-divider inset></v-divider>

        <v-divider inset></v-divider>

        <v-list-item>
          <v-list-item-icon>
            <v-icon color="green darken-1"> mdi-map-marker </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title
              >Rua Taighum LLL, 566 - Paisagem Loud</v-list-item-title
            >
            <v-list-item-subtitle> Manaus - AM</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "PaginaInicio",
  data() {
    return {
      lojas: [],
    };
  },
  created() {
    // this.$store.dispatch("redirectLogin");
    fetch("https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json")
      .then((response) => response.json())
      .then((json) => {
        json.forEach((item) => {
          if (
            this.lojas.filter((loja) => loja.id === item.local.id).length === 0
          ) {
            this.lojas.push(item.local);
          }
        });
      });
  },
};
</script>

<style scoped>
.titulo {
  color: #1b5e20;
}
</style>
