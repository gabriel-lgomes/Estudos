<template>
  <transition-group tag="ul">
    <li v-for="(produto, index) in carrinho" :key="produto.nome">
      <p>{{ produto.nome }}</p>
      <p>{{ produto.preco }}</p>
      <button @click="remover(index)">Remover produto</button>
    </li>
  </transition-group>
</template>

<script>
export default {
  data() {
    return {
      carrinho: [
        {
          nome: "Notebook",
          preco: "2400",
        },
        {
          nome: "Celular",
          preco: "3400",
        },
      ],
    };
  },
  methods: {
    remover(index) {
      this.carrinho.splice(index, 1);
    },
  },
};
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translate3d(-20px, 0, 0);
}
</style>