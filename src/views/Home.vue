<template>
	<div class="container">
		<div class="row">
			<div class="main-block col col-md-6 offset-md-3 text-center">
				<h1>Let's Challenge!</h1>
				<div class="my-thumbnail">
					<img src="@/assets/images/boy.png" class="img-fluid" />
				</div>

				<form class="form mt-5" @submit.prevent="postForm">
					<div class="form-group text-left">
						<label>Name</label>
						<input v-model="name" class="form-control" />
					</div>
					<div class="form-group text-left">
						<label>Email</label>
						<input class="form-control" type="email" />
					</div>
					<button type="submit" class="btn btn-primary btn-lg">START</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	data: function() {
		return {
			name: '',
			email: '',
		}
	},
	methods: {
		test: function(event) {
			console.log(event)
		},
		postForm: function() {
			this.$store.commit('initName', this.name);
			this.$router.push({name: 'quiz1'});
		}
	}
}
</script>

<style lang="scss" scoped>
.my-thumbnail {
	text-align: center;
	margin: 0 auto;
	width: 25%;
	img {
		opacity: 0.65;
	}
}

</style>