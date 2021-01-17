<template>
  <v-text-field
    dense
    height="30"
    outlined
    flat
    hide-details
    :label="label"
    class="compact-style"
    :append-icon="icon"
    :style="{ maxWidth: `${width}%` }"
    :readonly="readonly"
    :value="value"
    :disabled="disabled"
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
