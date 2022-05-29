<template> 
  <div id="App"> 
        <ul class="d-grid">
          <li @click="componenteAtivo = 'Sobre'">Sobre</li>
          <li @click="componenteAtivo = 'Servicos'">Serviços</li>
          <li @click="componenteAtivo = 'Contato'">Contato</li>
        </ul> 
      <keep-alive>
        <component :is="componenteAtivo"></component>
      </keep-alive> 
  </div>
</template>

<script>  

import Sobre from './components/Sobre.vue'
import Servicos from './components/Servicos.vue'
import Contato from './components/Contato.vue'

export default {
  name: 'App',
  components: {  
    Sobre,
    Servicos,
    Contato
  },
  data() {
    return {
      componenteAtivo: "Sobre"
    }
  }
}
</script>

<style>
  .d-grid {
    display: flex;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    padding: 0;
  }
  .d-grid li { 
    display: block;
    background-color: tomato;
    color: white;
    padding: 10px;
    cursor: pointer;
  }
  .d-grid li:hover {
    background-color: teal;
  }
</style>
