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

      <div class="flex flex-space-between">
         <!-- CARACTERISTICAS -->
        <div>
          <div class="subheader thin">
            <header>Características</header>
          </div>
          <div class="bordered-container">
            <div class="flex flex-start">
              <BaseTextInput
              :label="'Apertura:'"
              :width="200"
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
        <div>
          <BaseTextInput
            :label="'Asignado a:'"
            :disabled="true"
            :value="'[DES] SINIESTRO T. GLOBAL'"
          />
          <div class="flex">
            <div>
              <div class="subheader thin">
                <header>Descripcion del siniestro</header>
              </div>
              <div class="bordered-container">
                <BaseTextArea  :rows="4" :cols="50" :width="435" :text="'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'"/>
              </div>
            </div>
          </div>
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
      <div class="flex flex-space-between">
        <!--POLIZA-->
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
              <BaseInputButton type="button" class="button" :value="'Maestra'" :width="80"/>
              <BaseInputButton type="button" class="button" :value="'Copia'" :width="80"/> 
            </div>
          </div>
        </div>
        <div>
          <div class="subheader">
            <header>Observaciones</header>
          </div>
          <div class="bordered-container">
            <div class="flex">
              <BaseTextArea :rows="4" :cols="50" :text="'Esto es una prueba'" :width="395"/>
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
