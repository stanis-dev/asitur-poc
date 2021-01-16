<template>
  <v-main id="main" ref="main">
    <!-- Move most of the props inside component -->
    <Window
      v-for="(window, i) in windows"
      :key="window.id"
      :id="window.id"
      class="resizable-draggable-window"
      :class="{ active: window.id === activeWindow }"
      :window="window"
      @setToTop="moveWindowToTop(window.id)"
    />
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      activeWindow: 0
    }
  },
  computed: {
    windows() {
      return this.$store.state.windows.openWindows
    }
  },
  methods: {
    moveWindowToTop(id) {
      this.activeWindow = id
      this.$store.commit('windows/moveWindowZindexToTop', id)
    }
  }
}
</script>
