<template>
	<nav id="topbar" class="navbar shadow sticky-top navbar-light bg-white navbar-expand">
		<div id="nav-collapse" class="navbar-collapse collapse">
			<button type="button" class="btn d-md-none mr-3 btn-link">
				<i class="fa fa-bars"></i>
			</button>

			<ul class="navbar-nav ml-auto">
				<span style="display: none;">false</span>
				<li class="nav-item mr-3">
					<a target="_self" href="#" class="nav-link"><i class="fas fa-bell"></i></a>
				</li>

				<span class="navbar-text">
					Welcome, {{ name }}
				</span>
			</ul>
		</div>
	</nav>
</template>

<script>
import {mapState} from 'vuex'
export default {
	methods: {
		sendTrigger: function() {
			// send to DashboardView.vue
			this.$emit('trigger-sidebar');
		}
	},
	computed: {
		...mapState({
			name: state => state.name
		})
	}
}
</script>
