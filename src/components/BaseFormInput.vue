<template>
	<input 
		ref="input"
		:type="type"
		:value="value"
		@input="handleInput"
		class="form-control"
		:readonly="readonly"
		:disabled="disabled"
		:placeholder="placeholder" />
</template>

<script>
	export default {
		props: {
			value: {
				type: String,
			},
			type: {
				type: String,
				default: 'text'
			},
			placeholder: {
				type: String
			},
			readonly: {
				type: Boolean,
				default: false
			},
			disabled: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			handleInput: function () {
				this.$emit('input', this.$refs.input.value);
			}
		}
	}
</script>