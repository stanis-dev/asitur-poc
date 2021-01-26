<template>
<div class="nav">
  <div class="items">
      <i class="mdi mdi-content-save-all-outline"></i>

      <i @click="createNewWindow" class="mdi mdi-dock-window"></i>

      <i class="mdi mdi-desk-lamp"></i>

      <i class="mdi mdi-clipboard-text-search-outline"></i>

      <i class="mdi mdi-folder-search-outline"></i>

      <i class="mdi mdi-email-search-outline"></i>

      <i class="mdi mdi-file-search-outline"></i>

      <i class="mdi mdi-traffic-light"></i>

      <i class="mdi mdi-note-outline"></i>

      <i class="mdi mdi-paperclip"></i>
    </div>
    <div class="login">
    <span>Usuario: {{ user.user.displayName }}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      title: 'Asitur'
    }
  },
  computed: mapState(['user']),
  methods: {
    createNewWindow() {
      this.$store.commit('windows/pushNewWindow')
    }
  }
}
</script>
<style lang="scss" scoped>
  .nav{
    display: flex;
    margin-top: 24px;
    padding: 0px 10px;
    justify-content: space-between;
    background: #efebde;
    .items i{
      margin-right: 10px;
      font-size: 20px;
    }
    .items i:nth-child(2){
      color :rgb(127, 161, 255);
    }
  }
</style>