<template>
    <div class="form auth-boxed">
        <div class="form-container outer">
            <div class="form-form">
                <div class="form-form-wrap">
                    <div class="form-container">
                        <div class="form-content">
                            <div style="margin-top: 30px; margin-bottom: 20px;">
                                <img src="../assets/images/logo_unap.png" width="100"/>
                            </div>
                            <h3 class="">Iniciar Sesión</h3>
                            <!-- <p class="">Inicie sesión en su cuenta para continuar.</p> -->
                            
                            <b-form class="text-left" @submit.prevent="login({ email: form.email, password: form.password })">
                                <div class="form">
                                    <div id="username-field" class="field-wrapper input">
                                        <label for="username">CORREO</label>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                        <b-input placeholder="e.g jhonar@gmail.com" v-model="form.email"></b-input>
                                    </div>

                                    <div id="password-field" class="field-wrapper input mb-2">
                                        <div class="d-flex justify-content-between">
                                            <label for="password">CONTRASEÑA</label>
                                            <router-link to="/auth/pass-recovery-boxed" class="forgot-pass-link">¿Has olvidado tu contraseña?</router-link>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                        <b-input :type="pwd_type" v-model="form.password" placeholder="Password"></b-input>
                                        <svg @click="set_pwd_type" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="toggle-password" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                    </div>
                                    <div class="d-sm-flex justify-content-between" style="margin-top:20px; margin-bottom: 50px;">
                                        <div class="field-wrapper">
                                            <b-button type="submit" variant="dark" value="">Entrar al Sistema</b-button>
                                        </div>
                                    </div>

                                </div>
                            </b-form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import '@/assets/sass/authentication/auth-boxed.scss';

export default {
metaInfo: { title: 'Login' },
data() {
    return { 
        pwd_type: 'password',
        form:{
            email:"",
            password:"",
        }   
    }
},
mounted() {
},
methods: {
    ...mapActions(['login']),

    submit(){
        this.$store.commit('login',this.form.email)
        
    },
    set_pwd_type() {
        if (this.pwd_type == 'password') { this.pwd_type = 'text'; } else { this.pwd_type = 'password'; }
    }
}
};
</script>
