<template>
	<div class="container">
		<div class="row">
			<div class="main-block col col-md-6 offset-md-3 text-center">
				<h1>Congratulation!</h1>
				<p>You will receive the report, please check your mailbox.</p>
				<b-button :to="{name: 'home'}">Try again</b-button>
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

</style>