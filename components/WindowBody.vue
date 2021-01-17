<template>
  <section>
    <div class="form-row">
      <div class="subheader">
        <v-subheader>Quien llama</v-subheader>
      </div>
      <v-row dense class="bordered-container">
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

      <v-row>
        <v-col cols="6" class="left-side-row pt-0">
          <div class="subheader thin">
            <v-subheader>Características</v-subheader>
          </div>

          <v-row class="bordered-container">
            <BaseTextInput
              :label="'Apertura'"
              :value="'07/01/2021 14:59 por [DES] formación'"
            />
            <BaseCheckBox />

            <BaseTextInput
              :label="'Daño'"
              :value="'Extensión de garantías'"
              :disabled="true"
              class="mt-2"
            />
          </v-row>
        </v-col>
        <v-col cols="6" class="right-side-row">
          <BaseTextInput
            :label="'Asignado a:'"
            :disabled="true"
            :value="'[DES] SINIESTRO T. GLOBAL'"
          />
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
