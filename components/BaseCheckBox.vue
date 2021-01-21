<template>

  <div>
    <label :class="{'bg-red' : checked}" for="checkbox" slot="label">Parte de siniestro</label>
    <input v-model="checked" type="checkbox">
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked:null
    }
  }
}
</script>
<style lang="scss">
.bg-red {
  background-color:red;
}
</style>
