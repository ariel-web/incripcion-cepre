<template>
    <div style="">
        <div style="">

        </div>

        <div class="statbox panel box box-shadow" style="padding: 20px;">

                <!-- {{ comprobante }} -->

                <div class="col-lg-12 col-md-12 col-12 mx-auto" style="margin-top: -10px;">
                    <label>Número de operación</label>
                    <b-input v-model="voucher.nro_operacion" type="tel" placeholder="" required></b-input>
                </div>
                <div class="col-lg-12 col-md-12 col-12 mx-auto" style="margin-top: -10px;">
                    <label>Fecha</label>
                    <flat-pickr v-model="voucher.fecha" noCalendar  class="form-control flatpickr active"></flat-pickr>                    
                </div>
                <div class="col-lg-12 col-md-12 col-12 mx-auto" style="margin-top: -10px;"  >
                    <label>Monto</label>
                    <b-input v-model="voucher.monto" type="tel" placeholder="" required></b-input>
                </div>

                <div class="col-lg-12 col-md-12 col-12" style="text-align: right;">
                    <b-button variant="primary" class="mb-2" @click="actualizar(voucher)">Actualizar</b-button>
                </div>

        </div>



    </div>
</template>

<script>

    import flatPickr from 'vue-flatpickr-component';
    import 'flatpickr/dist/flatpickr.css';
    import '@/assets/sass/forms/custom-flatpickr.css';
    import '@/assets/sass/scrollspyNav.scss';
    import '@/assets/sass/forms/file-upload-with-preview.min.css';
    import axios from 'axios';

    export default {
        props:['comprobante'], 
        components: {
            flatPickr,
        },
        data() {
            return {
                preview:null,
                voucher:{
                    id: this.comprobante.id,
                    nro_operacion:this.comprobante.nro_operacion,
                    fecha: this.comprobante.fecha,
                    monto: this.comprobante.monto,
                    // url: this.comprobante.url
                }

            };
        },


        methods:{

            async actualizar (vou){

                await axios.post('actualizar-voucher', {
                    vou
                })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });

            }


        }, 

        mounted() {
        //single file upload

        }

    };
</script>