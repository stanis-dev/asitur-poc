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
  computed: {
    windows() {
      return this.$store.state.windows.openWindows
    },
    activeWindow() {
      return this.$store.state.windows.activeWindow
    }
  }
}
</script>
