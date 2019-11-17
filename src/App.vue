<template>
	<div id="app">
		<div class="mobile-header" :class='{open : open === true}'>
			<button class="toggle-menu" @click="open = !open">
				<span class="burger"></span>
			</button>
			<div class="mobile-content">
				<span>Web Developer</span>
			</div>
		</div>
		<header class="header">
			<div class="header-content">
				<div class="mb-3">
					<div class="header-image">
						<img src="@/assets/me-zoom.jpg" alt="my photo">
					</div>
					<div class="header-title">
						<h1>
							<router-link to="/">
								A
							</router-link>
						</h1>
					</div>
				</div>
				<div class="header-nav">
					<ul id="nav" class="site-nav-menu mb-5">
						<li class="header-nav-item" v-for="(link,i) in links" :key="i" @click="open = !open">
							<router-link class="header-nav-link" :to="link.url"> 
								<span>{{link.text}}</span>
							</router-link>
						</li>
					</ul>
				</div>
				<div class="social-links">						
					<a href="https://www.instagram.com/flokiowl/" target="_blank" class="social-link">
						<v-icon scale="1.1" name="brands/instagram"></v-icon>
					</a>
					<a href="https://t.me/flokiowl" target="_blank" class="social-link">
						<v-icon scale="1.1" name="brands/telegram-plane"></v-icon>
					</a>
					<a href="https://github.com/flokiowl" target="_blank" class="social-link">
						<v-icon scale="1.1" name="brands/github"></v-icon>
					</a>
					<div class="copyright-block">
						© 2019 All rights reserved.
					</div>
				</div>
			</div>
		</header>
		<div class="backdrop" @click="open = !open"></div>
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
</template>

<script>
export default {
	data () {
		return {
			links: [
				{icon:'user-circle', text:'О себе', url: '/' },
				{icon:'address-card', text:'Резюме', url: '/resume' },
				{icon:'briefcase', text:'Портфолио', url: '/portfolio' },
				// { text:'Блог', url: '/blog' },
				{icon:'address-book', text:'Контакты', url: '/contact' },
			],
			socials: [
				{ icon:'instagram', url: 'https://www.instagram.com/flokiowl/' },
				{ icon:'telegram', url: 'https://t.me/flokiowl' },
				{ icon:'github', url: 'https://github.com/flokiowl' }
			],
			open: false
		}
	},
	computed: {
		error () {
			return this.$store.getters.error
		},
		isUserLoggedIn () {
			return this.$store.getters.isUserLoggedIn
		},
		userLinks () {
			if (this.isUserLoggedIn) {
				return [
					{ text:'', url: '/profile', icon: 'user' }
				]
			} 
			return [
				{ text:'', url: '/login', icon: 'sign-in-alt' }
			]
		}
	},
	methods: {
		closeError () {
			this.$store.dispatch('clearError')
		}
	},
	created() {

	}
}
</script>

<style lang="scss">
@import 'scss/style.scss';
//animation-router
.fade-enter {
	opacity:0;
	transform:scale(1.05); 	
}
.fade-leave-to {
	opacity:0;
	transform:scale(0.95); 
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
