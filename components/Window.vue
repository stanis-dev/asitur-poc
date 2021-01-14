<template>
  <div class="ui-state-active resizable" @mousedown="setToTop(1)">
    <v-system-bar color="indigo darken-2" class="header">
      <span class="white--text">Expediente 2021/13 [Incomodidad]</span>
      <v-spacer></v-spacer>
      <a>
        <v-icon class="white--text">mdi-window-minimize</v-icon>
      </a>
      <a>
        <v-icon class="white--text" @click="$emit('closeWindow', id)"
          >mdi-close</v-icon
        >
      </a>
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
</template>

<script>
export default {
  data() {
    return {
      id: this.$attrs.id
    }
  },
  mounted() {
    const id = '#' + this.id
    $(function () {
      $(id)
        .resizable({
          containment: '.v-main__wrap'
        })
        .draggable({
          containment: '.v-main__wrap',
          handle: '.header'
        })
    })
  },
  methods: {
    closeThisWindow() {
      this.$emit()
    },
    setToTop(currentIndex) {
      this.$emit('setToTop', currentIndex)
    }
  }
}
</script>
