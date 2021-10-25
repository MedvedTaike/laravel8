<template>
<section class="container is-flex is-flex-direction-column is-align-items-center mt-5">
    <h1>Список  ссылок</h1>
    <div class="notification is-danger is-light" v-if="error_message">
        {{error_message}}
    </div>
    <table class="table is-fullwidth">
  <thead>
    <tr>
      <th><abbr title="ID Link">ID</abbr></th>
      <th><abbr title="Short Link">Короткая ссылка</abbr></th>
      <th><abbr title="Full Link">Полная ссылка</abbr></th>
      <th><abbr title="Visited">Пер.</abbr></th>
      <th><abbr title="Stats">Стат.</abbr></th>
    </tr>
  </thead>
  <tbody>
      <tr v-for="link in links" :key="link.id">
          <td>{{link.id}}</td>
          <td>
              <a :href="link.full" target="_blank" @click="redirectPage(link.id, link.full)">
                  {{link.link}}
              </a>
          </td>
          <td>{{link.full}}</td>
          <td>{{link.count}}</td>
          <td>
              <router-link :to="'/stats/'+ link.id">Стата</router-link>
          </td>
      </tr>
  </tbody>
</table>
</section>
</template>
<script>
export default{
    data: () => ({
        links: [],
        errors: false,
        error_message: '',
    }),
    created(){
      this.getLinks()
    },
    methods: {
        getLinks(){
            this.$http.get('/api/links').then(function(response){
                if(response.status == 200){
                    this.links = response.data.data
                } 
            }, function (response){
                this.error_message = "Что то пошло не так!"
            })
        },
        redirectPage(id, link){
            this.$http.post('/api/visiting/' + id ).then(function(response){
                if(response.status == 201){
                    this.getLinks()
                } 
            }, function (response){
                this.error_message = "Что то пошло не так!"
            })
        }

    }
}
</script>