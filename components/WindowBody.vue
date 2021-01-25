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
              :width="300"
              :value="'07/01/2021 14:59 por [DES] formación'"
              />
              <BaseCheckBox :label="'Parte del siniestro'"/>
              </div>
            <div class="flex flex-start">
              <BaseSelect :label="'Daño: '" :width="90" :disabled="true"/>
              <BaseSelect :label="'Causa: '" :width="90"/>
            </div>
            <div class="flex flex-space-between">
              <BaseSelect :label="'Tipo: '" :width="90"/>
              <BaseDesplegable :header1="'C.Coberturas'" :header2="'ClubMSG'" />
            </div>

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
        <!-- ASIGNADO A -->
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
                <BaseRadio :name="'estado'" :label="'Abierto'" class="label-estado" />
                <label class="label-estado">Estado:</label>
                <BaseRadio :name="'estado'" :label="'Cerrado'" class="label-estado" />
                <label class="label-estado">F.Termin</label>
              </div>
              <div class="flex flex-start">
                <BaseTextInput class="label-estado" :value="'07/01/2021'" :width="90" :disabled="true"/>
                <BaseSelect :width="80" class="label-estado" />
                <BaseTextInput class="label-estado" :value="'07/01/2021'" :width="90" :disabled="true"/>
                <BaseTextInput class="label-estado" :width="90" :disabled="true"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="flex flex-space-between">
          <div>
            <div class="subheader">
              <header>Póliza</header>
            </div>
            <div class="bordered-container">
              <div class="flex">
                <BaseTextInput
                  :label="'Entidad'"
                  :disabled="true"
                  />
                  <BaseTextInput
                  :label="'Nºpól'"
                  :disabled="true"
                  />
              </div>
              <div class="flex">
                <BaseTextInput
                :label="'Producto'"
                :disabled="true"
                :width=250
                />
              <input type="button" value="Maestra">
              <input type="button" value="Copia"> 
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex">
        <!-- SATISFACCIÓN -->
        <div>
          <div class="subheader thin">
            <header>Satisfacción</header>
          </div>
          <div class="bordered-container">
            <BaseSelect />
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
.label-estado {
  width:120px;
  background-color:transparent;
}
input[type="button"]{
  font-size: 14px;
  border-style: outset;
  width: 80px;
  
}
</style>
