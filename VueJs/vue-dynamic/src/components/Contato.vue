<template>
  <div>
    <h1>Contato</h1>
    <form action="">
      <input type="text" placeholder="Nome" name="nome">
      <input type="email" placeholder="E-mail" name="email">
      <textarea name="mensagem" id="" placeholder="mensagem"></textarea>
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Contato",
  data() {
    return {
      
    }
  }
}
</script>

<style>
  input, button {
    display: block;
    margin: 10px 0;
  }
</style>