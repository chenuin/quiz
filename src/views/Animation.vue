<template>
	<div class="row">
		<div class="col col-12">
			<h2>Stay Focus!</h2>
			<p>You can pause the ball when click on the screen. Please make sure the ball have placed align the frame.</p>
		</div>
		<div class="col col-12">
			<div class="position-absolute w-100">
				<div class="circle"></div>
			</div>
			<img src="https://images.vexels.com/media/users/3/156544/isolated/preview/82434b96bf5caa8eec0bcd1bcdd219b8-basketball-ball-icon-by-vexels.png" class="horizontal" ref="ball" />
			
		</div>
		<div class="col-12">
			<div class="text-right mt-3">
				{{message}}
				<b-button @click="checkAnswer" class="mx-1">Submit</b-button>
				<b-button :to="{name:'quiz3'}" variant="secondary" class="mx-1" :disabled="is_disabled">Next</b-button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				is_disabled: true,
				message: ''
			}
		},
		created: function() {
			window.addEventListener('click', this.stop);
		},
		destroyed: function() {
			window.removeEventListener('click', this.stop);
		},
		methods: {
			stop: function() {
				this.$refs.ball.classList.toggle('pause');
			},
			checkAnswer: function() {
				window.removeEventListener('click', this.stop);
				this.is_disabled = false;
				let total_width = this.$refs.ball.parentElement.clientWidth;
				let position = this.$refs.ball.offsetLeft-15;
				if ((total_width/2 - 64) < position && (total_width/2 + 64-100) > position) {
					console.log(position);
					this.message = 'Success!';
				}
				else {
					this.message = 'Fail!';
				}
			}
		}
	}
</script>

<style>
	.horizontal {
		margin-top: 1rem;
		height: 100px;
		width: 100px;
		z-index: 1000;
		animation: 6s linear 1s infinite alternate move_eye;
	}
	@-webkit-keyframes move_eye { from { margin-left: 0%; } to { margin-left: calc(100% - 100px); }  }
			@keyframes move_eye { from { margin-left: 0%; } to { margin-left: calc(100% - 100px); }  }
	.pause {
		animation-play-state: paused;
	}
	.circle { 
		border: 5px dotted #235EA4;
		padding: 2em; 
		height: 8em; 
		width: 8em; 
		border-radius: 8em;
		text-align: center;
		margin: 0 auto;
	}
</style>