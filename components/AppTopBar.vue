<template>
  <v-app-bar color="#efebde" fixed app dense>
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
    <v-toolbar-title v-text="title" />
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      title: 'Asitur'
    }
  }
}
</script>
