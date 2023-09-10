<template>
    <div>
        <div class="row justify-content-center">
            <div class="col-xl-10 col-lg-12 col-md-9">
                <div class="card shadow-sm my-5">
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="login-form">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Register</h1>
                                    </div>
                                    <form @submit.p.prevent="register">
                                        <div class="form-group">
                                            <input v-model="form.name" type="text" class="form-control" id="exampleInputFirstName" placeholder="Enter Full Name">
                                            <small class="text-danger" v-if="errors.name">{{errors.name[0]}}</small>
                                        </div>
                                        <div class="form-group">
                                            <input v-model="form.email" type="email" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp"
                                                   placeholder="Enter Email Address">
                                            <small class="text-danger" v-if="errors.email">{{errors.email[0]}}</small>
                                        </div>
                                        <div class="form-group">
                                            <input v-model="form.password" type="password" class="form-control" id="exampleInputPassword" placeholder="Password">
                                            <small class="text-danger" v-if="errors.password">{{errors.password[0]}}</small>
                                        </div>
                                        <div class="form-group">
                                            <input v-model="form.password_confirmation" type="password" class="form-control" id="exampleInputPasswordRepeat"
                                                   placeholder="Confirm Password">
                                            <small class="text-danger" v-if="errors.password_confirmation">{{errors.password_confirmation[0]}}</small>
                                        </div>
                                        <div class="form-group">
                                            <button type="submit" class="btn btn-primary btn-block">Register</button>
                                        </div>
                                        <hr>
                                        <a href="index.html" class="btn btn-google btn-block">
                                            <i class="fab fa-google fa-fw"></i> Register with Google
                                        </a>
                                        <a href="index.html" class="btn btn-facebook btn-block">
                                            <i class="fab fa-facebook-f fa-fw"></i> Register with Facebook
                                        </a>
                                    </form>
                                    <hr>
                                    <div class="text-center">
                                        <router-link  class="font-weight-bold small" to="/">Already have an account?</router-link>

                                    </div>
                                    <div class="text-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    created() {
        if(User.loggedIn()){
            this.$router.push({ name: 'home'})
        }
    },

    data(){
        return {
            form: {
                email: '',
                password: '',
                name: '',
                password_confirmation: ''
            },
            errors: {}
        }
    },methods: {
        register() {
            axios.post('/api/auth/register', this.form)
                .then(res => {
                    User.responseAfterLogin(res)
                    Toast.fire({
                        icon: 'success',
                        title: 'Signed up successfully'
                    })
                    this.$router.push({name: 'home'});
                })
                .catch(error => this.errors = error.response.data.errors)
                .catch(
                    Toast.fire({
                        icon: 'warning',
                        title: 'Invalid Email or Password'
                    })
                )
        }
    }
}
</script>
<style>

</style>
