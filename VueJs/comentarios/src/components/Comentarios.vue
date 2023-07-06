<template>
  <div class="container">
		<div class="container card mt-4 p-4">
			<h1>Comments</h1><span>Bootstrap comment and vueJS</span>
			<hr>
				<form>
					<div class="form-group">
						<div class="form-group">
							<input v-model="nome" class="form-control mb-1" id="username" placeholder="Username" type="text"> <span class="text-danger" id="error-username" style="display: none"></span> 
							<textarea v-model="comentario" class="form-control mt-2" id="comment" placeholder="Enter your comment here..."></textarea> <span class="text-danger" id="error-comment" style="display: none"></span>
						</div>
					</div>
					<button @click.prevent="adicionarComentario" class="btn btn-primary my-3 float-right" id="submit" type="submit">Comment</button>
				</form>
			<hr>   
			<div id="comments">
				<div v-if="comentarios.length > 0">
					<div class="card p-4" v-for="(comentario, index) in comentarios" :v-key="comentario.nome">
						<div class="media-body">
							<h5 class="mt-1">
								{{comentario.nome}}
							</h5>
							<p>
								{{comentario.comentario}}
							</p>
							<button class="btn btn-danger" @click.prevent="removerComentario(index)">Deletar</button>
						</div>
					</div>
				</div>
				<div v-else>
					<h4>Não existem comentários...</h4>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
		nome: '',
		comentario: '',
		comentarios: [], 
		 
	};
  },
  methods: {
	  adicionarComentario() {
		  this.comentarios.push({
			  nome: this.nome,
			  comentario: this.comentario
		  });
		  this.nome = "";
		  this.comentario = "";
	  },
	  removerComentario(index) {
		  this.comentarios.splice(index, 1);
	  }
  }
};
</script>

<style>
</style>