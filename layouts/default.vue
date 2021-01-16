<template>
  <v-app>
    <template>
      <SystemBar :userIsLoggedIn="userIsLoggedIn" />
      <AppTopBar v-if="userIsLoggedIn" />
    </template>
    <TheMainContainer />
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }} Asitur</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  computed: {
    userIsLoggedIn() {
      return this.$store.state.user.user ? true : false
    }
  }
}
</script>
