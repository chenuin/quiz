<template>
	<div class="container">
		<div class="row">
			<div class="main-block col col-md-6 offset-md-3 text-center">
				<h1>Let's Challenge!</h1>
				<div class="d-flex">
					<div class="my-thumbnail" ref="thumbnail">
						<img src="@/assets/images/boy.png" class="img-fluid" />
					</div>
					<div class="my-thumbnail" ref="thumbnail">
						<img src="@/assets/images/girl.png" class="img-fluid" />
					</div>
					<div class="my-thumbnail active" ref="thumbnail">
						<img src="@/assets/images/boy2.png" class="img-fluid" />
					</div>
					<div @click="test" class="my-thumbnail active" ref="thumbnail">
						<img src="@/assets/images/girl2.png" class="img-fluid" />
					</div>
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
.main-block {
	background-color: white;
	margin-top: 5%;
	padding: 40px;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
}
.my-thumbnail {
	text-align: center;
	margin: 0.75rem;
	width: 25%;
	img {
		cursor: pointer;
		opacity: 0.65;
	}
	&.active img {
		border: 2px solid green;
		&::before {
			display: block;
			width: 20px;
			height: 20px;
			background-color: green;
		}
	}
}

</style>