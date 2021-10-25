<template>
<section class="container mt-5">
    <h1>Статистика по IP адрес {{address}}</h1>
    <div class="notification is-danger is-light" v-if="error_message">
        {{error_message}}
    </div>
    <table class="table is-fullwidth">
  <thead>
    <tr>
      <th><abbr title="ID Link">Ссылки</abbr></th>
      <th><abbr title="Count">Кол. переходов</abbr></th>
    </tr>
  </thead>
  <tbody>
      <tr v-for="item in data" :key="item.link">
          <td>{{item.link}}</td>
          <td>{{item.count}}</td>
      </tr>
  </tbody>
</table>
</section>
</template>
<script>
export default{
    data: () => ({
        data: [],
        address: '',
        error_message: '',
    }),
    created(){
      this.getAddressStat(this.$route.params.address)
      this.address = this.$route.params.address
    },
    methods: {
        getAddressStat(address){
            this.$http.get('/api/ip/'+ address ).then(function(response){
                if(response.status == 200){
                    this.data = response.data
                } 
            }, function (response){
                this.error_message = "Что то пошло не так!"
            })
        }
    }
}
</script>