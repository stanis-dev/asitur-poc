<template>
  <div>
    <v-system-bar
      :color="
        activeWindow === window.id ? 'indigo darken-2' : 'indigo lighten-2'
      "
      class="header"
    >
      <span class="white--text">{{ window.title }} </span>
      <v-spacer></v-spacer>
      <a>
        <v-icon class="white--text" @click="minimizeWindow"
          >mdi-window-minimize</v-icon
        >
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
  computed: {
    activeWindow() {
      return this.$store.state.windows.activeWindow
    }
  },
  methods: {
    closeThisWindow() {
      this.$store.commit('windows/deleteWindow', this.window.id)
    },
    minimizeWindow() {
      this.$store.commit('windows/minimizeWindow', this.window.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.v-system-bar {
  &.header {
    cursor: grabbing;
  }
}
</style>
