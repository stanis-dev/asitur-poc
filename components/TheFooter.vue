<template>
  <v-footer app>
    <FooterWindowBtn
      v-for="(window, i) in openWindows"
      :key="window.id"
      :window="window"
    />
  </v-footer>
</template>

<script>
export default {
  computed: {
    openWindows() {
      return this.$store.state.windows.openWindows
    }
  }
}
</script>
