<template>
  <section>
    <div class="form-row">
      <div class="subheader">
        <header>Quien llama</header>
      </div>
      <div class="flex-container bordered-container">
        <BaseTextInput :label="'Nom:'" :width="90" />
        <BaseTextInput :label="'Ape:'" />
        <BaseSelect :label="'Asegurado:'" :width="90" />
        <BaseTextInput
          :label="'Telef:'"
          :icon="'mdi mdi-phone-classic'"
          :width="90"
        />
        <i class="mdi mdi-phone-classic"></i>
        <BaseDatePickerInput :width="15" />
      </div>

      <div class="space-between">
        <div class="flex-grow" >
          <div class="subheader thin">
            <header>Características</header>
          </div>

          <div class="bordered-container">
            <BaseTextInput
              :label="'Apertura:'"
              :width="90"
              :value="'07/01/2021 14:59 por [DES] formación'"
            />
            <BaseCheckBox />

            <BaseTextInput
              :label="'Daño:'"
              :value="'Extensión de garantías'"
              :disabled="true"
            />
          </div>
        </div>
        <div class="flex-grow m4">
          <BaseTextInput
            :label="'Asignado a:'"
            :disabled="true"
            :value="'[DES] SINIESTRO T. GLOBAL'"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.flex-container {
  display:flex;
  justify-content: flex-start;
}
.space-between {
  display:flex;
  justify-content: space-between;
}
.flex-grow {
  flex-grow:4;
}
.m4 {
  margin:4px;
}
</style>
