<template>
  <div>
    <label>{{label}}
      <input 
      type="text" 
      class="compact-style"
      :readonly="readonly"
      :value="value"
      :disabled="disabled"
      :style="{ maxWidth: `${width}px`, background:`${background}!important` }"
      >
    </label>
 
  </div>

</template>

<script>
export default {
  props: {
    label: {
      type: String
    },
    icon: {
      type: String
    },
    width: {
      type: Number
    },
    readonly: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    value: {
      type: String
    },
    background:{
      type: String
    }
  }
}
</script>
<style lang="scss">
</style>
