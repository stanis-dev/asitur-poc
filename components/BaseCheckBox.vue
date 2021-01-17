<template>
  <v-checkbox dense hide-details class="base-checkbox pl-2">
    <template v-slot:label>
      <div>Parte de siniestro</div>
    </template>
  </v-checkbox>
</template>

<style lang="scss">
.v-input--selection-controls {
  margin-top: 0 !important;
}
.base-checkbox {
  &.v-input--is-label-active {
    .v-input__control {
      .v-input__slot {
        label {
          background: #ef5350;
          border-radius: 4px;
        }
      }
    }
  }

  .v-input__control {
    .v-input__slot {
      flex-direction: row-reverse !important;
      margin-top: -4px;

      label {
        height: 80%;
        padding: 0 2px;
      }

      .v-input--selection-controls__input {
        margin-right: 0;
      }
    }
  }
}
</style>
