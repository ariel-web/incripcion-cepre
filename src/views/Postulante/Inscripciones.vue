<template>
    <div>

    <b-tabs nav-class="mb-3 mt-3 justify-content-end">
    <b-tab title="Home" active>
        <template #title>
            &nbsp;
            <!-- Datos Personales
            {{ Apoderados }} -->
        </template>

        <div class="col-lg-12 layout-spacing" style="margin-top: 0px;">
            <div class="statbox panel box box-shadow">
                <div class="panel-heading">
                    <div class="row">
                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                            <h4>Datos Generales</h4>
                            {{ persona }}
                            {{  }}
                        </div>
                    </div>
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-12 mx-auto" style="margin-top: -10px;">
                            <label>Examen</label>
                            <b-select :value="1">
                                <b-select-option :value="1">EXAMEN EXTRAORDINARIO FEBRERO 2023</b-select-option>
                            </b-select>
                        </div>

                        <!-- <div class="col-lg-12 col-md-12 col-12 mx-auto" style="margin-top: -20px;">                        
                            <label>Modalidad</label>
                            <b-select>
                                <b-select-option :value="1">PRIMEROS PUESTOS Y COAR</b-select-option>
                                <b-select-option :value="2">TRASLADOS (EXTERNO E INTERNO)</b-select-option>
                                <b-select-option :value="3">GRADUADOS O TITULADOS</b-select-option>
                                <b-select-option :value="4">DEPORTISTAS DE ALTO NIVEL (Ley 30994)</b-select-option>
                                <b-select-option :value="5">PLAN INTEGRAL DE REPARACIONES (Ley N° 28592)</b-select-option>
                                <b-select-option :value="6">PROGRAMA NACIONAL DE BECAS - PRONABEC</b-select-option>
                            </b-select>
                        </div> -->

                        <div class="col-lg-12 col-md-12 col-12 mx-auto" style="margin-top: -20px;">
                            <label>Nro de documento</label>
                            <b-input type="tel" v-model="dni" style="font-weight: bold;"  placeholder="" v-on:keyup.enter="buscarDNI()" required></b-input>
                         </div>

                        <div class="col-lg-12 col-md-12 col-12 mx-auto" style="margin-top: -10px;">                        
                            <label>Programa de estudios {{ pro }}</label>    
                            <b-select :value="programas[0].value" v-model="pro">                                
                                <b-select-option  v-for="programa in programas" :key="programa.value" :value="programa.value"> <div>{{programa.value }} - </div> <br> <div>{{ programa.name }}</div>  </b-select-option>
                            </b-select>
                        </div>

                    </div>
                </div>
            </div>
            <!-- {{ persona }} -->
        </div>


        <div class="col-lg-12 layout-spacing" style="margin-top: 0px;">
            <div class="statbox panel box box-shadow">
                <div class="panel-heading">
                    <div class="row">
                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                            <h4>Comprobantes de pago</h4>
                        </div>
                    </div>
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-xl-6 col-md-6 col-sm-12 col-12">
                            <div  v-if="comprobantes.length > 0">
                                <Voucher :comprobante="comprobantes[0]" />
                            </div>
                        </div>

                        <div class="col-xl-6 col-md-6 col-sm-12 col-12" >
                            <div v-if="comprobantes.length > 1">
                                <Voucher :comprobante="comprobantes[1]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="col-lg-12 layout-spacing" style="margin-top: 0px;">
            <div class="statbox panel box box-shadow">
                <div class="panel-heading">
                    <div class="row">
                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                            <h4>Datos Personales </h4>
                            <!-- {{ persona }} -->
                        </div>
                    </div>
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-12 mx-auto">
                            <div class="col-lg-12 layout-spacing" style="margin-top: -50px;" v-if="persona.cod !== null">
                                <div class="panel box box-shadow" style="border-radius: 5px; padding: 20px; ">
                                    <div style="overflow: hidden; height: 350px; width: 270px;">
                                         <img :src="'https://back-cepre.arielluqu3.com/uploads/foto/'+persona.cod+'-'+persona.nro_doc+'.jpg'" height="350px"/> 
                                     </div>
                                </div>
                            </div>
    
                            <div class="col-lg-12 col-md-12 col-12 mx-auto" style="margin-top: -10px;">
                                <b-form>
                                    <b-form-group>
                                        <label>T. Documento</label>
                                        <b-select value="dni">
                                            <b-select-option value="dni">DNI</b-select-option>
                                            <b-select-option value="carnet ext">CARNÉ DE EXT.</b-select-option>
                                        </b-select>
                                    </b-form-group>
                                </b-form>
                            </div>

                            <div class="col-lg-12 col-md-12 col-12 mx-auto" style="margin-top: -20px;">
                                <b-form>
                                    <b-form-group>
                                        <label>Nro de Documento</label>
                                        <b-input v-model="persona.nro_doc" type="tel" placeholder="" required></b-input>
                                    </b-form-group>
                                </b-form>
                            </div>
                        </div>

                        <div class="col-lg-8 col-md-8 col-12 mx-auto" style="margin-top: -15px;">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-12 mx-auto" style="">
                                    <b-form>
                                        <b-form-group>
                                            <label>Nombres</label>
                                            <b-input v-model="persona.nombres" type="tel" placeholder="" required></b-input>
                                        </b-form-group>
                                    </b-form>
                                </div>
                                <div class="col-lg-6 col-md-6 col-12 mx-auto">
                                    <b-form>
                                        <b-form-group>
                                            <label>Primer Apellido</label>
                                            <b-input v-model="persona.primer_apellido" type="tel" placeholder="" required></b-input>
                                        </b-form-group>
                                    </b-form>
                                </div>
                                <div class="col-lg-6 col-md-6 col-12 mx-auto" style="margin-top: -20px;">
                                    <b-form>
                                        <b-form-group>
                                            <label>Segundo Apellido</label>
                                            <b-input v-model="persona.segundo_apellido"  type="tel" placeholder="" required></b-input>
                                        </b-form-group>
                                    </b-form>
                                </div>
                                <div class="col-lg-6 col-md-6 col-12 mx-auto" style="margin-top: -20px;">
                                    <b-form>
                                        <b-form-group>
                                            <label>Segundo de Casada</label>
                                            <b-input type="tel" v-model="persona.apellido_casada" placeholder="" required></b-input>
                                        </b-form-group>
                                    </b-form>
                                </div>

                                <div class="col-lg-12 col-md-12 col-12 mx-auto" style="margin-top: -20px;">
                                    <b-form>
                                        <b-form-group>
                                            <label>Dirección</label>
                                            <b-input v-model="persona.direccion" type="tel" placeholder="" required></b-input>
                                        </b-form-group>
                                    </b-form>
                                </div>

                                <div class="col-lg-4 col-md-4 col-12 mx-auto" style="margin-top: -20px;">
                                    <b-form>
                                        <b-form-group>
                                            <label>Sexo</label>
                                            <b-select value="M">
                                                <b-select-option value="M">M</b-select-option>
                                                <b-select-option value="F">F</b-select-option>
                                            </b-select>
                                        </b-form-group>
                                    </b-form>
                                </div>

                                <div class="col-lg-4 col-md-4 col-12 mx-auto" style="margin-top: -20px;">
                                    <b-form>
                                        <b-form-group>
                                            <label>Fec. Nacimiento</label>
                                            <flat-pickr v-model="persona.fec_nacimiento"  class="form-control flatpickr active"></flat-pickr>
                                        </b-form-group>
                                    </b-form>
                                </div>

                                <div class="col-lg-4 col-md-4 col-12 mx-auto" style="margin-top: -20px;">
                                    <b-form>
                                        <b-form-group>
                                            <label>Est. Civil {{ persona.estado_civil }}</label>
                                            <b-select v-model="persona.estado_civil" value="S">
                                                <b-select-option value="S">Soltero</b-select-option>
                                                <b-select-option value="C">Casado</b-select-option>
                                                <b-select-option value="V">Viudo</b-select-option>
                                                <b-select-option value="D">Divorciado</b-select-option>
                                            </b-select>
                                        </b-form-group>
                                    </b-form>
                                </div>

                                <div class="col-lg-4 col-md-4 col-12 mx-auto" style="margin-top: -20px;">
                                    <b-form>
                                        <b-form-group>
                                            <label>Celular</label>
                                            <b-input v-model="persona.celular" type="tel" placeholder="" required></b-input>
                                        </b-form-group>
                                    </b-form>
                                </div>

                                <div class="col-lg-8 col-md-8 col-12 mx-auto" style="margin-top: -20px;">
                                    <b-form>
                                        <b-form-group>
                                            <label>Correo</label>
                                            <b-input v-model="persona.email" type="tel" placeholder="" required></b-input>
                                        </b-form-group>
                                    </b-form>
                                </div>

                                <div class="col-lg-8 col-md-8 col-12 mx-auto" style="margin-top: -20px;">
                                    <b-form>
                                        <b-form-group>
                                            <label>Colegio</label>
                                            <b-input  v-model="persona.colegio"  type="tel" placeholder="" required></b-input>
                                        </b-form-group>
                                    </b-form>
                                </div>

                                <div class="col-lg-4 col-md-4 col-12 mx-auto" style="margin-top: -20px;">
                                    <b-form>
                                        <b-form-group>
                                            <label>Año de Egreso</label>
                                            <b-input v-model="persona.anio_egreso" type="tel" placeholder="" required></b-input>
                                        </b-form-group>
                                    </b-form>
                                </div>
                            
                                <div class="col-lg-12 col-md-12 col-12" style="text-align: right;">
                                    <b-button variant="primary" class="mb-2">Actualizar</b-button>
                                </div> 
 



                                 <!-- <b-button variant="primary" class="mb-2" @click="$bvModal.show('exampleModal')">Show</b-button>

                                <b-modal id="exampleModal" title="Modal title">
                                    <p class="modal-text">Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi. </p>
                                    <template #modal-footer>
                                        <b-button variant="default" data-dismiss="modal" @click="$bvModal.hide('exampleModal')"><i class="flaticon-cancel-12"></i> Discard</b-button>
                                        <b-button variant="primary">Save</b-button>
                                    </template>
                                </b-modal> -->

                            </div>

                        </div>  

                    </div>
                </div>
            </div>
        
        
        </div>


        <!-- <div class="col-lg-12 layout-spacing" style="margin-top: 0px;">
            <div class="statbox panel box box-shadow">
                <div class="panel-heading">
                    <div class="row">
                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                            <h4>Datos de postulación</h4>
                        </div>
                    </div>
                </div>
                <div class="panel-body">
                    <div class="row">

                        <div class="col-lg-12 col-md-12 col-12 mx-auto" style="margin-top: -10px;">
                            <b-form>
                                <b-form-group>
                                    <b-select :value="1">
                                        <b-select-option :value="1">EXAMEN EXTRAORDINARIO FEBRERO 2023</b-select-option>
                                   </b-select>
                                </b-form-group>
                            </b-form>
                        </div>

                    </div>
                </div>
            </div>
        </div> -->




        <!-- <div class="col-lg-12 layout-spacing" style="margin-top: 0px;">
            <div class="statbox panel box box-shadow">
                <div class="panel-heading">
                    <div class="row">
                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                            <h4>Lugar de Residencia</h4>
                        </div>
                    </div>
                </div>

                <div class="panel-body">
                    <Residencia :residencia="residencia" />
                </div>
            </div>
         </div> -->



        <!-- <div class="col-lg-12 layout-spacing" style="margin-top: 0px;">
            <div class="statbox panel box box-shadow">
                <div class="panel-heading">
                    <div class="row">
                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                            <h4>Datos del apoderado</h4>
                        </div>
                    </div>
                </div>
                <div class="panel-body">
                    <div class="row" style="margin-top: -30px; margin-bottom: 10px;">
                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                            <h6>Padre o Apoderado</h6>
                        </div>
                    </div>
                    <div v-if="Apoderados.length > 0">
                        <Apoderado :apoderado="Apoderados[0]"/>
                    </div>

                    <div class="row">
                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                            <h6>Madre</h6>
                        </div>
                    </div>
                    <div v-if="Apoderados.length > 1">
                        <Apoderado :apoderado="Apoderados[1]"/>
                    </div>


                </div>
            </div>
        </div> -->


        <div class="col-lg-12 layout-spacing" style="margin-top: 0px;">
            <div class="statbox panel box box-shadow">
                <div class="panel-heading">
                    <div class="row">
                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                            <h4>Arvhivos Adjuntos</h4>
                        </div>
                    </div>
                </div>
                <div class="panel-body">
                    <div class="row" v-if="certificado !== null">
                        <embed :src="'https://back-cepre.arielluqu3.com/'+certificado.url+'#toolbar=0&navpanes=0&scrollbar=0'" type="application/pdf" width="100%" height="600px" />
                    </div>                    
                </div>
            </div>

            <div class="col-lg-12 col-md-12 col-12" style="text-align: right;">
                <b-button variant="success" class="mb-3" @click="validar">Validar Datos</b-button>
            </div>
        </div>

    </b-tab>
    <b-tab title="Profile">
        <div class="media">
            <img class="mr-3" src="@/assets/images/profile-32.jpeg" alt="Generic placeholder image">
            <div class="media-body">
                <h5 class="mt-0 mb-3">Media heading</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>
        </div>
    </b-tab>
    <b-tab title="Contact">

        <div class="container">
            <div class="row layout-top-spacing">


            </div>

        </div>

    </b-tab>
</b-tabs>



                

</div>
</template>


<script>


    import flatPickr from 'vue-flatpickr-component';
    import 'flatpickr/dist/flatpickr.css';
    import '@/assets/sass/forms/custom-flatpickr.css';
    import '@/assets/sass/scrollspyNav.scss';
    import '@/assets/sass/forms/file-upload-with-preview.min.css';
    import Voucher from './boucher/index.vue'

    import axios from 'axios';

    export default {
        metaInfo: { title: 'Inscripciones' },
        components: {
            Voucher, flatPickr
        },
        data() {
            return {
                code_arr: [],
                date1: '2020-09-04',
                config: {
                    dateFormat: 'd-m-Y',
                },

                Apoderados:[],
                postulante: {},
                comprobantes:[],
                residencia:[],
                certificado:null,
                voucher1:null,
                pro:null,

                dni:'75551841',
                persona:{},
                programas:[
                    {value:1, name:"MEDICINA VETERINARIA Y ZOOTECNIA"},
                    {value:2, name:"ENFERMERIA"},
                    {value:3, name:"BIOLOGÍA: PESQUERÍA"},
                    {value:4, name:"BIOLOGÍA: MICROBIOLOGÍA Y LABORATORIO CLÍNICO"},
                    {value:5, name:"BIOLOGÍA: ECOLOGÍÁ"},
                    {value:6, name:"MEDICINA HUMANA"},
                    {value:7, name:"NUTRICION HUMANA"},
                    {value:8, name:"ODONTOLOGÍA"},
                    {value:9, name:"CIENCIAS CONTABLES"},
                    {value:10, name:"TABAJO SOCIAL"},
                    {value:11, name:"SOCIOLOGÍA"},
                    {value:12, name:"EDUCACIÓN PRIMARIA"},
                    {value:13, name:"EDUCACIÓN INICIAL"},
                    {value:14, name:"EDUCACIÓN FÍSICA"},
                    {value:15, name:"EDUC. SEC.: CIENCIA, TECNOLOGÍA Y AMBIENTE"},
                    {value:16, name:"EDUC. SEC.: LIT. PSICOLOGÍA Y FILOSOFÍA"},
                    {value:17, name:"EDUC. SEC.: CIENCIAS SOCIALES"},
                    {value:18, name:"EDUC. SEC. MATEMÁTICA, FÍSICA, COMP, E INFORMÁTICA"},
                    {value:19, name:"ANTROPOLOGÍA"},
                    {value:20, name:"DERECHO"},
                    {value:21, name:"TURISMO"},
                    {value:22, name:"CIENCIAS DE LA COMUNICACIÓN SOCIAL"},
                    {value:23, name:"ADMINISTRACIÓN"},
                    {value:24, name:"ARTE: MÚSICA"},
                    {value:25, name:"ARTE: ARTES PLÁSTICAS"},
                    {value:26, name:"ARTE: DANZA"},
                    {value:27, name:"INGENIERÍA AGRONÓMICA"},
                    {value:28, name:"INGENIERÍA ECONÓMICA"},
                    {value:29, name:"INGENIERÍA DE MINAS"},
                    {value:30, name:"INGENIERÍA GEOLÓGICA"},
                    {value:31, name:"INGENIERÍA METALÚRGICA"},
                    {value:32, name:"INGENIERÍA QUÍMICA"},
                    {value:33, name:"INGENIERÍA ESTADÍSTICA E INFORMÁTICA"},
                    {value:34, name:"INGENIERÍA TOPOGRÁFICA Y AGRIMENSURA"},
                    {value:35, name:"INGENIERÍA AGROINDUSTRIAL"},
                    {value:36, name:"INGENIERÍA AGRÍCOLA"},
                    {value:37, name:"INGENIERÍA CIVIL"},
                    {value:38, name:"INGENIERÍA DE SISTEMAS"},
                    {value:39, name:"INGENIERÍA MECÁNICA ELÉCTRICA"},
                    {value:40, name:"INGENIERÍA ELECTRÓNICA"},
                    {value:41, name:"ARQUITECTURA Y URBANISMO"},
                    {value:42, name:"CIENCIAS FÍSICO MATEMÁTICA: FÍSICA"},
                    {value:43, name:"CIENCIAS FÍSICO MATEMÁTICA: MATEMÁTICAS"}

                ]
            };
        },
 

        created() {
            this.getpistulante;
        },

        methods:{               

            async getPostulante() {
                const config = {
                    headers:{
                     }
                };

                await axios.get("/get-postulante-dni/"+this.dni, config)
                .then(res=>{
                    this.persona = res.data.datos;
                    this.comprobantes = res.data.comprobantes;
                    this.Apoderados = res.data.apoderados;
                    this.residencia = res.data.residencia;
                    this.certificado = res.data.certificado;
                })
                .catch(()=>{
                    console.log("Error");
                })
            },

            async validar(){
                await axios.post('/validar', {
                    id_postulante: this.persona.id,
                    id_programa: this.pro
                })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });

                this.persona = [];
                this.comprobantes = [];
                this.certificado = null;
            },



            buscarDNI(){

                this.getPostulante();
            }  

            

        },

    };
</script>