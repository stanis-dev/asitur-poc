<template>
  <section class="px-4">
    <div class="first-row">
      <v-subheader class="subheader">Quien llama</v-subheader>
      <v-divider class=""></v-divider>
      <v-row justify="space-between" dense class="mt-4">
        <BaseTextInput :label="'NOM:'" :width="25" />
        <BaseTextInput :label="'APE:'" />
        <BaseSelect :label="'Asegurado'" :width="15" />
        <BaseTextInput
          :label="'Telef:'"
          :icon="'mdi-phone-classic'"
          :width="15"
        />
        <BaseDatePickerInput :width="15" />
      </v-row>
    </div>
  </section>
</template>
