<template>
  <v-app>
    <template>
      <SystemBar :userIsLoggedIn="userIsLoggedIn" />
      <AppTopBar v-if="userIsLoggedIn" @createNewWindow="createNewWindow" />
    </template>
    <v-main id="main" ref="main">
      <Window
        v-for="(window, i) in windows"
        @setToTop="activeWindow = i"
        @closeWindow="closeWindow(i)"
        :key="i"
        :id="'window' + i"
        class="resizable-draggable-window"
        :class="{ active: i === activeWindow }"
        :style="{ zIndex: 100 + i }"
        :window="window"
      />
      <nuxt />
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
      windows: [],
      activeWindow: 0
    }
  },
  computed: {
    userIsLoggedIn() {
      return this.$store.state.user.user ? true : false
    }
  },
  methods: {
    createNewWindow() {
      console.log('Create a new window')
      this.windows.push('Window ' + this.windows.length)
    },
    closeWindow() {
      console.log('closing a window ' + this.activeWindow)
      this.windows.splice(this.activeWindow, 1)
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
  position: relative;
  border-radius: 5px;
  overflow: hidden;
}
.resizable-draggable-window {
  position: absolute;

  &.active {
    z-index: 200 !important;
  }
}
</style>
