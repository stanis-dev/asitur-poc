<template>
  <div>
    <v-subheader>Quien llama</v-subheader>
    <v-container>
      <v-row justify="space-between" dense>
        <BaseTextInput :label="'NOM:'" />
        <BaseTextInput :label="'APE:'" />
        <BaseSelect :label="'Asegurado'" />
        <BaseTextInput :label="'Telef:'" :icon="'mdi-phone-classic'" />
        <BaseDatePickerInput />
      </v-row>
    </v-container>
  </div>
</template>
