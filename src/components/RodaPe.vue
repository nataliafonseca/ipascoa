<template>
 <div class="Rodapé" >
    <v-footer dark padless>
    <v-card flat tile class="green darken-4 --text text-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Somos uma platafoma que transfroma a sua páscoa conectando você as
        melhores produções artesanais de ovos de páscoa com incrível rapidez e
        facilidade.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--textD">
        <v-icon> mdi-egg-easter </v-icon>
        All copyrights reserved Ipascoa © 2022
        <v-icon> mdi-egg-easter </v-icon>
      </v-card-text>
    </v-card>
  </v-footer>
 </div>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-instagram"],
  }),
};
</script>

<style scoped>

.white--text {
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 0,75rem;
  max-width: 100%;
  max-height: 100vh;
  text-align:justify;
  
}
.white--textD {
  font-family:'Times New Roman', Times, serif;
  font-size: 0,75rem;
  margin-bottom: 0;
}

.RodaPe {
  position: relative;
  
}

</style>