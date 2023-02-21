<template>
    <div class="p-2">
        <div class="card p-" >
            <b-input-group class="mb-4">
                <b-input placeholder="Search...." v-model="search"></b-input>
            </b-input-group>
            <!-- {{ datos }} -->
            <b-table-simple responsive bordered>
                <b-thead>
                    <b-tr>
                        <b-th>Modalidad</b-th>
                        <b-th>Programa</b-th>
                        <b-th>Nro Doc</b-th>
                        <b-th>Ap. paterno</b-th>
                        <b-th>Ap. materno</b-th>
                        <b-th>Nombres</b-th>
                        <b-th class="text-center">Status</b-th>
                        <b-th class="text-center">Action</b-th>
                    </b-tr>
                </b-thead>
                <b-tbody>
                    <b-tr v-for="(row,index) in datos" :key="index">
                        <b-td>{{ row.modalidades }} </b-td>
                        <b-td>{{ row.programa }}</b-td>
                        <b-td>{{ row.nro_doc }}</b-td>
                        <b-td>{{ row.primer_apellido }}</b-td>
                        <b-td>{{ row.segundo_apellido }}</b-td>
                        <b-td>{{ row.nombres }}</b-td>
                        <b-td>
                            <div style="display: flex; justify-content: cente;" >
                                <b-badge variant="success"> inscrito </b-badge>
                                <!-- <b-badge :variant="random_class(index+1)">{{ row.status }}</b-badge> -->
                            </div>
                        </b-td>
                        <b-td class="text-center">
                            <b-button variant="outline-primary" dense pill class="mt-0 mb-0" @click="$bvModal.show('exampleModal')" >Imprimir</b-button>
                        </b-td>
                    </b-tr>
                </b-tbody>
            </b-table-simple>
    
            <b-modal id="exampleModal" title="Modal title">
    
                <div class="card" style="width: 700px; height: 450px;">
                    <div style="display: flex;">
                        <div style="width: 50%; height: 376px; display: flex; justify-content: center; align-items: center;">
                            <div>
                                <img src="https://images.unsplash.com/photo-1514860492795-97fcd3fe88d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&w=1000&q=80" alt="W3Schools.com" height="320">                     
                            </div>
                        </div>
    
                        <div style="width: 50%; display: flex; justify-content: center; align-items: center; ">
                            
                            <div v-if="items.length >0 " style="">
                                <div v-if="items.length > 0">
                                    <img :src="items[0].src" /> 
                                </div>
                            </div>
    
                            <div v-if="items.length === 0">
                                <div style="height: 330px; display: flex; justify-content: center; align-items: center;">
                                    <div style="display: flex; position: absolute;">
                                        <button v-if="!isCameraOpen && items.length === 0" type="button" class="button is-rounded cam-button"
                                                style="margin-left: 40%; background-color: white; border: 0px;"
                                                    @click="toggleCamera"
                                            >
                                            <span>
                                                <img style="height: 25px;" class="button-img" src="https://img.icons8.com/material-outlined/50/000000/camera--v2.png">
                                            </span>
                                        </button>
                                    </div>
    
                                    <div v-if="isCameraOpen" class="camera-canvas">
                                        <video ref="camera" :width="canvasWidth" :height="canvasHeight" autoplay></video>
                                        <canvas v-show="false" id="photoTaken" ref="canvas" :width="canvasWidth" :height="canvasHeight"></canvas>
                                    </div>
                                </div>
    
                                <div v-if="isCameraOpen" style="display: flex; justify-content: center; margin-top: -50px; ">
                                    <b-button variant="dark" class="mb-2" @click="capture">Tomar Foto</b-button>
                                </div>
                                <div v-if="isCameraOpen" style="position: absolute; right: 30px; top: 10px;" > 
                                    <button type="button" class="button is-rounded cam-button"
                                        style="margin-left: 40%; background-color: white; border: 0px;" @click="toggleCamera">
                                        <span v-if="isCameraOpen">
                                            <img style="height: 25px;" class="button-img" src="https://img.icons8.com/material-outlined/50/000000/cancel.png">
                                        </span>
                                    </button>
                                </div>
    
                        </div>
                        </div>
                    </div>
                    <div style="display: flex; justify-content: right; padding-right: 40px;">
                        <b-button variant="dark" class="mb-2" @click="capture">Guardar</b-button>
                    </div>
    
                </div>
    
                <template #modal-footer>
                    <b-button variant="default" data-dismiss="modal" @click="$bvModal.hide('exampleModal')"><i class="flaticon-cancel-12"></i> Discard</b-button>
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
                search:"",
    
    
                //CAMARA
                isCameraOpen: false,
                canvasHeight:326,
                canvasWidth:260,
                items: [],
                imagen: '',
            };
        },
    
        methods:{
            async getInscritos() {
                await axios.get("ver-inscritos/"+this.search)
                .then(res=>{
                    this.datos= res.data.datos.data;
                })
                .catch(()=>{
                    console.log("Error");
                })
            },
    
    
    
            //CAMARA
            toggleCamera() {
                if (this.isCameraOpen) {
                    this.isCameraOpen = false;
                    this.stopCameraStream();
                } else {
                    this.isCameraOpen = true;
                    this.startCameraStream();
                }
            },
            startCameraStream() {
                const constraints = (window.constraints = {
                    audio: false,
                    video: true
                });
                navigator.mediaDevices
                    .getUserMedia(constraints)
                    .then(stream => {
                        this.$refs.camera.srcObject = stream;
                    }).catch(error => {
                    alert("Browser doesn't support or there is some errors." + error);
                });
            },
    
            stopCameraStream() {
                let tracks = this.$refs.camera.srcObject.getTracks();
                tracks.forEach(track => {
                    track.stop();
                });
            },
    
            capture() {
                const FLASH_TIMEOUT = 50;
                let self = this;
                setTimeout(() => {
                    const context = self.$refs.canvas.getContext('2d');
                    context.drawImage(self.$refs.camera, 0, 0, self.canvasWidth, self.canvasHeight);
                    const dataUrl = self.$refs.canvas.toDataURL("image/jpeg")
                        .replace("image/jpeg", "image/octet-stream");
                    self.addToPhotoGallery(dataUrl);
                    self.uploadPhoto(dataUrl);
                    self.isCameraOpen = false;
                    self.stopCameraStream();
                }, FLASH_TIMEOUT);
            },
    
            addToPhotoGallery(dataURI) {
                this.items.push(
                    {
                        src: dataURI,
                        thumbnail: dataURI,
                        w: this.canvasWidth,
                        h: this.canvasHeight,
                    }
                )
            },
            uploadPhoto(dataURL){
                let uniquePictureName = this.generateCapturePhotoName();
                let capturedPhotoFile = this.dataURLtoFile(dataURL, uniquePictureName+'.jpg')
                let formData = new FormData()
                formData.append('file', capturedPhotoFile)
                // Upload image api
                // axios.post('http://your-url-upload', formData).then(response => {
                //   console.log(response)
                // })
                console.log("File: ", capturedPhotoFile)
            },
    
            generateCapturePhotoName(){
                return  Math.random().toString(36).substring(2, 15)
            },
    
            dataURLtoFile(dataURL, filename) {
                let arr = dataURL.split(','),
                    mime = arr[0].match(/:(.*?);/)[1],
                    bstr = atob(arr[1]),
                    n = bstr.length,
                    u8arr = new Uint8Array(n);
    
                while (n--) {
                    u8arr[n] = bstr.charCodeAt(n);
                }
                return new File([u8arr], filename, {type: mime});
            },
    
        },
        created() {
            this.getInscritos();
        },
    
        watch:{
            search() {
                this.getInscritos();
            }
        },
    
    
    
    };
    </script>
    