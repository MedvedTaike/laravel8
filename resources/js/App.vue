<template>
<div>
  <Navbar />
  <router-view></router-view>
</div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  data: () => ({
    
  }),
  components: {
    Navbar
  },
  computed: {
    
  },
  methods: {

  }
}
</script>
