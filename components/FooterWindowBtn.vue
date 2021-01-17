<template>
  <v-btn
    dark
    color="indigo lighten-2"
    class="mr-2"
    @click="maximizeWindow(window.id)"
    v-show="window.state === 'min'"
    >{{ title }}
    <v-icon>mdi-window-maximize</v-icon>
  </v-btn>
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
    title() {
      return this.window.title.length >= 10
        ? `${this.window.title.substr(0, 7)}...`
        : this.window.title
    }
  },
  methods: {
    maximizeWindow(id) {
      this.$store.commit('windows/maximizeWindow', id)
    }
  }
}
</script>
