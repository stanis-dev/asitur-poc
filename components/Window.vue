<template>
  <div
    class="ui-state-active resizable"
    @mousedown="setToTop()"
    :style="{ zIndex: index }"
  >
    <v-system-bar color="indigo darken-2" class="header">
      <span class="white--text">{{ window.title }} | {{ window.id }}</span>
      <v-spacer></v-spacer>
      <a>
        <v-icon class="white--text">mdi-window-minimize</v-icon>
      </a>
      <a>
        <v-icon class="white--text" @click="closeThisWindow">mdi-close</v-icon>
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
  props: {
    window: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      index: 0
    }
  },
  computed: {
    zIndex() {
      return this.$store.state.windows.openWindows
    }
  },
  watch: {
    zIndex(newArray) {
      const newIndex = this.zIndex.findIndex(
        (window) => window.id === this.window.id
      )
      this.index = 90 + newIndex
    }
  },
  mounted() {
    const id = '#' + this.$props.window.id
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
      console.log('click detected on window ' + this.window.title)
      this.$store.commit('windows/deleteWindow', this.window.id)
    },
    setToTop(currentIndex) {
      this.$emit('setToTop', this.window.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.ui-state-active {
  width: 400px;
  border: 1px solid #3f51b5;
  background: #efebde;
  color: black;
  position: absolute;
  border-radius: 5px;
  overflow: hidden;

  .ui-resizable-handle.ui-resizable-se.ui-icon.ui-icon-gripsmall-diagonal-se {
    z-index: 1 !important;
  }

  &.active {
    z-index: 200 !important;
  }

  .header {
    cursor: grabbing;
  }
}
</style>
