<template>
  <v-text-field
    dense
    outlined
    height="30"
    hide-details
    :label="label"
    class="compact-style"
    :append-icon="icon"
    :style="{ maxWidth: `${width}%` }"
  ></v-text-field>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Label'
    },
    icon: {
      type: String
    },
    width: {
      type: Number
    }
  }
}
</script>
