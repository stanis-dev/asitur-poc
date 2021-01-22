<template>
  <section>
    <div class="form-row">
      <div class="subheader">
        <header>Quien llama</header>
      </div>
      <div class="space-between bordered-container">
        <BaseTextInput :label="'Nom:'" :width="95" />
        <BaseTextInput :label="'Ape:'" :width="95" />
        <BaseSelect :label="'Asegurado:'" :width="85" />
        <BaseTextInput
          :label="'Telef:'"
          :icon="'mdi mdi-phone-classic'"
          :width="75"
        />
        <i class="mdi mdi-phone-classic"></i>
        <BaseDatePickerInput :width="350" />
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
