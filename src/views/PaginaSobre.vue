<template>
  <v-container>
    <header>
      <h2>Sobre o <span class="logo-i">i</span>Pascoa</h2>

      <p>
        O iPascoa foi desenvolvido durante o Hackathon Decola, edição Luna,
        promovido pela Iteris.
      </p>
      <p>
        O código fonte da aplicação pode ser acessado
        <a href="https://github.com/nataliafonseca/ipascoa">clicando aqui</a>.
      </p>

      <h3>Desenvolvedores</h3>

      <v-card
        class="card"
        v-for="(developer, index) in developers"
        :key="index"
        elevation="2"
      >
        <div class="c-title">
          <v-avatar>
            <v-img
              :src="`https://github.com/${developer.github}.png`"
              :alt="`Foto de ${developer.name}`"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    :width="2"
                    color="green darken-1"
                  ></v-progress-circular>
                </v-row>
              </template> </v-img
          ></v-avatar>
          <h4>{{ developer.name }}</h4>
        </div>
        <v-divider class="my-4"></v-divider>
        <div class="c-contact">
          <a :href="`https://github.com/${developer.github}`">
            <svg
              :style="{ fill: svgColor }"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
            <p>{{ developer.github }}</p>
          </a>
          <a :href="`https://linkedin.com/in/${developer.linkedin}`">
            <svg
              :style="{ fill: svgColor }"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              />
            </svg>
            <p>{{ developer.linkedin }}</p>
          </a>
        </div>
      </v-card>
    </header>
  </v-container>
</template>

<script>
export default {
  name: "PaginaSobre",
  data() {
    return {
      developers: [
        {
          name: "Natália Braga da Fonseca",
          github: "nataliafonseca",
          linkedin: "nataliabfonseca",
        },
        {
          name: "Isadora Parillo",
          github: "aisarllo",
          linkedin: "isadora-parillo",
        },
        {
          name: "Aline Pereira Lourenço",
          github: "AlineLourenco",
          linkedin: "alinelourenco2022",
        },
        {
          name: "Elton Carvalho",
          github: "eltonracarvalho",
          linkedin: "elton-carvalho-b91372104",
        },
        {
          name: "Lucca Garcia Losso",
          github: "luccaGL0",
          linkedin: "lucca-garcia-losso-17086a117",
        },
        {
          name: "Sara de Santana Barros",
          github: "sarashb",
          linkedin: "sarasbarros",
        },
      ],
    };
  },
  computed: {
    svgColor() {
      return this.$vuetify.theme.dark ? "#fff" : "#000";
    },
  },
};
</script>

<style scoped>
h3 {
  margin-bottom: 10px;
}

.card {
  box-sizing: border-box;
  padding: 15px;
  margin-bottom: 20px;
}

.c-title {
  display: flex;
  align-items: center;
  gap: 20px;
}

.c-title h4 {
  font-size: 1.2rem;
}

.c-contact {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.c-contact a {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
}

.c-contact a p {
  margin: 0;
}

a {
  color: #A5D6A7;
}
</style>
