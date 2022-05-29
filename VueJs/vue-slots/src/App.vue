<template> 
  <div id="App">
    <ModalPrincipal>
      <template v-slot:header="{logo}">
        <p>Esse é o header <strong>{{logo}}</strong></p>
      </template>
      <template v-slot:default="{ user }">
        <p><strong>{{user.nome}}</strong></p>
      </template>
      <template v-slot:footer>
        <p>Esse é o footer</p>
      </template>
    </ModalPrincipal> 
  </div>
</template>

<script> 

import ModalPrincipal from './components/ModalPrincipal.vue';  

export default {
  name: 'App',
  components: {  
    ModalPrincipal,    
    Teste
  }
}
</script>

<style>
 
</style>
