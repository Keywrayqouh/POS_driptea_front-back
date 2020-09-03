<template>
    <div class="container">
        <center>
            <img style="height: 150px; margin-top: 1%;" :src="image" v-on:click="redirect('/')">
            <p>Register to <b class="bRegister" @click="redirect('/')">Driptea</b></p>
        </center>
        <center>
            <div class="containerWidth">
                <i><span v-if="errorMessage7 !== null" class="text-danger text-center">{{errorMessage7}}</span></i>
                <form>
                    <div class="form-group">
                        <label for="username">Username:</label><br>
                        <i><span v-if="errorMessage !== null" class="text-danger text-center">{{errorMessage}}</span></i>
                        <i><span v-if="errorMessage2 !== null" class="text-danger text-center">{{errorMessage2}}</span></i>
                        <!-- <i style="background-color: #DEDEDE; padding: 3%;" class="fas fa-user"></i> -->
                        <input v-model="username" v-on:keyup="validate('username')" type="text" class="form-control" id="username">
                    </div>
                    <div class="form-group">
                        <label for="email">Email:</label><br>
                        <i><span v-if="errorMessage3 !== null" class="text-danger text-center">{{errorMessage3}}</span></i>
                        <input v-model="email" v-on:keyup="validate('email')" type="email" class="form-control" id="email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password:</label><br>
                        <span v-if="successMessage !== null" class="text-success text-center">{{successMessage}}</span>
                        <i><span v-if="errorMessage4 !== null" class="text-danger text-center">{{errorMessage4}}</span></i>
                        <i><span v-if="errorMessage5 !== null" class="text-danger text-center">{{errorMessage5}}</span></i>
                        <input v-model="password" v-on:keyup="validate('password')" type="password" class="form-control" id="password">
                    </div>
                    <div class="form-group">
                        <label for="confirmPassword">Confirm password:</label><br>
                        <i><span v-if="errorMessage6 !== null" class="text-danger text-center">{{errorMessage6}}</span></i>
                        <input v-model="confirmPass" v-on:keyup="validate('confirmPass')" type="password" class="form-control" id="confirmPassword">
                    </div>
                    <button type="submit" class="btn btnRegister" @click="register">Register</button>
                </form>
                <div>
                    <label class="termsCondition">By signing up, you agree to our <b class="bRegister" @click="redirect('/')">Terms</b> and <b class="bRegister" @click="redirect('/')">Conditions</b></label><hr>
                    <center>
                        <label class="termsCondition">Already have an account? <b class="bRegister" v-on:click="redirect('/')">Login</b></label>
                    </center>
                </div>
            </div>
        </center>
    </div>
</template>
<style lang="scss" scoped>
span{
    font-size: 12px;
}
hr{
    border: 1px solid #17D817;
}
.termsCondition{
    margin-top: 6%;
    font-size: 15px;
    text-align: center;
}
.form-control{
    border: 1px solid #17D817;
    border-radius: 5px;
}
.bRegister{
    color: #0A8C0F;
    cursor: pointer;
}
p{
    font-size: 20px;
}
.btnRegister{
    margin-top: 2%;
    margin-bottom: 2%;
    background-color: #17D817;
    font-weight: bold;
    width: 100%;
}
@media screen and (max-width: 600px) {
    .containerWidth{
        text-align: left;
        width: 100%;
    }
    .form-group{
        width: 100%;
    }
    .containerWidth[data-v-2badb436] {
        text-align: left;
        width: 75%;
    }
}
@media screen and (max-width: 900px) {
    .containerWidth{
        text-align: left;
        width: 100%;
    }
    .form-group{
        width: 100%;
    }
    .containerWidth[data-v-2badb436] {
        text-align: left;
        width: 50%;
    }
}
.containerWidth{
    text-align: left;
    width: 30%;
}
</style>
<script>
import ROUTER from '../../router'
import AUTH from '../../services/auth'
import image from "../../image/logo.png"
export default {
    name: "app",
    data(){
        return {
            type: 'user',
            image: image,
            username: '',
            email: '',
            password: '',
            confirmPass: '',
            successMessage: null,
            errorMessage: null,
            errorMessage2: null,
            errorMessage3: null,
            errorMessage4: null,
            errorMessage5: null,
            errorMessage6: null,
            errorMessage7: null,
        }
    },
    methods: {
        redirect(route){
            ROUTER.push(route).catch(()=>{})
        },
        register(){
            this.validate('username')
            this.validate('email')
            this.validate('password')
            this.validate('confirmPass')
            let parameter = {
                account_type: this.type,
                name: this.username,
                email: this.email,
                password: this.password,
                password_confirmation: this.confirmPass,
            }
            if(this.errorMessage === null && this.errorMessage2 === null && this.errorMessage3 === null && this.errorMessage4 === null && this.errorMessage5 === null && this.errorMessage6 === null && this.errorMessage7 === null){
                this.$axios.post(AUTH.url+'register', parameter).then(response => {
                    AUTH.token = response.data.token
                    console.log('response', response.data.length)
                    ROUTER.push('/')
                    // if(response.data > 0){
                    // }
                    // AUTH.token = response.data.token
                    // this.login()
                    // if(response.error !== null){
                    //     if(response.error.status === 100){
                    //     let message = response.error.message
                    //     if(typeof message.username !== undefined && typeof message.username !== 'undefined'){
                    //         this.errorMessage = message.username[0]
                    //     }else if(typeof message.email !== undefined && typeof message.email !== 'undefined'){
                    //         this.errorMessage = message.email[0]
                    //     }
                    //     }else if(response.data !== null){
                    //         if(response.data > 0){
                    //             AUTH.token = response.token
                    //             this.login()
                    //         }
                    //     }
                    // }
                }).catch(error => {
                    if(error.response.status === 300){
                        this.errorMessage3 = 'Email already exist'
                    }
                })
            }
        },
        login(){
            console.log('token', AUTH.token)
        },
        validate(input){
            this.successMessage = null
            let reqWhiteSpace = /\s/
            if(input === 'username') {
                this.errorMessage = null
                if(reqWhiteSpace.test(this.username)){
                    this.errorMessage = 'Username should not contain a space.'
                } else if(this.username.length < 6){
                    this.errorMessage2 = 'Username must be atleast 6 characters.'
                } else {
                    this.errorMessage = null
                    this.errorMessage2 = null
                }
            } else if(input === 'email') {
                this.errorMessage3 = null
                if(this.validateEmail(this.email) === false){
                    this.errorMessage3 = 'You have entered an invalid email address.'
                } else {
                    this.errorMessage3 = null
                }
            } else if(input === 'password') {
                this.errorMessage4 = null
                if(this.password.length < 8){
                    this.errorMessage4 = 'Password must be atleast 8 characters.'
                }else if(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/.test(this.password)){
                    this.successMessage = 'Strong password.'
                    this.errorMessage4 = null
                    this.errorMessage5 = null
                } else {
                    this.errorMessage5 = 'Password must be alphanumeric characters. It should contain 1 number, 1 special character and 1 capital letter.'
                }
            } else if(input === 'confirmPass') {
                this.errorMessage6 = null
                this.successMessage = null
                if(this.password.localeCompare(this.confirmPass) !== 0){
                    this.errorMessage6 = 'Password did not match.'
                } else {
                    this.errorMessage6 = null
                }
            } else if(this.username.length >= 6 && this.email !== null && this.password !== null && this.password.length >= 6 && this.password.localeCompare(this.confirmPass) === 0 && this.type !== null && AUTH.validateEmail(this.email) === true){
                this.errorMessage = null
            }else{
                this.errorMessage7 = 'Please fill in all required fields.'
                this.errorMessage7 = null
            }
        },
        validateEmail(email){
            let reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+.[a-zA-Z0-9]*$/
            if(reg.test(email) === false){
                return false
            }else{
                return true
            }
        },
    }
}
</script>



