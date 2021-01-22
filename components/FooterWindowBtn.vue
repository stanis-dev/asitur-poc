<template>
  <button
    @click="maximizeWindow(window.id)"
    v-show="window.state === 'min'"
    >{{ title }}
    <i class="mdi mdi-window-maximize"></i>
  </button>
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
<style lang="scss" scoped>
button{
  background-color:#7986CB;
  border: solid 1px;
  margin-right: 4px;
}
</style>