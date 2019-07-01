<template>
	<button
		type="button"
		:class="class_list"
		:disabled="disabled"
		@click="handleClick($event)">
		<slot></slot>
	</button>
</template>
<script>
export default {
	props: {
		variant: {
			type: String,
			default: 'primary'
		},
		to: {
			type: Object
		},
		disabled: {
			type: Boolean,
			default: false
		}
	},
	data: function() {
		return {
			class_list: ""
		}
	},
	created: function() {
		// class-list
		this.class_list = 'btn '+ 'btn-'+this.variant;
	},
	methods: {
		handleClick: function(event) {
			this.$emit('click', event);
			if (this.to)
				this.$router.push(this.to);
		}
	}
}
</script>