<template>
	<div class="row">
		<div class="col col-12">
			<h2>Do you remeber?</h2>
			<p>Which animal never mention in quiz? Lion, fish, or tiger</p>
		</div>
		<div class="col col-6">
			<div class="form-group">
				<label>Answer</label>
				<b-form-input v-model="answer"/>
			</div>
		</div>

		<div class="w-100"></div>
		<div class="col-12">
			<div class="text-right mt-3">
				{{message}}
				<b-button @click="checkAnswer" class="mx-1">Submit</b-button>
				<b-button :to="{name:'success'}" variant="secondary" class="mx-1" :disabled="is_disabled">Next</b-button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				is_disabled: true,
				message: '',
				answer: ''
			}
		},
		methods: {
			checkAnswer: function() {
				this.is_disabled = false;
				if (this.answer.toLowerCase() == 'tiger')
					this.message = 'Correct!';
				else 
					this.message = 'Error!';
			}
		}
	}
</script>