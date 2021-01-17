<template>
  <v-app-bar color="#efebde" fixed app dense>
    <a>
      <v-icon class="mr-4">mdi-content-save-all-outline</v-icon>
    </a>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <a>
          <v-icon
            v-on="on"
            v-bind="attrs"
            class="mr-4"
            @click="createNewWindow"
            color="green"
            >mdi-dock-window</v-icon
          >
        </a>
      </template>
      <span>New Window</span>
    </v-tooltip>
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
    <a>
      <v-icon class="mr-4">mdi-file-search-outline</v-icon>
    </a>
    <a>
      <v-icon class="mr-4">mdi-traffic-light</v-icon>
    </a>
    <a>
      <v-icon class="mr-4">mdi-note-outline</v-icon>
    </a>
    <a>
      <v-icon class="mr-4">mdi-paperclip</v-icon>
    </a>

    <v-spacer></v-spacer>
    <span class="mr-4">Usuario: {{ user.user.displayName }}</span>
  </v-app-bar>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      title: 'Asitur'
    }
  },
  computed: mapState(['user']),
  methods: {
    createNewWindow() {
      this.$store.commit('windows/pushNewWindow')
    }
  }
}
</script>
