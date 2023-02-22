<template>
    <div class="p-2">
        <div class="card p-" >
            <b-input-group class="mb-4">
                <b-input placeholder="Search...." v-model="search" v-on:keyup.enter="imprimir"></b-input>
            </b-input-group>
            <!-- {{ datos }} -->
            <!-- {{ postulantes }} -->
            <b-table-simple responsive bordered>
                <b-thead>
                    <b-tr>
                        <b-th>Programa</b-th>
                        <b-th>Nro Doc</b-th>
                        <b-th>Nombres</b-th>
                        <b-th>Doc</b-th>
                        <b-th class="text-center">estado</b-th>
                        <b-th class="text-center">Accion</b-th>
                    </b-tr>
                </b-thead>
                <b-tbody>
                    <b-tr v-for="(row,index) in postulantes" :key="index">
                        <b-td>{{ row.programa }}</b-td>
                        <b-td>{{ row.nro_doc }}</b-td>
                        <b-td>{{ row.primer_apellido }} {{ row.segundo_apellido }} {{ row.nombres }}</b-td>
                        <b-td></b-td>
                        <b-td>
                            <div v-if="row.estado === 1" style="display: flex; justify-content: center;" >
                                <b-badge variant="success"> inscrito </b-badge>
                            </div>
                            <div v-else style="display: flex; justify-content: center;" >
                                <b-badge variant="danger"> no inscrito </b-badge>
                                <!-- <b-badge :variant="random_class(index+1)">{{ row.status }}</b-badge> -->
                            </div>
                        </b-td>
                        <b-td class="text-center">
                            <b-button variant="outline-primary" dense pill class="mt-0 mb-0" @click="$bvModal.show('modalxl')" >Imprimir</b-button>
                        </b-td>
                    </b-tr>
                </b-tbody>
            </b-table-simple>
    
            <b-modal id="modalxl" style="width: 100%;" title="Modal title"  size="xl">
    
                <div class="card" style="width:100%; height: 450px;">
                    <h1>Hellow Word</h1>
    
                </div>
    
                <template #modal-footer>
                    <b-button variant="default" data-dismiss="modal" @click="$bvModal.hide('modalxl')"><i class="flaticon-cancel-12"></i> Discard</b-button>
                    <b-button variant="primary">Save</b-button>
                </template>
            </b-modal>
        </div>
    </div>
    </template>
    
    
    <script>
    import axios from 'axios';
    
    export default {
        data() {
            return {
                datos:[],
                search:"75338336",

                postulantes:[],
            };
        },
    
        methods:{
            async getInscritos() {
                await axios.get("postulantes-inscritos/"+this.search)
                .then(res=>{
                    this.datos= res.data.datos.data;
                })
                .catch(()=>{
                    console.log("Error");
                })
            },

            async getPostulantes( page = 1) {
                let res = await axios.post(
                    "postulantes-inscritos?page=" + page,
                    { term: this.search }
                );
                this.postulantes = res.data.datos.data;
            },

            async imprimir(){
                window.open("http://back-cepre.test/api/constancia-inscripcion/"+this.search,  "_self");
            },

    
        },
        created() {
            this.getInscritos();
            this.getPostulantes();
        },
    
        watch:{
            search() {
                this.getPostulantes();
            }
        },
    
    
    
    };
    </script>
    