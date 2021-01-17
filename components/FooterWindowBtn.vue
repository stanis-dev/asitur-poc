<template>
  <v-btn
    dark
    color="indigo"
    class="mr-2"
    @click="maximizeWindow(window.id)"
    v-show="window.state === 'min'"
    >{{ window.title }}
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
  methods: {
    maximizeWindow(id) {
      this.$store.commit('windows/maximizeWindow', id)
    }
  }
}
</script>
