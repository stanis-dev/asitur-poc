<template>
  <div
    class="ui-state-active resizable"
    @mousedown="setToTop()"
    :style="{ zIndex }"
    v-show="window.state === 'max'"
  >
    <WindowSystemBar :window="window" />
    <WindowBody />
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
      const newArray = this.$store.state.windows.openWindows

      const newIndex = newArray.findIndex(
        (window) => window.id === this.window.id
      )

      return 90 + newIndex
    }
  },
  mounted() {
    const id = '#' + this.$props.window.id
    $(function () {
      $(id)
        .resizable({
          containment: '.v-main__wrap',
          minWidth: 800
        })
        .draggable({
          containment: '.v-main__wrap',
          handle: '.header'
        })
    })
  },
  methods: {
    setToTop() {
      this.$store.commit('windows/moveWindowZindexToTop', this.window.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.ui-state-active {
  width: 800px;
  border: 1px solid #3f51b5;
  background: #efebde;
  color: black;
  position: absolute;
  border-radius: 5px;
  overflow: hidden;

  &.active {
    z-index: 200 !important;
  }
}
</style>
