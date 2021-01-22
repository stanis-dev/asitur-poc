<template>
  <section>
    <div class="form-row">
      <div class="subheader">
        <header>Quien llama</header>
      </div>
      <div class="flex flex-space-between bordered-container">
        <BaseTextInput :label="'Nom:'" :width="95" />
        <BaseTextInput :label="'Ape:'" :width="95" />
        <BaseSelect :label="'Asegurado:'" :width="95" />
        <BaseTextInput
          :label="'Telef:'"
          :icon="'mdi mdi-phone-classic'"
          :width="85"
        />
        <i class="mdi mdi-phone-classic"></i>
        <BaseDatePickerInput :width="350" />
      </div>

      <div class="flex">
         <!-- CARACTERISTICAS -->
        <div>
          <div class="subheader thin">
            <header>Características</header>
          </div>
          <div class="bordered-container">
            <div class="flex flex-start">
              <BaseTextInput
              :label="'Apertura:'"
              :width="90"
              :value="'07/01/2021 14:59 por [DES] formación'"
              />
              <BaseCheckBox :label="'Parte del siniestro'"/>
              </div>
            <div class="flex flex-start">
              <BaseSelect :label="'Daño: '" :width="90" :disabled="true"/>
              <BaseSelect :label="'Causa: '" :width="90"/>
            </div>
            <BaseSelect :label="'Tipo: '" :width="90"/>
            <label>¿Cubierto?</label>
            <BaseSelect :width="90"/>
            <div class="flex flex-start">
              <BaseCheckBox :label="'Recobrable'" :disabled="true" />
              <BaseCheckBox :label="'Urgente'"/>
              <BaseCheckBox :label="'No Asitur'"/>
              <BaseCheckBox :label="'Peritaje'"/>
            </div>
          </div>
        </div>
        <!-- ASIGNADO A -->
        <div class="m4">
          <BaseTextInput
            :label="'Asignado a:'"
            :disabled="true"
            :value="'[DES] SINIESTRO T. GLOBAL'"
          />
        </div>
      </div>
      <div class="flex">
        <!-- ESTADO -->
        <div>
          <div class="subheader thin">
            <header>Estado</header>
          </div>
          <div class="bordered-container">
            <div>
              <div class="flex flex-start">
                <BaseRadio :name="'estado'" :label="'Abierto'" class="asd" />
                <label class="asd">Estado:</label>
                <BaseRadio :name="'estado'" :label="'Cerrado'" class="asd" />
                <label class="asd">F.Termin</label>
              </div>
              <div class="flex flex-start">
                <BaseTextInput class="asd" :value="'07/01/2021'" :width="90" :disabled="true"/>
                <BaseSelect class="asd" />
                <BaseTextInput class="asd" :value="'07/01/2021'" :width="90" :disabled="true"/>
                <BaseTextInput class="asd" :width="90" :disabled="true"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.flex {
  display:flex;
  &-around {
    justify-content: space-around;
  }
  &-space-between {
    justify-content: space-between;
  }
  &-grow {
    flex-grow:4;
  }
  &-start {
    justify-content: flex-start;
  }
  &-column {
    flex-direction: column;
  }
}
.m4 {
  margin:4px;
}
label {
  background-color:darkgrey;
}
.asd {
  width:120px;
  background-color:transparent;
}
</style>
