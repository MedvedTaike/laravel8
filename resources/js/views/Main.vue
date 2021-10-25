<template>
<section class="container">
    <h1 class="mb-3">Введите ссылку</h1>
        <div class="field has-addons">
            <input class="input custom-input"
                type="text" 
                v-model.trim="$v.link.$model" 
                placeholder="Введите ссылку."
            >
            <div>
                <a class="button is-info custom-button-box" @click="shortenLink">
                Укоротить
                </a>
            </div>
        </div>
        <div class="notification is-danger is-light" v-if="this.errors && !$v.link.required">
            Форма не может быть пустой!
        </div>
        <div class="notification is-danger is-light" v-else-if="!$v.link.url">
            Введите валидный URl адрес!
        </div>
        <div class="notification is-primary is-light" v-else-if="$v.link.url && $v.link.required && !error_message">
            Вы можете укоротить ссылку!
        </div>
        <div class="notification is-danger is-light" v-else-if="error_message">
            {{error_message}}
        </div>
</section>
</template>
<script>
import { required, url } from 'vuelidate/lib/validators'
export default{
    validations: {
      link: { required, url }
    },
    data: () => ({
        link: '',
        errors: false,
        error_message: ''
    }),
    methods: {
        shortenLink(){
            this.$v.$touch()
            if (this.$v.$invalid) {
                this.errors = true
                return
            }
            this.$http.post('/api/create', {full_link: this.link}).then(function(response){
                if(response.status == 201){
                    this.$router.push('/links-list')
                } 
            }, function (response){
                this.error_message = response.body.errors.full_link[0]
            })
        }
    }
}
</script>
<style>
.custom-input{
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.custom-button-box{
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
</style>