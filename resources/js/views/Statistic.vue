<template>
<section class="container mt-5">
    <h1>Статистика по ссылке {{link}}</h1>
    <div class="notification is-danger is-light" v-if="error_message">
        {{error_message}}
    </div>
    <table class="table is-fullwidth">
  <thead>
    <tr>
      <th><abbr title="Link">Время</abbr></th>
      <th><abbr title="Ip address">IP адреса</abbr></th>
      <th><abbr title="User agents">Браузеры</abbr></th>
    </tr>
  </thead>
  <tbody>
      <tr v-for="link in links" :key="link.id">
          <td>{{link.time}}</td>
          <td><router-link :to="'/ip-stats/'+ link.address">{{link.address}}</router-link></td>
          <td><router-link :to="'/browser-stats/'+ link.browser">{{link.browser}}</router-link></td>
      </tr>
  </tbody>
</table>
</section>
</template>
<script>
export default{
    data: () => ({
        links: [],
        link: '',
        errors: false,
        error_message: '',
    }),
    created(){
      this.getLinksById(this.$route.params.link_id)
    },
    methods: {
        getLinksById(id){
            this.$http.get('/api/link/'+ id ).then(function(response){
                if(response.status == 200){
                    this.link = response.data.link
                    this.links = response.data.links.data
                } 
            }, function (response){
                this.error_message = "Что то пошло не так!"
            })
        }
    }
}
</script>