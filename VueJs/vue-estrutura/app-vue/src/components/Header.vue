<template>
  <ul>
    <li v-for="item in menu" :key="item.nome">
      <a :href="item.link">{{item.nome}}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      menu: [
        {
          nome: "Home",
          link: "/"
        },{
          nome: "Sobre",
          link: "/sobre"
        },
        {
          nome: "contato",
          link: "/contato"
        }
      ],
    }
  }, 
}
</script>

<style>

</style>