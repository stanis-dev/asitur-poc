<template>
  <div>
    <label>{{label}}
      <input 
      type="text" 
      class="compact-style"
      :readonly="readonly"
      :value="value"
      :disabled="disabled"
      :style="{ maxWidth: `${width}px` }"
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
    }
  }
}
</script>
<style lang="scss">
</style>
