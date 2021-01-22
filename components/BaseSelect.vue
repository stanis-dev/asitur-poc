<template>
  <div>
    <label>{{label}}</label>
    <select
    :menu-props="{ top: true, offsetY: true }"
    class="compact-style"
    :style="{ maxWidth: `${width}%` }"
    :disabled="disabled"
    >
    <option v-for="item in items" :key="item">{{item}}</option>
  </select>
  </div>

</template>

<script>
export default {
  props: {
    label: {
      type: String
    },
    width: {
      type: Number
    },
    disabled: {
      type: Boolean
    },
  },
  data() {
    return {
      items: ['item1', 'item2', 'item3']
    }
  }
}
</script>
<style lang="scss">
select {
  border-style: double;
  -webkit-appearance: searchfield;
  background-color:#fff;
}
</style>
