<template>
  <v-menu
    v-model="menu2"
    :close-on-content-click="false"
    :nudge-right="40"
    transition="scale-transition"
    offset-y
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="date"
        label="F.ocurr"
        dense
        append-icon="mdi-calendar"
        hide-details
        readonly
        outlined
        v-bind="attrs"
        v-on="on"
        :style="{ maxWidth: `${width}%` }"
      ></v-text-field>
    </template>
    <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
  </v-menu>
</template>

<script>
export default {
  props: {
    width: {
      type: Number
    }
  },
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false
  })
}
</script>

<style lang="scss">
.v-input__slot {
  height: 30px !important;
}
</style>
