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
        <div class="m4">
          <BaseTextInput
            :label="'Asignado a:'"
            :disabled="true"
            :value="'[DES] SINIESTRO T. GLOBAL'"
          />
        </div>
      </div>
      <div class="flex flex-space-between">
        <div>
          <div class="subheader">
            <header>Póliza</header>
          </div>
          <div class="bordered-container">
          <div class="flex">
            <BaseTextInput
            :label="'Entidad'"
            :disabled="'Disabled'"
            />
            <BaseTextInput
            :label="'Nºpól'"
            :disabled="'Disabled'"
            />
          </div>
          <div class="flex">
            <BaseTextInput
            :label="'Producto'"
            :disabled="'Disabled'"
            :width=250
            />
            <input type="button" value="Maestra">
            <input type="button" value="Copia"> 
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
}
.m4 {
  margin:4px;
}
label {
  background-color:darkgrey;
}
input[type="button"]{
  font-size: 14px;
  border-style: outset;
  width: 80px;
  
  }
</style>
