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
        prepend-icon="mdi-calendar"
        readonly
        outlined
        v-bind="attrs"
        v-on="on"
        class="compact-style"
      ></v-text-field>
    </template>
    <v-date-picker
      v-model="date"
      @input="menu2 = false"
      class="compact-style"
    ></v-date-picker>
  </v-menu>
</template>

<script>
export default {
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false
  })
}
</script>
