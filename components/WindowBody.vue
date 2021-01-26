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
                <BaseTextArea  :rows="4" :cols="50" :width="435" :text="'Lorem fistrum no te digo trigo por no llamarte Rodrigor no te digo trigo por no llamarte Rodrigor torpedo de la pradera está la cosa muy malar a peich no te digo trigo por no llamarte Rodrigor tiene musho peligro va usté muy cargadoo benemeritaar.'"/>
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
                <BaseRadio :name="'estado'" :label="'Abierto'" class="label-estado" :checked="true" />
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
              <BaseTextArea :rows="4" :cols="50" :text="'Esto es una prueba'" :width="395" :height="44"/>
            </div>
          </div>
        </div>
      </div>
      <div class="flex">
        <div>
          <div class="subheader thin">
            <header>Satisfacción</header>
          </div>
          <div class="bordered-container">
              <BaseSelect />
          </div>
          <div>
          <div class="subheader thin">
            <header>¿Factura gestión?</header>
          </div>
          <div class="bordered-container ">
            <div class="flex flex-space-between">
              <BaseRadio :name="'factura'" :label="'Si'" :checked="true"/>
              <BaseTextInput :width="110" :value="'No facturado'" :disabled="true" :background="'red'"/>
            </div>
            <div class="flex flex-space-between">
              <BaseRadio :name="'factura'" :label="'No'"/>
              <BaseTextInput :width="110" :disabled="true" :value="'13-09-15'"/>
            </div>
          </div>
        </div>
        </div>
        <div>
          <div class="subheader thin">
            <header>Gestion</header>
          </div>
          <div class="bordered-container">
              <BaseTable />
          </div>
        </div>
      </div>
      <div class="flex">
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
header{
  color: blue;
}
</style>
