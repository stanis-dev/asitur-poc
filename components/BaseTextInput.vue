<template>
  <v-text-field
    dense
    outlined
    height="5"
    :label="label"
    class="compact-style"
    :append-icon="icon"
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
    }
  }
}
</script>
