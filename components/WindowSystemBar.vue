<template>
  <div>
    <div
      class="header"
    >
    <ul :class="{activeColor : activeWindow === window.id, inactiveColor : activeWindow!= window.id}">
      <li><span class="text-white">{{ window.title }} </span></li>
      <li><a>
        <i class="text-white mdi mdi-window-minimize" @click="minimizeWindow"
          ></i
        >
      </a>
      <a>
        <i class="text-white mdi mdi-close" @click="closeThisWindow"></i>
      </a></li>
    </ul>
    </div>
<div>
      <a>
        <i class="mdi mdi-content-save-all-outline"></i>
      </a>
      <a>
        <i class="mdi mdi-dock-window"></i>
      </a>
      <a>
        <i class="mdi mdi-desk-lamp"></i>
      </a>
      <a>
        <i class="mdi mdi-clipboard-text-search-outline"></i>
      </a>
      <a>
        <i class="mdi mdi-folder-search-outline"></i>
      </a>
      <a>
        <i class="mdi mdi-email-search-outline"></i>
      </a>
    </div>
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
a{
  color:grey;
  margin-right: 16px;
  font-size:16px;
}
ul {
  cursor: grabbing;
  display: flex;
  justify-content: space-between;
  li {
    display:inline-block;
  }
}
.activeColor{
background-color: #303f9f;
}
.inactiveColor{
background-color: #7986cb;
}
.text-white {
  color:white;
}
</style>
