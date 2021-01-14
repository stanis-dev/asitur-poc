<template>
  <v-app>
    <template>
      <SystemBar :userIsLoggedIn="userIsLoggedIn" />
      <AppTopBar v-if="userIsLoggedIn" />
    </template>
    <v-main>
      <v-container>
        <div id="resizable" class="ui-state-active">
          <v-system-bar color="indigo darken-2" class="header">
            <span class="white--text">Expediente 2021/13 [Incomodidad]</span>
            <v-spacer></v-spacer>
            <v-icon class="white--text">mdi-window-minimize</v-icon>
            <v-icon class="white--text">mdi-close</v-icon>
          </v-system-bar>
          <v-system-bar color="#efebde" dense>
            <a>
              <v-icon class="mr-4">mdi-content-save-all-outline</v-icon>
            </a>
            <a>
              <v-icon class="mr-4">mdi-dock-window</v-icon>
            </a>
            <a>
              <v-icon class="mr-4">mdi-desk-lamp</v-icon>
            </a>
            <a>
              <v-icon class="mr-4">mdi-clipboard-text-search-outline</v-icon>
            </a>
            <a>
              <v-icon class="mr-4">mdi-folder-search-outline</v-icon>
            </a>
            <a>
              <v-icon class="mr-4">mdi-email-search-outline</v-icon>
            </a>
          </v-system-bar>
          <v-card elevation="2"> </v-card>
          <v-card-title> Hello there! </v-card-title>
          <v-card-subtitle>Subtitle text</v-card-subtitle>
          <v-card-text
            >Greyhound divisively hello coldly wonderfully marginally far upon
            excluding.
          </v-card-text>
        </div>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }} Asitur</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: 'Asitur'
    }
  },
  computed: {
    userIsLoggedIn() {
      return this.$store.state.user.user ? true : false
    }
  },
  mounted() {
    $(function () {
      $('#resizable')
        .resizable({
          containment: '.v-main__wrap'
        })
        .draggable({
          containment: '.v-main__wrap',
          handle: '.header'
        })
    })
  }
}
</script>

<style lang="scss" scoped>
.ui-state-active {
  width: 50%;
  border: 1px solid #3f51b5;
  background: #efebde;
  color: black;
}
</style>
