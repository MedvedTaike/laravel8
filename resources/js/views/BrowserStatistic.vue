<template>
<section class="container is-flex is-flex-direction-column is-align-items-center mt-5">
    <h1>Статистика по браузеру {{browser}}</h1>
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
        browser: '',
        error_message: '',
    }),
    created(){
      this.getBrowserStat(this.$route.params.browser)
      this.browser = this.$route.params.browser
    },
    methods: {
        getBrowserStat(browser){
            this.$http.get('/api/browser/'+ browser ).then(function(response){
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