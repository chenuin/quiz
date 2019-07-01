<template>
	<div id="wrapper">
		<ul class="navbar-nav position-fixed bg-primary sidebar sidebar-dark" :class="{'toggled': show_sidebar}">
			<div class="sidebar-heading bg-white mx-3">
				<img src="@/assets/images/boy.png" class="img-fluid">
			</div>

			<li class="nav-item">
				<router-link :to="{name: 'quiz1'}" class="nav-link">Quiz1</router-link>
			</li>
			<li class="nav-item">
				<router-link :to="{name: 'quiz2'}" class="nav-link">Quiz2</router-link>
			</li>
			<li class="nav-item">
				<router-link :to="{name: 'quiz3'}" class="nav-link">Quiz3</router-link>
			</li>
		</ul>

		<div id="content-wrapper" class="d-flex flex-column">
			<div id="content">
				<top-navbar
					@trigger-sidebar="sidebarToggle">
				</top-navbar>
				<div style="padding: 40px;">
				<router-view/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import TopNavbar from '@/components/layouts/Navbar'
export default {
	components: {
		TopNavbar
	},
	data: function() {
		return {
			'show_sidebar': false,
		}
	},
	methods: {
		sidebarToggle: function() {
			this.show_sidebar = !this.show_sidebar;
		},
	}
}
</script>