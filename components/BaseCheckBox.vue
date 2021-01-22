<template>

  <div>
    <label :class="{'bg-red' : checked , 'disabled' : disabled}" for="checkbox" :disabled="disabled">{{label}}</label>
    <input v-model="checked" :disabled="disabled" type="checkbox">
  </div>
</template>
<script>
export default {
  props : {
    label: {
      type: String,
    },
    disabled: {
      type: Boolean
    }
  },
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
  color:white;
}
.disabled {
  color:grey;
}
</style>
