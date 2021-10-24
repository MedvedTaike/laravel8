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
        <div class="notification is-primary is-light" v-else-if="$v.link.url && $v.link.required">
            Вы можете укоротить ссылку!
        </div>
</section>
</template>
<script>
import { mapGetters,mapActions } from 'vuex'
import { required, url } from 'vuelidate/lib/validators'
export default{
    validations: {
      link: { required, url }
    },
    data: () => ({
        link: '',
        errors: false,
        request_error: null,
        request_result: null
    }),
    computed: {
    },
    methods: {
        ...mapActions(['createLink']),
        shortenLink(){
            this.$v.$touch()
            if (this.$v.$invalid) {
                this.errors = true
                return
            }
            this.errors = false;
            this.request_result = this.createLink(this.link)
            console.log(this.request_result)
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