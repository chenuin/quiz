<template>
	<div class="row">
		<div class="col col-12">
			<h2>Where animals live?</h2>
			<p>Drag and drop animals to the right home.</p>
		</div>
		<div class="col col-12">
		<img src="https://images.vexels.com/media/users/3/156544/isolated/preview/82434b96bf5caa8eec0bcd1bcdd219b8-basketball-ball-icon-by-vexels.png" class="test" ref="test" />
		</div>
		<div class="col col-12">
		<div style="background-image: url('https://i.etsystatic.com/13221305/r/il/3e2baf/1257849011/il_794xN.1257849011_37k8.jpg'); height: 200px; width: 200px;">
			
		</div>
	</div>
	</div>
</template>

<script>
	export default {
		created: function() {
			window.addEventListener('click', this.stop);
		},
		methods: {
			stop: function() {
				this.$refs.test.classList.toggle('pause');
			}
		}
	}
</script>

<style>
	.test {
		height: 100px;
		width: 100px;
		animation: 6s linear 1s infinite alternate move_eye;
	}
	@-webkit-keyframes move_eye { from { margin-top: 0%; } to { margin-top: calc(100% - 100px); }  }
	        @keyframes move_eye { from { margin-top: 0%; } to { margin-top: calc(100% - 100px); }  }
	.pause {
		animation-play-state: paused;
	}
</style>