<template>
  <v-select
    dense
    outlined
    light
    :items="items"
    :menu-props="{ top: true, offsetY: true }"
    :label="label"
    class="compact-style"
  ></v-select>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Label'
    }
  },
  data() {
    return {
      items: ['item1', 'item2', 'item3']
    }
  }
}
</script>
