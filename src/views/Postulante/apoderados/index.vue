<template>
    <div>
        <div class="row">
            <div class="col-lg-2 col-md-2 col-12 mx-auto" style="margin-top: -20px;">
                <label>Tipo Doc</label>
                <b-select :value="1">
                    <b-select-option :value="1">DNI</b-select-option>
                    <b-select-option :value="2">CARNÉ DE EXT.</b-select-option>
                </b-select>
            </div>
            <div class="col-lg-10 col-md-10 col-12 mx-auto" style="margin-top: -20px;">
                <label>Nro de Documento</label>
                <b-input type="tel" v-model="tutor.nro_documento" placeholder="" required></b-input>
            </div>


            <div class="col-lg-4 col-md-4 col-12 mx-auto" style="margin-top: -20px;">
                <label>Nombres</label>
                <b-input type="tel"  v-model="tutor.nombres" placeholder="" required></b-input>
            </div>

            <div class="col-lg-4 col-md-4 col-12 mx-auto" style="margin-top: -20px;">
                <label>Primer Apellido</label>
                <b-input type="tel"  v-model="tutor.paterno" placeholder="" required></b-input>
            </div>

            <div class="col-lg-4 col-md-4 col-12 mx-auto" style="margin-top: -20px;">
                <label>Segundo apellido</label>
                <b-input type="tel"  v-model="tutor.materno" placeholder="" required></b-input>
            </div>

            <div class="col-lg-12 col-md-12 col-12" style="text-align: right;">
                <b-button variant="primary" class="mb-2">Actualizar</b-button>
            </div>
        </div>
    </div>

</template>


<script>
export default {
    props:['apoderado'],
    data() {
        return {
            tutor:this.apoderado,
        };
    },

};
</script>