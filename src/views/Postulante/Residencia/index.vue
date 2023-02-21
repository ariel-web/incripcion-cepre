<template>
<div class="row">

    <div v-if="res" style="display: none;"> {{ res = residencia }} </div>

    <div class="col-lg-3 col-md-3 col-12 mx-auto" style="margin-top: -10px;">
        <b-form>
            <b-form-group>
                <label>País</label>
                <b-select  v-model='pa'> 
                    <b-select-option v-for="pais in paises" :key="pais.id" :value="pais.id"><div>{{ pais.nombre }}</div></b-select-option>
               </b-select>
            </b-form-group>
        </b-form>
    </div>

    <div class="col-lg-3 col-md-3 col-12 mx-auto" style="margin-top: -10px;">
        <b-form>
            <b-form-group>
                <label>Departamento {{ dep }} </label>
                <b-select  v-model="dep">
                    <b-select-option v-for="departamento in departamentos" :key="departamento.value" :value="departamento.value" ><div>{{ departamento.label }}</div></b-select-option>
               </b-select>
            </b-form-group>
        </b-form>
    </div>
    <div class="col-lg-3 col-md-3 col-12 mx-auto" style="margin-top: -10px;">
        <b-form>
            <b-form-group>
                <label>Provincia {{ prov }}</label>
                <b-select  v-model="prov">
                    <b-select-option v-for="provincia in provincias" :key="provincia.value" :value="provincia.value" ><div>{{ provincia.label }}</div></b-select-option>
               </b-select>
            </b-form-group>
        </b-form>
    </div>
    <div class="col-lg-3 col-md-3 col-12 mx-auto" style="margin-top: -10px;">
        <b-form>
            <b-form-group>
                <label>Distrito {{ dist }}</label>
                <b-select v-model="dist" :value="1">
                    <b-select-option v-for="distrito in distritos" :key="distrito.value" :value="distrito.value" ><div>{{ distrito.label }}</div></b-select-option>
               </b-select>
            </b-form-group>
        </b-form>
    </div>
    
    <div class="col-lg-12 col-md-12 col-12 mx-auto" style="margin-top: -20px;">
        <b-form>
            <b-form-group>
                <label>Dirección</label>
                <b-input type="tel" v-model="direccion" placeholder="" required></b-input>
            </b-form-group>
        </b-form>
    </div>

    <div class="col-lg-12 col-md-12 col-12" style="text-align: right;">
        <b-button variant="primary" class="mb-2">Actualizar</b-button>
    </div>

</div>

</template>

<script>
import axios from 'axios';
export default {
    props:['residencia'],
    data() {

        return {
            paises:[],
            departamentos:[],
            provincias:[],
            distritos:[],
            pa:1,
            res: [],
            dep:null,
            prov:null,
            dist:null,
            direccion: null,
        
            cont:0,
        };
    },

    methods:{
        async getPaises() {
            await axios.get("select-data/get-paises")
            .then(res=>{
                this.paises = res.data.datos;
            })
            .catch(()=>{
                console.log("Error");
            })
        },

        async getDepartamentos() {
            await axios.get("select-data/get-departamentos")
            .then(res=>{
                this.departamentos = res.data.datos;
            })
            .catch(()=>{
                console.log("Error");
            })
        },

        async getProvincias() {
            await axios.get("select-data/get-provincias/"+this.dep)
            .then(res=>{
                this.provincias = res.data.datos;
            })
            .catch(()=>{
                console.log("Error");
            })
        },

        async getDistritos() {
            await axios.get("select-data/get-distritos/"+this.dep+this.prov)
            .then(res=>{
                this.distritos = res.data.datos;
            })
            .catch(()=>{
                console.log("Error");
            })
        },

        
    },
    created() {
        this.getPaises();
        this.getDepartamentos();

    },


    watch:{
        dep() {
            this.getProvincias();
        },
        prov() {
            this.getDistritos();
        },
        res() {
            this.dep = this.res.dep;
            this.prov = this.res.prov;
            this.dist = this.res.ubigeo;
            this.direccion = this.res.direccion;
        },

        
    },


};
</script>