<template>
	<div id="app" v-if="!loading">
		<transition name="fade" mode="out-in">
			<Header/>
		</transition>
		<main class="main">
			<transition name="fade" mode="out-in">
				<router-view></router-view>
			</transition>
		</main>
		<template>
			<b-toast v-if="error" variant="danger" title="Ошибка" visible>
				{{error}}
			</b-toast>
		</template>
	</div>
	<div class="loading" v-else>
		<div class="sk-folding-cube">
			<div class="sk-cube1 sk-cube"></div>
			<div class="sk-cube2 sk-cube"></div>
			<div class="sk-cube4 sk-cube"></div>
			<div class="sk-cube3 sk-cube"></div>
		</div>
	</div>
</template>

<script>
import Header from '@/components/Header'
export default {
	components: {
		Header
	},
	data () {
		return {
			admin: false
		}
	},
	computed: {
		loading () {
            return this.$store.getters.loading
        },
		error () {
			return this.$store.getters.error
		}		
	},
	methods: {
		closeError () {
			this.$store.dispatch('clearError')
		}
	},
	beforeUpdate () {
		if (this.$route.path === '/admin' || this.$route.path === '/login') {
			return this.admin = true
		} else {
			return this.admin = false
		}
	}
}
</script>

<style lang="scss">
@import 'scss/style.scss';
//animation-router
.fade-enter {
	opacity:0;
	overflow:hidden;	
}
.fade-leave-to {
	opacity:0;
}
.fade-enter-active,
.fade-leave-active {
	transition:all .2s;
}
.fade-enter-to,
.fade-leave {
	opacity:1;
	transform:scale(1);	
}
.error {
	position:fixed;
	top:20px;
	right:20px;
	z-index: 999;
	background:red;
	color:#fff;
	min-width:200px;
	min-height:100px;
	border-radius:5px;
}
</style>
