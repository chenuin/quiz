<template>
	<div class="row">
		<div class="col col-12">
			<h2>Where animals live?</h2>
			<p>Drag and drop animals to the right home.</p>
		</div>
		<div class="col">
			<div class="drop-box bg-1" @drop="drop" @dragover="allowDrop" ref="ocean"></div>
		</div>
		<div class="col">
			<div class="drop-box bg-2" @drop="drop" @dragover="allowDrop" ref="prairie"></div>
		</div>

		<div class="col-12">
			<div ref="tt" style="height: 100px;">
				<img id="drag1" src="https://cdn.pixabay.com/photo/2018/03/13/06/19/lion-3221778_960_720.png" draggable="true" @dragstart="drag" width="100">

				<img id="drag2" src="http://www.myiconfinder.com/uploads/iconsets/79703e302ff984d44d035b7c2c5b3726-fish.png" draggable="true" @dragstart="drag" width="100">
			</div>

			<div class="text-right mt-3">
				{{message}}
				<b-button @click="checkAnswer" class="mx-1">Submit</b-button>
				<b-button :to="{name:'quiz2'}" variant="secondary" class="mx-1" :disabled="is_disabled">Next</b-button>
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
	methods: {
		allowDrop: function (ev) {
			ev.preventDefault();
		},
		drag: function (ev) {
			ev.dataTransfer.setData("text", ev.target.id);
		},
		drop:function(ev) {
			ev.preventDefault();
			var data = ev.dataTransfer.getData("text");
			if (this.$refs.ocean == ev.target || this.$refs.prairie == ev.target) {
				if (ev.target.firstChild) {
					this.$refs.tt.appendChild(ev.target.firstChild);
				}
				ev.target.appendChild(document.getElementById(data));
			}
		},
		checkAnswer: function() {
			this.is_disabled = false;
			if (this.$refs.ocean.firstChild.id == 'drag2' && this.$refs.prairie.firstChild.id == 'drag1')
				this.message = 'Correct!';
			else 
				this.message = 'Error!';
		}
	}
}
</script>


<style lang="scss" scoped>
.drop-box {
	width: 250px;
	height: 250px;
	padding: 10px;
	border: 1px solid #aaaaaa;
	background-image: url('http://d364y98vz4769w.cloudfront.net/drawings/images/000/092/292/full/ocean.jpg?1440358005');
	background-size: cover;
	vertical-align: middle;
	position: relative;

	img {
		position: absolute;
		bottom: 10px;
		left: 75px;
	}
}
.bg-1 {
	background-image: url('http://d364y98vz4769w.cloudfront.net/drawings/images/000/092/292/full/ocean.jpg?1440358005');
}
.bg-2 {
	background-image: url('http://ku.90sjimg.com/element_origin_min_pic/16/09/15/2057da98c822e17.jpg');
}
</style>